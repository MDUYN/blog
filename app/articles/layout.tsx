import type { Metadata } from "next";
import { ArticleShareBar } from "../components/ArticleShareBar";

export const metadata: Metadata = {
  title: "Articles",
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ArticleShareBar />
      {children}
    </>
  );
}
