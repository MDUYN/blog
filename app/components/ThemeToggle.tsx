"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: "dark" | "light" = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("light", initial === "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("light", next === "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="font-mono text-xs px-2 py-1 rounded border border-[var(--color-terminal-border)] text-[var(--color-terminal-text-dim)] hover:text-[var(--color-terminal-green)] hover:border-[var(--color-terminal-green)] transition-colors"
    >
      {theme === "dark" ? "☀︎" : "☾"}
    </button>
  );
}
