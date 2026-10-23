'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TradeTermsPage() {
  return (
    <main className="subpage">
      <Header />

      <section className="subpage-hero dark-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/trade">Trade</Link>
          <span>/</span>
          <span>Trade Terms</span>
        </div>
        <p className="subpage-eyebrow" style={{ color: '#d9a57b' }}>COMMERCIAL AGREEMENT</p>
        <h1 className="subpage-title">Trade Terms &amp; Conditions</h1>
        <p className="subpage-intro">
          Specific conditions and credit parameters governing commercial and professional trade accounts with webnibo.
        </p>
      </section>

      <section className="subpage-content" style={{ maxWidth: '860px' }}>
        <div style={{ background: '#fff', border: '1px solid var(--line)', padding: '40px', borderRadius: '4px', lineHeight: 1.8, color: '#4a5568', fontSize: '15px' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '24px', marginTop: 0 }}>1. Trade Account Eligibility</h2>
          <p>
            Trade discounts and credit facilities are strictly offered to bona fide businesses operating within the interior design, architecture, construction, property development, or professional tile fixing trades.
          </p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '24px', marginTop: '32px' }}>2. Pricing &amp; Quotations</h2>
          <p>
            All trade quotes are exclusive of VAT unless explicitly stated and remain valid for 30 calendar days. Trade discounts cannot be combined with clearance promotional codes or end-of-line stock clearances unless authorized in writing.
          </p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '24px', marginTop: '32px' }}>3. Batch Reservation &amp; Warehousing</h2>
          <p>
            To guarantee batch matching across large residential or hospitality developments, webnibo can reserve specific production batches at our central depot for up to 60 days following deposit payment.
          </p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '24px', marginTop: '32px' }}>4. Site Deliveries</h2>
          <p>
            Direct-to-site deliveries require pre-notification of access restrictions (e.g. low bridges, residential bollards, or narrow mews). Re-delivery charges apply where site conditions prevent safe pallet offloading.
          </p>

          <div style={{ marginTop: '36px', borderTop: '1px solid var(--line)', paddingTop: '20px' }}>
            <Link href="/trade" className="btn-primary">Apply for Trade Account</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
