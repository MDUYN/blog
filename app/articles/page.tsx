"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

type Article = {
  title: string;
  description: string;
  href: string;
  date: string;
  tags: string[];
};

const articles: Article[] = [
  {
    title: "A Single-Bundle Binary Format for Backtest Persistence",
    description:
      "How I replaced a 27-files-per-backtest directory layout with a single zstd + MessagePack bundle (.iafbt) — 21× smaller, 3.6× faster to save, language-portable, and versioned.",
    href: "/articles/backtest-bundle-format",
    date: "May 2026",
    tags: [
      "open-source",
      "investing-algorithm-framework",
      "quantitative-trading",
      "software-engineering",
    ],
  },
  {
    title: "Pipelines: Cross-Sectional Factor Computation in One Shot",
    description:
      "How I added a Pipeline API to the Investing Algorithm Framework so strategies can rank, mask, and z-score factors across many symbols every iteration, with no per-symbol loops and no look-ahead.",
    href: "/articles/pipelines",
    date: "May 2026",
    tags: [
      "open-source",
      "investing-algorithm-framework",
      "quantitative-trading",
      "software-engineering",
    ],
  },
  {
    title: "Measuring Strategy Consistency Across Walk-Forward Windows",
    description:
      "How I added a CV-based consistency score to the Investing Algorithm Framework so you can tell the difference between a strategy that's reliably profitable and one that got lucky in a single window.",
    href: "/articles/consistency-score",
    date: "April 2026",
    tags: [
      "open-source",
      "investing-algorithm-framework",
      "quantitative-trading",
      "software-engineering",
    ],
  },
  {
    title: "A Stability Score for Bounded Trading Metrics",
    description:
      "Why CV-based consistency breaks down for win rates and Sharpe ratios, and how a normalized-std stability score gives you a more intuitive measure for bounded metrics.",
    href: "/articles/stability-score",
    date: "April 2026",
    tags: [
      "open-source",
      "investing-algorithm-framework",
      "quantitative-trading",
      "software-engineering",
    ],
  },
  {
    title: "Python Multiprocessing: Why Your Code Is Slow on Windows",
    description:
      "Fork vs spawn, why it matters for Python parallelization, and how to fix it, with a real-world example from the Investing Algorithm Framework.",
    href: "/articles/parallel-backtest-windows",
    date: "April 2026",
    tags: [
      "open-source",
      "investing-algorithm-framework",
      "quantitative-trading",
      "software-engineering",
    ],
  },
  {
    title: "Jupyter Notebook Magic for the Investing Algorithm Framework",
    description:
      "How I added %%backtest cell magic and %backtest line magic so you can run backtests directly inside Jupyter notebooks.",
    href: "/articles/notebook-magic",
    date: "April 2026",
    tags: [
      "open-source",
      "investing-algorithm-framework",
      "quantitative-trading",
      "software-engineering",
    ],
  },
  {
    title: "Adding Currency/FX Conversion to the Investing Algorithm Framework",
    description:
      "How I added multi-currency portfolio support with pluggable FX rate providers so strategies can trade across markets in different currencies.",
    href: "/articles/fx-conversion",
    date: "April 2026",
    tags: [
      "open-source",
      "investing-algorithm-framework",
      "quantitative-trading",
      "software-engineering",
    ],
  },
  {
    title: "Redesigning the Backtest Report: A Self-Contained HTML Dashboard",
    description:
      "How I replaced Plotly and Jinja2 with a zero-dependency HTML dashboard for single and multi-strategy backtest analysis.",
    href: "/articles/backtest-report",
    date: "April 2026",
    tags: [
      "open-source",
      "investing-algorithm-framework",
      "quantitative-trading",
      "software-engineering",
    ],
  },
  {
    title: "Building a Blotter System for the Investing Algorithm Framework",
    description:
      "How I added a blotter system with pluggable slippage, commission, and fill models to make backtests actually realistic.",
    href: "/articles/blotter-system",
    date: "June 2025",
    tags: [
      "open-source",
      "investing-algorithm-framework",
      "quantitative-trading",
      "software-engineering",
    ],
  },
  {
    title: "Why I Started Finterion",
    description:
      "The story behind Finterion and why I'm building an open marketplace to democratize algorithmic trading.",
    href: "/articles/why-i-started-finterion",
    date: "January 2022",
    tags: [
      "finterion",
      "quantitative-trading",
      "open-source",
    ],
  },
  {
    title:
      "Learning from Quantopian: How Finterion Is Building a Different Kind of Quant Platform",
    description:
      "When Quantopian shut down in 2020, it left behind hard lessons about crowdsourcing alpha. Here's how Finterion is taking a different path.",
    href: "/articles/learning-from-quantopian",
    date: "April 2026",
    tags: [
      "finterion",
      "quantitative-trading",
    ],
  },
  {
    title:
      "Tracking Custom Variables During Backtests with context.record()",
    description:
      "How I added a record() function to the Investing Algorithm Framework so you can track any indicator, signal, or metric during backtesting.",
    href: "/articles/context-record",
    date: "April 2026",
    tags: [
      "open-source",
      "investing-algorithm-framework",
      "quantitative-trading",
      "software-engineering",
    ],
  },
  {
    title:
      "Loading External Data from Any URL During Strategy Execution",
    description:
      "How I added CSV, JSON, and Parquet URL data providers to the Investing Algorithm Framework, with caching, refresh intervals, and cloud deployment support.",
    href: "/articles/external-data-providers",
    date: "April 2026",
    tags: [
      "open-source",
      "investing-algorithm-framework",
      "quantitative-trading",
      "software-engineering",
    ],
  },
];

