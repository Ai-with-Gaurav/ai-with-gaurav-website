"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-xl border border-dark-600 bg-dark-800 overflow-hidden transition-colors hover:border-dark-500"
        >
          <button
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between px-6 py-4 text-left cursor-pointer"
          >
            <span className="text-base font-medium text-text-primary pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-text-muted transition-transform duration-300",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "grid transition-all duration-300 ease-in-out",
              openIndex === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-4 text-text-muted leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
