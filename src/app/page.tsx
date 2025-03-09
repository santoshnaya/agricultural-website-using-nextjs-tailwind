import Image from "next/image";
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
    </main>
  );
}
