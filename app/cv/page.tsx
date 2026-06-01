"use client";

import { useState, useEffect, useRef } from "react";
import { withBasePath } from "@/app/lib/base-path";

type TimelineEntry = {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  highlights: string[];
  tech: string[];
  logo?: string;
};

const experience: TimelineEntry[] = [
  {
    role: "Software Engineer II (Band 2)",
    company: "Microsoft",
    type: "Full-time",
    period: "2025 – Present",
    location: "Amsterdam",
    logo: "/assets/microsoft.png",
    highlights: [
      "Promoted to Band 2 Software Engineer II within ISE (Industry Solutions Engineering), now operating as a Forward Deployed Engineer on greenfield projects on Microsoft Azure for strategic customers.",
      "Validated, optimized, and retrained large language models to meet customer-specific quality, latency, and cost targets.",
      "Implemented performance tests to validate scalability requirements for (multi-)agentic applications.",
      "Built reusable accelerators for go-to-market agentic applications, shortening time-to-value for new engagements.",
      "Led engineering efforts in infrastructure as code, CI/CD, and code maintainability through Azure and GitHub.",
      "Designed architecture proposals, validated design hypotheses, and ensured solutions met security and compliance requirements.",
      "Created testing plans spanning unit, integration, and end-to-end tests.",
    ],
    tech: ["Azure", "Python", "Rust", "C#", "LLMs", "Agentic AI", "IaC", "CI/CD"],
  },
  {
    role: "Software Engineer II (Band 1)",
    company: "Microsoft",
    type: "Full-time",
    period: "Aug 2023 – 2025",
    location: "Amsterdam",
    logo: "/assets/microsoft.png",
    highlights: [
      "Software engineer within ISE (Industry Solutions Engineering) for financial service industries (FSI), contributing to greenfield projects on Microsoft Azure.",
      "Built solutions with large language models (GPT-3.5, GPT-4): RAG patterns, data querying, and completion flows.",
      "Implemented performance tests to validate scalability requirements.",
      "Led engineering efforts in infrastructure as code, CI/CD, and code maintainability through Azure and GitHub.",
      "Designed architecture proposals, validated design hypotheses, and ensured security and compliance requirements.",
      "Created testing plans spanning unit, integration, and end-to-end tests.",
    ],
    tech: ["Azure", "Rust", "C#", "Python", "AI/LLMs", "IaC", "CI/CD"],
  },
  {
    role: "Software Engineer",
    company: "Microsoft",
    type: "Full-time",
    period: "Jun 2022 – Aug 2023",
    location: "Amsterdam",
    logo: "/assets/microsoft.png",
    highlights: [
      "Software engineer within ISE (Industry Solutions Engineering) for financial service industries (FSI), working with a team to help customers solve challenging problems with Microsoft Azure.",
      "Contributed to a diverse set of greenfield projects in FSI.",
      "Implemented engineering efforts in infrastructure as code, CI/CD, and code maintainability through Azure and GitHub.",
      "Worked with stakeholders to determine user requirements and designs for solutions.",
      "Contributed to architecture proposals by testing design hypotheses and refining code plans.",
      "Ensured system architecture met security and compliance requirements.",
      "Designed and implemented testing plans for unit, integration, and end-to-end tests.",
    ],
    tech: ["Azure", "C#", "Containerization", "IaC", "CI/CD"],
  },
  {
    role: "Founder",
    company: "Finterion",
    type: "Part-time",
    period: "Sep 2021 – Present",
    location: "Amsterdam",
    logo: "/assets/finterion.svg",
    highlights: [
      "Founded Finterion as a student, and now lead all engineering efforts for the platform.",
      "Architected a distributed network for investing algorithms and investor portfolios.",
      "Built an order scaling engine combining multiple algorithms to sync asset portfolios of various sizes.",
      "Created responsive web applications powered by a microservices architecture.",
      "Maintain multi-cloud hosting environments using Kubernetes, cloud functions, and various databases.",
      "Cloud-scale backtesting orchestration, running distributed event and vector backtests across cloud infrastructure to evaluate strategies over large parameter spaces and long histories.",
      "Tiered backtest storage and AI analytics environment for cross-run analysis and insights.",
      "Live trading infrastructure with multiple broker integrations, handling real-time market data, order execution, and portfolio management.",
      "Drift detection and rebalancing engine to keep investor portfolios aligned with strategy signals while managing risk and costs.",
      "Designed and implemented the platform's security model, including data encryption, access controls, and secure coding practices to protect user data and ensure compliance.",
    ],
    tech: ["Python", "Kubernetes", "TypeScript", "React", "PostgreSQL", "CI/CD"],
  },
  {
    role: "Quantitative Researcher",
    company: "Team Blue",
    type: "Part-time",
    period: "2023 – Present",
    location: "Remote",
    highlights: [
      "Founded and lead Team Blue, a quantitative research organization focused on developing and publicly releasing systematic trading strategies.",
      "Research and develop quantitative trading strategies across crypto and traditional assets, including trend-following, mean-reversion, divergence, and market regime detection approaches.",
      "Build and maintain a suite of trading bots and strategy implementations.",
      "Develop supporting tooling such as PyIndicators and signal/strategy sandboxes for rapid backtesting and research.",
      "Conduct machine learning research applied to financial markets, including Hidden Markov Models for market regime detection and other statistical/ML techniques for signal generation.",
      "Publish backtest results, reports, and tutorials to share research findings openly with the community.",
    ],
    tech: ["Python", "Pandas", "Machine Learning", "Hidden Markov Models", "Quantitative Research", "Backtesting", "Algorithmic Trading"],
  },
  {
    role: "Open Source Contributor",
    company: "Coding Kitties",
    type: "Part-time",
    period: "Jan 2019 – Present",
    location: "Remote",
    highlights: [
      "Active contributor and maintainer of open source projects, primarily the Investing Algorithm Framework.",
      "Framework has 1200+ GitHub stars and is used by developers worldwide for algorithmic trading.",
    ],
    tech: ["Python", "Open Source"],
  },
  {
    role: "Software Engineer",
    company: "Service Highway",
    type: "Full-time",
    period: "Sep 2020 – Jun 2022",
    location: "Voorburg",
    logo: "/assets/service-highway.png",
    highlights: [
      "Built solutions to help large organizations control system proliferation and optimize business processes.",
    ],
    tech: ["Java", "Kubernetes", "Containerization"],
  },
  {
    role: "Master Thesis Project",
    company: "TNO",
    type: "Contract",
    period: "May 2020 – Nov 2020",
    location: "Netherlands",
    logo: "/assets/tno.png",
    highlights: [
      "Wrote master thesis: \"Consent Management in Data Spaces: A Reference Architecture for Consent Management in Data Spaces\".",
    ],
    tech: ["Research", "Architecture"],
  },
  {
    role: "Software Engineer",
    company: "Dutch Analytics",
    type: "Full-time",
    period: "Aug 2018 – Sep 2019",
    location: "Delft",
    logo: "/assets/ubiops.png",
    highlights: [
      "Built predictive maintenance software: real-time condition monitoring and predictive models for asset owners.",
    ],
    tech: ["Python", "Django"],
  },
  {
    role: "Intern Software Engineer",
    company: "ZyLAB",
    type: "Internship",
    period: "Dec 2017 – Jul 2018",
    location: "Amsterdam",
    logo: "/assets/zylab.png",
    highlights: [],
    tech: ["C#", ".NET Core"],
  },
  {
    role: "Junior Software Engineer",
    company: "Autoriteit Consument & Markt",
    type: "Full-time",
    period: "Dec 2016 – Jul 2018",
    location: "The Hague",
    logo: "/assets/acm.png",
    highlights: [],
    tech: ["C#"],
  },
];

