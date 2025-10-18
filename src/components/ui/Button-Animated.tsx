import { ArrowRight, ArrowUpRight, ArrowLeft, ChevronRight, ExternalLink, Download, LucideIcon } from "lucide-react";

type IconType = "arrow-right" | "arrow-diagonal" | "arrow-left" | "chevron-right" | "external-link" | "download";

const iconMap: Record<IconType, LucideIcon> = {
  "arrow-right": ArrowRight,
  "arrow-diagonal": ArrowUpRight,
  "arrow-left": ArrowLeft,
  "chevron-right": ChevronRight,
  "external-link": ExternalLink,
  "download": Download,
};

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  icon?: IconType;
}

export default function AnimatedButton({ 
  href, 
  children, 
  variant = "primary",
  icon 
}: AnimatedButtonProps) {
  const IconComponent = icon ? iconMap[icon] : null;

  const baseStyles = "group relative inline-flex items-center gap-3 px-4 py-2 rounded-lg font-medium text-sm transition-all overflow-hidden";
  let variantStyles = "";

  switch (variant) {
    case "primary":
      variantStyles = "bg-accent hover:bg-accent text-white";
      break;
    case "secondary":
      variantStyles = "bg-white hover:bg-accent text-black hover:text-white";
      break;
    case "tertiary":
      variantStyles = "bg-black hover:bg-white text-white hover:text-black border border-transparent hover:border-black";
      break;
    default:
      variantStyles = "bg-accent hover:bg-accent text-white"; // Default to primary
  }
  
  return (
    <a 
      href={href} 
      className={`${baseStyles} ${variantStyles}`}
    >
      {/* Text with slide animation */}
      <span className="relative overflow-hidden inline-flex h-5 items-center">
        <span className="block transition-transform duration-300 group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute top-full block transition-transform duration-300 group-hover:-translate-y-full">
          {children}
        </span>
      </span>
      
      {/* Icon with animation */}
      {IconComponent && (
        <span className="relative w-4 h-4 overflow-hidden inline-flex items-center justify-center">
          {icon === "arrow-diagonal" ? (
            <>
              <IconComponent className="absolute w-4 h-4 transition-all duration-300 group-hover:translate-x-full group-hover:-translate-y-full" />
              <IconComponent className="absolute -left-full top-full w-4 h-4 transition-all duration-300 group-hover:translate-x-full group-hover:-translate-y-full" />
            </>
          ) : (
            <>
              <IconComponent className="absolute w-4 h-4 transition-transform duration-300 group-hover:translate-x-full" />
              <IconComponent className="absolute right-full w-4 h-4 transition-transform duration-300 group-hover:translate-x-full" />
            </>
          )}
        </span>
      )}
    </a>
  );
}
