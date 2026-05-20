import type { Metadata } from 'next';
import HeroSection         from '@/components/home/HeroSection';
import TrustSection        from '@/components/home/TrustSection';
import ServicesSection     from '@/components/home/ServicesSection';
import TechStackSection    from '@/components/home/TechStackSection';
import AISection           from '@/components/home/AISection';
import WhyUsSection        from '@/components/home/WhyUsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection          from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Nigoweb Technologies | Premium Web Development & AI Solutions',
  description: 'We build premium websites, scalable web apps, mobile apps and AI-powered solutions that help businesses grow. Top digital agency in Coimbatore.',
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <WhyUsSection />
      <TechStackSection />
      <AISection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
