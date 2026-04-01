"use client";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-dark-900/95 backdrop-blur-xl transition-all duration-300 md:hidden",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <nav className="flex h-full flex-col items-center justify-center gap-6">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="text-2xl font-medium text-text-muted transition-colors hover:text-primary"
          >
            {link.label}
          </a>
        ))}
        <div className="mt-4">
          <Button href="/#contact" onClick={onClose}>
            Get in Touch
          </Button>
        </div>
      </nav>
    </div>
  );
}
