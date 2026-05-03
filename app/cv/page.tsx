"use client";

import { useState, useEffect, useRef } from "react";

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
    role: "Software Engineer II",
    company: "Microsoft",
    type: "Full-time",
    period: "Aug 2023 – Present",
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
    logo: "/assets/finterion-dark.png",
    highlights: [
      "Founded Finterion as a student, and now lead all engineering efforts for the platform.",
      "Architected a distributed network for investing algorithms and investor portfolios.",
      "Built an order scaling engine combining multiple algorithms to sync asset portfolios of various sizes.",
      "Created responsive web applications powered by a microservices architecture.",
      "Maintain multi-cloud hosting environments using Kubernetes, cloud functions, and various databases.",
    ],
    tech: ["Python", "Kubernetes", "TypeScript", "React", "PostgreSQL", "CI/CD"],
  },
  {
    role: "Open Source Contributor",
    company: "Coding Kitties",
    type: "Part-time",
    period: "Jan 2019 – Present",
    location: "Remote",
    highlights: [
      "Active contributor and maintainer of open source projects, primarily the Investing Algorithm Framework.",
      "Framework has 900+ GitHub stars and is used by developers worldwide for algorithmic trading.",
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
  { category: "Cloud & Infra", items: ["Azure", "Kubernetes", "Docker", "Terraform", "CI/CD", "GitHub Actions"] },
  { category: "AI & Data", items: ["LLMs (GPT-3.5/4)", "RAG Patterns", "Pandas", "PostgreSQL"] },
  { category: "Frameworks", items: ["React", "Next.js", "Django", ".NET", "FastAPI"] },
  { category: "Practices", items: ["Clean Architecture", "Domain-Driven Design", "TDD", "Infrastructure as Code"] },
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
      className="relative pl-8 pb-8 last:pb-0 transition-all duration-500"
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
                src={entry.logo}
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
  return (
    <div className="mt-12">
      {/* Header */}
      <div className="border border-[var(--color-terminal-border)] rounded-md p-6 bg-[var(--color-terminal-surface)]">
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
          Software engineer at Microsoft and founder of Finterion. Building at the
          intersection of engineering and financial markets, from cloud infrastructure
          and AI to quantitative trading systems and open source frameworks.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 font-mono text-xs">
          <span className="text-[var(--color-terminal-text-dim)]">
            📍 The Hague, Netherlands
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
      </div>

      {/* Experience */}
      <div className="mt-10">
        <h2 className="font-mono text-xs text-[var(--color-terminal-text-dim)] uppercase tracking-widest mb-4">
          <span className="text-[var(--color-terminal-green)]">&gt;_</span>{" "}
          Experience
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
              ★ 900+ · Python
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
              An open marketplace for investing algorithms and trading
              strategies, connecting developers and investors.
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
