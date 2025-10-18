// app/components/section-1.tsx
"use client";

import { Wrench, Star, Smile } from "lucide-react";

type Stat = {
  icon: React.ElementType;
  value: string;
  label: string;
};

const stats: Stat[] = [
  { icon: Wrench, value: "23k", label: "Trucks Fixed" },
  { icon: Star, value: "1.7k", label: "Reviews" },
  { icon: Smile, value: "4890", label: "Happy Clients" },
];

export default function Section1() {
  return (
    <section className="px-4">
      <div className="mx-auto w-full max-w-7xl">
        {/* Title */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
            Stats
          </span>
          <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-light text-black mb-6 leading-12 md:leading-16 lg:leading-20">
            Tailored solutions for your
            <br className="hidden sm:block" /> trucks requirements
          </h2>
        </div>

        {/* Top guide line */}
        <div className="mt-10 border-t max-w-[716px] mx-auto border-gray-200" />

        {/* Counters */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-3">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              {/* Connector line */}
              <div className="h-10 border-l border-gray-200" />
              {/* Icon circle */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white">
                <Icon className="h-6 w-6" />
              </div>
              {/* Metric */}
              <div className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {value}
              </div>
              <div className="mt-1 text-sm text-gray-600">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
