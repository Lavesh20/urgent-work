'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function HeroComponent() {
  return (
    <div className="bg-gradient-to-b from-blue-700 to-blue-800 text-white min-h-screen flex items-center justify-center py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Hire Elite Indian Talent, Your Way
          </h1>
          <p className="text-xl md:text-xl text-blue-200 mb-8">
            Transform your accounting firm with direct access to India's top professionals. A smarter alternative to BPOs, with optional workspace solutions and zero middleman fees.
            Skip the traditional outsourcing route. Build a team that's truly yours.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-blue-700  text-base md:text-xl px-6 md:px-8 py-2 md:py-3 w-full md:w-auto">
              <Link href="/calendar">
                Schedule a Call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}