import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/layout/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Concha do Mar — Conservas Premium Portuguesas",
  description:
    "Descubra a Concha do Mar: conservas artesanais de peixe e marisco da costa portuguesa. Qualidade premium, sabor autêntico do Atlântico.",
  keywords: [
    "conservas portuguesas",
    "conservas de peixe",
    "conservas de marisco",
    "cavala em conserva",
    "polvo em conserva",
    "Concha do Mar",
    "produtos portugueses",
    "conservas artesanais",
  ],
  openGraph: {
    title: "Concha do Mar — Conservas Premium Portuguesas",
    description:
      "Conservas artesanais de peixe e marisco da costa portuguesa. Nascidas do mar, feitas para si.",
    type: "website",
    locale: "pt_PT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased`}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
