import FooterBrand from '@/components/sections/footer/FooterBrand';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Process",
    "href": "#process"
  },
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
        text: "Apply for Club",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBrand
      brand="Mister Exteriors"
      columns={[
        {
          items: [
            {
              label: "Home Care Club",
              href: "#",
            },
            {
              label: "Our Process",
              href: "#",
            },
            {
              label: "About Us",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
            {
              label: "Contact",
              href: "#",
            },
          ],
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
