import React from 'react';
import Button from '@/components/ui/Button';
import TextAnimation from '@/components/ui/TextAnimation';
import ImageOrVideo from '@/components/ui/ImageOrVideo';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function HeroSection(): React.JSX.Element {
  return (
    <section data-webild-section="Hero" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Single full-width cinematic hero background */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <ImageOrVideo
          videoSrc="https://storage.googleapis.com/webild/users/user_3HGof9QZxBPIQg7h8T53jziZ9o1/uploaded-1785935246434-glgcsti0.mp4?_wi=2"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="w-content-width mx-auto flex flex-col items-center text-center text-white relative z-10 gap-6">
        <div className="px-4 py-1.5 rounded-full bg-[#02066f]/80 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold uppercase tracking-widest text-[#bf9945]">
          Premium Exterior Care for East Broward
        </div>

        <TextAnimation
          text="Your Home’s Exterior, Beautifully Maintained Year-Round."
          variant="slide-up"
          gradientText={false}
          tag="h1"
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-content-width leading-tight"
        />

        <TextAnimation
          text="Hassle-free, scheduled cleanings that follow our 32-point cleaning process so your home never falls below our 32-Point Standard."
          variant="slide-up"
          gradientText={false}
          tag="p"
          className="text-lg md:text-2xl text-white/80 max-w-content-width font-light leading-relaxed"
        />

        <ScrollReveal variant="slide-up" delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Button
              text="Call Now"
              variant="primary"
              href="#properties"
            />
            <Button
              text="Request Free Exterior Inspection"
              variant="secondary"
              href="#contact"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}