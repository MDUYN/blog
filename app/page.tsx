import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "./lib/base-path";

export default function Home() {
  return (
    <div className="mt-12">
      {/* Hero */}
      <div className="border border-[var(--color-terminal-border)] rounded-md p-6 bg-[var(--color-terminal-surface)]">
        <p className="font-mono text-xs text-[var(--color-terminal-text-dim)] mb-3 uppercase tracking-widest">
          <span className="status-dot mr-2" />
          System Online
        </p>
        <h1 className="text-3xl font-semibold text-[var(--color-terminal-text)] mb-2">
          Marc van Duyn
        </h1>
        <p className="font-mono text-sm text-[var(--color-terminal-text-dim)]">
          Software Engineer &middot; Quantitative Trading &middot; Open Source
        </p>
        <p className="text-[var(--color-terminal-text)] leading-relaxed mt-4">
          Writing about software engineering, system architecture, and the
          intersection of code and financial markets. Actively researching
          quantitative trading strategies and systems.
        </p>
      </div>

      {/* Currently Active */}
      <div className="mt-10">
        <h2 className="font-mono text-xs text-[var(--color-terminal-text-dim)] uppercase tracking-widest mb-4">
          Currently Active
        </h2>

        {/* Finterion */}
        <div className="border border-[var(--color-terminal-border)] rounded-md p-5 bg-[var(--color-terminal-surface)]">
          <div className="mb-4">
            <Image
              src={withBasePath("/assets/finterion-dark.png")}
              alt="Finterion"
              width={140}
              height={35}
              className="logo-dark"
            />
            <Image
              src={withBasePath("/assets/finterion-light.png")}
              alt="Finterion"
              width={140}
              height={35}
              className="logo-light"
            />
          </div>
          <p className="text-[var(--color-terminal-text)] leading-relaxed">
            Building an open source quantitative trading platform — democratizing
            algorithmic strategies by connecting quant developers with investors.
            Providing the tools and infrastructure to build, test, and deploy
            trading strategies.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Platform", "Trading", "Fintech"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2 py-1 rounded border border-[var(--color-terminal-border)] text-[var(--color-terminal-text-dim)] bg-[var(--color-terminal-bg)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-3">
            <a
              href="https://finterion.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[var(--color-terminal-green)] hover:text-[var(--color-terminal-cyan)] transition-colors"
            >
              finterion.com &rarr;
            </a>
          </div>
        </div>

        {/* Microsoft */}
        <div className="mt-4 border border-[var(--color-terminal-border)] rounded-md p-5 bg-[var(--color-terminal-surface)]">
          <div className="flex items-center gap-3 mb-3">
            <Image
              src={withBasePath("/assets/microsoft.png")}
              alt="Microsoft"
              width={28}
              height={28}
            />
            <h3 className="font-mono text-sm text-[var(--color-terminal-green)]">
              Microsoft
            </h3>
          </div>
          <p className="text-[var(--color-terminal-text)] leading-relaxed">
            Software Engineer at Microsoft — working on large-scale software
            systems, cloud infrastructure, and agentic applications with a focus
            on multi-agent orchestration.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Software Engineering", "Cloud", "Agentic AI", "Multi-Agent Systems"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2 py-1 rounded border border-[var(--color-terminal-border)] text-[var(--color-terminal-text-dim)] bg-[var(--color-terminal-bg)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Coding Kitties */}
        <div className="mt-4 border border-[var(--color-terminal-border)] rounded-md p-5 bg-[var(--color-terminal-surface)]">
          <div className="flex items-center gap-3 mb-3">
            <Image
              src={withBasePath("/assets/coding-kitties.png")}
              alt="Coding Kitties"
              width={28}
              height={28}
            />
            <h3 className="font-mono text-sm text-[var(--color-terminal-green)]">
              Coding Kitties
            </h3>
          </div>
          <p className="text-[var(--color-terminal-text)] leading-relaxed mb-4">
            Maintaining open source projects for quantitative trading and
            technical analysis.
          </p>

          {/* Investing Algorithm Framework */}
          <div className="border border-[var(--color-terminal-border)] rounded-md p-4 bg-[var(--color-terminal-bg)]">
            <h4 className="font-mono text-xs text-[var(--color-terminal-cyan)] mb-2">
              Investing Algorithm Framework
            </h4>
            <p className="text-sm text-[var(--color-terminal-text)] leading-relaxed">
              An open source framework for building investing algorithms —
              from data ingestion and strategy development to backtesting and
              execution.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Python", "Trading", "Open Source", "Framework"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2 py-1 rounded border border-[var(--color-terminal-border)] text-[var(--color-terminal-text-dim)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-3">
              <a
                href="https://github.com/coding-kitties/investing-algorithm-framework"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[var(--color-terminal-green)] hover:text-[var(--color-terminal-cyan)] transition-colors"
              >
                View on GitHub &rarr;
              </a>
            </div>
          </div>

          {/* PyIndicators */}
          <div className="mt-3 border border-[var(--color-terminal-border)] rounded-md p-4 bg-[var(--color-terminal-bg)]">
            <h4 className="font-mono text-xs text-[var(--color-terminal-cyan)] mb-2">
              PyIndicators
            </h4>
            <p className="text-sm text-[var(--color-terminal-text)] leading-relaxed">
              A Python library for calculating technical indicators — fast,
              reliable, and easy to integrate into trading pipelines and data
              analysis workflows.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Python", "Technical Analysis", "Open Source", "Library"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 rounded border border-[var(--color-terminal-border)] text-[var(--color-terminal-text-dim)]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <div className="mt-3">
              <a
                href="https://github.com/coding-kitties/PyIndicators"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[var(--color-terminal-green)] hover:text-[var(--color-terminal-cyan)] transition-colors"
              >
                View on GitHub &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-10">
        <h2 className="font-mono text-xs text-[var(--color-terminal-text-dim)] uppercase tracking-widest mb-4">
          Navigate
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/articles"
            className="card-glow border border-[var(--color-terminal-border)] rounded-md p-4 bg-[var(--color-terminal-surface)] hover:bg-[#141c2b] transition-colors"
          >
            <p className="font-mono text-sm text-[var(--color-terminal-green)]">
              /articles
            </p>
            <p className="text-xs text-[var(--color-terminal-text-dim)] mt-1">
              All writings
            </p>
          </Link>
          <Link
            href="/reading-list"
            className="card-glow border border-[var(--color-terminal-border)] rounded-md p-4 bg-[var(--color-terminal-surface)] hover:bg-[#141c2b] transition-colors"
          >
            <p className="font-mono text-sm text-[var(--color-terminal-green)]">
              /reading-list
            </p>
            <p className="text-xs text-[var(--color-terminal-text-dim)] mt-1">
              Curated resources
            </p>
          </Link>
          <Link
            href="/about"
            className="card-glow border border-[var(--color-terminal-border)] rounded-md p-4 bg-[var(--color-terminal-surface)] hover:bg-[#141c2b] transition-colors"
          >
            <p className="font-mono text-sm text-[var(--color-terminal-green)]">
              /about
            </p>
            <p className="text-xs text-[var(--color-terminal-text-dim)] mt-1">
              Who I am
            </p>
          </Link>
          <a
            href="https://github.com/MDUYN"
            target="_blank"
            rel="noopener noreferrer"
            className="card-glow border border-[var(--color-terminal-border)] rounded-md p-4 bg-[var(--color-terminal-surface)] hover:bg-[#141c2b] transition-colors"
          >
            <p className="font-mono text-sm text-[var(--color-terminal-green)]">
              github
            </p>
            <p className="text-xs text-[var(--color-terminal-text-dim)] mt-1">
              Open source
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
