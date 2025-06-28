import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Dr. Serena Blake</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <Image
              src="/images/dr-serena-blake.png"
              alt="Dr. Serena Blake, PsyD"
              width={400}
              height={400}
              className="rounded-2xl shadow-2xl mx-auto md:mx-0 mb-8"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dr. Serena Blake, PsyD</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years
                of experience and over 500 client sessions. She blends evidence-based approaches—like
                cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome
                anxiety, strengthen relationships, and heal from trauma.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to
                creating a safe, supportive space for you to thrive.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600 w-5 h-5" />
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-sm text-gray-600">
                    1287 Maplewood Drive
                    <br />
                    Los Angeles, CA 90026
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-blue-600 w-5 h-5" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-sm text-gray-600">(323) 555-0192</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600 w-5 h-5" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">serena@blakepsychology.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="text-blue-600 w-5 h-5" />
                <div>
                  <p className="font-medium text-gray-900">Hours</p>
                  <p className="text-sm text-gray-600">
                    In-person: Tue & Thu, 10 AM–6 PM
                    <br />
                    Virtual: Mon, Wed & Fri, 1 PM–5 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
