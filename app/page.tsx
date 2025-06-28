import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import { ScrollProgress } from "@/components/ScrollAnimations"

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
