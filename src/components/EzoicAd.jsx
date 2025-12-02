import React, { useEffect, useRef } from 'react';

/**
 * EzoicAd Component
 * Displays Ezoic ads at specified placement IDs
 * 
 * @param {number|number[]} placementId - Single placement ID or array of IDs
 * @param {string} className - Optional CSS class for styling
 */
const EzoicAd = ({ placementId, className = '' }) => {
    const containerRef = useRef(null);
    const placementIds = Array.isArray(placementId) ? placementId : [placementId];

    useEffect(() => {
        // Ensure ezstandalone is available
        if (typeof window !== 'undefined' && window.ezstandalone) {
            // Push command to show ads
            window.ezstandalone.cmd.push(function () {
                window.ezstandalone.showAds(...placementIds);
            });

            // Cleanup function to destroy placeholders when component unmounts
            return () => {
                if (window.ezstandalone && window.ezstandalone.destroyPlaceholders) {
                    window.ezstandalone.destroyPlaceholders(...placementIds);
                }
            };
        }
    }, [placementIds]);

    return (
        <div className={`ezoic-ad-container ${className}`} ref={containerRef}>
            {placementIds.map((id) => (
                <div key={id} id={`ezoic-pub-ad-placeholder-${id}`}></div>
            ))}
        </div>
    );
};

export default EzoicAd;
