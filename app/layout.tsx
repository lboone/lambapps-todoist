import type { Metadata } from "next";
import { Inter as Font } from "next/font/google";
import "./globals.css";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LAMB Apps - Todoist",
  description:
    "LAMB Aps - Todoist seamlessly organizes your tasks and predicts what's next using AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
