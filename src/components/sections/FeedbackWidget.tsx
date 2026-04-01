"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const reactions = [
  { emoji: "🔥", label: "Fire" },
  { emoji: "🤩", label: "Impressive" },
  { emoji: "💡", label: "Inspiring" },
  { emoji: "👏", label: "Great Work" },
  { emoji: "🚀", label: "Amazing" },
];

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleReaction = (label: string) => {
    setSelected(label);
    fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reaction: label, page: window.location.pathname }),
    }).catch(console.error);
    setTimeout(() => {
      setSelected(null);
      setIsOpen(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-3 rounded-xl border border-dark-600 bg-dark-800 p-4 shadow-xl"
          >
            {selected ? (
              <p className="text-sm text-primary font-medium">
                Thanks for your feedback!
              </p>
            ) : (
              <>
                <p className="mb-3 text-sm font-medium text-text-primary">
                  How do you like this site?
                </p>
                <div className="flex gap-2">
                  {reactions.map((r) => (
                    <button
                      key={r.label}
                      onClick={() => handleReaction(r.label)}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-700 text-lg transition-transform hover:scale-110 hover:bg-dark-600 cursor-pointer"
                      title={r.label}
                    >
                      {r.emoji}
                    </button>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-700 border border-dark-600 text-text-muted shadow-lg transition-all hover:bg-dark-600 hover:text-text-primary cursor-pointer"
        aria-label="Give feedback"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}
