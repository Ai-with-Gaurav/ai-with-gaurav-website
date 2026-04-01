import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-dark-600 text-text-muted": variant === "default",
          "bg-primary/10 text-primary": variant === "primary",
          "border border-dark-500 text-text-muted": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
