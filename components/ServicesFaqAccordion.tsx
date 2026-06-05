'use client';
import { useState } from 'react';

const faqs = [
  { q: 'How long does it take to deploy a site?', a: 'Standard business websites take 3–4 weeks. Complex dashboards or mobile systems typically need 6–12 weeks depending on scope.' },
  { q: 'Do you offer content updates?', a: 'Yes — content changes, additions and updates are covered in our support plans. We also build user panels so you can edit pages yourself.' },
  { q: 'Can you improve an old site?', a: 'Absolutely. We audit your existing system, redesign the UX, migrate data, and deploy on Next.js to dramatically improve load speed.' },
  { q: 'Are sites SEO optimized?', a: 'Every site we deploy ships with structured data schema, automated sitemaps, optimised image alt tags, and Core Web Vitals as standard.' },
];

export default function ServicesFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              borderRadius: '18px',
              background: '#ffffff',
              border: isOpen ? '1.5px solid rgba(99,102,241,0.35)' : '1.5px solid rgba(0,0,0,0.07)',
              boxShadow: isOpen ? '0 4px 20px rgba(99,102,241,0.1)' : '0 2px 8px rgba(0,0,0,0.04)',
              overflow: 'hidden',
              transition: 'all 300ms',
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1.1rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.62rem', fontWeight: 900, color: '#6366f1' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontSize: '0.93rem', fontWeight: 700, color: '#111827', lineHeight: 1.4 }}>{faq.q}</span>
              </div>
              <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: isOpen ? 'linear-gradient(135deg,#6366f1,#a855f7)' : 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1rem', fontWeight: 300, color: isOpen ? '#ffffff' : '#6366f1', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'all 300ms', flexShrink: 0 }}>
                +
              </span>
            </button>
            <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 350ms cubic-bezier(0.16,1,0.3,1)' }}>
              <div style={{ overflow: 'hidden' }}>
                <p style={{ padding: '0 1.5rem 1.25rem 4.25rem', fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.8 }}>{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
