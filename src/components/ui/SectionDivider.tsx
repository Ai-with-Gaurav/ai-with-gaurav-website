import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div className={cn("flex items-center justify-center py-8", className)}>
      <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-dark-500 to-transparent" />
    </div>
  );
}
