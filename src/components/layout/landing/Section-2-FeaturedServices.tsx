// app/components/section-2.tsx
"use client";

import Image from "next/image";

type Feature = {
  src: string;
  title: string;
  text: string;
  emphasis?: boolean; // when true, overlay is visible by default
};

const features: Feature[] = [
  {
    src: "https://images.pexels.com/photos/1592386/pexels-photo-1592386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Vehicle Repair Services",
    text: "Expert vehicle repair services to keep your fleet running smoothly and efficiently. Our certified technicians handle all types of repairs, from routine maintenance to complex engine overhauls.",
    emphasis: true,
  },
  {
    src: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Truck Maintenance & Servicing",
    text: "Comprehensive truck maintenance and servicing to ensure optimal performance and longevity. We offer preventative maintenance, diagnostics, and repairs for all heavy-duty vehicles.",
    emphasis: true,
  },
  {
    src: "https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Roadside Assistance",
    text: "24/7 roadside assistance for unexpected breakdowns. Our rapid response team will get your trucks back on the road quickly, minimizing downtime and ensuring timely deliveries.",
    emphasis: true,
  },
];

export default function FeaturedServices() {
  return (
    <section className="rounded-2xl bg-black">
      <div className="mx-auto w-full max-w-7xl pt-12 pb-4 lg:pb-12">
        {/* Title */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
            Why Choose Us
          </span>
          <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-12 md:leading-16 lg:leading-20">
            All set for seamless
            <br className="hidden sm:block" /> transportation
          </h2>
        </div>

        {/* Features */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row px-4">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className={[
                "group relative overflow-hidden rounded-3xl",
                "sm:w-1/3",
                "w-full",
              ].join(" ")}
            >
              <Image
                src={f.src}
                alt={f.title}
                width={1208}
                height={800}
                priority={idx === 0}
                className="h-80 w-full object-cover sm:h-[28rem]"
              />

              {/* Overlay */}
              <div
                className={[
                  "absolute inset-0 flex items-end p-6 opacity-100",
                  "bg-gradient-to-t from-black/70 via-black/30 to-transparent",
                ].join(" ")}
              >
                <div className="text-white">
                  <div className="text-xl font-semibold sm:text-2xl">
                    {f.title}
                  </div>
                  <p className="mt-2 text-sm text-white/90 sm:text-base">
                    {f.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
