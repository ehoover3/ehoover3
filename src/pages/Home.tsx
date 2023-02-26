import Projects from "../components/Projects/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
