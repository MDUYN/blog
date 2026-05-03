import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: {
    default: "Marc van Duyn",
    template: "%s | Marc van Duyn",
  },
  description:
    "Quantitative trading, open source, and software engineering. Creator of Finterion.",
  metadataBase: new URL("https://mduyn.github.io/blog"),
  openGraph: {
    title: "Marc van Duyn",
    description:
      "Quantitative trading, open source, and software engineering. Creator of Finterion.",
    url: "https://mduyn.github.io/blog",
    siteName: "Marc van Duyn",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/blog/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marc van Duyn: Software Engineer, Quantitative Trading, Open Source",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marc van Duyn",
    description:
      "Quantitative trading, open source, and software engineering. Creator of Finterion.",
    images: ["/blog/og-image.png"],
  },
};

function Footer() {
  const links = [
    {
      name: "linkedin",
      url: "https://nl.linkedin.com/in/marc-van-duyn-24330b16a",
    },
    { name: "github", url: "https://github.com/MDUYN" },
    { name: "gitlab", url: "https://gitlab.com/DUYN" },
    {
      name: "stackoverflow",
      url: "https://stackoverflow.com/users/6817837/marc",
    },
  ];

  return (
    <footer className="mt-16 border-t border-[var(--color-terminal-border)] pt-6 pb-4 text-center">
      <div className="flex justify-center space-x-6 tracking-tight mb-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[var(--color-terminal-text-dim)] hover:text-[var(--color-terminal-green)] transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
      <p className="font-mono text-xs text-[var(--color-terminal-text-dim)] opacity-50">
        &copy; {new Date().getFullYear()} Marc van Duyn
      </p>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(!d)document.documentElement.classList.add('light')}catch(e){document.documentElement.classList.add('light')}})()`,
          }}
        />
      </head>
      <body className={`${jetbrains.className} antialiased tracking-tight`}>
        <div className="ticker-border h-[2px]" />
        <div className="min-h-screen flex flex-col justify-between p-6 md:p-8 grid-bg">
          <main className="max-w-[85ch] mx-auto w-full space-y-6">
            <Navbar />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