type Education = {
  degree: string;
  university: string;
  period: string;
};

const education: Education[] = [
  {
    degree: "MSc Software Engineering",
    university: "University of Amsterdam",
    period: "2019 – 2020",
  },
  {
    degree: "BSc Computer Science",
    university: "University of Leiden",
    period: "2015 – 2019",
  },
  {
    degree: "Major in Economics",
    university: "Erasmus University Rotterdam",
    period: "",
  },
];

const skills = [
  { category: "Languages", items: ["Python", "Rust", "C#", "Java", "TypeScript", "JavaScript"] },
  { category: "Cloud & Infra", items: ["Azure", "Kubernetes", "Docker", "Terraform", "CI/CD", "GitHub Actions", "Azure DevOps Pipelines"] },
  { category: "AI & Data", items: ["LLMs Fine-tuning / LoRA", "Multi-agent Orchestration", "RAG Patterns", "Semantic Search / Embeddings & Vector Databases", "Guardrails & Responsible AI"] },
  { category: "Machine Learning", items: ["scikit-learn", "Hidden Markov Models", "Feature Engineering", "Walk-forward Validation"] },
  { category: "Frameworks", items: ["React", "Next.js", "Django", ".NET", "FastAPI", "Flask", "Actix Web"] },
  { category: "Practices", items: ["Clean Architecture", "Domain-Driven Design", "TDD", "Infrastructure as Code"] },
];

