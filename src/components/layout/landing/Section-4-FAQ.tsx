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
    question: "What areas do you serve for mobile truck repair?",
    answer: "We proudly serve Indianapolis and the surrounding areas. Our mobile units are dispatched quickly to your location, wherever you are in the region.",
  },
  {
    id: 2,
    question: "What types of trucks do you repair?",
    answer: "We service a wide range of trucks, including semi-trucks, box trucks, dump trucks, flatbeds, refrigerated trucks, and more. If it's a heavy-duty vehicle, we can likely fix it!",
  },
  {
    id: 3,
    question: "Do you offer 24/7 emergency roadside assistance?",
    answer: "Yes, we provide 24/7 emergency mobile truck repair services. Just give us a call, and our rapid response team will be on their way to assist you.",
  },
  {
    id: 4,
    question: "How quickly can a technician arrive?",
    answer: "For emergency requests in Indianapolis, we aim to have a technician dispatched and en route within 15-30 minutes, depending on your exact location and current demand.",
  },
  {
    id: 5,
    question: "Can you perform preventative maintenance on-site?",
    answer: "Absolutely. We offer scheduled on-site preventative maintenance services to keep your fleet in optimal condition, minimizing unexpected breakdowns and maximizing uptime.",
  },
  {
    id: 6,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and electronic payments. For fleet accounts, we can also set up direct billing options. Please contact us for more details.",
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
            Indianapolis Mobile Repair FAQs
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
