import { ComponentPropsWithoutRef } from "react";
import { withBasePath } from "../lib/base-path";

/**
 * `<img>` wrapper that automatically applies the configured basePath
 * to absolute (root-relative) src paths. Use this in MDX instead of
 * raw `<img>` so assets work both in dev and on GitHub Pages.
 */
// eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
export default function Img({
  src,
  ...props
}: ComponentPropsWithoutRef<"img">) {
  return (
    <img
      src={typeof src === "string" ? withBasePath(src) : src}
      {...props}
    />
  );
}
