"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Shield } from "lucide-react";

export default function WorkplaceSolution() {
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
      title: "What's Included",
      description: (
        <>
          Choose what works best for you:
          <br />
          {/* <ul> now sits directly inside a fragment instead of a <p> */}
          <ul className="list-disc pl-5 my-2">
            <li>Modern, professional office environment</li>
            <li>High-speed internet and backup connectivity</li>
            <li>Full IT support and security</li>
            <li>Meeting rooms and collaboration spaces</li>
            <li>Break rooms and amenities</li>
            <li>Reception and security services</li>
            <li>All utilities and maintenance</li>
            <li>Flexible seating arrangements</li>
          </ul>
        </>
      ),
    },
    {
      icon: Shield,
      title: "Simple Pricing",
      description: (
        <>
          We keep it transparent with a cost-plus model:
          <br />
          <ul className="list-disc pl-5 my-2">
            <li>Base infrastructure costs</li>
            <li>Utility charges at actual</li>
            <li>IT and support services</li>
            <li>Small management fee</li>
            <li>Monthly billing with no long-term commitment</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section ref={containerRef} className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="md:sticky md:top-24">
            <motion.div style={{ opacity }} className="max-w-md">
              <h2 className="text-sm font-semibold text-green-500 mb-2">
                OUR OPTIONAL WORKSPACE SOLUTION
              </h2>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your India Office, Without the Hassle
              </h1>
              <p className="text-base md:text-lg text-gray-600">
                Want the benefits of a physical office without the complexity of
                setting one up? Our workspace solution provides everything your
                team needs to succeed.
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
                {/* Removed <p> and replaced with fragment to prevent block-level issues */}
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
