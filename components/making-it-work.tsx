"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Shield, UserCheck } from "lucide-react";

export default function MakeItWork() {
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
      title: "Technology Setup",
      description: (
        <>
          {/* Replaced <p> with fragment */}
          Choose what works best for you:
          <br />
          {/* The block-level element <ul> is directly inside a fragment */}
          <ul className="list-disc pl-5 my-2">
            <li>
              Let team members use their personal computers with your security
              protocols
            </li>
            <li>Provide company equipment</li>
            <li>Use our secure workspace with managed IT infrastructure</li>
          </ul>
          <br />
          {/* Added text as inline without <p> */}
          Everything is set up with security in mind, ensuring your data and
          systems remain protected.
        </>
      ),
    },
    {
      icon: Shield,
      title: "Compliance Made Easy",
      description: (
        <>
          Stop worrying about Indian employment laws and regulations. We handle
          everything through either straightforward contractor arrangements.
          <br />
          <ul className="list-disc pl-5 my-2">
            <li>Compliant employment contracts</li>
            <li>Payroll processing</li>
            <li>Tax documentation</li>
            <li>Benefits administration</li>
          </ul>
        </>
      ),
    },
    {
      icon: UserCheck,
      title: "Quality Guarantee",
      description:
      "We are committed to making successful placements. Our thorough vetting process is designed to ensure great matches, but if any hire doesn't meet expectations within the first 6 months, we'll work to find a replacement at no additional cost."
,
    },
  ];

  return (
    <section ref={containerRef} className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="md:sticky md:top-24">
            <motion.div style={{ opacity }} className="max-w-md">
              <h2 className="text-sm font-semibold text-green-500 mb-2">
                MAKING IT WORK
              </h2>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                It's Not Actually That Complicated
              </h1>
              <p className="text-base md:text-lg text-gray-600">
                Many firms hesitate to hire internationally because it seems
                overwhelming. But we've broken it down into simple, manageable
                steps. Here's how we handle the key concerns:
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
                {/* Ensure lists are not inside <p> */}
                <div className="text-sm md:text-base text-gray-600">
                  {benefit.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
