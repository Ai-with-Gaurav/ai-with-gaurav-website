"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Mic, MicOff, Phone, PhoneOff } from "lucide-react";
import { cn } from "@/lib/utils";

export default function VoiceAssistant() {
  const [isActive, setIsActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [status, setStatus] = useState<"idle" | "connecting" | "connected">(
    "idle"
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const vapiRef = useRef<any>(null);

  const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;

  const startCall = useCallback(async () => {
    if (!publicKey) return;

    try {
      setStatus("connecting");
      const VapiModule = await import("@vapi-ai/web");
      const Vapi = VapiModule.default;
      const vapi = new Vapi(publicKey);
      vapiRef.current = vapi;

      vapi.on("call-start", () => {
        setStatus("connected");
        setIsActive(true);
      });

      vapi.on("call-end", () => {
        setStatus("idle");
        setIsActive(false);
        vapiRef.current = null;
      });

      vapi.on("error", (error: unknown) => {
        console.error("Vapi error:", error);
        setStatus("idle");
        setIsActive(false);
      });

      await vapi.start({
        model: {
          provider: "groq",
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content:
                "You are Gaurav's AI voice assistant on the 'AI with Gaurav' website. Be friendly, concise, and helpful. Help visitors learn about AI services offered including chatbots, voice assistants, RAG systems, and automation. Keep responses short since this is a voice conversation.",
            },
          ],
        },
        voice: {
          provider: "vapi",
          voiceId: "Elliot",
        },
      });
    } catch (error) {
      console.error("Voice call error:", error);
      setStatus("idle");
      setIsActive(false);
    }
  }, [publicKey]);

  const endCall = useCallback(() => {
    if (vapiRef.current) {
      vapiRef.current.stop();
      vapiRef.current = null;
    }
    setStatus("idle");
    setIsActive(false);
  }, []);

  const toggleMute = useCallback(() => {
    if (vapiRef.current) {
      vapiRef.current.setMuted(!isMuted);
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  useEffect(() => {
    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop();
      }
    };
  }, []);

  if (!publicKey) return null;

  return (
    <div className="flex items-center gap-3">
      {/* Sound wave animation when active */}
      {isActive && (
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-1 rounded-full bg-primary"
              style={{
                height: "16px",
                animation: `pulse 1s ease-in-out ${i * 0.15}s infinite`,
              }}
            />
          ))}
          <style>{`
            @keyframes pulse {
              0%, 100% { transform: scaleY(0.4); }
              50% { transform: scaleY(1); }
            }
          `}</style>
        </div>
      )}

      {/* Status text */}
      {status === "connecting" && (
        <span className="text-xs text-text-muted animate-pulse">
          Connecting...
        </span>
      )}
      {status === "connected" && (
        <span className="text-xs text-green-400">Listening...</span>
      )}

      {/* Mute toggle */}
      {isActive && (
        <button
          onClick={toggleMute}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-colors cursor-pointer",
            isMuted
              ? "bg-red-500/10 text-red-400"
              : "bg-dark-700 text-text-muted hover:bg-dark-600"
          )}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <MicOff className="h-4 w-4" />
          ) : (
            <Mic className="h-4 w-4" />
          )}
        </button>
      )}

      {/* Call toggle */}
      <button
        onClick={isActive ? endCall : startCall}
        disabled={status === "connecting"}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full transition-all cursor-pointer shadow-lg",
          isActive
            ? "bg-red-500 text-white hover:bg-red-600 shadow-red-500/20"
            : "bg-green-500 text-white hover:bg-green-600 shadow-green-500/20",
          status === "connecting" && "opacity-50 cursor-not-allowed"
        )}
        aria-label={isActive ? "End call" : "Start voice call"}
      >
        {isActive ? (
          <PhoneOff className="h-5 w-5" />
        ) : (
          <Phone className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}
