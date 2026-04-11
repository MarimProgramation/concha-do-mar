import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { BestSellers } from "@/components/sections/BestSellers";
import { Categories } from "@/components/sections/Categories";
import { BrandStory } from "@/components/sections/BrandStory";
import { ParallaxBanner } from "@/components/sections/ParallaxBanner";
import { Newsletter } from "@/components/sections/Newsletter";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <BestSellers />
      <BrandStory />
      <Categories />
      <ParallaxBanner />
      <Newsletter />
      <FAQ />
      <Footer />
    </>
  );
}
