import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fox.hen - Next-Generation CTF Platform",
  description: "Adaptive AI targets that harden based on attacker behavior",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
