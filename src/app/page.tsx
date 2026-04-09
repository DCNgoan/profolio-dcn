import NavBar from "@/components/NavBar";
import ThreeBackground from "@/components/ThreeBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <NavBar />
      <ThreeBackground />
      <Hero />
      <About />
      <Skills />
      <Blog />
      <Projects />
      <Contact />
    </main>
  );
}
