import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Nigoweb Technologies | Modern Web Development & SEO Services",
  description: "Build modern, SEO-optimized websites for your business. Professional web development, mobile apps, and ongoing support. Fast websites, better rankings, real business growth.",
  keywords: "web development, SEO services, website design, mobile apps, React development, Next.js, Coimbatore web development, business websites",
  authors: [{ name: "Nigoweb Technologies" }],
  creator: "Nigoweb Technologies",
  publisher: "Nigoweb Technologies",
  metadataBase: new URL('https://nigowebtechnologies.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://nigowebtechnologies.com',
    title: 'Nigoweb Technologies | Modern Web Development & SEO Services',
    description: 'Build modern, SEO-optimized websites for your business. Fast websites, better rankings, real business growth.',
    siteName: 'Nigoweb Technologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nigoweb Technologies | Modern Web Development & SEO Services',
    description: 'Build modern, SEO-optimized websites for your business. Fast websites, better rankings, real business growth.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nigoweb Technologies",
              "url": "https://nigowebtechnologies.com",
              "logo": "https://nigowebtechnologies.com/logo.png",
              "description": "Modern web development and SEO services for growing businesses",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Coimbatore",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9344832658",
                "contactType": "Customer Service",
                "email": "nigowebtechnologies@gmail.com"
              },
              "sameAs": []
            })
          }}
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen pt-18">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