type QuantCapability = {
  title: string;
  description: string;
  sources: { label: string; href: string }[];
};

const quantCapabilities: QuantCapability[] = [
  {
    title: "Vectorized & event-driven backtest engines",
    description:
      "Designed and implemented both vectorized and event-driven backtest engines, giving researchers 10–100× faster iteration on historical data while sharing the same strategy contract used for backtesting, paper, and live trading.",
    sources: [
      { label: "Investing Algorithm Framework", href: "https://github.com/coding-kitties/investing-algorithm-framework" },
      { label: "Finterion", href: "https://finterion.com" },
    ],
  },
  {
    title: "Phase-based strategy execution pipeline",
    description:
      "Architected an eight-phase signal-to-order pipeline (Evaluate → Collect → Resolve → Size → Budget → Emit → AttachRisk → RecordCooldown) that replaces a monolithic strategy loop with independently pluggable, testable components shared across event and vector engines. This allows users to write modular strategies with support for long and short signals, multiple fills per bar, and complex order types, all while ensuring consistent behavior across backtest and live modes.",
    sources: [
      { label: "Investing Algorithm Framework", href: "https://github.com/coding-kitties/investing-algorithm-framework" },
      { label: "Finterion", href: "https://finterion.com" },
    ],
  },
  {
    title: "Dual-mode TradingStrategy API",
    description:
      "Designed a single strategy contract with two structurally lookahead-safe entry points — generate_signals (event) and generate_signal_series (vector), letting users write one feature-engineering pass and run it unchanged in backtest, paper, and live modes.",
    sources: [
      { label: "Investing Algorithm Framework", href: "https://github.com/coding-kitties/investing-algorithm-framework" },
      { label: "Finterion", href: "https://finterion.com" },
    ],
  },
  {
    title: "Pluggable risk-rule system (TP / SL / cooldowns / scaling)",
    description:
      "Designed the framework's risk-rule abstractions, stop-loss, take-profit, cooldown, trailing, and scale-in/out rules, as declarative class-level slots that the engine materialises onto every trade at fill time, including silent rejection telemetry via signal_events.",
    sources: [
      { label: "Investing Algorithm Framework", href: "https://github.com/coding-kitties/investing-algorithm-framework" },
      { label: "Finterion", href: "https://finterion.com" },
    ],
  },
  {
    title: "Cross-sectional pipeline & factor framework",
    description:
      "Designed the Pipeline abstraction for cross-sectional / multi-asset strategies, with universe-refresh caching, live-mode failure isolation, and a to_signals hook that integrates factor-based ranking directly into the strategy execution pipeline.",
    sources: [
      { label: "Investing Algorithm Framework", href: "https://github.com/coding-kitties/investing-algorithm-framework" },
      { label: "Finterion", href: "https://finterion.com" },
    ],
  },
  {
    title: "In-sample vs out-of-sample validation",
    description:
      "Apply rigorous train/test splits, walk-forward analysis, and out-of-sample validation to guard against overfitting.",
    sources: [
      { label: "Investing Algorithm Framework", href: "https://github.com/coding-kitties/investing-algorithm-framework" },
      { label: "Team Blue", href: "https://github.com/coding-kitties" },
    ],
  },
  {
    title: "Parameter sweeps & permutation testing",
    description:
      "Run large-scale parameter sweeps and permutation/Monte Carlo tests to assess statistical significance of strategy results.",
    sources: [
      { label: "Investing Algorithm Framework", href: "https://github.com/coding-kitties/investing-algorithm-framework" },
      { label: "Team Blue", href: "https://github.com/coding-kitties" },
    ],
  },
  {
    title: "Cloud-scale backtesting orchestration",
    description:
      "Run distributed backtests in both vector and event backtest engine modes across cloud infrastructure to evaluate strategies over large parameter spaces and long histories.",
    sources: [
      { label: "Finterion", href: "https://finterion.com" },
    ],
  },
  {
    title: "Cloud-scale backtesting execution with parallelization",
    description:
      "Designed the distributed execution model that lets a single strategy be backtested across the full cloud cluster, rolling windows, parameter grids, and asset universes evaluated in parallel, collapsing what was previously a multi-day research cycle into a single interactive iteration.",
    sources: [
      { label: "Finterion", href: "https://finterion.com" },
    ],
  },
  {
    title: "Tiered backtest storage",
    description:
      "Designed a three-tier storage model (indexed Postgres/SQLite metadata · Parquet bulk on object storage · content-addressed immutable chunks) that turned 12,500-bundle archives from 64 GB single-file blobs into projected sub-20 GB sweep stores, replacing 30-minute decode loops with sub-second cross-run analytics.",
    sources: [
      { label: "Finterion", href: "https://finterion.com" },
      { label: "Investing Algorithm Framework", href: "https://github.com/coding-kitties/investing-algorithm-framework" },
    ],
  },
  {
    title: "End-to-end quantitative workflows",
    description:
      "Integrate the full quant stack, data ingestion, feature engineering, strategy development, backtesting, and live execution.",
    sources: [
      { label: "Finterion", href: "https://finterion.com" },
      { label: "Investing Algorithm Framework", href: "https://github.com/coding-kitties/investing-algorithm-framework" },
    ],
  },
  {
    title: "Built a quant product & company",
    description:
      "Independently designed, built, and operate Finterion, a quantitative trading platform connecting quant developers with investors.",
    sources: [
      { label: "Finterion", href: "https://finterion.com" },
    ],
  },
];