const allTags = Array.from(new Set(articles.flatMap((a) => a.tags))).sort();

function parseDate(dateStr: string): number {
  return new Date(dateStr).getTime();
}

const sortedArticles = [...articles].sort(
  (a, b) => parseDate(b.date) - parseDate(a.date)
);

export default function ArticlesPage() {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return sortedArticles.filter((article) => {
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.description.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q));
      const matchesTags =
        activeTags.size === 0 ||
        article.tags.some((t) => activeTags.has(t));
      return matchesQuery && matchesTags;
    });
  }, [query, activeTags]);

  return (
    <div className="mt-12">
      <h1 className="text-2xl font-semibold text-[var(--color-terminal-text)] mb-1">
        Articles
      </h1>
      <p className="text-xs text-[var(--color-terminal-text-dim)] uppercase tracking-widest mb-6">
        {filtered.length} of {articles.length}{" "}
        {articles.length === 1 ? "entry" : "entries"}
      </p>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full bg-[var(--color-terminal-surface)] border border-[var(--color-terminal-border)] rounded-md px-3 py-2 text-sm text-[var(--color-terminal-text)] placeholder:text-[var(--color-terminal-text-dim)] focus:outline-none focus:border-[var(--color-terminal-green)] transition-colors"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
              activeTags.has(tag)
                ? "bg-[var(--color-terminal-green)] text-[var(--color-terminal-bg)]"
                : "bg-[var(--color-terminal-surface)] text-[var(--color-terminal-text-dim)] border border-[var(--color-terminal-border)] hover:border-[var(--color-terminal-green)] hover:text-[var(--color-terminal-green)]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Article list */}
      <div className="space-y-3">
        {filtered.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="card-glow group block border border-[var(--color-terminal-border)] rounded-md p-4 bg-[var(--color-terminal-surface)] hover:bg-[#141c2b] transition-colors"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-medium text-[var(--color-terminal-text)] group-hover:text-[var(--color-terminal-green)] transition-colors">
                {article.title}
              </h2>
              <span className="text-xs text-[var(--color-terminal-text-dim)] whitespace-nowrap">
                {article.date}
              </span>
            </div>
            <p className="text-sm text-[var(--color-terminal-text-dim)] mt-2 leading-snug">
              {article.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--color-terminal-bg)] text-[var(--color-terminal-text-dim)] border border-[var(--color-terminal-border)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-[var(--color-terminal-text-dim)] py-8 text-center">
            No articles match your search.
          </p>
        )}
      </div>
    </div>
  );
}
