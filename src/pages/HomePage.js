import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import CTASectionComponent from '../components/CTASection'
import CaseStudies from '../components/CaseStudies'
import SectionHeader from "../components/SectionHeader";

const HomePage = () => (
    <div>
        <HeroSection />
        <ServicesSection />
        <CTASectionComponent />
        <SectionHeader
            title="Case Studies"
            description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />
        <CaseStudies />

    </div>
);

export default HomePage;
