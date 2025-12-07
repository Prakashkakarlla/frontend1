import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton-header">
                <div className="skeleton-logo"></div>
                <div className="skeleton-title-group">
                    <div className="skeleton-title"></div>
                    <div className="skeleton-subtitle"></div>
                </div>
            </div>
            <div className="skeleton-tags">
                <div className="skeleton-tag"></div>
                <div className="skeleton-tag"></div>
                <div className="skeleton-tag"></div>
            </div>
            <div className="skeleton-details">
                <div className="skeleton-detail"></div>
                <div className="skeleton-detail"></div>
            </div>
            <div className="skeleton-button"></div>
        </div>
    );
};

export default SkeletonLoader;
