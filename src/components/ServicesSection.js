import React from 'react';
import './ServicesSection.css'; // Импортируем CSS стили
import iconArrowBlack from '../assets/images/arrow-icon-black.png';
import iconArrowWhite from '../assets/images/arrow-icon-white.png';
import seoImage from '../assets/images/seo.png';
import ppcImage from '../assets/images/ppc.png';
import socialMediaImage from '../assets/images/social-media.png';
import emailImage from '../assets/images/email.png';
import contentImage from '../assets/images/content.png';
import analyticsImage from '../assets/images/analytics.png';

const ServiceCard = ({ labelLines, bgColor, image }) => {
    const icon = bgColor === '#191A23' ? iconArrowWhite : iconArrowBlack;

    return (
        <div className="services-section-card" style={{ backgroundColor: bgColor }}>
            <div className="services-section-card-content">
                <div className="services-section-content-wrapper">
                    <div className="services-section-label-container">
                        {labelLines.map((line, index) => (
                            <div
                                key={index}
                                className="services-section-label-line"
                                style={{
                                    backgroundColor: bgColor === '#F3F3F3' ? '#B9FF66' : '#FFFFFF',
                                }}
                            >
                                {line}
                            </div>
                        ))}
                    </div>
                    <a
                        href="#"
                        className="services-section-learn-more"
                        style={{ color: bgColor === '#191A23' ? '#FFFFFF' : '#000000' }}
                    >
                        <img
                            className="services-section-icon"
                            src={icon}
                            alt="Arrow icon"
                        />
                        Learn more
                    </a>
                </div>
                <img
                    className="services-section-image"
                    src={image}
                    alt={`${labelLines.join(' ')} illustration`}
                />
            </div>
        </div>
    );
};

const ServicesSection = () => (
    <div className="services-section-grid">
        <ServiceCard
            labelLines={["Search engine", "optimization"]}
            bgColor="#F3F3F3"
            image={seoImage}
        />
        <ServiceCard
            labelLines={["Pay-per-click", "advertising"]}
            bgColor="#B9FF66"
            image={ppcImage}
        />
        <ServiceCard
            labelLines={["Social Media", "Marketing"]}
            bgColor="#191A23"
            image={socialMediaImage}
        />
        <ServiceCard
            labelLines={["Email", "Marketing"]}
            bgColor="#F3F3F3"
            image={emailImage}
        />
        <ServiceCard
            labelLines={["Content", "Creation"]}
            bgColor="#B9FF66"
            image={contentImage}
        />
        <ServiceCard
            labelLines={["Analytics and", "Tracking"]}
            bgColor="#191A23"
            image={analyticsImage}
        />
    </div>
);

export default ServicesSection;
