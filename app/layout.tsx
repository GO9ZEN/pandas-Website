import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopStrip from "@/components/TopStrip";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export const metadata: Metadata = {
  title: "PANDAS — Change Your Mind. Change Your Life.",
  description: "A mindset brand and action-driven movement.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ position: "relative", backgroundColor: "#0d0d0d" }}
        suppressHydrationWarning
      >
        <ParticleBackground />
        <div style={{ position: "relative", zIndex: 1 }}>
          <TopStrip />
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
