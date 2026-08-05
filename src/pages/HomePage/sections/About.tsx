/* eslint-disable */
import React from 'react';
import { Calendar, ShieldCheck, ClipboardCheck, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutSection() {
  return (
    <div data-webild-section="about" data-section="about" id="about">
      <section aria-label="About Mister Exteriors" className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="w-content-width mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Copy, Benefit Points, CTA */}
            <ScrollReveal variant="slide-up" className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Small Gold Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs md:text-sm font-semibold tracking-wider text-accent uppercase">
                  Exterior Care Without the Hassle
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-5xl font-semibold text-foreground leading-[1.18] tracking-tight mb-6 text-balance">
                Come Home to a House That Always Looks Its Best
              </h2>

              {/* Paragraph */}
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8 max-w-2xl">
                Mister Exteriors keeps your home’s exterior beautiful, cared for, and ready to impress through scheduled service and our 32-point process.
              </p>

              {/* 3 Benefit Points with Gold Icons */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-2.5 rounded-full bg-accent/10 text-accent mt-0.5">
                    <Calendar className="size-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-foreground">
                      Always Guest-Ready
                    </h3>
                    <p className="text-sm md:text-base text-foreground/70 mt-0.5">
                      Proactive maintenance schedules keep your property immaculate
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-2.5 rounded-full bg-accent/10 text-accent mt-0.5">
                    <ShieldCheck className="size-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-foreground">
                      Hassle Free
                    </h3>
                    <p className="text-sm md:text-base text-foreground/70 mt-0.5">
                      From vetted & certified staff to scheduling done for you, we make it as easy as possible
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-2.5 rounded-full bg-accent/10 text-accent mt-0.5">
                    <ClipboardCheck className="size-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-foreground">
                      Consistent 32-Point Care
                    </h3>
                    <p className="text-sm md:text-base text-foreground/70 mt-0.5">
                      Every visit follows our rigorous 32-point inspection and cleaning protocol for unrelenting quality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Deep Navy CTA Button */}
              <div>
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#02066f] text-white font-medium text-base px-8 py-4 rounded hover:bg-[#02066f]/90 transition-colors group text-center"
                >
                  <span>Get My Free Exterior Inspection</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

            </ScrollReveal>

            {/* Right Column: One Large Clean Image */}
            <ScrollReveal 
              variant="fade-blur" 
              delay={0.2} 
              className="lg:col-span-5 w-full"
            >
              <div className="relative aspect-[4/3] lg:aspect-[4/5] w-full rounded-lg overflow-hidden bg-card">
                <img
                  src="https://storage.googleapis.com/webild/users/user_3HGof9QZxBPIQg7h8T53jziZ9o1/uploaded-1785937528591-z3og8050.png"
                  alt="Pristine South Florida luxury home exterior"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </div>
  );
}
