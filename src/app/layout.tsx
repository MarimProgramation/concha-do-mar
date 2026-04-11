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
  title: "Concha do Mar — Conservas Artesanais da Fonte Da Telha",
  description:
    "De raízes no mar nasce o nosso sabor. Conservas artesanais feitas à mão com peixe fresco da Fonte Da Telha. Produção limitada, sabor autêntico.",
  keywords: [
    "conservas artesanais",
    "polvo em conserva",
    "cavala em conserva",
    "paté de cavala",
    "Fonte Da Telha",
    "Concha do Mar",
    "pesca noturna",
    "produção limitada",
    "conservas premium",
  ],
  openGraph: {
    title: "Concha do Mar — Conservas Artesanais da Fonte Da Telha",
    description:
      "Do mar ao frasco, feito à mão. Pesca noturna, produção limitada, sabor autêntico.",
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
