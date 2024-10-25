"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Shield, UserCheck, RefreshCw } from "lucide-react";

export default function WhyBpo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  const benefits = [
    {
      icon: Users,
      title: "Time for a Better Approach",
      description:
        "While BPOs might seem like the safe choice, they come with significant hidden costs - both financial and cultural. Here's why direct hiring is the smarter path forward for modern accounting firms.",
    },
    {
      icon: Shield,
      title: "The Control Factor",
      description:
        "BPOs sell convenience, but at what cost? Their rigid management layers mean you have limited say in day-to-day operations and team development. With direct hiring, you're in charge. Your team, your decisions, your success.",
    },
    {
      icon: UserCheck,
      title: "The Culture Challenge",
      description:
        "Ever tried building a unified team culture through a BPO? It's nearly impossible. Their corporate policies often prevent true integration. Want to give your Indian team members the same bonuses and perks as your local staff? Good luck. BPOs resist this because it creates internal tensions. With direct hiring, you build one unified culture across all locations.",
    },
    {
      icon: RefreshCw,
      title: "The Real Economics",
      description:
        "BPOs make their money by paying below-market rates to professionals while charging you premium fees. It's a model that leads to high turnover and inconsistent quality. Our approach is different - your team members earn market-appropriate salaries directly from you, leading to better retention and motivation.",
    },
    {
      icon: RefreshCw,
      title: "The Infrastructure Reality",
      description:
        "Yes, BPOs provide offices and IT infrastructure, but at a significant markup. Our workspace solution offers the same benefits but with transparent, cost-plus pricing. You get all the convenience without the excessive fees.",
    },
  ];

  return (
    <section ref={containerRef} className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="md:sticky md:top-24">
            <motion.div style={{ opacity }} className="max-w-md">
              <h2 className="text-sm font-semibold text-green-500 mb-2">
                Why Direct Hire Beats BPOs
              </h2>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hire a person, not a company
              </h1>
              <p className="text-base md:text-lg text-gray-600">
                It is time to go beyond a BPO. Discover why hiring direct is the
                future for top-tier accounting firms.
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
                  <benefit.icon
                    className="w-8 h-8 md:w-12 md:h-12 text-green-500 mr-4 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
