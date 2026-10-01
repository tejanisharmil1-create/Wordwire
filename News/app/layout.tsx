import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BreakingNews from "@/components/ui/BreakingNews";
import MarketWidget from "@/components/markets/MarketWidget";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "VANTOR | Global News. Clearly Told.",
  description: "International digital news platform providing professional, data-driven journalism.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased bg-white text-black min-h-screen flex flex-col`}>
        <BreakingNews />
        <Header />
        <MarketWidget />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
