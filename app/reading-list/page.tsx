import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reading List",
};

function BookItem({
  href,
  title,
  note,
}: {
  href: string;
  title: string;
  note: string;
}) {
  return (
    <li className="border-b border-[var(--color-terminal-border)] pb-3 last:border-0">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[var(--color-terminal-green)] hover:text-[var(--color-terminal-cyan)] transition-colors"
      >
        {title}
      </a>
      <p className="text-xs text-[var(--color-terminal-text-dim)] mt-1">
        {note}
      </p>
    </li>
  );
}

export default function ReadingListPage() {
  return (
    <div className="mt-12">
      <h1 className="text-2xl font-semibold text-[var(--color-terminal-text)] mb-1">
        Reading List
      </h1>
      <p className="text-sm text-[var(--color-terminal-text-dim)] mt-2 mb-8">
        Resources I commonly reference and actively update.
      </p>

      {/* Software Development */}
      <div className="border border-[var(--color-terminal-border)] rounded-md bg-[var(--color-terminal-surface)] mb-4">
        <div className="px-4 py-3 border-b border-[var(--color-terminal-border)]">
          <h2 className="text-xs text-[var(--color-terminal-text-dim)] uppercase tracking-widest">
            Software Development
          </h2>
        </div>
        <ul className="p-4 space-y-3">
          <BookItem
            href="https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612"
            title="Design Patterns: Elements of Reusable Object-Oriented Software"
            note="Must read for every software developer."
          />
          <BookItem
            href="https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure-ebook/dp/B075LRM681"
            title="Clean Architecture"
            note="The foundations of software architecture."
          />
          <BookItem
            href="https://www.amazon.com/gp/product/B001GSTOAM"
            title="Clean Code"
            note="Do everyone on your software development team a favor and read it."
          />
          <BookItem
            href="https://www.amazon.com/gp/product/B0050JLC9Y"
            title="The Clean Coder"
            note="If you are serious about writing software. Only read it after you read everything else first."
          />
          <BookItem
            href="https://www.amazon.com/Making-Software-Really-Works-Believe/dp/0596808321"
            title="Making Software: What Really Works, and Why We Believe It"
            note="Very good read about software development concepts validated and supported by scientific evidence."
          />
        </ul>
      </div>

      {/* Money Management */}
      <div className="border border-[var(--color-terminal-border)] rounded-md bg-[var(--color-terminal-surface)] mb-4">
        <div className="px-4 py-3 border-b border-[var(--color-terminal-border)]">
          <h2 className="text-xs text-[var(--color-terminal-text-dim)] uppercase tracking-widest">
            Money Management
          </h2>
        </div>
        <ul className="p-4 space-y-3">
          <BookItem
            href="https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Paperback/dp/B0161N2F66"
            title="The Intelligent Investor"
            note="A very good foundation on how to behave when investing and especially what not to do."
          />
          <BookItem
            href="https://www.amazon.com/Security-Analysis-Classic-Benjamin-Graham/dp/0071448209"
            title="Security Analysis"
            note="Explains you how to analyse a company and its stock value."
          />
          <BookItem
            href="https://www.amazon.com/Value-Investing-Graham-Buffett-Finance-ebook/dp/B000YIWF4C"
            title="Value Investing: From Graham to Buffett and Beyond"
            note="A practical explanation about value investing."
          />
        </ul>
      </div>

      {/* General */}
      <div className="border border-[var(--color-terminal-border)] rounded-md bg-[var(--color-terminal-surface)]">
        <div className="px-4 py-3 border-b border-[var(--color-terminal-border)]">
          <h2 className="text-xs text-[var(--color-terminal-text-dim)] uppercase tracking-widest">
            General
          </h2>
        </div>
        <ul className="p-4 space-y-3">
          <BookItem
            href="https://www.amazon.com/Biocentrism-Consciousness-Understanding-Nature-Universe-ebook/dp/B003PJ6UHA"
            title="Biocentrism: How Life and Consciousness are the Keys to Understanding the True Nature of the Universe"
            note="Makes you think and question everything."
          />
        </ul>
      </div>
    </div>
  );
}
