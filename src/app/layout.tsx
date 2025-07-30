import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maheshwar Patnala - Full Stack Developer",
  description: "Full Stack Developer specializing in React, Node.js, and AI-powered solutions",
  keywords: "Full Stack Developer, React, Node.js, AI, Machine Learning, Web Development",
  authors: [{ name: "Maheshwar Patnala" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}