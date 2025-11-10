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
    text: "My truck broke down on I-70 near Indianapolis, and these guys were there in under an hour. Professional, quick, and got me back on the road without a hitch. Highly recommend their mobile repair service!",
    name: "David Chen",
    role: "Independent Truck Driver",
    avatar:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    text: "We rely on our trucks daily, and when one had an electrical issue, their mobile technician came right to our yard in Indianapolis. Fixed it on the spot, saving us a tow and valuable time. Excellent service!",
    name: "Sarah Johnson",
    role: "Fleet Manager, Indy Logistics Co.",
    avatar:
      "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    text: "Flat tire on a Sunday morning in downtown Indy. Called them up, and they dispatched a mobile unit immediately. The technician was friendly, efficient, and had me rolling again in no time. Fantastic service!",
    name: "Mark Thompson",
    role: "Owner-Operator",
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
            What Our Indianapolis Clients Say
          </span>

          <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-light text-black mb-6 leading-12 md:leading-16">
            Trusted by Truckers in Indy
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600">
          Hear directly from the Indianapolis truck drivers and businesses
          who rely on our fast, reliable, and on-site mobile repair services.
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
