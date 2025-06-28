import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Learn effective coping strategies and evidence-based techniques to manage anxiety, reduce stress, and regain control over your daily life. Through cognitive-behavioral therapy and mindfulness practices, we'll work together to identify triggers and develop personalized tools for lasting relief.",
    image: "/images/anxiety.jpg?height=300&width=400&text=Peaceful+Meditation+Scene",
    price: "$200 / individual session",
  },
  {
    title: "Relationship Counselling",
    description:
      "Strengthen your connections and improve communication with your partner through compassionate couples therapy. We'll address conflict resolution, intimacy issues, and relationship patterns to help you build a healthier, more fulfilling partnership together.",
    image: "/placeholder.svg?height=300&width=400&text=Couple+Holding+Hands",
    price: "$240 / couples session",
  },
  {
    title: "Trauma Recovery",
    description:
      "Heal from past traumatic experiences in a safe, supportive environment using trauma-informed therapeutic approaches. We'll work at your pace to process difficult emotions, develop healthy coping mechanisms, and reclaim your sense of safety and empowerment.",
    image: "/placeholder.svg?height=300&width=400&text=Healing+Journey+Path",
    price: "$200 / individual session",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services & Specialties</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Personalized therapeutic approaches tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative h-48">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-blue-600 font-semibold">{service.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
