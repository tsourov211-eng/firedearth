'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Wrench, Shield, Droplets, Flame, Layers, Download, ArrowRight } from 'lucide-react';

const guides = [
  {
    title: 'Subfloor Preparation & De-coupling',
    category: 'Installation',
    icon: Wrench,
    summary: 'Preventing cracks in floor tiles across timber joists and concrete screeds using anti-fracture membranes like Schluter Ditra.',
  },
  {
    title: 'Sealing Terracotta & Natural Stone',
    category: 'Protection',
    icon: Shield,
    summary: 'The essential step-by-step guide to applying pre-grouting impregnators, wax finishes, and maintaining authentic patinas.',
  },
  {
    title: 'Wet Room Tanking & Waterproofing',
    category: 'Bathrooms',
    icon: Droplets,
    summary: 'How to create a 100% waterproof barrier in shower enclosures and wet room floors before applying wall and mosaic tiles.',
  },
  {
    title: 'Fixing Exterior 20mm Porcelain Paving',
    category: 'Outdoor',
    icon: Layers,
    summary: 'Sub-base requirements, slurry primer bonding coats, and weather-resistant polymeric jointing sand techniques.',
  },
  {
    title: 'Tiling Over Underfloor Heating',
    category: 'Heating & Comfort',
    icon: Flame,
    summary: 'Commissioning screeds, expansion joints, flexible polymer-modified S1 adhesives, and temperature ramp-up protocols.',
  },
  {
    title: 'Slip Resistance: PTV & R-Ratings',
    category: 'Safety & Specs',
    icon: FileText,
    summary: 'Decoding Pendulum Test Values (PTV >36 low slip risk) and DIN 51130 R-ratings for commercial and domestic floors.',
  },
];

export default function GuidesPage() {
  return (
    <main className="subpage">
      <Header />

      <section className="subpage-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Technical Guides</span>
        </div>
        <p className="subpage-eyebrow">BEST PRACTICES &amp; FIXING</p>
        <h1 className="subpage-title">Technical &amp; Installation Guides</h1>
        <p className="subpage-intro">
          Written by professional tile fixers and material scientists to ensure your tiling lasts beautifully for a lifetime.
        </p>
      </section>

      <section className="subpage-content">
        <div className="page-grid-3" style={{ marginBottom: '64px' }}>
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <div key={guide.title} className="feature-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#ac6543', fontWeight: 700, marginBottom: '8px' }}>
                  {guide.category}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '6px 0 14px' }}>
                  <div className="feature-card-icon"><Icon size={20} /></div>
                  <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>{guide.title}</h3>
                </div>
                <p style={{ flex: 1, fontSize: '14px', lineHeight: 1.6, color: '#627080' }}>
                  {guide.summary}
                </p>
                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', marginTop: 'auto' }}>
                  <button
                    className="btn-secondary"
                    onClick={() => alert(`Downloading Technical PDF Datasheet for "${guide.title}"...`)}
                    style={{ width: '100%', fontSize: '13px' }}
                  >
                    <Download size={14} /> Download PDF Guide
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ background: 'var(--cream)', padding: '48px', borderRadius: '4px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: 400, margin: '0 0 12px' }}>
            Need Bespoke Specification Support?
          </h2>
          <p style={{ color: '#627080', fontSize: '15px', maxWidth: '600px', margin: '0 auto 24px' }}>
            Our technical services desk can review architectural drawings, recommend exact adhesive formulas, and generate specification documents for commercial contractors.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
            <Link href="/contact" className="btn-primary">Contact Technical Team</Link>
            <Link href="/trade" className="btn-secondary">Trade &amp; Commercial Portal</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
