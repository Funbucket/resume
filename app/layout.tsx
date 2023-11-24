import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Suspense } from "react";
import Analytics from "@/modules/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "조해창",
  description: "이력서",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={inter.className}>
        <Suspense>
          <Analytics />
        </Suspense>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
