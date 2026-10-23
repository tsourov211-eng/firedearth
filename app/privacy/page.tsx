'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main className="subpage">
      <Header />

      <section className="subpage-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Privacy Policy</span>
        </div>
        <p className="subpage-eyebrow">DATA PROTECTION</p>
        <h1 className="subpage-title">Privacy &amp; Cookie Policy</h1>
        <p className="subpage-intro">
          How webnibo collects, handles, protects, and respects your personal data in accordance with UK GDPR.
        </p>
      </section>

      <section className="subpage-content" style={{ maxWidth: '860px' }}>
        <div style={{ background: '#fff', border: '1px solid var(--line)', padding: '40px', borderRadius: '4px', lineHeight: 1.8, color: '#4a5568', fontSize: '15px' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '24px', marginTop: 0 }}>1. Information We Collect</h2>
          <p>
            When you request free cut samples, order brochures, create an account, or complete an online purchase, we collect your name, shipping address, email address, phone number, and payment transaction details.
          </p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '24px', marginTop: '32px' }}>2. How We Use Your Data</h2>
          <p>
            Your information is used solely to process your tile dispatches, provide tracking updates, communicate regarding sample requests, and optionally provide seasonal design lookbooks if you have consented to our newsletter.
          </p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '24px', marginTop: '32px' }}>3. Cookies &amp; Tracking</h2>
          <p>
            We use essential cookies to maintain your shopping cart selections and preserve your room visualizer swatch choices. We also utilize anonymized analytics to measure site traffic and optimize page performance.
          </p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '24px', marginTop: '32px' }}>4. Data Security</h2>
          <p>
            All payment transactions are encrypted using industry-standard 256-bit SSL protocols. We do not store raw credit card numbers on our local servers.
          </p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '24px', marginTop: '32px' }}>5. Contact Our Data Protection Officer</h2>
          <p>
            For any queries or requests to view or erase your data, contact us at <strong>privacy@webnibo.com</strong>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
