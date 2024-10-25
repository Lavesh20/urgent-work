'use client'

import Link from 'next/link'

export default function FooterComponent() {
  return (
    <footer className=" bg-gradient-to-b from-blue-700 to-blue-800 text-white pt-12 ">
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <h2 className="text-5xl font-bold mb-4">TaxTalent India</h2>
            <p className="text-blue-200 text-lg font-normal">
              Hire top accountants in  India with TaxTalent India DirectHire.
            </p>
          </div>

          <div className="md:col-span-2">

          </div>
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">For Candidates</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/getintouch" className="hover:text-blue-200">Get in Touch</Link></li>
              <li><Link href="/career" className="hover:text-blue-200">Careers</Link></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="bg-[#0f172a] py-6 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-300">
          <p>`Copyright © 2024 TaxTalent India LLC - All Rights Reserved`</p>

        </div>
      </div>
    </footer>
  )
}