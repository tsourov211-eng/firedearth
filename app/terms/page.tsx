'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main className="subpage">
      <Header />

      <section className="subpage-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Terms &amp; Conditions</span>
        </div>
        <p className="subpage-eyebrow">LEGAL AGREEMENT</p>
        <h1 className="subpage-title">Terms &amp; Conditions of Sale</h1>
        <p className="subpage-intro">
          Please read these terms carefully before ordering tiles, paint, or sample items from webnibo.
        </p>
      </section>

      <section className="subpage-content" style={{ maxWidth: '860px' }}>
        <div style={{ background: '#fff', border: '1px solid var(--line)', padding: '40px', borderRadius: '4px', lineHeight: 1.8, color: '#4a5568', fontSize: '15px' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '24px', marginTop: 0 }}>1. Natural Material Variations</h2>
          <p>
            Tiles made from clay (terracotta, ceramic, earthenware) or quarried stone (limestone, marble, slate) are natural or handcrafted products. Colour nuances, shade variation, slight dimensional tolerance (&plusmn;1-2mm), and surface undulations are characteristic features of authentic tiles and do not constitute defects.
          </p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '24px', marginTop: '32px' }}>2. Ordering &amp; Cutting Allowance</h2>
          <p>
            We strongly recommend adding a minimum of <strong>10% to 15% wastage allowance</strong> to your net room calculations to cover cutting, edge pieces, and future maintenance. Re-ordering tiles at a later date may originate from different kiln production batches, which can carry subtle shade variations.
          </p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '24px', marginTop: '32px' }}>3. Kerbside Pallet Delivery</h2>
          <p>
            Deliveries are made to the kerbside or hard flat vehicular driveway nearest to your property. Transport personnel are not insured to move products into buildings or private residences. Ensure access routes can accommodate an 18-tonne lorry.
          </p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '24px', marginTop: '32px' }}>4. Inspection Prior to Fixing</h2>
          <p>
            Tiles must be thoroughly inspected before installation. Installation constitutes acceptance of the product&apos;s shade, size, and grade. webnibo cannot accept liability for fixing costs, adhesive, or replacement tiles once installed.
          </p>

          <h2 style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '24px', marginTop: '32px' }}>5. Cancellations &amp; Returns</h2>
          <p>
            You have the statutory right under the Consumer Contracts Regulations to cancel your order within 14 days of receipt. Returns must consist of complete, unopened boxes in original factory packaging delivered back to our central warehouse depot.
          </p>

          <div style={{ marginTop: '36px', borderTop: '1px solid var(--line)', paddingTop: '20px', display: 'flex', gap: '20px' }}>
            <Link href="/terms/trade" style={{ color: '#ac6543', textDecoration: 'underline' }}>View Trade Terms &rarr;</Link>
            <Link href="/privacy" style={{ color: '#ac6543', textDecoration: 'underline' }}>View Privacy Policy &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
