'use client';

import { Card, CardContent } from "@/components/ui/card"; // Ensure this import path is correct

export default function StayInControl() {
  return (
    <div className="min-h-screen bg-white p-8 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full space-y-6 text-center">
        <div className="space-y-2">
          <p className="text-yellow-500 font-semibold">MAINTAIN DIRECT CONTROL</p>
          <h1 className="text-3xl font-bold">Why Direct Hiring Beats BPO Services</h1>
          <p className="text-gray-600">It's crucial to maintain direct control over your accounting team's future.</p>
          <p>
            Have you ever considered what{" "}
            <span className="bg-yellow-200 px-1">happens in these scenarios...</span>
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              title: "Team Loyalty & Culture",
              points: [
                "Who shapes your team's professional growth?",
                "How well do they integrate with your company culture?",
                "Where do their primary allegiances lie?",
              ],
              bgColor: "bg-pink-50",
              borderColor: "border-pink-200",
              number: 1,
            },
            {
              title: "Contract Flexibility",
              points: [
                "Hidden costs in long-term contracts",
                "Complex termination clauses",
                "Minimum commitment periods",
                "Annual price escalations",
              ],
              bgColor: "bg-orange-50",
              borderColor: "border-orange-200",
              number: 2,
            },
            {
              title: "Staff Consistency",
              points: [
                "No guarantee of keeping the same team members",
                "Limited control over staff rotation",
                "Risk of knowledge loss during transitions",
              ],
              bgColor: "bg-pink-50",
              borderColor: "border-pink-200",
              number: 3,
            },
            {
              title: "Quality Control",
              points: [
                "Limited oversight of training methods",
                "Reduced ability to implement your standards",
                "Indirect communication channels",
              ],
              bgColor: "bg-orange-50",
              borderColor: "border-orange-200",
              number: 4,
            },
            {
              title: "Data Security",
              points: [
                "Third-party access to sensitive information",
                "Limited control over data handling practices",
                "Potential compliance risks",
              ],
              bgColor: "bg-pink-50",
              borderColor: "border-pink-200",
              number: 5,
            },
          ].map((card, index) => (
            <Card key={index} className={`${card.bgColor} ${card.borderColor} border`}>
              <CardContent className="p-4">
                <h2 className="font-semibold flex items-center gap-2">
                  <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    {card.number}
                  </span>
                  {card.title}
                </h2>
                <ul className="list-disc list-inside text-left mt-2 space-y-1">
                  {card.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <p className="text-gray-600">
            The truth is when you work with a BPO, `your team` (if you can even call it that) is getting{" "}
            <span className="font-semibold">pulled in many different</span> directions, which is{" "}
            <span className="bg-yellow-200 px-1">frustrating</span> and usually leads to{" "}
            <span className="bg-yellow-200 px-1">suboptimal performance</span> and{" "}
            <span className="bg-yellow-200 px-1">higher employee turnover</span>.
          </p>
        </div>

        <div className="pt-6 relative">
          <div className="bg-emerald-400 text-white font-bold py-10 px-12 rounded-xl text-center shadow-2xl">
            <p className="text-5xl">Retain full control of your team with TaxTalent India DirectHire!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
