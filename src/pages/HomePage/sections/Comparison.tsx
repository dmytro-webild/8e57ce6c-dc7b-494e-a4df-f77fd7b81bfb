import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ComparisonSection() {
  const oldWayItems = [
    "Untrained & unreliable staff",
    "Reactive cleaning",
    "They clean your home, collect payment, & leave",
    "Hope every area was cleaned properly",
    "High Pressure Everywhere",
    "Inconsistent communication and unknown staff",
    "No record or history of past service details"
  ];

  const misterExteriorsItems = [
    "Certified, vetted, insured, & trained on our 32-point standard",
    "Proactive exterior cleaning so curb appeal never slips",
    "Complete restoration and preventive treatment; we leave everything better than we found it, and an optional walkthrough",
    "Specializing in softwashing and using only pressure when necessary and pre-inspection + post-inspection",
    "Specializing in softwashing and using only pressure when necessary",
    "Dedicated point of contact with the founder",
    "'Exterior Health Record' tracks completed services, conditions, and areas that may need attention"
  ];

  return (
    <div data-webild-section="comparison" data-section="comparison" id="comparison">
  <section aria-label="Old Way vs Mister Exteriors" className="py-16 md:py-24 bg-background overflow-hidden">
    <div className="w-content-width mx-auto">
      {/* Eyebrow & Headline */}
      <ScrollReveal variant="slide-up" className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <span className="text-xs md:text-sm font-semibold tracking-wider text-accent uppercase block mb-3">
          A Better Way to Care for Your Home
        </span>
        <h2 className="text-3xl md:text-5xl font-semibold text-foreground leading-[1.18] tracking-tight text-balance">
          See Why Luxury Homeowners Love To Work With Us
        </h2>
      </ScrollReveal>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto mb-12 md:mb-16">
        {/* The Old Way Column */}
        <ScrollReveal variant="fade-blur" className="flex flex-col justify-between p-8 md:p-10 rounded-xl bg-transparent border border-foreground/10">
          <div>
            <h3 className="text-xl font-semibold text-foreground/80 mb-8 pb-4 border-b border-foreground/10">
              The Old Way
            </h3>
            <div className="space-y-6">
              {[
                "Untrained & unreliable staff",
                "Reactive cleaning",
                "They clean your home, collect payment, & leave",
                "Hope every area was cleaned properly",
                "High Pressure Everywhere",
                "Inconsistent communication and unknown staff",
                "No record or history of past service details"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3.5 py-1">
                  <div className="shrink-0 size-6 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40">
                    <X className="size-3.5" strokeWidth={2} />
                  </div>
                  <span className="text-base text-foreground/70 font-normal leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Mister Exteriors Column */}
        <ScrollReveal variant="fade-blur" delay={0.15} className="flex flex-col justify-between p-8 md:p-10 rounded-xl bg-card border border-accent/30 shadow-sm relative">
          <div>
            <span className="text-xs font-semibold tracking-wider text-accent uppercase block mb-2">
              The Better Way
            </span>
            <h3 className="text-2xl font-semibold text-[#02066f] mb-8 pb-4 border-b border-accent/15">
              Mister Exteriors
            </h3>
            <div className="space-y-6">
              {[
                "Certified, vetted, insured, & trained on our 32-point standard",
                "Proactive exterior cleaning so curb appeal never slips",
                "Complete restoration and preventive treatment; we leave everything better than we found it, and an optional walkthrough",
                "Specializing in softwashing and using only pressure when necessary and pre-inspection + post-inspection",
                "Specializing in softwashing and using only pressure when necessary",
                "Dedicated point of contact with the founder",
                "'Exterior Health Record' tracks completed services, conditions, and areas that may need attention"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3.5 py-1">
                  <div className="shrink-0 size-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Check className="size-3.5" strokeWidth={2.5} />
                  </div>
                  <span className="text-base text-foreground font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Call To Action Button */}
      <ScrollReveal variant="slide-up" className="flex justify-center mt-8 md:mt-12">
        <a
          href="https://app.youform.com/forms/conyhf2h"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold transition-all hover:opacity-90"
        >
          Get a complimentary exterior inspection
          <ArrowRight className="size-4" />
        </a>
      </ScrollReveal>
    </div>
  </section>
</div>
  );
}