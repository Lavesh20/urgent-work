'use client'

import React from 'react'

export default function DirectHireProcess() {
  const steps = [
    {
      number: '01',
      title: 'Kick Off',
      description: "We'll meet with you to determine your hiring needs and get clear on specific requirements, skills and personality traits of your ideal candidate. We'll use this information to craft a personalized job description."
    },
    {
      number: '02',
      title: 'Promote',
      description: "We'll get your job in front of your ideal candidates by posting it to multiple job boards and platforms. We'll also use professional recruiting tools to do targeted outreach to candidates that match the profiles we're looking for."
    },
    {
      number: '03',
      title: 'Screen',
      description: 'We use a detailed application. Then, we do an interview where we look for skills, experience, and team fit. Then, we also do a skills test for the role (bookkeeper, tax prep, senior accountant, etc.)'
    },
    {
      number: '04',
      title: 'Hire',
      description: "As people start coming through the pipeline and we think they're a good fit, we'll set up interviews for you.Then make your hire!"
    }
  ]

  return (
    <section className="bg-green-100 pt-24 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-green-600 font-semibold mb-2">HOW IT WORKS</h4>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">Our Simple DirectHire Process</h2>
          <p className="text-xl text-gray-600">
            Discover TaxTalent India's easy four-step process to finding top accounting talent for your firm.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-6 flex flex-col rounded-t-lg w-full max-w-[280px] shadow-[0_4px_6px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <span className="text-5xl font-bold text-green-500 mb-4">{step.number}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 flex-grow">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}