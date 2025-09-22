import AboutUs from "@/components/AboutUsSection";
import HeroSection from "@/components/HeroSection";
import PartnerSection from "@/components/PartnerSection";
import Solutions from "@/components/SolutionsSection";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Solutions />
      <TeamSection />
      <PartnerSection />
    </div>
  );
}
