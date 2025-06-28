import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="absolute inset-0 bg-white/20"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Find Your Path to
          <span className="text-blue-600 block">Healing & Growth</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Compassionate, evidence-based therapy to help you overcome anxiety, strengthen relationships, and heal from
          trauma
        </h2>
        <Link href="#contact">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book a Free Consultation
          </Button>
        </Link>
        <div className="mt-12 text-sm text-gray-600">
          <p>Dr. Serena Blake, PsyD • Licensed Clinical Psychologist</p>
          <p>8 years experience • 500+ successful sessions</p>
        </div>
      </div>
    </section>
  )
}
