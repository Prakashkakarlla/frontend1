import React, { useEffect } from 'react';

const AdSense = ({
    adSlot = 'YOUR_AD_SLOT_ID',
    adFormat = 'auto',
    adStyle = { display: 'block' },
    adClient = 'ca-pub-XXXXXXXXXXXXXXXX', // Replace with your AdSense Publisher ID
    fullWidthResponsive = true,
    adLayout = '',
    adLayoutKey = '',
    placeholder = true  // Show placeholder when AdSense not configured
}) => {
    useEffect(() => {
        try {
            // Push ad to AdSense queue
            if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
                window.adsbygoogle.push({});
            }
        } catch (error) {
            console.error('AdSense error:', error);
        }
    }, []);

    // Show placeholder if AdSense is not configured
    const showPlaceholder = placeholder && adClient === 'ca-pub-XXXXXXXXXXXXXXXX';

    return (
        <div className="ad-container">
            {showPlaceholder ? (
                <div className="ad-placeholder">
                    <div className="ad-placeholder-content">
                        <span className="ad-icon">📢</span>
                        <p>Advertisement Space</p>
                        <small>{adFormat} ad</small>
                    </div>
                </div>
            ) : (
                <ins
                    className="adsbygoogle"
                    style={adStyle}
                    data-ad-client={adClient}
                    data-ad-slot={adSlot}
                    data-ad-format={adFormat}
                    data-full-width-responsive={fullWidthResponsive.toString()}
                    data-ad-layout={adLayout}
                    data-ad-layout-key={adLayoutKey}
                />
            )}
        </div>
    );
};

export default AdSense;
