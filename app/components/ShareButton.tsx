"use client";

import { useEffect, useRef, useState } from "react";

export function ShareButton() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setUrl(window.location.href);
    setTitle(document.title);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* noop */
    }
  };

  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}`;
  const twitter = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(title)}`;

  const itemClass =
    "flex items-center gap-2 px-3 py-2 text-sm text-[var(--color-terminal-text)] hover:bg-[var(--color-terminal-border)] rounded transition-colors cursor-pointer text-left w-full";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[var(--color-terminal-border)] bg-[var(--color-terminal-surface)] text-xs font-mono text-[var(--color-terminal-text-dim)] hover:text-[var(--color-terminal-green)] hover:border-[var(--color-terminal-green)] transition-colors cursor-pointer"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
        Share
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-52 z-20 rounded-md border border-[var(--color-terminal-border)] bg-[var(--color-terminal-surface)] shadow-lg p-1"
        >
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={itemClass}
            role="menuitem"
          >
            <span className="text-[var(--color-terminal-green)]">in</span>
            LinkedIn
          </a>
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={itemClass}
            role="menuitem"
          >
            <span className="text-[var(--color-terminal-green)]">x</span>
            X / Twitter
          </a>
          <button
            type="button"
            onClick={copy}
            className={itemClass}
            role="menuitem"
          >
            <span className="text-[var(--color-terminal-green)]">⧉</span>
            {copied ? "Copied!" : "Copy link"}
          </button>
        </div>
      )}
    </div>
  );
}
