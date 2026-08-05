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

          {/* DESKTOP LAYOUT (2 Columns side by side with aligned rows) */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto mb-16">
            {/* The Old Way Column */}
            <ScrollReveal variant="fade-blur" className="flex flex-col justify-between p-8 md:p-10 rounded-xl bg-transparent border border-foreground/10">
              <div>
                <h3 className="text-xl font-semibold text-foreground/80 mb-8 pb-4 border-b border-foreground/10">
                  The Old Way
                </h3>
                <div className="space-y-6">
                  {oldWayItems.map((item, idx) => (
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
                  {misterExteriorsItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3.5 py-1">
                      <div className="shrink-0 size-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <Check className="size-4" strokeWidth={2.5} />
                      </div>
                      <span className="text-base md:text-lg text-[#02066f] font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* MOBILE LAYOUT (One continuous vertical story) */}
          <div className="md:hidden space-y-8 max-w-lg mx-auto mb-12">
            {/* 1. Muted Old Way list */}
            <ScrollReveal variant="slide-up" className="p-6 rounded-xl bg-transparent border border-foreground/10">
              <h3 className="text-lg font-semibold text-foreground/80 mb-6 pb-3 border-b border-foreground/10">
                The Old Way
              </h3>
              <div className="space-y-4">
                {oldWayItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="shrink-0 size-5 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40 mt-0.5">
                      <X className="size-3.5" strokeWidth={2} />
                    </div>
                    <span className="text-sm text-foreground/70 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* 2. Thin gold divider with "There's a better way" */}
            <div className="flex items-center gap-4 py-2">
              <div className="h-px bg-accent/30 flex-1" />
              <span className="text-xs font-semibold tracking-wider text-accent uppercase shrink-0">
                There’s a better way
              </span>
              <div className="h-px bg-accent/30 flex-1" />
            </div>

            {/* 3. Premium Mister Exteriors Panel */}
            <ScrollReveal variant="slide-up" className="p-6 rounded-xl bg-card border border-accent/30 shadow-sm">
              <span className="text-xs font-semibold tracking-wider text-accent uppercase block mb-1.5">
                The Better Way
              </span>
              <h3 className="text-xl font-semibold text-[#02066f] mb-6 pb-3 border-b border-accent/15">
                Mister Exteriors
              </h3>
              <div className="space-y-5">
                {misterExteriorsItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="shrink-0 size-5 rounded-full bg-accent/15 flex items-center justify-center text-accent mt-0.5">
                      <Check className="size-3.5" strokeWidth={2.5} />
                    </div>
                    <span className="text-base text-[#02066f] font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* 4. Centered CTA Section */}
          <ScrollReveal variant="slide-up" className="flex flex-col items-center justify-center text-center">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#02066f] text-white font-medium text-base px-8 py-4 rounded hover:bg-[#02066f]/90 transition-colors group text-center"
            >
              <span>Get My Free Exterior Inspection</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-xs md:text-sm text-foreground/60 mt-3 font-normal">
              See the difference for yourself.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}