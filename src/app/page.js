import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-tr from-yellow-100 via-white to-orange-100 shadow-inner shadow-yellow-200/30">
  <Navbar />
  <div className="container mt-24 mx-auto px-0 py-4">
    <HeroSection />
    <AboutSection />
    <ExperienceSection/>
    <ProjectsSection />
    
    <EmailSection />
  </div>
  <Footer />
</main>

  );
}
