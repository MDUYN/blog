"use client";

import { usePathname } from "next/navigation";
import { ShareButton } from "./ShareButton";

export function ArticleShareBar() {
  const pathname = usePathname();
  // Only render on individual article pages, not on the listing page
  if (!pathname || pathname === "/articles" || pathname === "/articles/") {
    return null;
  }
  return (
    <div className="flex justify-end pt-6">
      <ShareButton />
    </div>
  );
}
