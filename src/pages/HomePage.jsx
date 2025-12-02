import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JobCard from '../components/JobCard';
import SearchFilter from '../components/SearchFilter';
import Pagination from '../components/Pagination';
import EzoicAd from '../components/EzoicAd';

const JOBS_PER_PAGE = 6;

const HomePage = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch('/api/jobs')
            .then(res => res.json())
            .then(data => {
                // Sort jobs by postedDate (newest first)
                const sortedJobs = data.sort((a, b) => {
                    const dateA = new Date(a.postedDate);
                    const dateB = new Date(b.postedDate);
                    return dateB - dateA; // Descending order (newest first)
                });
                setJobs(sortedJobs);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching jobs:', err);
                setLoading(false);
            });
    }, []);

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);



    // Filter jobs based on search
    const filteredJobs = jobs.filter(job => {
        const matchesSearch = !searchQuery ||
            job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.companyInfo?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.fullDescription?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.subtitle?.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesSearch;
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
    const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
    const endIndex = startIndex + JOBS_PER_PAGE;
    const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) return <div className="loading">Loading jobs...</div>;

    return (
        <div className="app-container">
            <main className="main-content">
                {/* Top Banner Ad - top_of_page (ID: 101) */}
                <EzoicAd placementId={101} className="ad-banner-top" />

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
                <EzoicAd placementId={102} className="ad-mid-content" />

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
                <EzoicAd placementId={103} className="ad-bottom" />
            </main>
        </div>
    );
};

export default HomePage;
