// app/components/accordion.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  id: string | number;
  question: React.ReactNode;
  answer: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
};

export default function Accordion({
  items,
  allowMultiple = false,
  className = "",
}: AccordionProps) {
  const [open, setOpen] = useState<(string | number)[]>([]);

  const toggle = (id: string | number) => {
    setOpen((prev) => {
      if (allowMultiple) {
        return prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      }
      return prev[0] === id ? [] : [id];
    });
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map(({ id, question, answer }) => {
        const isOpen = open.includes(id);
        return (
          <div
            key={id}
            className="rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => toggle(id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-2 px-5 py-4 text-left"
            >
              <span className="text-sm font-medium text-gray-900 sm:text-base">
                {question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-gray-900 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-5">
                <div className="text-sm leading-6 text-gray-700 pb-4">{answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
