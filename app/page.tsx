import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
    </main>
  )
}
