import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { extractIdFromSlug } from '../utils/slugify';
import EzoicAd from '../components/EzoicAd';

const JobDetailsPage = () => {
    const { id: slug } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Extract actual ID from slug
        const jobId = extractIdFromSlug(slug);

        fetch(`/api/jobs/${jobId}`)
            .then(res => res.json())
            .then(data => {
                setJob(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching job details:", err);
                setLoading(false);
            });
    }, [slug]);

    if (loading) return <div className="loading">Loading details...</div>;
    if (!job) return <div className="error">Job not found.</div>;

    return (
        <div className="job-details-page">
            <div className="details-container">
                <Link to="/" className="back-link">
                    <span className="back-arrow">←</span> Back to Jobs
                </Link>

                {/* Company Banner */}
                <div className="company-banner">
                    <div className="banner-content">
                        {job.companyInfo?.imageUrl && (
                            <div className="company-logo-wrapper">
                                <img
                                    src={job.companyInfo.imageUrl}
                                    alt={job.companyInfo.name}
                                    className="company-logo-large"
                                />
                            </div>
                        )}
                        <div className="company-info-banner">
                            <h3>{job.companyInfo?.name}</h3>
                            <p>{job.location}</p>
                        </div>
                    </div>
                </div>

                {/* Job Header */}
                <header className="job-details-header">
                    <div className="header-content">
                        <div className="header-left">
                            <h1 className="job-title">{job.title}</h1>
                            <p className="job-subtitle">{job.subtitle}</p>

                            <div className="meta-tags">
                                <span className="tag job-type-tag">
                                    <span className="tag-icon">💼</span>
                                    {job.jobType}
                                </span>
                                <span className="tag location-tag">
                                    <span className="tag-icon">📍</span>
                                    {job.location}
                                </span>
                                <span className="tag posted-tag">
                                    <span className="tag-icon">👤</span>
                                    {job.postedBy}
                                </span>
                            </div>
                        </div>

                        <div className="header-right">
                            <a
                                href={job.applyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="apply-btn-large"
                            >
                                <span className="apply-icon">🚀</span>
                                Apply Now
                            </a>
                        </div>
                    </div>
                </header>

                <div className="content-grid">
                    {/* Main Content Column */}
                    <div className="main-column">
                        {/* Job Description */}
                        <section className="content-section">
                            <h2 className="section-title">
                                <span className="section-icon">📄</span>
                                Job Description
                            </h2>
                            <p className="description-text">{job.fullDescription}</p>
                        </section>

                        {/* Eligibility Criteria */}
                        {job.eligibilityCriteria && (
                            <section className="content-section">
                                <h2 className="section-title">
                                    <span className="section-icon">✅</span>
                                    Eligibility Criteria
                                </h2>
                                <ul className="feature-list">
                                    {job.eligibilityCriteria.map((criteria, index) => (
                                        <li key={index}>
                                            <span className="list-bullet">▸</span>
                                            {criteria}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Responsibilities */}
                        {job.responsibilities && (
                            <section className="content-section">
                                <h2 className="section-title">
                                    <span className="section-icon">🎯</span>
                                    Key Responsibilities
                                </h2>
                                <ul className="feature-list">
                                    {job.responsibilities.map((resp, index) => (
                                        <li key={index}>
                                            <span className="list-bullet">▸</span>
                                            {resp.task}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Selection Process */}
                        {job.selectionProcess && (
                            <section className="content-section">
                                <h2 className="section-title">
                                    <span className="section-icon">📊</span>
                                    Selection Process
                                </h2>
                                <div className="process-timeline">
                                    {job.selectionProcess.map((step, index) => (
                                        <div key={index} className="timeline-step">
                                            <div className="step-indicator">
                                                <span className="step-number">{index + 1}</span>
                                            </div>
                                            <div className="step-content">
                                                <h4>{step.stage}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Interview Tips */}
                        {job.interviewTips && (
                            <section className="content-section">
                                <h2 className="section-title">
                                    <span className="section-icon">💡</span>
                                    Interview Tips
                                </h2>
                                <ul className="tips-list">
                                    {job.interviewTips.map((item, index) => (
                                        <li key={index} className="tip-item">
                                            <span className="tip-icon">💡</span>
                                            {item.tip}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Career Growth */}
                        {job.careerGrowth && (
                            <section className="content-section">
                                <h2 className="section-title">
                                    <span className="section-icon">📈</span>
                                    Career Growth
                                </h2>
                                <p className="description-text">{job.careerGrowth.description}</p>
                                {job.careerGrowth.futureRoles && (
                                    <div className="future-roles">
                                        <p className="roles-label">Future Opportunities:</p>
                                        <div className="tags-container">
                                            {job.careerGrowth.futureRoles.map((role, index) => (
                                                <span key={index} className="role-tag">
                                                    {role}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </section>
                        )}

                        {/* FAQs */}
                        {job.faqs && (
                            <section className="content-section">
                                <h2 className="section-title">
                                    <span className="section-icon">❓</span>
                                    Frequently Asked Questions
                                </h2>
                                <div className="faq-list">
                                    {job.faqs.map((faq, index) => (
                                        <div key={index} className="faq-item">
                                            <h4 className="faq-question">Q: {faq.question}</h4>
                                            <p className="faq-answer">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar Column */}
                    <div className="sidebar-column">
                        {/* Job Overview Card */}
                        <section className="sidebar-card overview-card">
                            <h3 className="card-title">
                                <span className="card-icon">📋</span>
                                Job Overview
                            </h3>
                            <div className="details-list">
                                <div className="detail-item">
                                    <span className="detail-label">
                                        <span className="detail-icon">👔</span>
                                        Role
                                    </span>
                                    <span className="detail-value">{job.jobDetails?.role}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">
                                        <span className="detail-icon">📂</span>
                                        Category
                                    </span>
                                    <span className="detail-value">{job.jobDetails?.category}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">
                                        <span className="detail-icon">🎓</span>
                                        Qualification
                                    </span>
                                    <span className="detail-value">{job.jobDetails?.qualification}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">
                                        <span className="detail-icon">📅</span>
                                        Batch
                                    </span>
                                    <span className="detail-value">{job.jobDetails?.batch}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">
                                        <span className="detail-icon">💼</span>
                                        Experience
                                    </span>
                                    <span className="detail-value">{job.jobDetails?.experience}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">
                                        <span className="detail-icon">💰</span>
                                        Salary
                                    </span>
                                    <span className="detail-value">{job.jobDetails?.salary}</span>
                                </div>
                                <div className="detail-item last-date">
                                    <span className="detail-label">
                                        <span className="detail-icon">⏰</span>
                                        Last Date
                                    </span>
                                    <span className="detail-value">{job.jobDetails?.lastDate}</span>
                                </div>
                            </div>
                        </section>

                        {/* Company Info Card */}
                        {job.companyInfo && (
                            <section className="sidebar-card company-card">
                                <h3 className="card-title">
                                    <span className="card-icon">🏢</span>
                                    About {job.companyInfo.name}
                                </h3>

                                {/* Company Stats */}
                                {(job.companyInfo.foundedYear || job.companyInfo.employeeCount) && (
                                    <div className="company-stats">
                                        {job.companyInfo.foundedYear && (
                                            <div className="stat-item">
                                                <span className="stat-icon">📅</span>
                                                <div className="stat-content">
                                                    <span className="stat-label">Founded</span>
                                                    <span className="stat-value">{job.companyInfo.foundedYear}</span>
                                                </div>
                                            </div>
                                        )}
                                        {job.companyInfo.employeeCount && (
                                            <div className="stat-item">
                                                <span className="stat-icon">👥</span>
                                                <div className="stat-content">
                                                    <span className="stat-label">Employees</span>
                                                    <span className="stat-value">{job.companyInfo.employeeCount}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                <p className="company-about">{job.companyInfo.about}</p>
                            </section>
                        )}

                        {/* Quick Apply Card */}
                        <section className="sidebar-card apply-card">
                            <h3 className="card-title">Ready to Apply?</h3>
                            <p className="apply-card-text">
                                Don't miss this opportunity. Apply now and take the next step in your career!
                            </p>
                            <a
                                href={job.applyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="apply-btn-sidebar"
                            >
                                Apply Now →
                            </a>
                        </section>

                        {/* Sidebar Ad (Placement 104) */}
                        <EzoicAd placementId={104} className="ad-sidebar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;
