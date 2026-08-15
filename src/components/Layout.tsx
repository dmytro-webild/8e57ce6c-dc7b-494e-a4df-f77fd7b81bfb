import FooterBrand from '@/components/sections/footer/FooterBrand';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";
import { Phone } from 'lucide-react';

export default function Layout() {
  const navItems = [
  {
    "name": "The Club",
    "href": "#club"
  },
  {
    "name": "Reviews",
    "href": "#testimonials"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Features",
    "href": "#features"
  },
  {
    "name": "Proof",
    "href": "#proof"
  }
];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
      logo="Mister Exteriors"
      ctaButton={{
        text: "Call Now",
        href: "tel:+19542269454",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <a
        href="tel:+19542269454"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-full font-medium text-sm text-primary-cta-text bg-primary-cta shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group border border-white/20"
      >
        <Phone className="w-4 h-4 fill-current animate-pulse" />
        <span>Call Now</span>
      </a>

    </StyleProvider>
  );
}
