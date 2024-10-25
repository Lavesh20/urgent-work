'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function HeroComponent() {
  return (
    <div className="bg-gradient-to-b from-blue-700 to-blue-800 text-white py-8 md:py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Hire Elite Indian Talent, Your Way

          </h1>
          <p className="text-lg md:text-xl text-blue-200 mb-8">
            Transform your accounting firm with direct access to India's top professionals. A smarter alternative to BPOs, with optional workspace solutions and zero middleman fees.
Skip the traditional outsourcing route. Build a team that's truly yours.

          </p>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-blue-700 text-base md:text-lg px-6 md:px-8 py-2 md:py-3">
              <Link href="/calendar">
                Schedule a Call
              </Link>
            </Button>
           
          </div>


        </div>
        <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] mt-10 lg:mt-0"> 
          {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-sky-300 rounded-full flex items-center justify-center">
              <Image
                src="/images/photo-1.jpg"
                alt="Team member"
                width={150}
                height={350}
                style={{ borderRadius: '100%' }}
              />
            </div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-sky-300 text-blue-900 px-3 md:px-4 py-1 md:py-2 rounded-full whitespace-nowrap text-xs md:text-sm">
              Grow my team with TeamUp
            </div>
          </div>
          <div className="absolute bottom-0 left-0 flex items-center">
            <div className="w-36 h-36 md:w-48 md:h-48 bg-yellow-300 rounded-full flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Accountant"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-blue-900 px-3 md:px-4 py-1 md:py-2 rounded-full whitespace-nowrap text-xs md:text-sm">
              Accountant (CPA)
            </div>
          </div>
          <div className="absolute bottom-0 right-0 flex items-center">
            <div className="w-36 h-36 md:w-48 md:h-48 bg-green-300 rounded-full flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Bookkeeper"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-300 text-blue-900 px-3 md:px-4 py-1 md:py-2 rounded-full whitespace-nowrap text-xs md:text-sm">
              Bookkeeper
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}