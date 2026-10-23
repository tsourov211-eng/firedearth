'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CompanyInfoPage() {
  return (
    <main className="subpage">
      <Header />

      <section className="subpage-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Company Information</span>
        </div>
        <p className="subpage-eyebrow">CORPORATE DETAILS</p>
        <h1 className="subpage-title">Company Information &amp; Governance</h1>
        <p className="subpage-intro">
          Statutory company identification, registered address, and regulatory details for webnibo.
        </p>
      </section>

      <section className="subpage-content" style={{ maxWidth: '860px' }}>
        <div style={{ background: '#fff', border: '1px solid var(--line)', padding: '40px', borderRadius: '4px', lineHeight: 1.8, color: '#4a5568', fontSize: '15px' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', color: 'var(--ink)', fontSize: '24px', marginTop: 0 }}>webnibo UK Limited</h2>
          
          <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--line)' }}>
                <td style={{ padding: '12px 0', fontWeight: 600, width: '35%' }}>Company Registration No:</td>
                <td style={{ padding: '12px 0' }}>14892015 (Registered in England &amp; Wales)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--line)' }}>
                <td style={{ padding: '12px 0', fontWeight: 600 }}>VAT Registration No:</td>
                <td style={{ padding: '12px 0' }}>GB 984 2190 44</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--line)' }}>
                <td style={{ padding: '12px 0', fontWeight: 600 }}>Registered Office:</td>
                <td style={{ padding: '12px 0' }}>Twyford Mill, Oxford Road, Adderbury, Oxfordshire OX17 3HP</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--line)' }}>
                <td style={{ padding: '12px 0', fontWeight: 600 }}>Central Logistics Depot:</td>
                <td style={{ padding: '12px 0' }}>Unit 4, Churchill Way Logistics Centre, Nelson, BB9 6RT</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--line)' }}>
                <td style={{ padding: '12px 0', fontWeight: 600 }}>Customer Services Line:</td>
                <td style={{ padding: '12px 0' }}>0345 646 2495</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 0', fontWeight: 600 }}>Electronic Mail:</td>
                <td style={{ padding: '12px 0' }}>hello@webnibo.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </main>
  );
}
