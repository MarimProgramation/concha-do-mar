"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-50 via-ivory to-shell-50" />
        <motion.div
          className="absolute top-0 -left-[20%] w-[70%] h-[70%] rounded-full bg-ocean-100/40 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -right-[20%] w-[60%] h-[60%] rounded-full bg-shell-100/30 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[40%] h-[40%] rounded-full bg-seafoam-100/20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Wave SVG at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,45 1440,60 L1440,120 L0,120 Z"
              fill="#fefcf8"
              initial={{ d: "M0,60 C360,120 720,0 1080,60 C1260,90 1380,45 1440,60 L1440,120 L0,120 Z" }}
              animate={{
                d: [
                  "M0,60 C360,120 720,0 1080,60 C1260,90 1380,45 1440,60 L1440,120 L0,120 Z",
                  "M0,80 C360,20 720,100 1080,40 C1260,20 1380,80 1440,50 L1440,120 L0,120 Z",
                  "M0,60 C360,120 720,0 1080,60 C1260,90 1380,45 1440,60 L1440,120 L0,120 Z",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-sm font-semibold text-ocean-400 uppercase tracking-widest mb-4"
        >
          {t("Produção artesanal · Lotes limitados", "Artisanal production · Limited batches")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-ocean-800">{t("De Raízes no Mar", "Rooted in the Sea")}</span>
          <br />
          <span className="gradient-text">{t("Nasce o Nosso Sabor.", "Our Flavour is Born.")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto max-w-2xl text-lg md:text-xl text-driftwood leading-relaxed mb-4"
        >
          {t(
            "Conservas artesanais feitas à mão, do mar ao frasco. Todo o peixe é pescado por nós na Fonte Da Telha e preparado de maneira caseira, sem pressa, sem atalhos.",
            "Handmade artisanal preserves, from sea to jar. All fish is caught by us in Fonte Da Telha and prepared the homemade way, with no rush, no shortcuts."
          )}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-xl text-sm text-ocean-500 font-medium mb-10"
        >
          {t(
            "Disponível enquanto durar o lote.",
            "Available while stocks last."
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/colecoes/conservas-peixe">
            <Button size="xl" className="min-w-[260px]">
              {t("Quero Provar", "I Want to Try")} <ArrowRight size={20} />
            </Button>
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-driftwood/70"
        >
          {[
            t("100% Artesanal", "100% Handmade"),
            t("Sem Conservantes", "No Preservatives"),
            t("Produção Limitada", "Limited Production"),
            t("Pesca Noturna Tradicional", "Traditional Night Fishing"),
          ].map(
            (badge) => (
              <span key={badge} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-ocean-300" />
                {badge}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
