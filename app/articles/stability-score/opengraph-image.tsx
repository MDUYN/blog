import {
  ogContentType,
  ogSize,
  renderArticleOg,
  StabilityVisual,
} from "../../components/og-card";

export const dynamic = "force-static";

export const alt = "A Stability Score for Bounded Trading Metrics";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderArticleOg({
    eyebrow: "Open Source · Investing Algorithm Framework",
    title: "A Stability Score for Bounded Trading Metrics",
    description:
      "Why CV-based consistency breaks down for win rates and Sharpe ratios — and how a normalized-σ stability score gives you a more intuitive measure for bounded metrics.",
    visual: <StabilityVisual />,
  });
}
