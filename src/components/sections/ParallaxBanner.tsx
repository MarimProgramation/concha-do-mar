"use client";

import Image from "next/image";

export function ParallaxBanner() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-ocean-50 to-white border-y border-ocean-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-8 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-ocean-900 mb-2 tracking-tight drop-shadow-sm">
          Onde pode nos encontrar
        </h2>
        <p className="text-ocean-600 mb-8 text-base md:text-lg">Visite-nos na nossa loja parceira e descubra os nossos produtos ao vivo!</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white/80 rounded-2xl shadow-xl p-6 md:p-10 border border-ocean-100">
          <div className="flex flex-col items-center w-full md:w-1/3">
            <div className="bg-white rounded-full shadow-md p-3 mb-2 border border-ocean-100">
              <Image
                src="/img/4biopng.png"
                alt="Logo 4Bio"
                width={80}
                height={80}
                className="object-contain"
                style={{ background: "#fff" }}
              />
            </div>
            <h3 className="text-lg font-semibold text-ocean-800 mb-1">4Bio - Supermercado Biológico</h3>
            <p className="text-ocean-700 text-sm mb-1">Av. António José Gomes 39B<br/>2805-087 Almada</p>
            <p className="text-ocean-700 text-sm mb-1">Tel: <a href="tel:+351212742528" className="underline hover:text-ocean-500 transition">+351 212 742 528</a></p>
            <p className="text-ocean-700 text-sm mb-1">Email: <a href="mailto:geral@4bio.pt" className="underline hover:text-ocean-500 transition">geral@4bio.pt</a></p>
            <a
              href="https://www.google.com/maps/place/4Bio+-+Supermercado+Biol%C3%B3gico/@38.6712941,-9.1591045,17z/data=!4m22!1m15!4m14!1m6!1m2!1s0xd1934fd4cf3c605:0x874489483e47225b!2s4Bio+-+Supermercado+Biol%C3%B3gico,+Av.+Ant%C3%B3nio+Jos%C3%A9+Gomes+39B,+2805-087+Almada!2m2!1d-9.1565417!2d38.6712704!1m6!1m2!1s0xd1934fd4cf3c605:0x874489483e47225b!2s4Bio+-+Supermercado+Biol%C3%B3gico,+Av.+Ant%C3%B3nio+Jos%C3%A9+Gomes+39B,+2805-087+Almada!2m2!1d-9.1565417!2d38.6712704!3m5!1s0xd1934fd4cf3c605:0x874489483e47225b!8m2!3d38.6712941!4d-9.1565296!16s%2Fg%2F11bzr8m368?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-ocean-600 underline font-medium hover:text-ocean-800 transition"
            >
              Ver no Google Maps
            </a>
          </div>
          <div className="w-full md:w-2/3 h-64 rounded-xl overflow-hidden shadow-md border border-ocean-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.073964479836!2d-9.1591045!3d38.6712941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1934fd4cf3c605%3A0x874489483e47225b!2s4Bio%20-%20Supermercado%20Biol%C3%B3gico!5e0!3m2!1spt-PT!2spt!4v1710530000000!5m2!1spt-PT!2spt"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa 4Bio"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
