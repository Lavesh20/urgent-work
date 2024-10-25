'use client'

import { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'

const faqs = [
  {
    question: "What roles do you recruit for?",
    answer: "We recruit for a wide range of roles across various industries. Our expertise covers technical positions, management roles, creative jobs, and more."
  },
  {
    question: "Do I need to sponsor candidates / issue a work Visa to hire in The India?",
    answer: "No, you don't need to sponsor candidates or issue work visas. We handle all local employment requirements, making the hiring process seamless for you."
  },
  {
    question: "How do I pay candidates?",
    answer: "We manage all payments to the candidates. You'll receive a single invoice from us, simplifying the payment process and ensuring compliance with local regulations."
  },
  {
    question: "How long does it take to fill the position?",
    answer: "The time to fill a position can vary depending on the role and specific requirements. On average, we can present qualified candidates within 4-6 weeks."
  },
  {
    question: "Will you write the job description for me?",
    answer: "Yes, we can assist in crafting an effective job description. Our team has extensive experience in creating compelling job posts that attract top talent."
  },
  {
    question: "What's the difference between offshoring and outsourcing?",
    answer: "Offshoring involves relocating a business process to another country, while outsourcing is delegating tasks to an external service provider, which may or may not be in another country."
  },
  {
    question: "Do you hire accountants to work from an office in the India?",
    answer: "Yes, we can hire accountants to work from our offices in the India. We also offer remote work options depending on your preferences and requirements."
  }
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-200 mt-6">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <p className="text-sky-900 font-bold mb-2">HOW CAN WE HELP</p>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Still anything you're unsure about?
              </p>
            </div>
          </div>
          <div className="grid gap-4 mt-8 md:mt-16">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden mx-auto w-full max-w-2xl"
              >
                <button
                  className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium ${
                    openIndex === index ? 'text-blue-800' : 'text-zinc-900'
                  } hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2`}
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  {faq.question}
                  <div className="bg-sky-200 rounded-full p-1">
                    <ChevronDownIcon
                      className={`h-5 w-5 text-zinc-500 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                {openIndex === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-4 py-3 text-sm text-zinc-600 border-t border-zinc-100"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
