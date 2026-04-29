// Centralized basePath constant. Must match next.config.ts.
// In dev (NODE_ENV !== "production"), basePath is empty.
export const basePath =
  process.env.NODE_ENV === "production" ? "/blog" : "";

/**
 * Prefix an absolute path (starting with "/") with the configured basePath.
 * Pass-through for external URLs and already-prefixed paths.
 */
export function withBasePath(src: string): string {
  if (!src.startsWith("/")) return src;
  if (basePath && src.startsWith(`${basePath}/`)) return src;
  return `${basePath}${src}`;
}
