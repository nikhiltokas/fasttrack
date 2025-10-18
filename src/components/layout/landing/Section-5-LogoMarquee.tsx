import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const logos = [
  { src: "/images/logos/Freightliner.png", alt: "Freightliner" },
  { src: "/images/logos/Kenworth.png", alt: "Kenworth" },
  { src: "/images/logos/Mack.png", alt: "Mack" },
  { src: "/images/logos/Peterbilt.png", alt: "Peterbilt" },
  { src: "/images/logos/Sterlin.png", alt: "Sterlin" },
  { src: "/images/logos/Volvo.png", alt: "Volvo" },
  { src: "/images/logos/Western-Star.png", alt: "Western Star" },
];

const LogoCard = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative w-48 h-24 mx-1.5">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
        className="grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
};

export function LogoMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden max-w-7xl mx-auto -mt-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-gray-800 dark:text-gray-200">
          Partners with World&apos;s Leading Companies
        </h2>
      </div>
      <Marquee pauseOnHover className="[--duration:40s] [--gap:0rem]">
        {logos.map((logo) => (
          <LogoCard key={logo.src} {...logo} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