const softwareCapabilities: QuantCapability[] = [
  {
    title: "Cloud-native architecture on Azure",
    description:
      "Design and deliver greenfield cloud-native systems on Microsoft Azure for strategic customers, balancing scalability, security, and cost.",
    sources: [
      { label: "Microsoft ISE", href: "https://www.microsoft.com/en-us/industry/microsoft-industry-solutions-engineering" },
      { label: "Finterion", href: "https://finterion.com" },
    ],
  },
  {
    title: "LLM & agentic application engineering",
    description:
      "Validate, optimize, and retrain LLMs and build reusable accelerators for (multi-)agentic applications with production-grade quality.",
    sources: [
      { label: "Microsoft ISE", href: "https://www.microsoft.com/en-us/industry/microsoft-industry-solutions-engineering" },
    ],
  },
  {
    title: "Infrastructure as Code & CI/CD",
    description:
      "Lead engineering efforts in IaC (Terraform/Bicep) and CI/CD pipelines on Azure and GitHub, with strong focus on code maintainability.",
    sources: [
      { label: "Microsoft ISE", href: "https://www.microsoft.com/en-us/industry/microsoft-industry-solutions-engineering" },
      { label: "Finterion", href: "https://finterion.com" },
    ],
  },
  {
    title: "Distributed systems & microservices",
    description:
      "Worked with a variety of distributed system architectures, from microservices to serverless. Primarily work with Azure Kubernetes Service, Azure Functions, and Azure Container Instances to host scalable applications.",
    sources: [
      { label: "Finterion", href: "https://finterion.com" },
    ],
  },
  {
    title: "Open source framework design",
    description:
      "Designed and maintain the Investing Algorithm Framework (1200+ ★) and PyIndicators, focusing on clean APIs, extensibility, and reliability.",
    sources: [
      { label: "Investing Algorithm Framework", href: "https://github.com/coding-kitties/investing-algorithm-framework" },
      { label: "PyIndicators", href: "https://github.com/coding-kitties/PyIndicators" },
    ],
  },
  {
    title: "Testing & performance engineering",
    description:
      "Create testing plans spanning unit, integration, and end-to-end tests, and implement performance tests to validate scalability requirements.",
    sources: [
      { label: "Microsoft ISE", href: "https://www.microsoft.com/en-us/industry/microsoft-industry-solutions-engineering" },
      { label: "Finterion", href: "https://finterion.com" },
    ],
  },
];

