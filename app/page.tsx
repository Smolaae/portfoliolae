import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import { ScrollProgress } from "@/components/ScrollAnimations"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
