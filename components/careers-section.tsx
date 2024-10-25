'use client'

import Link from 'next/link'

export default function CareersSectionComponent() {
  return (
    <section className="bg-[#E6F7FF] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-[#0070F3] text-sm font-semibold uppercase mb-2">CAREERS</h2>
        <h1 className="text-center text-[#1E3A5F] text-4xl font-bold mb-4">Careers with Global Firms</h1>
        <p className="text-center text-[#5A6C7F] mb-12">
          See how TeamUp can help you find your next accounting job.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="bg-[#0070F3] p-6">
              <h3 className="text-white text-2xl font-bold">Who we are</h3>
            </div>
            <div className="p-6">
              <p className="text-[#5A6C7F] mb-6 h-32">
                At TaxTalent, we're on a mission to empower accountants to run successful firms, by building elite teams in The India.
              </p>
              <Link
                href="#"
                className="block w-full bg-[#0070F3] text-white text-center py-3 rounded-full font-semibold hover:bg-[#0050D3] transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="bg-[#0070F3] p-6">
              <h3 className="text-white text-2xl font-bold">Who we want</h3>
            </div>
            <div className="p-6">
              <p className="text-[#5A6C7F] mb-6 h-32">
                We're looking for talented, ambitious senior accountants, tax preparers, bookkeepers, and administrative staff in The Philippines. Here's where you can learn more and apply.
              </p>
              <Link
                href="#"
                className="block w-full bg-[#0070F3] text-white text-center py-3 rounded-full font-semibold hover:bg-[#0050D3] transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="bg-[#0070F3] p-6">
              <h3 className="text-white text-2xl font-bold">Why work with us</h3>
            </div>
            <div className="p-6">
              <p className="text-[#5A6C7F] mb-6 h-32">
                We're not a BPO. If you're hired, you'll work directly with your accounting firm. This means more autonomy, competitive wages, and a fully remote, work-from-home job.
              </p>
              <Link
                href="#"
                className="block w-full bg-[#0070F3] text-white text-center py-3 rounded-full font-semibold hover:bg-[#0050D3] transition-colors"
              >
                Watch Why TeamUp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}