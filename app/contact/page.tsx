'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, Clock, MapPin, CheckCircle2, MessageSquareText } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Sales & Product Inquiries',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <main className="subpage">
      <Header />

      <section className="subpage-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Contact Us</span>
        </div>
        <p className="subpage-eyebrow">WE ARE HERE TO HELP</p>
        <h1 className="subpage-title">Get in Touch with Our Specialists</h1>
        <p className="subpage-intro">
          Whether you need tile quantity advice, delivery status updates, trade pricing or bespoke design consultations, our friendly team is ready to assist.
        </p>
      </section>

      <section className="subpage-content">
        <div className="page-grid-3" style={{ marginBottom: '56px' }}>
          <div className="feature-card">
            <div className="feature-card-icon"><Phone size={22} /></div>
            <h3>Call Us</h3>
            <p><strong>0345 646 2495</strong></p>
            <p style={{ fontSize: '13px', margin: 0 }}>Monday – Friday: 9:00 am – 5:00 pm<br />Saturday: 10:00 am – 4:00 pm</p>
          </div>

          <div className="feature-card">
            <div className="feature-card-icon"><Mail size={22} /></div>
            <h3>Email Support</h3>
            <p><strong>hello@webnibo.com</strong></p>
            <p style={{ fontSize: '13px', margin: 0 }}>We aim to respond to all project inquiries within 24 business hours.</p>
          </div>

          <div className="feature-card">
            <div className="feature-card-icon"><MapPin size={22} /></div>
            <h3>Visit Showrooms</h3>
            <p><strong>Over 25 Showrooms Across the UK</strong></p>
            <p style={{ fontSize: '13px', margin: 0 }}>
              <Link href="/showrooms" style={{ color: '#ac6543', textDecoration: 'underline' }}>
                Find your nearest showroom locator &rarr;
              </Link>
            </p>
          </div>
        </div>

        <div className="page-grid-2" style={{ alignItems: 'start' }}>
          <div className="contact-form-card">
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: 400, marginTop: 0, marginBottom: '8px' }}>
              Send an Inquiry
            </h2>
            <p style={{ color: '#627080', fontSize: '14px', marginBottom: '28px' }}>
              Fill out the details below and a dedicated specialist from our team will contact you.
            </p>

            {submitted ? (
              <div style={{ padding: '36px 20px', textAlign: 'center', background: '#fff', border: '1px solid #78837b', borderRadius: '3px' }}>
                <CheckCircle2 size={44} style={{ color: '#279A4B', margin: '0 auto 14px' }} />
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', margin: '0 0 10px' }}>Message Received</h3>
                <p style={{ color: '#627080', fontSize: '14px', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 20px' }}>
                  Thank you, <strong>{formData.name}</strong>. Your message regarding <em>{formData.department}</em> has been routed to our team. We will get back to you shortly at <strong>{formData.email}</strong>.
                </p>
                <button className="btn-secondary" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      className="form-input"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      className="form-input"
                      required
                      placeholder="e.g. eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input
                      id="phone"
                      type="tel"
                      className="form-input"
                      placeholder="e.g. 07123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <select
                      id="department"
                      className="form-select"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    >
                      <option>Sales &amp; Product Inquiries</option>
                      <option>Existing Order &amp; Delivery</option>
                      <option>Technical Advice &amp; Installation</option>
                      <option>Sample Request Support</option>
                      <option>Trade &amp; Commercial Accounts</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message or Project Details *</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="form-textarea"
                    required
                    placeholder="Tell us about room dimensions, tile names, or any questions you have..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Submit Inquiry <MessageSquareText size={16} />
                </button>
              </form>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ background: 'var(--cream)', padding: '32px', borderRadius: '2px', border: '1px solid var(--line)' }}>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '20px', marginTop: 0, marginBottom: '10px' }}>
                Need Immediate Answers?
              </h3>
              <p style={{ color: '#627080', fontSize: '14px', lineHeight: 1.6, marginBottom: '16px' }}>
                Check out our comprehensive technical guides covering subfloor preparation, wet room waterproofing, adhesive choices, and sealing terracotta.
              </p>
              <Link href="/guides" className="btn-secondary" style={{ width: '100%' }}>
                Browse Technical Guides
              </Link>
            </div>

            <div style={{ background: '#fff', padding: '32px', borderRadius: '2px', border: '1px solid var(--line)' }}>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '20px', marginTop: 0, marginBottom: '10px' }}>
                Trade &amp; Architectural Services
              </h3>
              <p style={{ color: '#627080', fontSize: '14px', lineHeight: 1.6, marginBottom: '16px' }}>
                Are you an interior designer, builder, or architect? Apply for exclusive trade privileges, volume discounts, and dedicated specification assistance.
              </p>
              <Link href="/trade" className="btn-secondary" style={{ width: '100%' }}>
                Visit Trade Portal
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
