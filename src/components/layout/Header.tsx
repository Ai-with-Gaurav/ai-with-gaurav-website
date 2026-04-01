"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import Button from "@/components/ui/Button";
import MobileNav from "./MobileNav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-dark-900/80 backdrop-blur-xl border-b border-dark-700"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-text-primary">
              AI with{" "}
              <span className="text-primary">{SITE_CONFIG.author}</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text-primary hover:bg-dark-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="sm" href="/#contact">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-text-muted transition-colors hover:text-text-primary md:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
