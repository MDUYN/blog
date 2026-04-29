"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { name: "What I'm Working On", href: "/working-on" },
  { name: "Articles", href: "/articles" },
  { name: "Reading List", href: "/reading-list" },
  { name: "CV", href: "/cv" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-[var(--color-terminal-border)]">
      <div className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-mono text-sm font-semibold text-[var(--color-terminal-green)] hover:text-[var(--color-terminal-cyan)] transition-colors tracking-wider"
          onClick={() => setOpen(false)}
        >
          <span className="text-[var(--color-terminal-text-dim)]">&gt;_</span>{" "}
          marc.vanduyn
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-mono text-xs text-[var(--color-terminal-text-dim)] hover:text-[var(--color-terminal-green)] transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="font-mono text-[var(--color-terminal-text-dim)] hover:text-[var(--color-terminal-green)] transition-colors p-1"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 5l10 10M15 5L5 15" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 5h14M3 10h14M3 15h14" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden pb-4 space-y-1">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block font-mono text-xs text-[var(--color-terminal-text-dim)] hover:text-[var(--color-terminal-green)] transition-colors uppercase tracking-widest py-2 border-t border-[var(--color-terminal-border)]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
