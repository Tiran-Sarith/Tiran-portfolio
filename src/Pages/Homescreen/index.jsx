import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import HeroSection from "../HeroSection";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
