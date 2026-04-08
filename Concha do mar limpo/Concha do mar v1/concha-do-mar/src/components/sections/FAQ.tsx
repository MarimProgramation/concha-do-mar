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
      question: t("Qual é a vossa política de envio?", "What is your shipping policy?"),
      answer: t(
        "Oferecemos envio grátis para encomendas acima de 25€. O envio standard demora 2-4 dias úteis em Portugal Continental. Envio expresso (1-2 dias úteis) disponível por 5€. Enviamos para as ilhas e para toda a Europa.",
        "We offer free shipping on orders over €25. Standard shipping takes 2-4 business days in mainland Portugal. Express shipping (1-2 business days) is available for €5. We ship to the islands and throughout Europe."
      ),
    },
    {
      question: t("Qual é a vossa política de devoluções?", "What is your return policy?"),
      answer: t(
        "Devido à natureza dos nossos produtos alimentares, não aceitamos devoluções. Garantimos a qualidade de todos os nossos produtos. Caso receba um produto danificado ou com defeito, entre em contacto connosco e resolveremos a situação o mais brevemente possível.",
        "Due to the nature of our food products, we do not accept returns. We guarantee the quality of all our products. If you receive a damaged or defective product, please contact us and we will resolve the situation as soon as possible."
      ),
    },
    {
      question: t("Os vossos produtos são naturais?", "Are your products natural?"),
      answer: t(
        "Absolutamente. A qualidade natural está no coração da Concha do Mar. Utilizamos ingredientes 100% naturais — peixe fresco do Atlântico, azeite virgem extra português e temperos naturais. Sem conservantes artificiais, sem corantes, sem aditivos.",
        "Absolutely. Natural quality is at the heart of Concha do Mar. We use 100% natural ingredients — fresh Atlantic fish, Portuguese extra virgin olive oil and natural seasonings. No artificial preservatives, no colorings, no additives."
      ),
    },
    {
      question: t("Qual é o prazo de validade das conservas?", "What is the shelf life of the preserves?"),
      answer: t(
        "As nossas conservas têm um prazo de validade de 5 anos a partir da data de produção. Devem ser conservadas em local fresco e seco. Após abertura, refrigere e consuma no prazo de 3 dias.",
        "Our preserves have a shelf life of 5 years from the production date. They should be stored in a cool, dry place. Once opened, refrigerate and consume within 3 days."
      ),
    },
    {
      question: t("Como posso contactar o apoio ao cliente?", "How can I contact customer support?"),
      answer: t(
        "Pode contactar-nos por email em conchadomarft@gmail.com, por telefone ou WhatsApp para o +351 910 157 752. Normalmente respondemos em 24 horas. Visite a nossa página de contactos para mais informações.",
        "You can reach us via email at conchadomarft@gmail.com, or by phone/WhatsApp at +351 910 157 752. We typically respond within 24 hours. Visit our contacts page for more information."
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
