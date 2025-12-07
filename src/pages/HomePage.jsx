import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import JobCard from '../components/JobCard';
import SearchFilter from '../components/SearchFilter';
import Pagination from '../components/Pagination';
import SkeletonLoader from '../components/SkeletonLoader';
import { useDebounce } from '../hooks/useDebounce';

const JOBS_PER_PAGE = 6;

// Fetch jobs from API
const fetchJobs = async () => {
    const response = await fetch('/api/jobs');
    if (!response.ok) {
        throw new Error('Failed to fetch jobs');
    }
    const data = await response.json();

    // Sort jobs by ID (newest first - descending order: 15, 14, 13...)
    return data.sort((a, b) => b.id - a.id);
};

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Debounce search query to avoid excessive filtering
    const debouncedSearchQuery = useDebounce(searchQuery, 300);

    // Use React Query for data fetching with caching
    const { data: jobs = [], isLoading, isError, error, refetch } = useQuery({
        queryKey: ['jobs'],
        queryFn: fetchJobs,
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 10 * 60 * 1000, // 10 minutes
        retry: 3,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    });

    // Memoize filtered jobs to avoid unnecessary recalculations
    const filteredJobs = useMemo(() => {
        if (!debouncedSearchQuery) return jobs;

        const query = debouncedSearchQuery.toLowerCase();
        return jobs.filter(job =>
            job.title?.toLowerCase().includes(query) ||
            job.companyInfo?.name?.toLowerCase().includes(query) ||
            job.fullDescription?.toLowerCase().includes(query) ||
            job.subtitle?.toLowerCase().includes(query)
        );
    }, [jobs, debouncedSearchQuery]);

    // Reset to page 1 when search changes
    React.useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearchQuery]);

    // Pagination logic
    const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
    const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
    const endIndex = startIndex + JOBS_PER_PAGE;
    const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Show skeleton loaders while loading
    if (isLoading) {
        return (
            <div className="app-container">
                <main className="main-content">
                    {/* Top Banner Ad */}
                    <div id="ezoic-pub-ad-placeholder-101"></div>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                        ezstandalone.cmd.push(function () {
                            ezstandalone.showAds(101);
                        });
                    `}} />

                    <div className="search-section">
                        <h2 className="section-title">Browse Jobs</h2>
                        <SearchFilter
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                        />
                    </div>

                    <div className="job-grid">
                        {[...Array(6)].map((_, index) => (
                            <SkeletonLoader key={index} />
                        ))}
                    </div>
                </main>
            </div>
        );
    }

    // Show error state with retry button
    if (isError) {
        return (
            <div className="app-container">
                <main className="main-content">
                    <div className="error-state">
                        <div className="error-icon">⚠️</div>
                        <h2>Failed to Load Jobs</h2>
                        <p>{error.message || 'Something went wrong. Please try again.'}</p>
                        <button onClick={() => refetch()} className="retry-button">
                            Retry
                        </button>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="app-container">
            <main className="main-content">
                {/* Top Banner Ad - top_of_page (ID: 101) */}
                <div id="ezoic-pub-ad-placeholder-101"></div>
                <script dangerouslySetInnerHTML={{
                    __html: `
                    ezstandalone.cmd.push(function () {
                        ezstandalone.showAds(101);
                    });
                `}} />

                {/* Search and Filters */}
                <div className="search-section">
                    <h2 className="section-title">Browse Jobs</h2>
                    <SearchFilter
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                </div>

                {/* Results Summary */}
                {jobs.length > 0 && (
                    <div className="results-bar">
                        <div className="results-info">
                            <p className="results-count">
                                <strong>{filteredJobs.length}</strong> {filteredJobs.length === 1 ? 'job' : 'jobs'} found
                            </p>
                            {currentPage > 1 && (
                                <p className="page-indicator">
                                    Page {currentPage} of {totalPages}
                                </p>
                            )}
                        </div>
                        {filteredJobs.length > 0 && (
                            <p className="showing-text">
                                Showing {startIndex + 1}-{Math.min(endIndex, filteredJobs.length)} of {filteredJobs.length}
                            </p>
                        )}
                    </div>
                )}

                {/* Mid-Content Ad - under_page_title (ID: 102) */}
                <div id="ezoic-pub-ad-placeholder-102"></div>
                <script dangerouslySetInnerHTML={{
                    __html: `
                    ezstandalone.cmd.push(function () {
                        ezstandalone.showAds(102);
                    });
                `}} />

                {/* Job Listings */}
                {filteredJobs.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-icon">🔍</div>
                        <h2>No jobs found</h2>
                        <p>Try adjusting your search criteria or filters</p>
                    </div>
                ) : (
                    <>
                        <div className="job-grid">
                            {paginatedJobs.map((job) => (
                                <JobCard key={job.id} job={job} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </>
                )}

                {/* Bottom Ad - bottom_of_page (ID: 103) */}
                <div id="ezoic-pub-ad-placeholder-103"></div>
                <script dangerouslySetInnerHTML={{
                    __html: `
                    ezstandalone.cmd.push(function () {
                        ezstandalone.showAds(103);
                    });
                `}} />
            </main>
        </div>
    );
};

export default HomePage;
