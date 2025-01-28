import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title, description }) => (
    <div className="section-header-container">
        <h2 className="section-header-title">{title}</h2>
        <p className="section-header-description">{description}</p>
    </div>
);

export default SectionHeader;
