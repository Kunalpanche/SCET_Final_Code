/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Ticker from "./components/Ticker";
import Hero from "./components/sections/Hero";
import AffiliationStrip from "./components/sections/AffiliationStrip";
import AboutSection from "./components/sections/AboutSection";
import Highlights from "./components/sections/Highlights";
import Programs from "./components/sections/Programs";
import Departments from "./components/sections/Departments";
import Leadership from "./components/sections/Leadership";
import Placements from "./components/sections/Placements";
import Collaborations from "./components/sections/Collaborations";
import Alumni from "./components/sections/Alumni";
import Gallery from "./components/sections/Gallery";
import CTAAdmissions from "./components/sections/CTAAdmissions";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
       <Ticker />
      <main>
        <Hero />
        <AffiliationStrip />
        <AboutSection />
        <Highlights />
        <Programs />
        <Departments />
        <Leadership />
        <Placements />
        <Collaborations />
        <Alumni />
        <Gallery />
        <CTAAdmissions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
