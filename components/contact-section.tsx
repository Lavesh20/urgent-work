'use client'

import Link from 'next/link'

export default function ContactSectionComponent() {
  return (
    <section className="bg-[#E6F7FF] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-[#0070F3] text-sm font-semibold uppercase mb-2">CONTACT</h2>
        <h1 className="text-center text-[#1E3A5F] text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-center text-[#5A6C7F] mb-12">
          We'd love to get in touch, reach out below and let's chat.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="bg-[#0070F3] p-6">
              <h3 className="text-white text-2xl font-bold mb-2">FOR FIRMS</h3>
              <h4 className="text-white text-3xl font-bold">Interested in Teaming Up</h4>
            </div>
            <div className="p-6">
              <p className="text-[#5A6C7F] mb-6">
                We help you build your dream accounting team. On your free discovery call, we'll discuss your needs, and how you can build an amazing accounting team in The India.
              </p>
              <Link
                href="/calendar"
                className="block w-full bg-[#0070F3] text-white text-center py-3 rounded-full font-semibold hover:bg-[#0050D3] transition-colors"
               
              >
                Schedule a Call
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="bg-[#0070F3] p-6">
              <h3 className="text-white text-2xl font-bold mb-2">FOR CANDIDATES</h3>
              <h4 className="text-white text-3xl font-bold">Want to join the Team?</h4>
            </div>
            <div className="p-6">
              <p className="text-[#5A6C7F] mb-6">
                We're looking for talented, ambitious senior accountants, tax preparers, bookkeepers, and administrative staff in The Philippines. Here's where you can learn more and apply.
              </p>
              <Link
                href="https://tally.so/r/w79W5R"
                className="block w-full bg-[#0070F3] text-white text-center py-3 rounded-full font-semibold hover:bg-[#0050D3] transition-colors"
              >
                For Candidates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}