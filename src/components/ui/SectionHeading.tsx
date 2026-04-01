import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  label,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
