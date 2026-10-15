import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Footer } from "@/components/ui/Footer";
import { Nav } from "@/components/ui/Nav";
import { ToastProvider } from "@/components/ui/Toast";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Stone Creek Club & Spa — Your Everyday Getaway",
    template: "%s · Stone Creek Club & Spa",
  },
  description:
    "Stone Creek Club & Spa — The Northshore Sports Resort in Covington, Louisiana. Tennis, fitness, a full-service spa, café and childcare since 2009.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="eyebrow sr-only z-[70] bg-slate-950 px-5 py-3 text-stone-50 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <ToastProvider>
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
