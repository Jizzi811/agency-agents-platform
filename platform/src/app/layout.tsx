import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GradientMesh } from "@/components/hero/gradient-mesh";

export const metadata: Metadata = {
  title: "Agency Agents | AI Agents That Actually Work",
  description: "Discover, try, and deploy intelligent agents for support, sales, and beyond. Powered by OpenHands with seamless knowledge integration.",
  keywords: ["AI agents", "OpenHands", "automation", "customer support", "sales agents", "artificial intelligence"],
  authors: [{ name: "Agency Agents" }],
  openGraph: {
    title: "Agency Agents | AI Agents That Actually Work",
    description: "Discover, try, and deploy intelligent agents for support, sales, and beyond.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agency Agents",
    description: "AI Agents That Actually Work",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-white antialiased">
        <GradientMesh />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
