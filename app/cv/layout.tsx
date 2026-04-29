import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
