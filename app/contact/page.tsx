'use client';

import type { Metadata } from 'next';
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
            {/* Hero Section */}
            <section className="section pt-32 bg-gradient-to-br from-gray-50 to-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1>
                            Let's <span className="gradient-text">Get Started</span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            Ready to grow your business online? Get in touch for a free consultation and quote.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="section">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold">Send us a Message</h2>

                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green/10 border border-green rounded-lg text-green">
                                    <div className="flex items-center gap-2 mb-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <strong>Message sent successfully!</strong>
                                    </div>
                                    <p className="text-sm">We'll get back to you within 24 hours.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose focus:border-transparent transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose focus:border-transparent transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose focus:border-transparent transition-all"
                                        placeholder="+91 9344832658"
                                    />
                                </div>

                                {/* Company */}
                                <div>
                                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose focus:border-transparent transition-all"
                                        placeholder="Your Company"
                                    />
                                </div>

                                {/* Service */}
                                <div>
                                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Service Interested In *
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose focus:border-transparent transition-all"
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
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Project Details *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose focus:border-transparent transition-all resize-none"
                                        placeholder="Tell us about your project, timeline, and goals..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Send Message
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </span>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

                            <div className="space-y-6 mb-8">
                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-navy-dark mb-1">Location</h3>
                                        <p className="text-gray-600">
                                            Gandhipuram, Coimbatore<br />
                                            Tamil Nadu, India
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-navy-dark mb-1">Phone</h3>
                                        <a href="tel:+919344832658" className="text-gray-600 hover:text-green transition-colors">
                                            +91 9344832658
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-navy-dark mb-1">Email</h3>
                                        <a href="mailto:nigowebtechnologies@gmail.com" className="text-gray-600 hover:text-blue transition-colors break-all">
                                            nigowebtechnologies@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="card mb-8">
                                <h3 className="font-semibold text-navy-dark mb-4">Business Hours</h3>
                                <div className="space-y-2 text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday:</span>
                                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday:</span>
                                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday:</span>
                                        <span className="font-medium">Closed</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-4">
                                    * We respond to emails and WhatsApp messages within 24 hours
                                </p>
                            </div>

                            {/* Quick Contact Buttons */}
                            <div className="space-y-4">
                                <h3 className="font-semibold text-navy-dark mb-4">Quick Contact</h3>
                                <a
                                    href="https://wa.me/919344832658?text=Hi!%20I'd%20like%20to%20discuss%20a%20project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary w-full"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Message on WhatsApp
                                </a>
                                <a
                                    href="tel:+919344832658"
                                    className="btn btn-outline w-full"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Call Us Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="section bg-gray-100 py-0">
                <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-6xl mb-4">📍</div>
                        <p className="text-gray-600 font-medium">
                            Gandhipuram, Coimbatore, Tamil Nadu
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            (Map integration placeholder)
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-center mb-12">
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h2>

                        <div className="space-y-6">
                            <div className="card">
                                <h3 className="font-semibold text-navy-dark mb-2">How long does it take to build a website?</h3>
                                <p className="text-gray-600">
                                    Typically 2-4 weeks for a business website, depending on complexity and content readiness.
                                    Web applications may take 6-12 weeks. We'll provide a detailed timeline during consultation.
                                </p>
                            </div>

                            <div className="card">
                                <h3 className="font-semibold text-navy-dark mb-2">Do you provide ongoing support?</h3>
                                <p className="text-gray-600">
                                    Yes! We offer flexible support packages including daily monitoring, security updates,
                                    content changes, and technical assistance. Check our pricing page for details.
                                </p>
                            </div>

                            <div className="card">
                                <h3 className="font-semibold text-navy-dark mb-2">Can you redesign my existing website?</h3>
                                <p className="text-gray-600">
                                    Absolutely! We specialize in modernizing old websites with new technology, better SEO,
                                    and improved performance. We'll migrate your content and make it faster and more effective.
                                </p>
                            </div>

                            <div className="card">
                                <h3 className="font-semibold text-navy-dark mb-2">Do you work with clients outside Coimbatore?</h3>
                                <p className="text-gray-600">
                                    Yes! We serve clients across India. Our remote-first approach means we can work with you
                                    effectively regardless of location, with regular video calls and online collaboration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-primary text-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-white mb-6">Still Have Questions?</h2>
                        <p className="text-xl mb-8 opacity-95">
                            We're here to help! Reach out via WhatsApp, phone, or email and we'll get back to you within 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton
                                href="https://wa.me/919344832658?text=Hi!%20I%20have%20a%20question%20about%20your%20services"
                                variant="outline"
                                external
                            >
                                <span className="text-white">WhatsApp Us</span>
                            </CTAButton>
                            <CTAButton href="/services" variant="outline">
                                <span className="text-white">View Services</span>
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
