'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
export default function PricingSectionComponent() {
  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden mt-10 mb-10">
      <div className="flex flex-col md:flex-row bg-blue-600 text-white">
        <div className="p-8 md:w-2/3">
          <h2 className="text-3xl font-bold mb-4"> Ready to Build Your Team?</h2>
          <p className="mb-6 text-blue-100">
            Schedule a discovery call to learn more about how we can help you build your dream team in India. No pressure, no obligations - just a straightforward discussion about your needs and how we might help.
          </p>
          <h3 className="text-xl font-semibold mb-4">
            Transform your firm with direct access to India's best accounting talent.
          </h3>
          <Button 
            className="bg-blue-400 hover:bg-blue-500 text-white transition-colors duration-200 ease-in-out"
            aria-label="Get Started with TeamUp"
           
          >
           <Link href="/calendar">
             Schedule a call
           </Link>
           
          </Button>
        </div>
        <div className="bg-blue-700 p-8 md:w-1/3 flex flex-col justify-center items-center text-center">
          <p className="text-blue-200 mb-2 text-sm md:text-base">ONE-TIME FLAT FEE OF</p>
          <p className="text-4xl md:text-5xl font-bold mb-2">$4,000</p>
          <p className="text-lg md:text-xl mb-4">USD</p>
          <p className="text-xs md:text-sm">PER HIRE*</p>
          <p className="text-xs text-blue-200 mt-4 max-w-xs">
            * Plus, we offer discounts if you hire multiple people.
          </p>
        </div>
      </div>
    </Card>
  )
}