import Footer from "../../shared/Footer/Footer";
import AboutMe from "../aboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Counting from "../counting/Counting";
import HeroSection from "../Hero/Hero";
import Projects from "../Projects/Project";
import Skills from "../skils/Skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Counting />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}
