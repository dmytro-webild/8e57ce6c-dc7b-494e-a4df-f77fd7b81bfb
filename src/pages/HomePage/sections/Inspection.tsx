import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function InspectionSection() {
  const stages = [
    {
      number: "01",
      title: "Inspect & Score",
      copy: "We check 32 areas across your property and record what needs attention."
    },
    {
      number: "02",
      title: "Clean to the Standard",
      copy: "The inspection guides the cleaning process, including the right method for each surface."
    },
    {
      number: "03",
      title: "Verify the Results",
      copy: "We complete a final inspection and bring each serviceable area as close to 100% as its condition safely allows."
    }
  ];

  const scopeAreas = [
    "Roof & Roofline",
    "Home Exterior",
    "Entryways & Hardscapes",
    "Outdoor Living & Property Features"
  ];

  return (
    <div data-webild-section="inspection" data-section="inspection" id="inspection">
  <section aria-label="32-Point Unrelenting Standard" className="py-16 md:py-24 bg-[#f1ece4] text-[#02066f] overflow-hidden border-b border-[#02066f]/10">
    <div className="w-content-width mx-auto">
      {/* Header / Intro */}
      <ScrollReveal variant="slide-up" className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <span className="text-xs md:text-sm font-semibold tracking-wider text-[#bf9945] uppercase block mb-3">
          The 32-Point Unrelenting Standard™
        </span>
        <h2 className="text-3xl md:text-5xl font-semibold text-[#02066f] leading-[1.18] tracking-tight text-balance mb-5">
          The Inspection Sets the Standard. The Cleaning Meets It.
        </h2>
        <p className="text-base md:text-lg text-[#02066f]/80 leading-relaxed text-balance">
          Before every service, we inspect and score 32 areas of your home’s exterior. What we find creates the cleaning plan. After the work is complete, we inspect the same areas again to verify the results.
        </p>
      </ScrollReveal>

      {/* Three-Stage Process */}
      <ScrollReveal variant="fade-blur" delay={0.1} className="mb-16 md:mb-20">
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Gold Line for Desktop */}
          <div 
            className="hidden md:block absolute top-7 left-[15%] right-[15%] h-[1px] bg-[#bf9945]/40 z-0" 
            aria-hidden="true" 
          />
          
          {/* Connecting Gold Line for Mobile */}
          <div 
            className="md:hidden absolute top-7 bottom-7 left-7 w-[1px] bg-[#bf9945]/40 z-0" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
            {stages.map((stage, idx) => (
              <div key={idx} className="flex flex-col items-start md:items-center text-left md:text-center pl-16 md:pl-0 relative">
                {/* Number Icon */}
                <div className="absolute md:relative left-0 md:left-auto top-0 md:top-auto shrink-0 size-14 rounded-full bg-[#f1ece4] border border-[#bf9945] flex items-center justify-center text-[#bf9945] font-semibold text-base mb-4 shadow-sm">
                  {stage.number}
                </div>
                <h3 className="text-xl font-semibold text-[#02066f] mb-2">
                  {stage.title}
                </h3>
                <p className="text-sm text-[#02066f]/75 leading-relaxed max-w-xs">
                  {stage.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Scope Row */}
      <ScrollReveal variant="fade" delay={0.2} className="mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto py-6 px-4 border-y border-[#bf9945]/30">
          <div className="grid grid-cols-2 md:flex md:flex-row md:items-center md:justify-between gap-4 text-center">
            {scopeAreas.map((area, idx) => (
              <React.Fragment key={idx}>
                <span className="text-sm md:text-base font-medium text-[#02066f] tracking-tight">
                  {area}
                </span>
                {idx < scopeAreas.length - 1 && (
                  <span className="hidden md:inline-block text-[#bf9945] text-xs" aria-hidden="true">
                    ◆
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Guarantee Band */}
      <ScrollReveal variant="slide-up" delay={0.25} className="mb-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-[#bf9945]/30 shadow-sm text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#02066f] mb-3">
            Maintained Between Visits
          </h3>
          <p className="text-base text-[#02066f]/85 max-w-2xl mx-auto mb-4 leading-relaxed">
            If normal outdoor conditions bring a maintained area below 80% before your next scheduled service, we’ll return and restore it at no additional cost.
          </p>
          <p className="text-xs md:text-sm text-[#02066f]/60 font-medium italic">
            A final walkthrough with the founder is also available upon request.
          </p>
        </div>
      </ScrollReveal>

      {/* Centered CTA Button */}
      <ScrollReveal variant="fade" delay={0.3} className="text-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#bf9945] hover:bg-[#a57d30] text-[#02066f] font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
        >
          Experience the Unrelenting Standard
        </a>
      </ScrollReveal>
    </div>
  </section>
</div>
  );
}
