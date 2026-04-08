"use client";

import { LanguageProvider } from "@/hooks/useLanguage";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingElements } from "@/components/animations/FloatingElements";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      <FloatingElements />
      <main>{children}</main>
    </LanguageProvider>
  );
}
