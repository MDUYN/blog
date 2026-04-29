import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";
import { withBasePath } from "./app/lib/base-path";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

// MDX emits whitespace text nodes between table tags. React rejects them as
// direct children of <table>/<thead>/<tbody>/<tr>. Strip them.
function stripWhitespace(children: React.ReactNode): React.ReactNode {
  return React.Children.toArray(children).filter(
    (child) => !(typeof child === "string" && child.trim() === "")
  );
}

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="text-2xl font-semibold text-[var(--color-terminal-text)] pt-12 mb-0" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-[var(--color-terminal-text)] font-medium mt-8 mb-3"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="text-[var(--color-terminal-text)] font-medium mt-8 mb-3"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => <h4 className="font-medium text-[var(--color-terminal-text)]" {...props} />,
  p: (props: ParagraphProps) => (
    <p
      className="text-[var(--color-terminal-text)] leading-relaxed"
      {...props}
    />
  ),
  ol: (props: ListProps) => (
    <ol
      className="text-[var(--color-terminal-text)] list-decimal pl-5 space-y-2"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="text-[var(--color-terminal-text)] list-disc pl-5 space-y-1"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium text-[var(--color-terminal-text-dim)] not-italic" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-[var(--color-terminal-green)]" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-[var(--color-terminal-green)] hover:text-[var(--color-terminal-cyan)] underline underline-offset-2 decoration-[var(--color-terminal-border)] transition-colors";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-[var(--color-terminal-green)] pl-4 text-[var(--color-terminal-text-dim)]"
      {...props}
    />
  ),
  table: ({
    children,
    ...props
  }: ComponentPropsWithoutRef<"table">) => {
    // MDX emits whitespace text nodes between rows which React rejects
    // as direct children of <table>. Strip them.
    const cleaned = stripWhitespace(children);
    return (
      <div className="my-6 overflow-x-auto">
        <table
          className="w-full text-sm text-left border-collapse"
          {...props}
        >
          {cleaned}
        </table>
      </div>
    );
  },
  thead: ({
    children,
    ...props
  }: ComponentPropsWithoutRef<"thead">) => (
    <thead
      className="border-b border-[var(--color-terminal-border)]"
      {...props}
    >
      {stripWhitespace(children)}
    </thead>
  ),
  tbody: ({
    children,
    ...props
  }: ComponentPropsWithoutRef<"tbody">) => (
    <tbody {...props}>{stripWhitespace(children)}</tbody>
  ),
  tr: ({ children, ...props }: ComponentPropsWithoutRef<"tr">) => (
    <tr {...props}>{stripWhitespace(children)}</tr>
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      className="px-4 py-2 font-semibold text-[var(--color-terminal-text)] whitespace-nowrap"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td
      className="px-4 py-2 text-[var(--color-terminal-text-dim)] border-t border-[var(--color-terminal-border)]"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
