"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Moon, Snowflake, Clock, Hand } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function BrandStory() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Moon,
      title: t("Pesca Noturna", "Night Fishing"),
      desc: t(
        "Saímos ao mar ao final da tarde e pescamos durante a noite, com artes de cerco tradicionais.",
        "We head out to sea in the late afternoon and fish through the night, with traditional seine nets."
      ),
    },
    {
      icon: Snowflake,
      title: t("Gelo Imediato", "Immediate Ice"),
      desc: t(
        "O peixe é tratado com gelo ainda no barco, garantindo frescura absoluta.",
        "Fish is iced right on the boat, ensuring absolute freshness."
      ),
    },
    {
      icon: Clock,
      title: t("Preparação de Madrugada", "Dawn Preparation"),
      desc: t(
        "De madrugada, o peixe é limpo, temperado e marinado à mão — sem pressa.",
        "At dawn, the fish is cleaned, seasoned and marinated by hand — with no rush."
      ),
    },
    {
      icon: Hand,
      title: t("Produção Manual", "Manual Production"),
      desc: t(
        "Cada frasco é preparado à mão, cozinhado lentamente e selado com cuidado.",
        "Each jar is hand-prepared, slowly cooked and carefully sealed."
      ),
    },
  ];

  return (
    <section id="story" className="py-24 px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-ocean-200/30">
                <Image
                  src="/img/tia2.jpg"
                  alt={t("Concha do Mar - A produtora", "Concha do Mar - The producer")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Decorative element */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-ocean-100 to-seafoam-100 blur-sm opacity-60" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div className="lg:pl-8">
              <p className="text-sm font-semibold text-shell-500 uppercase tracking-widest mb-4">
                {t("A Nossa História", "Our Story")}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ocean-800 mb-6 leading-tight">
                {t("Do Mar ao Frasco.", "From Sea to Jar.")}
                <br />
                <span className="gradient-text">{t("Todo o Processo.", "The Whole Process.")}</span>
              </h2>
              <div className="space-y-5 text-driftwood leading-relaxed">
                <p>
                  {t(
                    "Na Concha do Mar, cada conserva nasce no mar e termina no frasco — tudo feito à mão. Pescamos à noite com artes tradicionais de cerco na Fonte Da Telha e voltamos de madrugada para preparar tudo com calma.",
                    "At Concha do Mar, each preserve starts at sea and ends in the jar — all done by hand. We fish at night with traditional seine nets in Fonte Da Telha and return at dawn to prepare everything with care."
                  )}
                </p>
                <p>
                  {t(
                    "Não há fábrica, não há máquinas. Há tempo, há cuidado e há respeito pelo que o mar nos dá. Cada frasco demora o tempo que precisar — e isso é o que faz a diferença.",
                    "There is no factory, no machines. There is time, care and respect for what the sea gives us. Each jar takes as long as it needs — and that's what makes the difference."
                  )}
                </p>
                <p className="font-medium text-ocean-700 italic">
                  {t(
                    "\"Quando abres um frasco da Concha do Mar, estás a abrir o mar de ontem à noite.\"",
                    "\"When you open a jar from Concha do Mar, you're opening last night's sea.\""
                  )}
                </p>
              </div>

              {/* Process steps */}
              <div className="grid grid-cols-2 gap-4 mt-10 mb-10">
                {steps.map((step) => (
                  <div key={step.title} className="text-center bg-ocean-50/50 rounded-xl p-4 border border-ocean-100">
                    <step.icon size={22} className="mx-auto text-ocean-500 mb-2" />
                    <p className="text-sm font-semibold text-ocean-800">
                      {step.title}
                    </p>
                    <p className="text-xs text-driftwood mt-1">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/colecoes/conservas-peixe">
                <Button size="lg">
                  {t("Ver os Nossos Produtos", "See Our Products")} <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
