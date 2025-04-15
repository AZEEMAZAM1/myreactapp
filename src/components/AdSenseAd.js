import React, { useEffect } from 'react';

const AdSenseAd = ({ adSlot, adFormat = "auto", adStyle = {} }) => {
  useEffect(() => {
    try {
      // Check if adsbygoogle is loaded (important for React)
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []); // Empty dependency array = runs once on mount

  return (
    <div className="ad-container" style={{ overflow: 'hidden', ...adStyle }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9966084190422704" // Your publisher ID
        data-ad-slot={adSlot}                    // Dynamic slot ID from props
        data-ad-format={adFormat}                // auto/rectangle/etc
        data-full-width-responsive="true"        // Responsive ads
      />
    </div>
  );
};

export default AdSenseAd;