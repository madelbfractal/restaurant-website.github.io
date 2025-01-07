import React from 'react';

const VirtualTour: React.FC = () => {
    return (
        <section aria-label="Virtual Tour Section">
            <h2 className="section-title">Take a Virtual Tour of Our Restaurant</h2>
            <p className="section-description">
                Experience the ambiance and charm of Gina’s Italian Cuisine from the comfort of your home. 
                Our virtual tour allows you to explore our dining areas, kitchen, and more.
            </p>
            <div className="virtual-tour-container">
                <iframe 
                    title="Virtual Tour"
                    src="https://your-virtual-tour-link.com" 
                    width="100%" 
                    height="600px" 
                    frameBorder="0" 
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
};

export default VirtualTour;