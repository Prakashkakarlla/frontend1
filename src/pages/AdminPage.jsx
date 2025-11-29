import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AdminPage = () => {
    const [jsonInput, setJsonInput] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const payload = JSON.parse(jsonInput);

            fetch('/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                    throw new Error('Failed to create job');
                })
                .then(data => {
                    alert('Job posted successfully!');
                    navigate('/');
                })
                .catch(err => {
                    setError(err.message);
                });

        } catch (err) {
            setError('Invalid JSON format. Please check your input.');
        }
    };

    const handleLoadSample = () => {
        const sample = {
            "title": "HCLTech Hiring Freshers 2025 Graduate Trainee Bangalore Office",
            "subtitle": "Apply Online Graduate Trainee | Bangalore",
            "postedDate": "2025-10-08",
            "postedBy": "Freshers Drive",
            "location": "Bangalore",
            "jobType": "Full-time",
            "applyUrl": "https://www.hcltech.com/careers",
            "fullDescription": "HCLTech is hiring fresh graduates...",
            "jobDetails": {
                "role": "Graduate Trainee",
                "category": "Off Campus",
                "qualification": "Graduation / Post Graduation",
                "batch": "2024/2025",
                "experience": "Freshers",
                "salary": "4 – 9 LPA",
                "lastDate": "ASAP"
            },
            "eligibilityCriteria": [
                "Graduate of 2024 or 2025 batch"
            ],
            "responsibilities": [{ "task": "Support clients" }],
            "interviewTips": [{ "tip": "Be confident" }],
            "selectionProcess": [{ "stage": "Online Application" }],
            "careerGrowth": {
                "description": "Good growth",
                "futureRoles": ["Developer"]
            },
            "companyInfo": {
                "name": "HCLTech",
                "about": "Global leader",
                "technologies": ["AI"]
            },
            "faqs": [{ "question": "Who can apply?", "answer": "Freshers" }]
        };
        setJsonInput(JSON.stringify(sample, null, 2));
    };

    return (
        <div className="admin-page-container">
            {/* Header */}
            <div className="admin-header">
                <Link to="/" className="admin-back-link">
                    <span className="back-arrow">←</span> Back to Jobs
                </Link>
                <div className="admin-title-section">
                    <h1 className="admin-title">
                        <span className="admin-icon">✍️</span>
                        Post a New Job
                    </h1>
                    <p className="admin-subtitle">Add job opportunities for candidates to discover</p>
                </div>
            </div>

            {/* Form Card */}
            <div className="admin-form-card">
                <div className="form-header">
                    <h2>Job Details (JSON Format)</h2>
                    <button type="button" onClick={handleLoadSample} className="load-sample-btn">
                        📄 Load Sample JSON
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="admin-form">
                    <div className="form-group">
                        <label htmlFor="jsonInput" className="form-label">
                            Paste Job JSON Below
                        </label>
                        <textarea
                            id="jsonInput"
                            rows="20"
                            value={jsonInput}
                            onChange={(e) => setJsonInput(e.target.value)}
                            placeholder='{"title": "Job Title", "subtitle": "Job Subtitle", ...}'
                            className="json-input-enhanced"
                        />
                    </div>

                    {error && (
                        <div className="error-message-admin">
                            <span className="error-icon">⚠️</span>
                            {error}
                        </div>
                    )}

                    <div className="form-actions">
                        <button type="submit" className="submit-job-btn">
                            <span className="btn-icon">🚀</span>
                            Post Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminPage;
