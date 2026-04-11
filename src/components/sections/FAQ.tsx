"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/hooks/useLanguage";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = [
    {
      question: t("Quem faz estas conservas?", "Who makes these preserves?"),
      answer: t(
        "As nossas conservas são feitas de forma artesanal na Fonte Da Telha. Pescamos à noite com artes de cerco tradicionais e preparamos tudo de madrugada, à mão, sem máquinas.",
        "Our preserves are made by hand in Fonte Da Telha. We fish at night with traditional seine nets and prepare everything at dawn, by hand, without machines."
      ),
    },
    {
      question: t("Por que é que a produção é limitada?", "Why is production limited?"),
      answer: t(
        "Porque fazemos tudo manualmente e dependemos do que o mar nos dá. Não temos fábrica nem produção em série — cada lote é pequeno e feito com tempo. Quando acaba, só no próximo lote.",
        "Because we do everything manually and depend on what the sea gives us. We have no factory or mass production — each batch is small and made with time. When it's gone, only in the next batch."
      ),
    },
    {
      question: t("Os produtos têm conservantes?", "Do the products have preservatives?"),
      answer: t(
        "Não. Os nossos produtos são esterilizados em autoclave e usamos apenas ingredientes naturais. Sem conservantes artificiais, sem corantes, sem aditivos.",
        "No. Our products are autoclave-sterilized and we use only natural ingredients. No artificial preservatives, no colourings, no additives."
      ),
    },
    {
      question: t("O polvo está sempre disponível?", "Is the octopus always available?"),
      answer: t(
        "Não — o polvo é um produto sazonal, disponível apenas de novembro a março e em quantidades muito limitadas. Quando o lote acaba, só na próxima temporada.",
        "No — the octopus is a seasonal product, available only from November to March and in very limited quantities. When the batch runs out, only next season."
      ),
    },
    {
      question: t("Como posso encomendar?", "How can I order?"),
      answer: t(
        "Pode encomendar através do nosso WhatsApp, email ou telefone. Contacte-nos por conchadomarft@gmail.com ou +351 910 157 752. Respondemos em menos de 24 horas.",
        "You can order via our WhatsApp, email or phone. Contact us at conchadomarft@gmail.com or +351 910 157 752. We respond within 24 hours."
      ),
    },
    {
      question: t("Qual é o prazo de validade?", "What is the shelf life?"),
      answer: t(
        "Os nossos produtos têm validade de 12 meses, desde que conservados em local fresco e seco. O polvo, após abertura, deve ser refrigerado e consumido no prazo máximo de 24 horas.",
        "Our products have a shelf life of 12 months, stored in a cool, dry place. Octopus, once opened, should be refrigerated and consumed within 24 hours."
      ),
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold text-ocean-400 uppercase tracking-widest mb-3">
            {t("Centro de Ajuda", "Help Center")}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ocean-800 mb-4">
            {t("Perguntas Frequentes", "Frequently Asked Questions")}
          </h2>
          <p className="mx-auto max-w-xl text-driftwood text-lg">
            {t(
              "Tudo o que precisa de saber sobre a Concha do Mar.",
              "Everything you need to know about Concha do Mar."
            )}
          </p>
        </ScrollReveal>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="rounded-2xl bg-white border border-ocean-50 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-ocean-800 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown size={20} className="text-ocean-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-driftwood leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
