import {
  ConsistencyVisual,
  ogContentType,
  ogSize,
  renderArticleOg,
} from "../../components/og-card";

export const dynamic = "force-static";

export const alt =
  "Measuring Strategy Consistency Across Walk-Forward Windows";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderArticleOg({
    eyebrow: "Open Source · Investing Algorithm Framework",
    title: "Measuring Strategy Consistency Across Walk-Forward Windows",
    description:
      "A CV-based score that tells the difference between a strategy that's reliably profitable and one that got lucky in a single window.",
    visual: <ConsistencyVisual />,
  });
}
