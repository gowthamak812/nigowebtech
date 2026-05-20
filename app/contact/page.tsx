'use client';

import { useState } from 'react';
import CTAButton from '@/components/CTAButton';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'Website Development',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: 'Website Development',
                message: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            {/* Contact Hero */}
            <section className="section pt-32 pb-20 bg-gradient-to-b from-brand-cream to-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-brand-rose/5 rounded-full blur-[100px] animate-pulse [animation-delay:2s]"></div>
                </div>

                <div className="container relative z-10 text-center">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <span className="badge">Get in Touch</span>
                        <h1 className="text-brand-navy">
                            Let's <span className="gradient-text">Get Started</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed">
                            Ready to grow your business online? Get in touch for a free consultation and project scope.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info Bento */}
            <section className="section bg-white pt-0">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
                        {/* Contact Form Container */}
                        <div className="card p-10 hover:border-gray-250">
                            <h2 className="text-2xl font-black text-brand-navy mb-6">Send us a Message</h2>

                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-emerald-50 border border-brand-green/30 rounded-xl text-brand-green">
                                    <div className="flex items-center gap-2.5 mb-1.5">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <strong className="text-sm font-bold uppercase tracking-wider">Message sent successfully!</strong>
                                    </div>
                                    <p className="text-xs text-gray-500 font-semibold leading-relaxed">We'll get back to you within 24 hours.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200/80 rounded-xl focus:bg-white focus:border-brand-rose focus:ring-4 focus:ring-brand-rose/5 text-sm font-semibold text-brand-navy transition-all outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200/80 rounded-xl focus:bg-white focus:border-brand-rose focus:ring-4 focus:ring-brand-rose/5 text-sm font-semibold text-brand-navy transition-all outline-none"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200/80 rounded-xl focus:bg-white focus:border-brand-rose focus:ring-4 focus:ring-brand-rose/5 text-sm font-semibold text-brand-navy transition-all outline-none"
                                        placeholder="+91 9344832658"
                                    />
                                </div>

                                {/* Company */}
                                <div>
                                    <label htmlFor="company" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200/80 rounded-xl focus:bg-white focus:border-brand-rose focus:ring-4 focus:ring-brand-rose/5 text-sm font-semibold text-brand-navy transition-all outline-none"
                                        placeholder="Your Company"
                                    />
                                </div>

                                {/* Service */}
                                <div>
                                    <label htmlFor="service" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                                        Service Interested In *
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200/80 rounded-xl focus:bg-white focus:border-brand-rose focus:ring-4 focus:ring-brand-rose/5 text-sm font-semibold text-brand-navy transition-all outline-none"
                                    >
                                        <option value="Website Development">Website Development</option>
                                        <option value="Website Redesign">Website Redesign</option>
                                        <option value="Web Application">Web Application</option>
                                        <option value="Mobile Application">Mobile Application</option>
                                        <option value="Support & Maintenance">Support & Maintenance</option>
                                        <option value="Hosting">Hosting</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                                        Project Details *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200/80 rounded-xl focus:bg-white focus:border-brand-rose focus:ring-4 focus:ring-brand-rose/5 text-sm font-semibold text-brand-navy transition-all outline-none resize-none"
                                        placeholder="Tell us about your project goals and timeline..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed justify-center py-3.5 bg-gradient-to-r from-brand-orange to-brand-rose border-none text-white text-xs font-bold uppercase tracking-wider shadow-md"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Send Message
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </span>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information Column */}
                        <div className="space-y-8">
                            <div className="card p-10 hover:border-gray-250">
                                <h2 className="text-2xl font-black text-brand-navy mb-6">Contact Information</h2>

                                <div className="space-y-6">
                                    {/* Location */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-brand-rose/10 flex items-center justify-center flex-shrink-0 text-brand-rose">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-brand-navy mb-1.5 uppercase tracking-wider">Location</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                Gandhipuram, Coimbatore<br />
                                                Tamil Nadu, India
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0 text-brand-green">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-brand-navy mb-1.5 uppercase tracking-wider">Phone</h3>
                                            <a href="tel:+919344832658" className="text-gray-500 text-sm hover:text-brand-green font-semibold transition-colors">
                                                +91 93448 32658
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0 text-brand-blue">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-brand-navy mb-1.5 uppercase tracking-wider">Email</h3>
                                            <a href="mailto:nigowebtechnologies@gmail.com" className="text-gray-500 text-sm hover:text-brand-blue font-semibold transition-colors break-all">
                                                nigowebtechnologies@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="card p-10 hover:border-gray-250">
                                <h3 className="text-lg font-black text-brand-navy mb-4">Business Hours</h3>
                                <div className="space-y-2.5 text-sm text-gray-500">
                                    <div className="flex justify-between font-semibold">
                                        <span>Monday - Friday:</span>
                                        <span className="text-brand-navy">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between font-semibold">
                                        <span>Saturday:</span>
                                        <span className="text-brand-navy">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between font-semibold">
                                        <span>Sunday:</span>
                                        <span className="text-brand-rose">Closed</span>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 font-semibold mt-4">
                                    * We respond to emails and WhatsApp messages within 24 hours
                                </p>
                            </div>

                            {/* Quick Connections */}
                            <div className="card p-10 hover:border-gray-250 flex flex-col gap-4">
                                <h3 className="text-lg font-black text-brand-navy">Quick Contact</h3>
                                <a
                                    href="https://wa.me/919344832658?text=Hi!%20I'd%20like%20to%20discuss%20a%20project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary w-full text-center py-3.5 bg-emerald-500 hover:bg-emerald-600 border-none text-white text-xs font-bold uppercase tracking-wider shadow-md"
                                >
                                    Message on WhatsApp
                                </a>
                                <a
                                    href="tel:+919344832658"
                                    className="btn btn-outline w-full text-center py-3.5 text-brand-navy border-brand-navy/15 text-xs font-bold uppercase tracking-wider"
                                >
                                    Call Us Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Area */}
            <section className="section py-0 bg-gray-50">
                <div className="w-full h-80 bg-gray-100 flex items-center justify-center border-y border-gray-200/50">
                    <div className="text-center space-y-2">
                        <div className="text-4xl">📍</div>
                        <p className="text-brand-navy font-black text-sm uppercase tracking-wider">
                            Gandhipuram, Coimbatore, Tamil Nadu
                        </p>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                            Map Integration Active
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="section bg-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center">
                            <span className="badge mb-3">Support FAQ</span>
                            <h2 className="text-brand-navy font-black text-3xl">Frequently Asked Questions</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="card hover:border-gray-200">
                                <h3 className="font-bold text-brand-navy mb-2 text-base">How long does it take to build a website?</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Typically 2-4 weeks for a business website, depending on complexity and content readiness.
                                    Web applications may take 6-12 weeks. We'll provide a detailed timeline during consultation.
                                </p>
                            </div>

                            <div className="card hover:border-gray-200">
                                <h3 className="font-bold text-brand-navy mb-2 text-base">Do you provide ongoing support?</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Yes! We offer flexible support packages including daily monitoring, security updates,
                                    content changes, and technical assistance. Check our pricing page for details.
                                </p>
                            </div>

                            <div className="card hover:border-gray-200">
                                <h3 className="font-bold text-brand-navy mb-2 text-base">Can you redesign my existing website?</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Absolutely! We specialize in modernizing old websites with new technology, better SEO,
                                    and improved performance. We'll migrate your content and make it faster and more effective.
                                </p>
                            </div>

                            <div className="card hover:border-gray-200">
                                <h3 className="font-bold text-brand-navy mb-2 text-base">Do you work with clients outside Coimbatore?</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Yes! We serve clients across India. Our remote-first approach means we can work with you
                                    effectively regardless of location, with regular video calls and online collaboration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
