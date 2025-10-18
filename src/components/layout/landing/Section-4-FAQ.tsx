"use client";

import Accordion, { AccordionItem } from "@/components/ui/accordion";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Do you handle international shipments?",
    answer: "Yes, we offer international shipping to a wide range of countries. Please check our shipping policy or contact customer support for specific destination availability.",
  },
  {
    id: 2,
    question: "What types of shipping services do you offer?",
    answer: "We provide several shipping options including standard, expedited, and express services. The available options may vary depending on your location and the items ordered.",
  },
  {
    id: 3,
    question: "Can I track my shipment?",
    answer: "Absolutely. Once your order is shipped, you will receive a tracking number via email. You can use this to monitor your shipment's progress in real time.",
  },
  {
    id: 4,
    question: "How long does delivery take?",
    answer: "Delivery times vary depending on the shipping method and destination. Typically, international orders arrive within 5 to 15 business days. Express options may offer faster delivery.",
  },
];

export default function SectionFAQ() {
  const accordionItems: AccordionItem[] = faqs.map((faq) => ({
    id: faq.id,
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <section className="px-4">
      <div className="mx-auto w-full max-w-6xl">
        {/* Title */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
            FAQ&apos;s
          </span>
          <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-light text-black mb-6 leading-12 md:leading-16">
            Questions?
            <br />
            Glad you asked
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mt-10">
          <Accordion items={accordionItems} />
        </div>
      </div>
    </section>
  );
}
