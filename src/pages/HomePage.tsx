import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import AboutSection from './HomePage/sections/About';
import Communities Section from './HomePage/sections/Communities ';
import FaqSection from './HomePage/sections/Faq';
import Apply NowSection from './HomePage/sections/Apply Now';

import TrustSection from './HomePage/sections/Trust';
import ComparisonSection from './HomePage/sections/Comparison';
import InspectionSection from './HomePage/sections/Inspection';

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <ComparisonSection />
      <InspectionSection />
      <Communities Section />
      <FaqSection />
      <Apply NowSection />
    </>
  );
}