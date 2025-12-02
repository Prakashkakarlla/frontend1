import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JobCard from '../components/JobCard';
import SearchFilter from '../components/SearchFilter';
import Pagination from '../components/Pagination';

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
    {/* Results Summary */ }
    {
        jobs.length > 0 && (
            <div className="results-bar">
                <div className="results-info">
                    <p className="results-count">
                        <strong>{filteredJobs.length}</strong> {filteredJobs.length === 1 ? 'job' : 'jobs'} found
                    </p>
                    {currentPage > 1 && (
                        <p className="page-indicator">
                            Page {currentPage} of {totalPages}
                            <>
                                <div className="job-grid">
                                    {paginatedJobs.map((job) => (
                                        <JobCard key={job.id} job={job} />
                                    ))}
                                </div>
                                import React, {useEffect, useState} from 'react';
                                import {Link} from 'react-router-dom';
                                import JobCard from '../components/JobCard';
                                import SearchFilter from '../components/SearchFilter';
                                import Pagination from '../components/Pagination';
                                import EzoicAd from '../components/EzoicAd'; // Assuming EzoicAd component is imported

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
                                window.scrollTo({top: 0, behavior: 'smooth' });
    };

                                return (
                                <div className="home-page">
                                    <SearchFilter
                                        searchQuery={searchQuery}
                                        setSearchQuery={setSearchQuery}
                                    />

                                    <main className="container mx-auto p-4">
                                        {loading ? (
                                            <p className="text-center text-xl">Loading jobs...</p>
                                        ) : (
                                            <>
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
                                                    </div>
                                                )}

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

                                        {/* Bottom Ad (gen_native_bottom) */}
                                        <EzoicAd placementId={961} className="ad-bottom" />
                                    </main>
                                </div>
                                );
};

                                export default HomePage;
