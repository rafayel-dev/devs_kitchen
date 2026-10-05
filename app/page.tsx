import { CTA } from "@/components/CTA";
import { PageTransition } from "@/components/PageTransition";
import { Engagements } from "@/components/home/Engagements";
import { Global } from "@/components/home/Global";
import { Hero } from "@/components/home/Hero";
import { Principles } from "@/components/home/Principles";
import { Process } from "@/components/home/Process";
import { ProductsSection } from "@/components/home/ProductsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { Technology } from "@/components/home/Technology";
import { WorkSection } from "@/components/home/WorkSection";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <ServicesSection />
      <WorkSection />
      <ProductsSection />
      <Process index="04" />
      <Engagements index="05" />
      <Principles index="06" />
      <Technology />
      <Global />
      <CTA />
    </PageTransition>
  );
}
