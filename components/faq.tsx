import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you accept insurance?",
    answer:
      "No, I do not accept insurance directly. However, I provide a detailed superbill that you can submit to your insurance company for potential reimbursement. Many clients find that their out-of-network benefits help cover a portion of the session fees.",
  },
  {
    question: "Are online sessions available?",
    answer:
      "Yes, I offer virtual sessions via secure Zoom meetings on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. Online therapy can be just as effective as in-person sessions and offers greater flexibility for busy schedules.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "I require 24-hour advance notice for cancellations or rescheduling. Appointments cancelled with less than 24 hours notice will be charged the full session fee, except in cases of emergency or illness.",
  },
  {
    question: "How long are therapy sessions?",
    answer:
      "Individual therapy sessions are 50 minutes long, while couples sessions are 60 minutes. This allows adequate time to explore issues deeply while maintaining a structured therapeutic framework.",
  },
  {
    question: "How often should I attend therapy sessions?",
    answer:
      "Most clients benefit from weekly sessions initially, though frequency can be adjusted based on your specific needs and progress. We'll discuss the best schedule for you during our initial consultation.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">Common questions about therapy sessions and my practice</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-lg px-6 border-0">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