function TypingText({ text, speed = 30 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      {!done && <span className="animate-pulse">▊</span>}
    </span>
  );
}

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <div
      ref={ref}
      className="timeline-card relative pl-8 pb-8 last:pb-0 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 60}ms`,
      }}
    >
      {/* Timeline line */}
      <div className="absolute left-[7px] top-[10px] bottom-0 w-px bg-[var(--color-terminal-border)] last:hidden" />
      {/* Dot */}
      <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-[var(--color-terminal-green)] bg-[var(--color-terminal-bg)]" />

      <div className="border border-[var(--color-terminal-border)] rounded-md p-4 bg-[var(--color-terminal-surface)] hover:border-[var(--color-terminal-green)] transition-colors">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex items-start gap-3">
            {entry.logo && (
              <img
                src={withBasePath(entry.logo)}
                alt={entry.company}
                className="w-10 h-10 rounded-md object-contain bg-white p-1 shrink-0 mt-0.5"
              />
            )}
            <div>
              <h3 className="text-[var(--color-terminal-text)] font-medium">
                {entry.role}
              </h3>
              <p className="font-mono text-sm text-[var(--color-terminal-green)]">
                {entry.company}
                <span className="text-[var(--color-terminal-text-dim)]"> · {entry.type}</span>
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-mono text-xs text-[var(--color-terminal-text-dim)]">
              {entry.period}
            </p>
            <p className="font-mono text-xs text-[var(--color-terminal-text-dim)]">
              {entry.location}
            </p>
          </div>
        </div>

        {entry.highlights.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {entry.highlights.map((h, i) => (
              <li key={i} className="text-sm text-[var(--color-terminal-text-dim)] flex gap-2">
                <span className="text-[var(--color-terminal-green)] shrink-0 mt-0.5">▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {entry.tech.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {entry.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] px-2 py-0.5 rounded border border-[var(--color-terminal-border)] text-[var(--color-terminal-cyan)] bg-[var(--color-terminal-bg)]"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CVPage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="mt-12 print-cv">
      {/* Download / Print button (hidden when printing) */}
      <div className="no-print flex justify-end mb-4">
        <button
          type="button"
          onClick={handlePrint}
          className="font-mono text-xs px-3 py-1.5 rounded border border-[var(--color-terminal-border)] text-[var(--color-terminal-green)] hover:border-[var(--color-terminal-green)] hover:text-[var(--color-terminal-cyan)] transition-colors bg-[var(--color-terminal-surface)]"
        >
          ⬇ Download PDF
        </button>
      </div>

      {/* Header */}
      <div className="avoid-break border border-[var(--color-terminal-border)] rounded-md p-6 bg-[var(--color-terminal-surface)]">
        <p className="font-mono text-xs text-[var(--color-terminal-text-dim)] mb-3 uppercase tracking-widest">
          <span className="status-dot mr-2" />
          Curriculum Vitae
        </p>
        <h1 className="text-3xl font-semibold text-[var(--color-terminal-text)] mb-1">
          Marc van Duyn
        </h1>
        <p className="font-mono text-sm text-[var(--color-terminal-green)]">
          <TypingText text="Software Engineer · Founder · Open Source" speed={35} />
        </p>
        <p className="text-sm text-[var(--color-terminal-text-dim)] mt-3 leading-relaxed">
          Software engineer at Microsoft and founder of Finterion, building at the
          intersection of engineering and financial markets, from cloud
          infrastructure and AI to quantitative trading systems and open source
          frameworks. I&apos;m driven by designing elegant, high-impact solutions to
          complex problems and sharing the lessons openly with the community.
          <br /><br />
          At <a
            href="https://finterion.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-terminal-green)] hover:text-[var(--color-terminal-cyan)] font-semibold transition-colors"
          >
            Finterion
          </a>, I build the marketplace and
          infrastructure for quantitative trading, giving developers a
          path from research to live capital.
          <br /><br />
          Alongside that I run <a
            href="https://github.com/orgs/Team-Blue-Trading/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-terminal-green)] hover:text-[var(--color-terminal-cyan)] font-semibold transition-colors"
          >
            Team Blue
          </a>, a quantitative research
          organization that develops and publicly releases systematic trading
          strategies and the research behind them.
          <br /><br />
          I&apos;m also the creator of the <a
            href="https://github.com/coding-kitties/investing-algorithm-framework"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-terminal-green)] hover:text-[var(--color-terminal-cyan)] font-semibold transition-colors"
          >
            <strong>Investing Algorithm Framework</strong>
          </a>, an open source Python library for backtesting and live trading
          (1200+ GitHub stars, used by quantitative developers worldwide). It
          covers the entire quant workflow: define a strategy once,
          vector-backtest thousands of parameter variants to surface promising
          signals, rank 10k+ results in milliseconds via a dedicated storage
          layer, validate the winners in a realistic event-driven simulation,
          compare everything in a single interactive HTML dashboard, and deploy
          the best performer live, all with the same trading strategy
          class and no code rewrites between stages.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 font-mono text-xs">
          <span className="text-[var(--color-terminal-text-dim)]">
            📍 Amsterdam, Netherlands
          </span>
          <a
            href="https://github.com/MDUYN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-terminal-green)] hover:text-[var(--color-terminal-cyan)] transition-colors"
          >
            github.com/MDUYN
          </a>
          <a
            href="https://nl.linkedin.com/in/marc-van-duyn-24330b16a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-terminal-green)] hover:text-[var(--color-terminal-cyan)] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-8">
        <h2 className="font-mono text-xs text-[var(--color-terminal-text-dim)] uppercase tracking-widest mb-4">
          <span className="text-[var(--color-terminal-cyan)]">&gt;_</span>{" "}
          Skills &amp; Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="border border-[var(--color-terminal-border)] rounded-md p-4 bg-[var(--color-terminal-surface)]"
            >
              <p className="font-mono text-xs text-[var(--color-terminal-green)] uppercase tracking-widest mb-2">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-2 py-1 rounded border border-[var(--color-terminal-border)] text-[var(--color-terminal-text-dim)] bg-[var(--color-terminal-bg)] hover:text-[var(--color-terminal-cyan)] hover:border-[var(--color-terminal-cyan)] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quantitative Trading capabilities */}
        <div className="mt-6">
          <p className="font-mono text-xs text-[var(--color-terminal-green)] uppercase tracking-widest mb-3">
            Quantitative Trading
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {quantCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="border border-[var(--color-terminal-border)] rounded-md p-4 bg-[var(--color-terminal-surface)] hover:border-[var(--color-terminal-green)] transition-colors"
              >
                <p className="font-mono text-sm text-[var(--color-terminal-text)]">
                  <span className="text-[var(--color-terminal-green)]">▸</span>{" "}
                  {cap.title}
                </p>
                <p className="text-xs text-[var(--color-terminal-text-dim)] mt-1.5 leading-relaxed">
                  {cap.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {cap.sources.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] px-2 py-0.5 rounded border border-[var(--color-terminal-border)] text-[var(--color-terminal-cyan)] bg-[var(--color-terminal-bg)] hover:border-[var(--color-terminal-cyan)] transition-colors"
                    >
                      {s.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Software Engineering capabilities */}
        <div className="mt-6">
          <p className="font-mono text-xs text-[var(--color-terminal-green)] uppercase tracking-widest mb-3">
            Software Engineering
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {softwareCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="border border-[var(--color-terminal-border)] rounded-md p-4 bg-[var(--color-terminal-surface)] hover:border-[var(--color-terminal-green)] transition-colors"
              >
                <p className="font-mono text-sm text-[var(--color-terminal-text)]">
                  <span className="text-[var(--color-terminal-green)]">▸</span>{" "}
                  {cap.title}
                </p>
                <p className="text-xs text-[var(--color-terminal-text-dim)] mt-1.5 leading-relaxed">
                  {cap.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {cap.sources.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] px-2 py-0.5 rounded border border-[var(--color-terminal-border)] text-[var(--color-terminal-cyan)] bg-[var(--color-terminal-bg)] hover:border-[var(--color-terminal-cyan)] transition-colors"
                    >
                      {s.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mt-10">
        <h2 className="font-mono text-xs text-[var(--color-terminal-text-dim)] uppercase tracking-widest mb-4">
          <span className="text-[var(--color-terminal-green)]">&gt;_</span>{" "}
          Professional Experience
        </h2>
        <div>
          {experience.map((entry, i) => (
            <TimelineItem key={`${entry.company}-${entry.role}`} entry={entry} index={i} />
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-10">
        <h2 className="font-mono text-xs text-[var(--color-terminal-text-dim)] uppercase tracking-widest mb-4">
          <span className="text-[var(--color-terminal-cyan)]">&gt;_</span>{" "}
          Education
        </h2>
        <div className="space-y-3">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="border border-[var(--color-terminal-border)] rounded-md p-4 bg-[var(--color-terminal-surface)] hover:border-[var(--color-terminal-green)] transition-colors"
            >
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <h3 className="text-[var(--color-terminal-text)] font-medium">
                    {edu.degree}
                  </h3>
                  <p className="font-mono text-sm text-[var(--color-terminal-green)]">
                    {edu.university}
                  </p>
                </div>
                {edu.period && (
                  <p className="font-mono text-xs text-[var(--color-terminal-text-dim)]">
                    {edu.period}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Open Source */}
      <div className="mt-10">
        <h2 className="font-mono text-xs text-[var(--color-terminal-text-dim)] uppercase tracking-widest mb-4">
          <span className="text-[var(--color-terminal-green)]">&gt;_</span>{" "}
          Open Source
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <a
            href="https://github.com/coding-kitties/investing-algorithm-framework"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--color-terminal-border)] rounded-md p-4 bg-[var(--color-terminal-surface)] hover:border-[var(--color-terminal-green)] transition-colors block"
          >
            <p className="font-mono text-sm text-[var(--color-terminal-green)]">
              investing-algorithm-framework
            </p>
            <p className="text-xs text-[var(--color-terminal-text-dim)] mt-1">
              Open source framework for building investing algorithms with data
              ingestion, strategy development, backtesting, and execution.
            </p>
            <p className="font-mono text-[10px] text-[var(--color-terminal-cyan)] mt-2">
              ★ 1200+ · Python
            </p>
          </a>
          <a
            href="https://finterion.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--color-terminal-border)] rounded-md p-4 bg-[var(--color-terminal-surface)] hover:border-[var(--color-terminal-green)] transition-colors block"
          >
            <p className="font-mono text-sm text-[var(--color-terminal-green)]">
              Finterion
            </p>
            <p className="text-xs text-[var(--color-terminal-text-dim)] mt-1">
              An open marketplace and infrastructure provider for quantitative trading
              strategies.
            </p>
            <p className="font-mono text-[10px] text-[var(--color-terminal-cyan)] mt-2">
              Platform · finterion.com
            </p>
          </a>
          <a
            href="https://github.com/coding-kitties/PyIndicators"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--color-terminal-border)] rounded-md p-4 bg-[var(--color-terminal-surface)] hover:border-[var(--color-terminal-green)] transition-colors block"
          >
            <p className="font-mono text-sm text-[var(--color-terminal-green)]">
              PyIndicators
            </p>
            <p className="text-xs text-[var(--color-terminal-text-dim)] mt-1">
              Python library for calculating technical indicators. Fast,
              reliable, and designed for trading pipelines.
            </p>
            <p className="font-mono text-[10px] text-[var(--color-terminal-cyan)] mt-2">
              Library · Python
            </p>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 border border-[var(--color-terminal-border)] rounded-md p-4 bg-[var(--color-terminal-surface)]">
        <p className="font-mono text-xs text-[var(--color-terminal-text-dim)]">
          Want the full details? Connect on{" "}
          <a
            href="https://nl.linkedin.com/in/marc-van-duyn-24330b16a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-terminal-green)] hover:text-[var(--color-terminal-cyan)]"
          >
            LinkedIn
          </a>{" "}
          or check out my work on{" "}
          <a
            href="https://github.com/MDUYN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-terminal-green)] hover:text-[var(--color-terminal-cyan)]"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}
