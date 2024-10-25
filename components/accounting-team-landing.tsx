'use client'

import Link from 'next/link'

export default function AccountingTeamLanding() {
  return (
    <div className="min-h-screen bg-[#FFFBE6] flex flex-col items-center justify-center p-4 space-y-12">
      <section className="text-center space-y-6 max-w-3xl">
        <h2 className="text-[#B07C43] text-sm font-semibold uppercase">SOME OF OUR CANDIDATES</h2>
        <h1 className="text-[#1E3A5F] text-4xl md:text-5xl font-bold">Hire your dream accounting team</h1>
        <p className="text-[#5A6C7F] text-lg">
          At TaxTalent India, we focus on helping you find and hire the best accountants and managers.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#"
            className="bg-[#F8D775] text-[#1E3A5F] px-6 py-2 rounded-full font-medium hover:bg-[#F6CB4B] transition-colors"
          >
            North American Experience
          </Link>
          <Link
            href="#"
            className="bg-[#F8D775] text-[#1E3A5F] px-6 py-2 rounded-full font-medium hover:bg-[#F6CB4B] transition-colors"
          >
            Australian Experience
          </Link>
        </div>
      </section>

      <section className="text-center space-y-6 max-w-3xl">
        <p className="text-[#5A6C7F] text-lg">
          Plus many more candidates, schedule a call today to find out how we can match you with the best candidates.
        </p>
        <Link
          href="/calendar"
          className="inline-block bg-[#F8D775] text-[#1E3A5F] px-8 py-3 rounded-full font-medium hover:bg-[#F6CB4B] transition-colors"
        >
          Schedule a Call
        </Link>
      </section>
    </div>
  )
}