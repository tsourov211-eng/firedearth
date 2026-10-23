'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Briefcase, Percent, Truck, Users, CheckCircle, ShieldCheck } from 'lucide-react';

export default function TradePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    profession: 'Interior Designer',
    vat: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.company && form.name && form.email) {
      setSubmitted(true);
    }
  };

  return (
    <main className="subpage">
      <Header />

      <section className="subpage-hero dark-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Trade &amp; Commercial</span>
        </div>
        <p className="subpage-eyebrow" style={{ color: '#d9a57b' }}>PROFESSIONAL PARTNERSHIP</p>
        <h1 className="subpage-title">The webnibo Trade Programme</h1>
        <p className="subpage-intro">
          Designed specifically for interior designers, architects, residential builders, and commercial project managers who require uncompromising material quality and reliable specification support.
        </p>
      </section>

      <section className="subpage-content">
        <div className="page-grid-4" style={{ marginBottom: '64px' }}>
          <div className="feature-card">
            <div className="feature-card-icon"><Percent size={22} /></div>
            <h3>Exclusive Trade Rates</h3>
            <p>Enjoy preferential tiered discounts across our entire catalogue of handcrafted tiles, natural stones, and paints.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon"><Truck size={22} /></div>
            <h3>Complimentary Samples</h3>
            <p>Priority express delivery of full-size tile samples and curated paint swatches dispatched directly to your client studio.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon"><Users size={22} /></div>
            <h3>Dedicated Account Manager</h3>
            <p>A single point of contact to assist with batch reserving, technical scheduling, subfloor advice, and site logistics.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon"><ShieldCheck size={22} /></div>
            <h3>Commercial Specifications</h3>
            <p>Complete slip-rating certificates (PTV / R-ratings), frost-proof ratings, and NBS specifications for commercial builds.</p>
          </div>
        </div>

        <div className="page-grid-2" style={{ alignItems: 'start' }}>
          <div>
            <span style={{ color: '#ac6543', fontWeight: 700, fontSize: '12px', letterSpacing: '2px' }}>BECOME A TRADE PARTNER</span>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: 400, margin: '14px 0 20px' }}>
              Apply for a Trade Account
            </h2>
            <p style={{ color: '#627080', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
              We review applications within 24 hours. Once verified, your account manager will issue your trade credentials and terms.
            </p>
            <div style={{ background: 'var(--cream)', padding: '24px', borderRadius: '4px', marginBottom: '20px' }}>
              <h4 style={{ margin: '0 0 10px', fontSize: '15px' }}>Eligible Professions:</h4>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#627080', fontSize: '14px', lineHeight: 1.8 }}>
                <li>Interior Designers &amp; Interior Architects</li>
                <li>Architects &amp; Architectural Technicians</li>
                <li>Residential &amp; Commercial Developers</li>
                <li>General Contractors &amp; Specialist Tile Fixers</li>
                <li>Hotel &amp; Hospitality Project Specifiers</li>
              </ul>
            </div>
            <p style={{ fontSize: '13px', color: '#77818d' }}>
              Read our <Link href="/terms/trade" style={{ color: '#ac6543', textDecoration: 'underline' }}>Trade Terms and Conditions</Link>.
            </p>
          </div>

          <div className="contact-form-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <CheckCircle size={44} style={{ color: '#279A4B', margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', margin: '0 0 12px' }}>Application Submitted</h3>
                <p style={{ color: '#627080', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Thank you, <strong>{form.name}</strong> from <strong>{form.company}</strong>. Our commercial team is reviewing your details and will activate your trade account within one business day.
                </p>
                <button className="btn-secondary" onClick={() => setSubmitted(false)}>
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Company / Practice Name *</label>
                    <input
                      className="form-input"
                      required
                      placeholder="e.g. Studio Vance Interiors"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      className="form-input"
                      required
                      placeholder="e.g. Thomas Vance"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Professional Email *</label>
                    <input
                      type="email"
                      className="form-input"
                      required
                      placeholder="thomas@studiovance.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact Phone</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="07123 456789"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Profession / Trade</label>
                    <select
                      className="form-select"
                      value={form.profession}
                      onChange={(e) => setForm({ ...form, profession: e.target.value })}
                    >
                      <option>Interior Designer</option>
                      <option>Architect</option>
                      <option>Property Developer</option>
                      <option>Builder / Contractor</option>
                      <option>Tile Installer / Specialist</option>
                      <option>Hospitality Specifier</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Company Registration or VAT (Optional)</label>
                    <input
                      className="form-input"
                      placeholder="GB 123 4567 89"
                      value={form.vat}
                      onChange={(e) => setForm({ ...form, vat: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Current or Upcoming Project Notes</label>
                  <textarea
                    rows={3}
                    className="form-textarea"
                    placeholder="Briefly describe your project type, rough square meterage, or required tile types..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Submit Trade Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
