import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ApproachSection from "@/components/ApproachSection";
import HallmarksSection from "@/components/HallmarksSection";
import FoundersSection from "@/components/FoundersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ApproachSection />
        <HallmarksSection />
        <FoundersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
