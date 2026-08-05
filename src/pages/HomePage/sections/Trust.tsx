import React from 'react';
import { UserCheck, MapPin, ShieldCheck, CalendarCheck } from 'lucide-react';

export default function TrustSection(): React.JSX.Element {
  const trustPoints = [
    {
      icon: UserCheck,
      title: 'Founder-Led Service',
      description: 'Direct owner care & accountability',
    },
    {
      icon: MapPin,
      title: 'Serving East Broward',
      description: 'Exclusive to coastal luxury homes',
    },
    {
      icon: ShieldCheck,
      title: '32-Point Cleaning Process',
      description: 'Systematic white-glove inspection',
    },
    {
      icon: CalendarCheck,
      title: 'Hassle-Free Scheduled Care',
      description: 'Year-round proactive maintenance',
    },
  ];

  return (
    <section data-webild-section="trust" id="trust" className="w-full bg-background border-y border-foreground/10 py-6 md:py-8 relative z-10">
      <div className="w-content-width mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="p-2 rounded-full bg-foreground/5 text-accent border border-accent/30 shrink-0">
                  <Icon className="w-5 h-5 text-accent stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-foreground leading-snug tracking-tight">
                    {point.title}
                  </h4>
                  <p className="text-xs text-foreground/70 font-normal mt-0.5">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}