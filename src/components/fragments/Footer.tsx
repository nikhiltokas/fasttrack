import AnimatedButton from "../ui/Button-Animated";
import Link from "next/link";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Mobile Diagnostics", href: "#" },
      { name: "Emergency Roadside", href: "#" },
      { name: "Preventative Maintenance", href: "#" },
      { name: "Brake Repair", href: "#" },
      { name: "Tire Service", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQs", href: "#" },
      { name: "Service Request", href: "#" },
    ],
  },
];

const SOCIAL_LINKS: FooterLink[] = [
  { name: "X/Twitter", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
];

const LEGAL_LINKS: FooterLink[] = [
  { name: "Terms of Use", href: "#" },
  { name: "Privacy", href: "#" },
];

import { cn } from "@/common/lib/cn";

export default function Footer() {
  const activeFooterColumns = FOOTER_COLUMNS.filter(
    (column) => column.links.length > 0
  );
  const gridColsClass = `grid-cols-2 sm:grid-cols-4 lg:grid-cols-${activeFooterColumns.length}`;

  return (
    <footer className="px-4 border border-t-2">
      <div className="mx-auto w-full max-w-7xl p-6">
        {/* Top link columns */}
        <div className="border-b border-gray-200 pb-12">
          <div className={cn("grid gap-8", gridColsClass)}>
            {activeFooterColumns.map((column) => (
              <div key={column.title}>
                <div className="text-2xl font-semibold text-black">
                  {column.title}
                </div>
                <div className="mt-4 flex flex-col gap-1.5">
                  {column.links.map((link) =>
                    link.href.startsWith("/") ? (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-ms text-gray-600 hover:text-accent"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-ms text-gray-600 hover:text-accent"
                      >
                        {link.name}
                      </a>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle brand + CTA */}
        <div className="flex flex-col items-start justify-between gap-6 py-8 md:flex-row md:items-center">
          <div className="flex flex-col">
            <h1 className="inline-flex items-center font-bold text-2xl">
              Torque Go Mobile Truck Repair
            </h1>
            <p className="mt-3 text-sm text-gray-600">
              Copyright ©{" "}
              <Link href="/" className="hover:text-accent">
                Torque Go Mobile Truck Repair
              </Link>{" "}
              2025 | All Rights Reserved
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-base font-semibold text-gray-900">
              Emergency Service Available
            </div>
            <AnimatedButton href="tel:4632832466" variant="primary">
              Call Now (463) 283-2466
            </AnimatedButton>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="hidden gap-6 md:flex">
              {LEGAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-accent"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="text-sm text-gray-600">
              <a
                href="mailto:info@torquego.com"
                className="hover:text-accent"
              >
                info@torquego.com
              </a>
            </div>

            <div className="ml-auto flex items-center gap-3">
              {/* X/Twitter */}
              <a
                aria-label="social-link"
                href={SOCIAL_LINKS[0].href}
                className="rounded-full p-2 text-gray-500 hover:text-accent"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M14.7926 2.50012H17.3483L11.7649 8.88156L18.3333 17.5652H13.1903L9.16214 12.2986L4.55298 17.5652H1.99577L7.96774 10.7396L1.66666 2.50012H6.94022L10.5814 7.31401L14.7926 2.50012ZM13.8957 16.0356H15.3118L6.17074 3.94946H4.6511L13.8957 16.0356Z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                aria-label="social-link"
                href={SOCIAL_LINKS[1].href}
                className="rounded-full p-2 text-gray-500 hover:text-accent"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M10.0017 3.16891C12.2286 3.16891 12.4924 3.17868 13.3682 3.21775C14.1822 3.25356 14.6217 3.39031 14.9147 3.50427C15.3022 3.65403 15.5822 3.83636 15.8719 4.12613C16.165 4.41916 16.344 4.6959 16.4938 5.08335C16.6078 5.37638 16.7445 5.81917 16.7803 6.62988C16.8194 7.50895 16.8292 7.77268 16.8292 9.99642C16.8292 12.2234 16.8194 12.4871 16.7803 13.363C16.7445 14.1769 16.6078 14.6165 16.4938 14.9095C16.344 15.2969 16.1617 15.5769 15.8719 15.8667C15.5789 16.1597 15.3022 16.3388 14.9147 16.4886C14.6217 16.6025 14.1789 16.7393 13.3682 16.7751C12.4891 16.8142 12.2254 16.8239 10.0017 16.8239C7.77465 16.8239 7.51093 16.8142 6.63511 16.7751C5.82115 16.7393 5.38161 16.6025 5.08858 16.4886C4.70113 16.3388 4.42113 16.1565 4.13136 15.8667C3.83834 15.5737 3.65926 15.2969 3.5095 14.9095C3.39554 14.6165 3.2588 14.1737 3.22298 13.363C3.18391 12.4839 3.17414 12.2202 3.17414 9.99642C3.17414 7.76942 3.18391 7.5057 3.22298 6.62988C3.2588 5.81591 3.39554 5.37638 3.5095 5.08335C3.65926 4.6959 3.84159 4.4159 4.13136 4.12613C4.42439 3.83311 4.70113 3.65403 5.08858 3.50427C5.38161 3.39031 5.8244 3.25356 6.63511 3.21775C7.51093 3.17868 7.77465 3.16891 10.0017 3.16891ZM10.0016 5.7215C7.63791 5.7215 5.72021 7.63919 5.72021 10.0029C5.72021 12.3667 7.63791 14.2844 10.0016 14.2844C12.3654 14.2844 14.2831 12.3667 14.2831 10.0029C14.2831 7.63919 12.3654 5.7215 10.0016 5.7215Z" />
                  <path d="M15.4519 5.55216C15.4519 6.10566 15.0026 6.55171 14.4524 6.55171C13.8989 6.55171 13.4528 6.1024 13.4528 5.55216C13.4528 4.99867 13.9022 4.55262 14.4524 4.55262C15.0026 4.55262 15.4519 5.00192 15.4519 5.55216Z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                aria-label="social-link"
                href={SOCIAL_LINKS[2].href}
                className="rounded-full p-2 text-gray-500 hover:text-accent"
              >
                <svg
                  viewBox="0 0 17 18"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M15.5996 0.666626H1.39716C0.716817 0.666626 0.166687 1.20374 0.166687 1.8678V16.1289C0.166687 16.7929 0.716817 17.3333 1.39716 17.3333H15.5996C16.28 17.3333 16.8334 16.7929 16.8334 16.1321V1.8678C16.8334 1.20374 16.28 0.666626 15.5996 0.666626ZM5.11135 14.8691H2.63739V6.91337H5.11135V14.8691ZM3.87437 5.82939C3.0801 5.82939 2.43882 5.18811 2.43882 4.39709C2.43882 3.60608 3.0801 2.9648 3.87437 2.9648C4.66539 2.9648 5.30666 3.60608 5.30666 4.39709C5.30666 5.18486 4.66539 5.82939 3.87437 5.82939ZM14.3692 14.8691H11.8985V11.0019C11.8985 10.0807 11.8822 8.89254 10.6127 8.89254C9.32684 8.89254 9.13153 9.8984 9.13153 10.9368V14.8691H6.66408V6.91337H9.03387V8.00061H9.06643C9.3952 7.37561 10.2025 6.7148 11.4037 6.7148C13.9069 6.7148 14.3692 8.36194 14.3692 10.5039V14.8691V14.8691Z" />
                </svg>
              </a>
            </div>

            {/* Mobile Terms/Privacy */}
            <div className="flex gap-6 md:hidden">
              {LEGAL_LINKS.map((link) => (
                <div key={link.name} className="text-sm text-gray-600">
                  {link.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
