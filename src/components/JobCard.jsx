import React from 'react';
import { Link } from 'react-router-dom';
import { createJobSlug } from '../utils/slugify';

const JobCard = ({ job }) => {
    const jobSlug = createJobSlug(job.title, job.id);

    return (
        <Link to={`/jobs/${jobSlug}`} className="job-card-link">
            <div className="job-card-enhanced">
                {/* Company Logo Section */}
                <div className="card-top-bar"></div>

                <div className="card-header-enhanced">
                    {job.companyInfo?.imageUrl && (
                        <div className="company-logo-container">
                            <img
                                src={job.companyInfo.imageUrl}
                                alt={job.companyInfo.name}
                                className="company-logo"
                            />
                        </div>
                    )}
                    <div className="card-title-section">
                        <h3 className="job-title-card">{job.title}</h3>
                        <p className="company-name-card">
                            <span className="company-icon">🏢</span>
                            {job.companyInfo?.name}
                        </p>
                    </div>
                </div>

                {/* Subtitle */}
                <p className="job-subtitle-card">{job.subtitle}</p>

                {/* Meta Tags */}
                <div className="job-meta-enhanced">
                    <span className="meta-tag job-type">
                        <span className="meta-icon">💼</span>
                        {job.jobType}
                    </span>
                    <span className="meta-tag location">
                        <span className="meta-icon">📍</span>
                        {job.location}
                    </span>
                    <span className="meta-tag posted-by">
                        <span className="meta-icon">👤</span>
                        {job.postedBy}
                    </span>
                </div>

                {/* View Details Footer */}
                <div className="job-card-footer">
                    <div className="view-details-arrow">
                        View Details →
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default JobCard;
