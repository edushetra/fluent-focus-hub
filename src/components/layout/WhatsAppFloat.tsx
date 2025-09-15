// src/components/layout/WhatsAppFloat.tsx
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const PHONE = "919445102902";
const DEFAULT_TEXT =
  "Hi! I'm interested in learning more about Edushetra's English fluency programs. Can you help me?";

const WhatsAppFloat = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const onClick = () => {
    const msg = encodeURIComponent(DEFAULT_TEXT);
    const url = `https://wa.me/${PHONE}?text=${msg}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // NOTE: Pure inline styles (no Tailwind). Max z-index. Safe-area aware. Neutral id/label.
  const node = (
    <button
      id="ed-float"
      type="button"
      aria-label="Chat"
      onClick={onClick}
      style={{
        position: "fixed",
        // safe-area aware offsets (fallback to 16px)
        right: "max(16px, env(safe-area-inset-right))",
        bottom: "max(16px, env(safe-area-inset-bottom))",
        width: "60px",
        height: "60px",
        borderRadius: "9999px",
        backgroundColor: "#25D366",
        boxShadow: "0 10px 28px rgba(0,0,0,0.18)",
        zIndex: 2147483647, // absolute max
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        outline: "none",
        border: "none",
        WebkitTapHighlightColor: "transparent",
        isolation: "isolate",
      }}
    >
      {/* Tight, padding-free glyph in white */}
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        style={{ display: "block", width: 28, height: 28, color: "#ffffff", fill: "currentColor" }}
      >
        <path d="M12.04 2.01c-5.52 0-9.97 4.44-9.97 9.92 0 1.75.46 3.39 1.27 4.82L2 22l5.39-1.4a10.03 10.03 0 0 0 4.65 1.13c5.52 0 9.97-4.44 9.97-9.92s-4.45-9.8-9.97-9.8Zm0 17.6c-1.47 0-2.9-.39-4.16-1.14l-.3-.18-3.19.83.85-3.1-.18-.3a7.93 7.93 0 0 1-1.19-4.1c0-4.32 3.55-7.83 7.97-7.83 2.13 0 4.13.83 5.63 2.33a7.8 7.8 0 0 1 2.34 5.5c0 4.32-3.55 7.83-7.97 7.83Z"/>
        <path d="M16.86 13.98c-.2-.12-1.39-.7-1.61-.77-.22-.08-.37-.12-.53.12-.16.24-.6.77-.73.92-.13.16-.27.18-.5.06-.23-.12-.97-.37-1.86-1.15-.69-.61-1.16-1.37-1.29-1.6-.14-.23-.01-.36.1-.48.1-.1.23-.27.34-.4.11-.13.15-.23.22-.39.07-.16.04-.29-.02-.41-.06-.12-.52-1.24-.72-1.7-.19-.45-.38-.38-.52-.39h-.49c-.17 0-.41.06-.66.3-.22.23-.87.84-.87 2.03 0 1.2.9 2.36 1.03 2.53.13.17 1.78 2.66 4.33 3.72.6.25 1.07.4 1.44.51.6.19 1.15.16 1.58.1.49-.07 1.5-.6 1.72-1.17.21-.57.21-1.07.15-1.17-.06-.11-.22-.16-.48-.29Z"/>
      </svg>
    </button>
  );

  if (!mounted) return null;
  return createPortal(node, document.body);
};

export default WhatsAppFloat;
