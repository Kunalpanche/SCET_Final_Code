import Hero from "../components/sections/Hero";
import AffiliationStrip from "../components/sections/AffiliationStrip";
import AboutSection from "../components/sections/AboutSection";
import Highlights from "../components/sections/Highlights";
import Programs from "../components/sections/Programs";
import Leadership from "../components/sections/Leadership";
import Placements from "../components/sections/Placements";
import Collaborations from "../components/sections/Collaborations";
import Alumni from "../components/sections/Alumni";
import Gallery from "../components/sections/Gallery";
import CTAAdmissions from "../components/sections/CTAAdmissions";
import Contact from "../components/sections/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <AffiliationStrip />
      <AboutSection />
      <Highlights />
      <Programs />
      <Leadership />
      <Placements />
      <Collaborations />
      <Alumni />
      <Gallery />
      <CTAAdmissions />
      <Contact />
    </main>
  );
}
