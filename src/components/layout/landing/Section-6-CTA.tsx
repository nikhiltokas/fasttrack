"use client";

import AnimatedButton from "@/components/ui/Button-Animated";
export default function SectionCTA() {
  return (
    <section className="rounded-2xl bg-black">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-start overflow-hidden rounded-2xl">
        <div className="p-6 sm:p-10 lg:p-14">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-12 md:leading-20">
            Get afforadable and tailored solutions for your truck.
          </h2>
          <div className="mt-6">
            <AnimatedButton
              href="/contact"
              variant="secondary"
              icon="arrow-diagonal"
            >
              Call (463) 283-2466
            </AnimatedButton>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
}
