'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ModernSlaveryPage() {
  return (
    <main className="subpage">
      <Header />

      <section className="subpage-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Modern Slavery Statement</span>
        </div>
        <p className="subpage-eyebrow">ETHICAL SUPPLY CHAIN</p>
        <h1 className="subpage-title">Modern Slavery Statement</h1>
        <p className="subpage-intro">
          Our commitment to eradicating modern slavery and human trafficking across all global artisan supply chains.
        </p>
      </section>

      <section className="subpage-content" style={{ maxWidth: '860px' }}>
        <div style={{ background: '#fff', border: '1px solid var(--line)', padding: '40px', borderRadius: '4px', lineHeight: 1.8, color: '#4a5568', fontSize: '15px' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '24px', marginTop: 0 }}>1. Statement of Intent</h2>
          <p>
            webnibo recognizes our moral and statutory responsibility under the Modern Slavery Act 2015 to ensure that modern slavery, servitude, forced labour, and human trafficking have no place in our direct operations or global supply chains.
          </p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '24px', marginTop: '32px' }}>2. Artisan &amp; Quarry Audits</h2>
          <p>
            We maintain intimate relationships with our partner tile kilns and stone quarries in the UK, Spain, Italy, Portugal, and Morocco. Our procurement teams conduct regular on-site visits to inspect working conditions, fair living wages, and health &amp; safety standards.
          </p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '24px', marginTop: '32px' }}>3. Due Diligence &amp; Whistleblowing</h2>
          <p>
            All commercial suppliers must sign and adhere to our strict Code of Ethical Conduct before supplying raw pigments, clay bodies, or finished stone products.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
