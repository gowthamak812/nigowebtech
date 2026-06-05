import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection  from '@/components/home/HeroSection';
import TrustSection from '@/components/home/TrustSection';

const ServicesSection     = dynamic(() => import('@/components/home/ServicesSection'));
const WhyUsSection        = dynamic(() => import('@/components/home/WhyUsSection'));
const AISection           = dynamic(() => import('@/components/home/AISection'));
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'));
const CTASection          = dynamic(() => import('@/components/home/CTASection'));

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
      <AISection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
