"use client";

export default function FinterionCard() {
  return (
    <div className="my-8 rounded-lg border border-[var(--color-terminal-border)] bg-[var(--color-terminal-surface)] p-5">
      <div className="flex items-center gap-4">
        <a
          href="https://finterion.com"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
        >
          <img
            src="/assets/finterion-dark.png"
            alt="Finterion"
            className="logo-dark h-8"
          />
          <img
            src="/assets/finterion-light.png"
            alt="Finterion"
            className="logo-light h-8"
          />
        </a>
        <div className="min-w-0">
          <p className="text-sm text-[var(--color-terminal-text)] leading-relaxed">
            Want to use algorithmic trading strategies or build your own?
            Check out{" "}
            <a
              href="https://finterion.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-terminal-green)] hover:text-[var(--color-terminal-cyan)] underline underline-offset-2 decoration-[var(--color-terminal-border)] transition-colors"
            >
              finterion.com
            </a>{" "}
            or explore my strategies at{" "}
            <a
              href="https://finterion.com/organisations/team-blue"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-terminal-green)] hover:text-[var(--color-terminal-cyan)] underline underline-offset-2 decoration-[var(--color-terminal-border)] transition-colors"
            >
              Team Blue
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
