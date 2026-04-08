"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Send, Shell, Check } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ocean-500 via-ocean-400 to-seafoam-400 p-12 md:p-16 lg:p-20">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-seafoam-300/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

            <motion.div
              className="absolute top-8 right-12 opacity-10"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <Shell size={80} className="text-white" />
            </motion.div>

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-5 py-2 text-sm font-medium text-white border border-white/20 mb-6"
              >
                <Shell size={16} />
                {t("Junte-se à Comunidade Concha", "Join the Concha Community")}
              </motion.div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {t("Fique a Par das Novidades", "Stay in the Tide")}
              </h2>
              <p className="text-ocean-100 text-lg mb-10 leading-relaxed">
                {t(
                  "Subscreva para acesso antecipado a novos produtos, ofertas exclusivas e histórias do mar. Receba 15% de desconto na primeira encomenda.",
                  "Subscribe for exclusive early access, special offers, and stories from the shore. Get 15% off your first order."
                )}
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("Introduza o seu email", "Enter your email")}
                  required
                  className="flex-1 h-13 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 px-6 text-white placeholder:text-white/60 outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300"
                />
                <Button
                  type="submit"
                  variant="ivory"
                  size="lg"
                  className="shrink-0 text-ocean-600 font-semibold"
                  disabled={submitted}
                >
                  {submitted ? (
                    <>
                      <Check size={18} /> {t("Subscrito!", "Subscribed!")}
                    </>
                  ) : (
                    <>
                      {t("Subscrever", "Subscribe")} <Send size={16} />
                    </>
                  )}
                </Button>
              </form>

              <p className="text-xs text-ocean-200 mt-4">
                {t(
                  "Sem spam, nunca. Cancele a qualquer momento. Respeitamos a sua privacidade.",
                  "No spam, ever. Unsubscribe anytime. We respect your privacy."
                )}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
