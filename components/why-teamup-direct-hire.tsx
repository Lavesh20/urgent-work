'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Users, Shield, UserCheck, RefreshCw } from 'lucide-react'

export default function WhyTeamupDirectHire() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])

  const benefits = [
    { icon: Users, title: 'Access Elite Indian Talent', description: "When you hire directly through us, you're not limited to the small pool of professionals willing to work in traditional BPO setups. Instead, you gain access to India's vast talent landscape - experienced accountants from top firms, Big 4 alumni, and professionals with extensive US accounting expertise. This means you can handpick individuals who truly align with your firm's needs and culture." },
    { icon: Shield, title: 'Your Space, Your Rules', description: "We offer something unique in the market - fully managed office spaces for your team without the traditional BPO markup. Think of it as your own India office, but without the headaches of setting it up yourself. Your team gets a professional work environment, and you get peace of mind knowing everything from internet connectivity to office maintenance is taken care of. Work remote? That's fine too. The choice is yours." },
    { icon: UserCheck, title: 'True Team Integration', description: "From day one, these professionals are your employees, not ours. This direct relationship fosters genuine loyalty and long-term commitment. Unlike BPO arrangements, there's no confusion about who they work for or split loyalties to manage. They're your team, working directly for you, with your culture and your way of doing things." },
    { icon: RefreshCw, title: 'Transparent Economics', description: "We've stripped away the complex fee structures typical of outsourcing firms. Our pricing is straightforward: a one-time recruitment fee for finding your perfect match, and if you opt for our workspace solution, a simple cost-plus model for office infrastructure. No hidden charges, no ongoing management fees, no surprises." },
  ]

  return (
    <section ref={containerRef} className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="md:sticky md:top-24">
            <motion.div style={{ opacity }} className="max-w-md">
              <h2 className="text-sm font-semibold text-green-500 mb-2">WHAT SETS US APART</h2>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Hire from TaxTalent </h1>
              <p className="text-base md:text-lg text-gray-600">
                Forget everything you know about outsourcing to India. We're reimagining how global teams are built, offering direct access to elite talent while handling all the complexities for you. Our approach combines the best of both worlds - the control and culture of direct hiring with the convenience of managed infrastructure.
              </p>
            </motion.div>
          </div>
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-start mb-4">
                  <benefit.icon className="w-8 h-8 md:w-12 md:h-12 text-green-500 mr-4 flex-shrink-0" aria-hidden="true" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}