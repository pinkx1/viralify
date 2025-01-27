import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import CTASectionComponent from '../components/CTASection'
import CaseStudies from '../components/CaseStudies'
import SectionHeader from "../components/SectionHeader";
import Accordion from "../components/AccordionCard"
import TeamSectionComponent from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactForm from "../components/ContactForm";


const HomePage = () => (
    <div>
        <HeroSection />
        <SectionHeader
            title="Services"
            description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
        <ServicesSection />
        <CTASectionComponent />
        <SectionHeader
            title="Case Studies"
            description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />
        <CaseStudies />
        <SectionHeader
            title="Our Working Process "
            description="Step-by-Step Guide to Achieving Your Business Goals"
        />
        <Accordion />
        <SectionHeader
            title="Team"
            description="Meet the skilled and experienced team behind our successful digital marketing strategies"
        />
        <TeamSectionComponent/>
            <SectionHeader
                title="Testimonials"
                description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
            />
        <TestimonialsSection />
        <SectionHeader
            title="Contact Us"
            description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />
        <ContactForm />;
    </div>
);

export default HomePage;


