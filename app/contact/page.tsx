'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'Typically 2–4 weeks for a business website, depending on complexity and content readiness. Web applications may take 6–12 weeks. We provide a detailed timeline during your free consultation.',
  },
  {
    q: 'Do you provide ongoing support after launch?',
    a: 'Yes! We offer flexible support packages including daily monitoring, security updates, content changes, and technical assistance. Check our pricing page for full details.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Absolutely. We specialise in modernising outdated websites with new technology, better SEO architecture, and improved performance — while migrating all your existing content.',
  },
  {
    q: 'Do you work with clients outside Coimbatore?',
    a: 'Yes, we serve clients across India. Our remote-first setup means we collaborate effectively via WhatsApp, video calls, and real-time staging links regardless of your location.',
  },
  {
    q: 'What information do I need to get started?',
    a: 'Just a brief about your business, goals, and budget — that\'s enough for a consultation. We\'ll guide you through everything else and provide a clear project scope.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    service: 'Website Development', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [agreed, setAgreed] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: 'Website Development', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm font-semibold text-gray-800 placeholder-gray-400 transition-all outline-none focus:ring-2";
  const inputStyle = { background: '#f8fafc', border: '1.5px solid rgba(0,0,0,0.08)' };
  const labelStyle = { fontSize: '0.67rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' as const, letterSpacing: '0.1em', display: 'block', marginBottom: '0.45rem' };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(160deg, #fff1f2 0%, #ffffff 60%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full" style={{ background: 'rgba(244,63,94,0.07)', filter: 'blur(120px)' }} />
          <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] rounded-full" style={{ background: 'rgba(249,115,22,0.06)', filter: 'blur(100px)' }} />
          <div className="absolute inset-0 grid-pattern opacity-40" />
        </div>

        <div className="container relative z-10 text-center">
          <span className="badge mb-5" style={{ background: 'rgba(249,115,22,0.08)', color: '#ea580c', borderColor: 'rgba(249,115,22,0.2)' }}>
            Get in Touch
          </span>
          <h1 className="text-brand-navy mb-4">
            Let&apos;s <span className="gradient-text">Get Started</span>
          </h1>
          <div className="section-divider section-divider-center" />
          <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-xl mx-auto mb-12">
            Ready to grow your business online? Get in touch for a free consultation — no commitment required.
          </p>

          {/* Trust chips */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Free Consultation', color: '#f97316' },
              { label: 'Response in &lt;2hrs', color: '#6366f1' },
              { label: 'No Long Contracts', color: '#10b981' },
              { label: '4.8★ Rated Agency', color: '#ec4899' },
            ].map((chip, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '5px 14px', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 700, color: chip.color, background: `${chip.color}10`, border: `1.5px solid ${chip.color}25` }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: chip.color, flexShrink: 0 }} />
                <span dangerouslySetInnerHTML={{ __html: chip.label }} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Info ───────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden" style={{ background: '#ffffff' }}>
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 max-w-6xl mx-auto items-stretch">

            {/* ── Form Card ── */}
            <div
              className="rounded-3xl overflow-hidden flex flex-col h-full"
              style={{ background: '#ffffff', border: '1.5px solid rgba(0,0,0,0.06)', boxShadow: '0 8px 40px rgba(0,0,0,0.06)', borderTop: '3px solid #f97316' }}
            >
              <div className="p-8 sm:p-10 flex flex-col flex-1">
                <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)', fontWeight: 900, color: '#111827', letterSpacing: '-0.03em', marginBottom: '0.4rem' }}>
                  Send Us a Message
                </h2>
                <p style={{ fontSize: '0.85rem', color: '#9ca3af', fontWeight: 500, marginBottom: '2rem' }}>
                  Fill in the details below and we&apos;ll get back to you within 2 hours.
                </p>

                {/* Success banner */}
                {submitStatus === 'success' && (
                  <div style={{ marginBottom: '1.5rem', padding: '1rem 1.25rem', borderRadius: '14px', background: 'rgba(16,185,129,0.08)', border: '1.5px solid rgba(16,185,129,0.25)', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <svg style={{ width: '0.7rem', height: '0.7rem', color: 'white' }} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.85rem', fontWeight: 800, color: '#065f46', marginBottom: '0.2rem' }}>Message sent successfully!</p>
                      <p style={{ fontSize: '0.78rem', color: '#6b7280', fontWeight: 500 }}>We&apos;ll get back to you within 2 hours on business days.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col flex-1">
                  {/* Row 1: Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" style={labelStyle}>Your Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                        className={inputClass} style={inputStyle} placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" style={labelStyle}>Email Address *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                        className={inputClass} style={inputStyle} placeholder="john@example.com" />
                    </div>
                  </div>

                  {/* Row 2: Phone */}
                  <div className="mb-4">
                    <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                      className={inputClass} style={inputStyle} placeholder="+91 93448 32658" />
                  </div>

                  {/* Service */}
                  <div className="mb-4">
                    <label htmlFor="service" style={labelStyle}>Service Interested In *</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} required
                      className={inputClass} style={inputStyle}>
                      <option>Website Development</option>
                      <option>Website Redesign</option>
                      <option>Web Application</option>
                      <option>Mobile Application</option>
                      <option>Support &amp; Maintenance</option>
                      <option>Hosting</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="message" style={labelStyle}>Project Details *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4}
                      className={inputClass} style={{ ...inputStyle, resize: 'none' as const }}
                      placeholder="Tell us about your project goals and timeline..." />
                  </div>

                  {/* Consent checkbox */}
                  <div className="mb-5">
                    <label
                      style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}
                    >
                      <div style={{ position: 'relative', flexShrink: 0, marginTop: '1px' }}>
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                          required
                          style={{ position: 'absolute', opacity: 0, width: '18px', height: '18px', cursor: 'pointer', margin: 0 }}
                        />
                        <div style={{
                          width: '18px', height: '18px', borderRadius: '5px',
                          border: agreed ? '2px solid #f97316' : '2px solid rgba(0,0,0,0.18)',
                          background: agreed ? 'linear-gradient(135deg,#f97316,#ec4899)' : '#fff',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transition: 'all 200ms',
                        }}>
                          {agreed && (
                            <svg style={{ width: '10px', height: '10px', color: '#fff', flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span style={{ fontSize: '0.78rem', color: '#6b7280', lineHeight: 1.65, fontWeight: 500 }}>
                        By clicking Submit you agree to our{' '}
                        <a href="/terms" style={{ color: '#f97316', fontWeight: 700, textDecoration: 'none' }}>Terms &amp; Conditions</a>
                        {' '}and{' '}
                        <a href="/privacy" style={{ color: '#f97316', fontWeight: 700, textDecoration: 'none' }}>Privacy Policy</a>.
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !agreed}
                    className="w-full flex items-center justify-center gap-2 font-bold text-white transition-all hover:scale-[1.01] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0"
                    style={{ padding: '1rem', borderRadius: '14px', background: 'linear-gradient(135deg,#f97316,#ec4899)', boxShadow: '0 8px 28px rgba(249,115,22,0.3)', border: 'none', fontSize: '0.9rem', cursor: 'pointer' }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p style={{ marginTop: '0.85rem', textAlign: 'center', fontSize: '0.68rem', fontWeight: 600, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Free consultation · No commitment required
                  </p>
                </form>
              </div>
            </div>

            {/* ── Info Column ── */}
            <div className="flex flex-col gap-5 h-full">

              {/* Contact details */}
              <div
                className="rounded-3xl p-7 relative overflow-hidden flex-1"
                style={{ background: '#ffffff', border: '1.5px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 24px rgba(0,0,0,0.05)', borderTop: '3px solid #6366f1' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none" style={{ background: 'rgba(99,102,241,0.06)', filter: 'blur(40px)', transform: 'translate(20%,-20%)' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>Contact Information</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { color: '#ec4899', label: 'Location', value: 'Gandhipuram, Coimbatore\nTamil Nadu, India', href: null,
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /> },
                    { color: '#10b981', label: 'Phone', value: '+91 93448 32658', href: 'tel:+919344832658',
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> },
                    { color: '#6366f1', label: 'Email', value: 'nigowebtechnologies@gmail.com', href: 'mailto:nigowebtechnologies@gmail.com',
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: `${item.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg style={{ width: '1.05rem', height: '1.05rem', color: item.color }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <p style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '0.2rem' }}>{item.label}</p>
                        {item.href ? (
                          <a href={item.href} style={{ fontSize: '0.83rem', fontWeight: 700, color: '#111827', textDecoration: 'none', wordBreak: 'break-all' as const }}>{item.value}</a>
                        ) : (
                          <p style={{ fontSize: '0.83rem', fontWeight: 700, color: '#111827', whiteSpace: 'pre-line' as const }}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business hours */}
              <div
                className="rounded-3xl p-7 relative overflow-hidden"
                style={{ background: '#ffffff', border: '1.5px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 24px rgba(0,0,0,0.05)', borderTop: '3px solid #10b981' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.1rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg style={{ width: '1.05rem', height: '1.05rem', color: '#10b981' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}>Business Hours</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM', active: true },
                    { day: 'Saturday', time: '10:00 AM – 4:00 PM', active: true },
                    { day: 'Sunday', time: 'Closed', active: false },
                  ].map((row, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0.75rem', borderRadius: '10px', background: i % 2 === 0 ? 'rgba(0,0,0,0.02)' : 'transparent' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#6b7280' }}>{row.day}</span>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: row.active ? '#111827' : '#f87171' }}>{row.time}</span>
                    </div>
                  ))}
                </div>
                <p style={{ marginTop: '0.85rem', fontSize: '0.68rem', fontWeight: 600, color: '#cbd5e1' }}>
                  * WhatsApp messages answered within 2 hours on business days
                </p>
              </div>

              {/* Quick contact */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <a
                  href="https://wa.me/919344832658?text=Hi!%20I'd%20like%20to%20discuss%20a%20project"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 font-bold text-white transition-all hover:scale-[1.02] hover:-translate-y-0.5"
                  style={{ padding: '0.9rem 1.5rem', borderRadius: '14px', background: 'linear-gradient(135deg,#22c55e,#16a34a)', boxShadow: '0 6px 20px rgba(34,197,94,0.28)', textDecoration: 'none', fontSize: '0.87rem' }}
                >
                  <svg style={{ width: '1.1rem', height: '1.1rem', fill: '#fff', flexShrink: 0 }} viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Message on WhatsApp
                </a>
                <a
                  href="tel:+919344832658"
                  className="flex items-center justify-center gap-2.5 font-bold transition-all hover:scale-[1.02] hover:-translate-y-0.5"
                  style={{ padding: '0.9rem 1.5rem', borderRadius: '14px', background: '#ffffff', border: '1.5px solid rgba(0,0,0,0.1)', color: '#111827', textDecoration: 'none', fontSize: '0.87rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                >
                  <svg style={{ width: '1rem', height: '1rem', color: '#6366f1' }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us Now
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="navy-section relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'rgba(99,102,241,0.12)', filter: 'blur(140px)', transform: 'translate(20%,-20%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'rgba(249,115,22,0.07)', filter: 'blur(120px)', transform: 'translate(-20%,20%)' }} />

        <div className="container relative z-10">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fb923c' }} />
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.5)' }}>Common Questions</span>
            </span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#ffffff', lineHeight: 1.2 }}>
              Frequently Asked <span className="gradient-text-warm">Questions</span>
            </h2>
          </div>

          <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '18px',
                  background: openFaq === i ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
                  border: openFaq === i ? '1.5px solid rgba(255,255,255,0.14)' : '1.5px solid rgba(255,255,255,0.06)',
                  overflow: 'hidden',
                  transition: 'all 300ms',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1.1rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' as const }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                    <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.62rem', fontWeight: 900, color: '#fb923c' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ fontSize: '0.93rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.4 }}>{faq.q}</span>
                  </div>
                  <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1rem', fontWeight: 300, color: 'rgba(255,255,255,0.6)', transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 300ms' }}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 1.5rem 1.25rem 4.25rem' }}>
                    <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontWeight: 450 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
