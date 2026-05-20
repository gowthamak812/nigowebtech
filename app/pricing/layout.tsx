import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Plans | Nigoweb Technologies',
  description: 'Transparent, affordable pricing for websites, web apps, mobile apps and ongoing support. No hidden fees. Choose a plan or get a custom quote.',
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
