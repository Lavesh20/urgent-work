'use client'

import PricingSectionComponent from "@/components/pricing-section"

import SecondPage from "@/components/secondPage"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import StayInControl from "@/components/stayInControl"
import WhyTeamupDirectHire from "@/components/why-teamup-direct-hire"
import NavbarComponent from "@/components/navbar"
import HeroComponent from "@/components/hero"
import AccountingTeamLanding from "@/components/accounting-team-landing"
import FooterComponent from "@/components/footer"
import FaqSection from "@/components/faq-section"
import WhyBpo from "@/components/bpos-section"
import DirectHireProcess from "@/components/direct-hire-process"
import MakeItWork from "@/components/making-it-work"
import WorkplaceSolution from "@/components/workplace-solution"
export default function Page() {
  return (
  <div>
    <NavbarComponent />
    <HeroComponent />
    <WhyTeamupDirectHire />
    <StayInControl />
    <WhyBpo />
    <AccountingTeamLanding />
    <MakeItWork />
    <DirectHireProcess />
    <WorkplaceSolution />
    <PricingSectionComponent />
    <FaqSection />
    <FooterComponent />
  </div>
   
  )
}