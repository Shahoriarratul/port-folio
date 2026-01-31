import type { Metadata } from "next";
import { Inter, Asap } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const asap = Asap({
  weight: "100",
  style: "normal",
  preload: true,
  subsets: ["latin", "latin-ext", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Shahoriar Ratul",
  description: "Portfolio of Shahoriar Ratul , a Full stack software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
