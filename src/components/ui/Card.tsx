"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className,
  hover = true,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-2xl border border-dark-600 bg-dark-800 p-6 transition-all duration-300",
        hover &&
          "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
