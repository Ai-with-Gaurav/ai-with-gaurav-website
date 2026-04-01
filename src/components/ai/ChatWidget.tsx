"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport } from "ai";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import ChatMessage from "./ChatMessage";
import SuggestedReplies from "./SuggestedReplies";

const transport = new TextStreamChatTransport({ api: "/api/chat" });

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({ transport });

  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const text = input;
    setInput("");
    await sendMessage({ text });
  };

  const handleSuggestion = async (message: string) => {
    await sendMessage({ text: message });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 flex h-[500px] w-[380px] flex-col rounded-2xl border border-dark-600 bg-dark-800 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-dark-600 bg-dark-900 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">
                    AI Assistant
                  </h3>
                  <p className="text-xs text-green-400">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-text-muted hover:bg-dark-700 hover:text-text-primary transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Bot className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="mb-1 text-sm font-semibold text-text-primary">
                    Hi! I&apos;m Gaurav&apos;s AI assistant
                  </h4>
                  <p className="mb-6 text-xs text-text-muted max-w-[250px]">
                    Ask me about services, pricing, or anything else. I&apos;m
                    here to help!
                  </p>
                  <SuggestedReplies onSelect={handleSuggestion} />
                </div>
              ) : (
                <>
                  {messages.map((message) => {
                    const text =
                      message.parts
                        ?.filter(
                          (p): p is { type: "text"; text: string } =>
                            p.type === "text"
                        )
                        .map((p) => p.text)
                        .join("") || "";
                    if (!text) return null;
                    return (
                      <ChatMessage
                        key={message.id}
                        role={message.role as "user" | "assistant"}
                        content={text}
                      />
                    );
                  })}
                  {isLoading &&
                    !messages.some(
                      (m) =>
                        m.role === "assistant" &&
                        m.parts?.some(
                          (p) => p.type === "text" && p.text.length > 0
                        )
                    ) && (
                      <div className="flex gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dark-600 text-text-muted">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div className="rounded-2xl rounded-tl-sm bg-dark-700 px-4 py-2.5">
                          <Loader2 className="h-4 w-4 animate-spin text-text-muted" />
                        </div>
                      </div>
                    )}
                </>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-dark-600 p-3"
            >
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 rounded-lg border border-dark-600 bg-dark-700 px-3 py-2.5 text-sm text-text-primary placeholder-dark-500 focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors cursor-pointer",
                    input.trim() && !isLoading
                      ? "bg-primary text-dark-900 hover:bg-primary-light"
                      : "bg-dark-700 text-dark-500"
                  )}
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all cursor-pointer",
          isOpen
            ? "bg-dark-700 text-text-muted hover:bg-dark-600"
            : "bg-primary text-dark-900 hover:bg-primary-light shadow-primary/30"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
