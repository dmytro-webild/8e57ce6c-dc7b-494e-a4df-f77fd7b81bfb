import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import AboutSection from './HomePage/sections/About';
import FeaturesSection from './HomePage/sections/Features';
import ProcessSection from './HomePage/sections/Process';
import ProofSection from './HomePage/sections/Proof';
import TestimonialsSection from './HomePage/sections/Testimonials';
import FaqSection from './HomePage/sections/Faq';
import ContactSection from './HomePage/sections/Contact';
import TrustSection from './HomePage/sections/Trust';
import ComparisonSection from './HomePage/sections/Comparison';

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <ComparisonSection />
      <FeaturesSection />
      <ProcessSection />
      <ProofSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}