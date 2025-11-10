// app/components/section-1.tsx
"use client";

import { Wrench, Star, Smile } from "lucide-react";

type Stat = {
  icon: React.ElementType;
  value: string;
  label: string;
};

const stats: Stat[] = [
  { icon: Wrench, value: "23k+", label: "Trucks Repaired" },
  { icon: Star, value: "1.7k+", label: "5-Star Reviews" },
  { icon: Smile, value: "4890+", label: "Satisfied Drivers" },
];

export default function Section1() {
  return (
    <section className="px-4">
      <div className="mx-auto w-full max-w-7xl">
        {/* Title */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
            Our Impact in Indianapolis
          </span>
          <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-light text-black mb-6 leading-12 md:leading-16 lg:leading-20">
            Expert Mobile Truck Repair
            <br className="hidden sm:block" /> Services in Indianapolis
          </h2>
        </div>

        {/* Counters */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-3 gap-x-8 sm:gap-x-12">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center"
            >
              {/* Icon circle */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white sm:h-16 sm:w-16">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="mt-4 sm:mt-6">
                {/* Metric */}
                <div className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {value}
                </div>
                <div className="mt-1 text-sm text-gray-600">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
