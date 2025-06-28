"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
    preferredTime: "",
    agreeToContact: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.reason.trim()) {
      newErrors.reason = "Please tell us what brings you here"
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = "Preferred contact time is required"
    }

    if (!formData.agreeToContact) {
      newErrors.agreeToContact = "You must agree to be contacted"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your message has been received. Dr. Blake will contact you within 24 hours to schedule your free
              consultation.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: "",
                  phone: "",
                  email: "",
                  reason: "",
                  preferredTime: "",
                  agreeToContact: false,
                })
              }}
              variant="outline"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">Ready to begin your journey? Reach out for a free consultation</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-600 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Location</h3>
                    <p className="text-gray-600">
                      1287 Maplewood Drive
                      <br />
                      Los Angeles, CA 90026
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-blue-600 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(323) 555-0192</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-blue-600 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">serena@blakepsychology.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-blue-600 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Hours</h3>
                    <p className="text-gray-600">
                      <strong>In-person:</strong> Tue & Thu, 10 AM–6 PM
                      <br />
                      <strong>Virtual:</strong> Mon, Wed & Fri, 1 PM–5 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <Input
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <Textarea
                      placeholder="What brings you here? *"
                      value={formData.reason}
                      onChange={(e) => handleInputChange("reason", e.target.value)}
                      className={errors.reason ? "border-red-500" : ""}
                      rows={4}
                    />
                    {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
                  </div>

                  <div>
                    <Input
                      placeholder="Preferred time to reach you *"
                      value={formData.preferredTime}
                      onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                      className={errors.preferredTime ? "border-red-500" : ""}
                    />
                    {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agree"
                      checked={formData.agreeToContact}
                      onCheckedChange={(checked) => handleInputChange("agreeToContact", checked as boolean)}
                      className={errors.agreeToContact ? "border-red-500" : ""}
                    />
                    <label htmlFor="agree" className="text-sm text-gray-600 leading-relaxed">
                      I agree to be contacted by Dr. Serena Blake regarding my inquiry *
                    </label>
                  </div>
                  {errors.agreeToContact && <p className="text-red-500 text-sm">{errors.agreeToContact}</p>}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
