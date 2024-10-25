"use client";

import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Access elite talent",
    description:
      "When you hire directly, you are tapping into all accountants in The Philippines, not just the ones who live within commuting distance of, and importantly - want to work for a business process outsourcing provider (BPO). This approach allows you to handpick individuals whose skills and experience align perfectly with your firm's needs.",
  },
  {
    title: "Retain full control over your team culture",
    description:
      "Direct hiring allows you to shape and nurture the culture of your team. In fact, we put just as much energy into evaluating for culture fit as we do skills and experience. Not every qualified person is a good fit for every firm, and we do a lot to get that right.",
  },
  {
    title: "Your team, not ours",
    description:
      "Some BPOs make it impossible to take your team with you if you leave. With TeamUp, Your accountant(s) are part of your team from the day they are hired.",
  },
  {
    title: "Spend less while paying your team more",
    description:
      "Opting for direct hiring with TeamUp is not only more affordable for your firm, but it also ensures that your accountants earn more since they receive their full wage, not their small BPO slice. And you are cutting out all of the middleman BPO management fees.",
  },
  {
    title: "Hands off recruiting process",
    description:
      "At Ta, we understand that your accounting firm is unique. Our recruitment process is personalized to help you find the top vetted accountants who will fit seamlessly into your firm's culture and workflow.",
  },
  {
    title: "Improve team retention",
    description:
      "There is a lot of turnover in BPO teams because of bad corporate policies and office politics. With direct hiring, you bypass all of that. If you treat your team well, you'll be rewarded with longer employee tenures, which is critical for maintaining consistency and accumulating institutional knowledge within your accounting firm.",
  },
  {
    title: "Compliance is easy",
    description:
      "Handle contractor engagements yourself or use an affordable Employer of Record service to handle the entire local employment process including payroll, taxes, and benefits.",
  },
];

export default function SecondPage() {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      <div className="lg:w-1/3 bg-primary text-primary-foreground p-8 lg:fixed lg:h-full">
        <h1 className="text-4xl font-bold mb-4">Why TeamUp DirectHire</h1>
        <p className="text-xl">
          Work with the most skilled accounting professionals in The
          Philippines.
        </p>
      </div>
      <div className="lg:w-2/3 lg:ml-[33.333333%] p-8 overflow-y-auto">
        {benefits.map((benefit, index) => (
          <div key={index} className="mb-8">
            <div className="flex items-center mb-2">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-2" />
              <h2 className="text-2xl font-semibold">{benefit.title}</h2>
            </div>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
