import {
  PipelineVisual,
  ogContentType,
  ogSize,
  renderArticleOg,
} from "../../components/og-card";

export const dynamic = "force-static";

export const alt =
  "Pipelines: Cross-Sectional Factor Computation in the Investing Algorithm Framework";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderArticleOg({
    eyebrow: "Open Source · Investing Algorithm Framework",
    title: "Pipelines: Cross-Sectional Factor Computation in One Shot",
    description:
      "How I added a Pipeline API so strategies can rank, mask, and z-score factors across many symbols every iteration, with no per-symbol loops and no look-ahead.",
    visual: <PipelineVisual />,
  });
}
