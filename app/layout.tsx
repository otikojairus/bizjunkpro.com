import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_NAME, SITE_URL } from "@/lib/pages";
import "./globals.css";

const display = Manrope({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} | Commercial Junk & Waste Services`, template: `%s | ${SITE_NAME}` },
  description: "Commercial junk removal, office cleanouts, construction debris, dumpster rentals and material recovery across Canada.",
  openGraph: {
    title: `${SITE_NAME} Commercial Services`,
    description: "Clear spaces, dependable schedules and responsible material routing for Canadian businesses.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`${display.variable} ${body.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
