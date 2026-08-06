import React from 'react';
import { Home, ShieldCheck, DoorOpen, Palmtree, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function InspectionSection() {
  const categories = [
    {
      icon: Home,
      title: "Roof & Roofline",
      subtitle: "Gutters, soffits, fascia & roof surface condition"
    },
    {
      icon: ShieldCheck,
      title: "Home Exterior",
      subtitle: "Stucco, siding, wall buildup & painted trim"
    },
    {
      icon: DoorOpen,
      title: "Entryways & Hardscapes",
      subtitle: "Driveways, walkways, stone & front entries"
    },
    {
      icon: Palmtree,
      title: "Outdoor Living & Property Features",
      subtitle: "Pool decks, patios, walls & outdoor structures"
    }
  ];

  return (
    <div data-webild-section="inspection" data-section="inspection" id="inspection">
      <section aria-label="32-Point Exterior Inspection" className="py-16 md:py-24 bg-[#02066f] text-[#f1ece4] overflow-hidden">
        <div className="w-content-width mx-auto">
          {/* Eyebrow & Headline */}
          <ScrollReveal variant="slide-up" className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-[#bf9945] uppercase block mb-3">
              Free 32-Point Exterior Inspection
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#f1ece4] leading-[1.18] tracking-tight text-balance mb-4">
              See What Your Home Needs Before Small Problems Get Worse
            </h2>
            <p className="text-base md:text-lg text-[#f1ece4]/80 leading-relaxed text-balance">
              We inspect the areas most likely to collect buildup, lose curb appeal, or be overlooked—then show you exactly what needs attention.
            </p>
          </ScrollReveal>

          {/* Inspection Categories */}
          <ScrollReveal variant="fade-blur" delay={0.1} className="mb-12 md:mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0">
              {categories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col items-center text-center px-4 py-2 md:py-6 ${
                      idx !== categories.length - 1 ? 'md:border-r md:border-[#f1ece4]/15' : ''
                    }`}
                  >
                    <div className="shrink-0 p-3 rounded-full bg-[#bf9945]/15 text-[#bf9945] mb-4">
                      <Icon className="size-6" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#f1ece4] mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#f1ece4]/70 leading-normal max-w-[220px]">
                      {cat.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Prominent Gold CTA & Note */}
          <ScrollReveal variant="slide-up" delay={0.2} className="flex flex-col items-center text-center">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#bf9945] text-[#02066f] font-semibold text-base px-8 py-4 rounded hover:bg-[#bf9945]/90 transition-colors group text-center"
            >
              <span>Get My Free 32-Point Inspection</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-xs md:text-sm text-[#f1ece4]/60 mt-3 font-normal">
              Visual exterior condition assessment. No obligation to purchase service.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}