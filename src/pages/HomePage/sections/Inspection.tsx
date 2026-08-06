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
  <section aria-label="32-Point Unrelenting Standard" className="bg-[#02066f] text-[#f1ece4] overflow-hidden">
    <div className="w-content-width mx-auto">
      {/* Header / Intro */}
      <ScrollReveal variant="slide-up" className="text-center max-w-content-width mx-auto">
        <span className="text-xs md:text-sm font-semibold tracking-wider text-[#bf9945] uppercase block mb-3">
          The 32-Point Unrelenting Standard™
        </span>
        <h2 className="text-3xl md:text-5xl font-semibold text-[#f1ece4] leading-[1.18] tracking-tight text-balance mb-5">
          The Inspection Sets the Standard. The Cleaning Meets It.
        </h2>
        <p className="text-base md:text-lg text-[#f1ece4]/80 leading-relaxed text-balance">
          Before every service, we inspect and score 32 areas of your home’s exterior. What we find creates the cleaning plan. After the work is complete, we inspect the same areas again to verify the results.
        </p>
      </ScrollReveal>

      {/* Three-Stage Process */}
      <ScrollReveal variant="fade-blur" delay={0.1} className="">
        <div className="relative max-w-content-width mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 relative z-10">
            {stages.map((stage, idx) => (
              <div key={idx} className="flex flex-col items-start md:items-center text-left md:text-center md:pl-0 relative">
                {/* Number Icon */}
                <div className="absolute md:relative left-0 md:left-auto top-0 md:top-auto shrink-0 size-14 rounded-full bg-[#02066f] border border-[#bf9945] flex items-center justify-center text-[#bf9945] font-semibold text-base mb-4 shadow-sm">
                  {stage.number}
                </div>
                <h3 className="text-xl font-semibold text-[#f1ece4] mb-2">
                  {stage.title}
                </h3>
                <p className="text-sm text-[#f1ece4]/75 leading-relaxed max-w-content-width">
                  {stage.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Scope Row */}
      <ScrollReveal variant="fade-blur" delay={0.2} className="">
        <div className="hidden md:flex items-center justify-center gap-6 text-sm font-medium text-[#f1ece4]/90">
          {scopeAreas.map((area, idx, arr) => (
            <React.Fragment key={idx}>
              <span>{area}</span>
              {idx < arr.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf9945]" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="grid md:hidden grid-cols-2 gap-4 text-center text-sm font-medium text-[#f1ece4]/90">
          {scopeAreas.map((area, idx) => (
            <div key={idx} className="p-3 border border-[#bf9945]/30 rounded-lg bg-[#02066f]/50">
              {area}
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Guarantee Band & CTA */}
      <ScrollReveal variant="slide-up" delay={0.3} className="max-w-content-width mx-auto text-center">
        {/* Guarantee Div - Off-white background with dark blue text */}
        <div className="bg-[#f1ece4] border-t-2 border-[#bf9945] rounded-xl p-8 text-center shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-[#02066f] mb-3">
            Maintained Between Visits
          </h3>
          <p className="text-sm md:text-base text-[#02066f]/90 leading-relaxed max-w-content-width mx-auto mb-4">
            If normal outdoor conditions bring a maintained area below 80% before your next scheduled service, we’ll return and restore it at no additional cost.
          </p>
          <p className="text-xs md:text-sm text-[#02066f]/75 italic">
            A final walkthrough with the founder is also available upon request.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#bf9945] hover:bg-[#a57d30] text-[#02066f] font-semibold rounded-lg transition-colors shadow-md text-base"
        >
          Experience the Unrelenting Standard
          <ArrowRight className="ml-2 size-5" />
        </a>
      </ScrollReveal>
    </div>
  </section>
</div>
  );
}