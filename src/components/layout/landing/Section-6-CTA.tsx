"use client";

import { Phone } from "lucide-react";
export default function SectionCTA() {
  return (
    <section className="rounded-2xl bg-black max-w-7xl mx-auto">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-2xl text-center">
        <div className="p-10 sm:p-10 lg:p-14">
          <h2 className="text-5xl font-light tracking-tight text-white sm:text-6xl">
            Truck Trouble in Indianapolis?
          </h2>
          <p className="mt-4 text-lg leading-8 font-light text-gray-300">
            Get immediate mobile repair service. Call us now for rapid assistance!
          </p>
          <a
            href="tel:4632832466"
            className="mt-12 inline-flex items-center gap-3 text-accent text-4xl font-bold transition-colors hover:text-accent/80 sm:text-5xl"
          >
            <Phone className="h-10 w-10" />
            (463) 283-2466
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
}
