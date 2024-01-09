import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Daisy Template",
  description: "Generated by create next app, with daisyUI and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className="h-full min-h-screen">{children}</body>
    </html>
  );
}
