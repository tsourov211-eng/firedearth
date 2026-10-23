'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HelpCircle, ChevronDown, Phone, Mail, FileText, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: 'How does your complimentary sample service work?',
    a: 'You can order up to four cut tile samples free of charge directly from any product page or via our brochure request form. Samples are dispatched via Royal Mail Tracked 48 and usually arrive within 2-3 business days.',
  },
  {
    q: 'How are heavy tile orders delivered to my house?',
    a: 'Tile orders weighing over 30 kg are packed securely on wooden pallets and delivered via tail-lift lorries to the kerbside or hard flat driveway. Drivers cannot navigate gravel, steps, or carry boxes inside the home.',
  },
  {
    q: 'Do I need to seal my terracotta or natural stone tiles?',
    a: 'Yes. Natural unglazed terracotta, tumbled limestone, slate, and marble are naturally porous and must be treated with an impregnating sealer (such as Lithofin or Fila) prior to and after grouting to prevent staining.',
  },
  {
    q: 'Are your tiles suitable for underfloor heating?',
    a: 'Almost all of our porcelain, natural stone, and terracotta tiles are exceptional thermal conductors and fully compatible with water-based and electric underfloor heating systems. We recommend using an anti-fracture de-coupling matting (such as Schluter Ditra) before fixing.',
  },
  {
    q: 'What is your returns policy for leftover tiles?',
    a: 'We accept returns of full, unopened boxes within 14 days of delivery. Due to natural batch dye-lot variations between kiln firings, we cannot accept returns of loose individual tiles or open boxes.',
  },
  {
    q: 'Can I visit a showroom to view full tile boards?',
    a: 'Yes! We have showrooms across the UK displaying full-scale tile installations, bathroom suites, and large paint swatches. You can walk in or book a free 1-on-1 consultation with our in-house design team.',
  },
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="subpage">
      <Header />

      <section className="subpage-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Support &amp; FAQs</span>
        </div>
        <p className="subpage-eyebrow">HELP CENTRE</p>
        <h1 className="subpage-title">Frequently Asked Questions &amp; Support</h1>
        <p className="subpage-intro">
          Find immediate answers to common questions about sample requests, pallet deliveries, tile sealing, and underfloor heating.
        </p>
      </section>

      <section className="subpage-content">
        <div className="page-grid-2" style={{ alignItems: 'start', gap: '48px', marginBottom: '64px' }}>
          <div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: 400, marginTop: 0, marginBottom: '24px' }}>
              Common Questions Answered
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    style={{
                      border: '1px solid var(--line)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      background: '#fff',
                    }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      style={{
                        width: '100%',
                        padding: '18px 22px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: isOpen ? 'var(--cream)' : '#fff',
                        border: 0,
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '15px',
                        fontWeight: 600,
                        color: 'var(--ink)',
                      }}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s',
                          color: '#ac6543',
                          flexShrink: 0,
                        }}
                      />
                    </button>
                    {isOpen && (
                      <div style={{ padding: '20px 22px', fontSize: '14px', lineHeight: 1.7, color: '#627080', borderTop: '1px solid var(--line)' }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ background: 'var(--cream)', padding: '36px', borderRadius: '4px', border: '1px solid var(--line)' }}>
              <div className="feature-card-icon" style={{ background: '#fff', marginBottom: '14px' }}>
                <Phone size={22} />
              </div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', margin: '0 0 10px', fontWeight: 400 }}>
                Speak to Our Advisors
              </h3>
              <p style={{ color: '#627080', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                Call our friendly customer service desk at <strong>0345 646 2495</strong> (Monday – Friday, 9:00 am – 5:00 pm).
              </p>
              <Link href="/contact" className="btn-primary" style={{ width: '100%' }}>
                Contact Customer Care
              </Link>
            </div>

            <div style={{ background: '#fff', padding: '36px', borderRadius: '4px', border: '1px solid var(--line)' }}>
              <div className="feature-card-icon" style={{ marginBottom: '14px' }}>
                <FileText size={22} />
              </div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', margin: '0 0 10px', fontWeight: 400 }}>
                Installation &amp; Fixing Guides
              </h3>
              <p style={{ color: '#627080', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                Download technical PDF datasheets, adhesive specifications, and aftercare recommendations.
              </p>
              <Link href="/guides" className="btn-secondary" style={{ width: '100%' }}>
                Explore Technical Guides <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
