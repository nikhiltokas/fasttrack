import AnimatedButton from "@/components/ui/Button-Animated";

export default function Hero() {
  return (
    <section
      role="img"
      aria-label="A truck standing in front of a desert"
      className="relative h-[700px] rounded-3xl flex flex-col justify-end bg-cover bg-center bg-no-repeat overflow-hidden mt-2"
      style={{
        backgroundImage:
          "url('/images/Truck_Cover.jpg')",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pb-12 sm:pb-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-12 md:leading-16 lg:leading-20">
              Mobile Truck Repair in Indianapolis.
              <br />
              <span>Fast, reliable,</span>
              <br />
              and always on-site.
            </h1>

            <AnimatedButton
              href="tel:4632832466"
              variant="primary"
              icon="arrow-diagonal"
            >
              Call Us Now
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
