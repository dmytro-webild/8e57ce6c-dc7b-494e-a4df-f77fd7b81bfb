import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesArrowCards from '@/components/sections/features/FeaturesArrowCards';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroSplitVerticalMarquee from '@/components/sections/hero/HeroSplitVerticalMarquee';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialMarqueeOverlayCards from '@/components/sections/testimonial/TestimonialMarqueeOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitVerticalMarquee
      tag="The 32-Point Standard"
      title="Your Home, Perfectly Maintained Year-Round."
      description="Premium exterior home care for discerning homeowners in East Broward. We handle the details so you enjoy the prestige of a pristine home—stress & worry free."
      primaryButton={{
        text: "Apply for Home Care Club",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Our 32-Point Process",
        href: "#process",
      }}
      leftItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/romantic-villa-ephrussie-french-riviera-beauty-nature_1268-36319.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-13119.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/building-pattern_1203-3097.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-sitting-cement-seat-urban-park_23-2148328851.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-city-architecture_23-2148798692.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/outdoor-portrait-caucasian-woman-classic-jumpsuit-with-red-lipstick-vacation-outside-villa-hotel_343596-438.jpg",
        },
      ]}
      rightItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/billboard-template-urban-environment_23-2148197226.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/relaxed-couple-kissing_1153-957.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-roses-white-cage_23-2148229300.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-white-marble-textured-wall_53876-146222.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/house-with-marble-fence_1137-55.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/new-york-city-ny-usa-october-20-2020-vessel-hudson-yards-staircase-designed-by-architect-thomas-heatherwick-midtown-manhattan-west_1321-2483.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="Our Philosophy"
      quote="Mister Exteriors isn't about pressure washing. It's about an unwavering commitment to the preservation and perfection of your home's exterior presentation."
      author="The Mister Exteriors Team"
      role="Premium Home Care Specialists"
      imageSrc="http://img.b2bpic.net/free-photo/young-woman-drinking-coffee_23-2148162646.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesArrowCards
      tag="The Membership"
      title="Membership Benefits"
      description="Comprehensive care for your home's most vital exterior features."
      items={[
        {
          title: "Exterior Facade Cleaning",
          tags: [
            "Deep Clean",
            "Safe",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-city-building-shadows_23-2149283297.jpg",
        },
        {
          title: "Window & Trim Care",
          tags: [
            "Precision",
            "Clear",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/metal-profiles-drywall-laid-floor-against-wall-tape-measure-metal-scissors-preparing-profiles-installation-wall-ceiling-frame_166373-1902.jpg",
        },
        {
          title: "Landscape Edge Perfection",
          tags: [
            "Details",
            "Polished",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/exotic-wildflower-bloom_23-2147835044.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="process" data-section="process">
    <SectionErrorBoundary name="process">
          <FeaturesRevealCardsBento
      tag="The Unrelenting Standard™"
      title="32-Point Inspection Process"
      description="Every square inch of your home is meticulously inspected, cleaned, and restored to our proprietary standard. No shortcuts."
      items={[
        {
          title: "Roof Integrity",
          description: "Check for debris and moss buildup.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/slate-background-texture-with-copy-space_23-2148283306.jpg",
        },
        {
          title: "Gutter Flow",
          description: "Clear and verified drainage paths.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/buildings-around_1127-2870.jpg",
        },
        {
          title: "Wall Finishes",
          description: "Assessment of stucco and siding integrity.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/teenage-boy-holding-book-hand-walking-front-university-building_23-2148093393.jpg",
        },
        {
          title: "Windows & Screens",
          description: "Deep clean and frame inspection.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-metal-texture-pattern_58702-13853.jpg",
        },
        {
          title: "Entryways",
          description: "Detailed care of thresholds and doors.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-building-with-glass-windows-staircases-lights_181624-12044.jpg",
        },
        {
          title: "Patio Surfaces",
          description: "Deep clean for outdoor longevity.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-green-plant-stones_23-2148394728.jpg",
        },
        {
          title: "Final Walkthrough",
          description: "Final check against our 32-point list.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-white-house-with-welcoming-front-porch_23-2151974389.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="proof" data-section="proof">
    <SectionErrorBoundary name="proof">
          <SocialProofMarquee
      tag="Trusted in the Community"
      title="Our Standards Meet Luxury Demands"
      names={[
        "East Broward Estates",
        "Las Olas Luxury Homes",
        "Pompano Premier Living",
        "Fort Lauderdale Elite",
        "South Florida Residential Association",
        "Luxury Home Care Guild",
        "Coastal Property Experts",
      ]}
      textAnimation="fade"
      description="Description"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeOverlayCards
      tag="Voices of Value"
      title="What Homeowners Say"
      testimonials={[
        {
          name: "Sarah J.",
          role: "Resident",
          company: "East Broward",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/girl-posing-with-smarphone_23-2148124537.jpg",
        },
        {
          name: "Michael T.",
          role: "Homeowner",
          company: "Las Olas",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-young-couple-sitting-patio-drinking-red-wine_23-2147891238.jpg",
        },
        {
          name: "Emily R.",
          role: "Client",
          company: "Fort Lauderdale",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/charming-female-employee-helping-out-coworker-sitting-discussing-project-office-lounge-zone-lying-sofa-typing-keyboard-laptop-smiling-camera-amused-talking-freelancing-coworking-space_197531-30350.jpg",
        },
        {
          name: "David K.",
          role: "Member",
          company: "Pompano Beach",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-businessman-sitting-sofa-waiting-area_107420-95816.jpg",
        },
        {
          name: "Susan P.",
          role: "Homeowner",
          company: "South Florida",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/sweet-kiss-happy-couple-is-standing-near-new-car-house-with-cardboard-boxes_496169-286.jpg",
        },
      ]}
      textAnimation="slide-up"
      description="Description"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Common Questions"
      title="Frequently Asked Questions"
      description="Everything you need to know about our exclusive Home Care Club."
      items={[
        {
          question: "What is the 32-Point Unrelenting Standard™?",
          answer: "It is our proprietary checklist covering every inch of your exterior to ensure zero oversight.",
        },
        {
          question: "What if my home isn't perfectly maintained?",
          answer: "We guarantee our work. If it drops below standard, we restore it at no cost.",
        },
        {
          question: "How do I become a member?",
          answer: "Simply apply through the site. We review applications for compatibility with our service standard.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/luxury-travel-full-shot-woman_23-2149204471.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Join Now"
      text="Apply for the Home Care Club. Secure your home’s prestige with our Unrelenting Standard™."
      primaryButton={{
        text: "Apply for Membership",
        href: "#",
      }}
      secondaryButton={{
        text: "Call Now: (954) 555-0199",
        href: "tel:9545550199",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
