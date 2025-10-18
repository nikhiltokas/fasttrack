import Image from "next/image";
import { Star } from "lucide-react";
import AnimatedButton from "@/components/ui/Button-Animated";

type Testimonial = {
  text: string;
  name: string;
  role: string;
  avatar: string;
  stars?: number;
};

const testimonials: Testimonial[] = [
  {
    text: "We needed a partner who understood the complexity of large-scale infrastructure projects. Not only did they meet our container requirements, but they also adapted to changes in timelines and ensured smooth coordination across multiple locations. It’s rare to find a company that combines this level of quality with such dependable service.",
    name: "Michael Turner",
    role: "Operations Manager, GlobalTrade Logistics",
    avatar:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    text: "International shipping can be stressful, but they've made it incredibly straightforward for us. From port clearances to on-site delivery, their containers have always arrived in excellent condition and right on schedule. Their expertise and proactive support have saved us time and costs while building long‑term trust.",
    name: "Ravi Patel",
    role: "Logistics Coordinator, BrightPath Exports",
    avatar:
      "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    text: "As a European procurement team handling multiple projects at once, we needed a supplier who could keep up with demand while maintaining quality. They've gone above and beyond every time — offering durable containers, flexible options, and consistent delivery. It’s rare to find a partner this dependable, and they’ve become essential to our operations.",
    name: "Laura Müller",
    role: "Head of Procurement, EuroBuild Systems",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

function TestimonialCard({ text, name, role, avatar, stars = 5 }: Testimonial) {
  return (
    <article className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-4 flex items-center gap-1">
        {Array.from({ length: stars }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 text-orange-600"
            fill="currentColor"
          />
        ))}
      </div>

      <p className="text-sm leading-6 text-gray-700">{text}</p>

      <div className="mt-5 flex items-center gap-3">
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <div className="text-sm font-semibold text-gray-900">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <main className="px-4">
      <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-2">
        {/* Left intro */}
        <section>
          <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
            Customer testimonials
          </span>

          <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-light text-black mb-6 leading-12 md:leading-16">
            What Our Clients Say
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600">
            Discover real stories and feedback from businesses across the globe
            who rely on our container solutions for their projects, shipments,
            and long-term success.
          </p>

          <div className="mt-6">
            <AnimatedButton
              href="/reviews"
              variant="tertiary"
              icon="arrow-diagonal"
            >
              See All Reviews
            </AnimatedButton>
          </div>
        </section>

        {/* Right stacked cards */}
        <section className="flex flex-col gap-6">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </section>
      </div>
    </main>
  );
}
