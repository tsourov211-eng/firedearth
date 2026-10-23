'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calculator, Compass, BookOpen, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AdvicePage() {
  const [length, setLength] = useState<number>(4);
  const [width, setWidth] = useState<number>(3);
  const [waste, setWaste] = useState<number>(10);
  const [tileAreaPerBox, setTileAreaPerBox] = useState<number>(1.2);

  const rawArea = Math.round(length * width * 100) / 100;
  const totalWithWaste = Math.round(rawArea * (1 + waste / 100) * 100) / 100;
  const boxesNeeded = Math.ceil(totalWithWaste / tileAreaPerBox);

  return (
    <main className="subpage">
      <Header />

      <section className="subpage-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Advice Hub</span>
        </div>
        <p className="subpage-eyebrow">EXPERT GUIDANCE</p>
        <h1 className="subpage-title">The Advice &amp; Inspiration Hub</h1>
        <p className="subpage-intro">
          Everything you need to plan, calculate, and execute your tiling and decorating projects with absolute confidence.
        </p>
      </section>

      <section className="subpage-content">
        {/* Interactive Tile Calculator */}
        <div
          style={{
            background: 'var(--cream)',
            border: '1px solid var(--line)',
            borderRadius: '4px',
            padding: 'clamp(20px, 4vw, 40px)',
            marginBottom: '48px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <div className="feature-card-icon" style={{ background: '#fff' }}>
              <Calculator size={24} />
            </div>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', margin: 0, fontWeight: 400 }}>
                Interactive Tile &amp; Meterage Calculator
              </h2>
              <p style={{ margin: '4px 0 0', color: '#627080', fontSize: '14px' }}>
                Accurately determine how many square meters and boxes you need, including recommended cutting allowance.
              </p>
            </div>
          </div>

          <div className="page-grid-2" style={{ gap: '28px', marginTop: '24px' }}>
            <div style={{ background: '#fff', padding: 'clamp(18px, 3.5vw, 28px)', borderRadius: '4px', border: '1px solid var(--line)' }}>
              <h3 style={{ margin: '0 0 18px', fontSize: '17px', fontWeight: 600 }}>1. Enter Room Measurements</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Room Length (metres)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.5"
                    className="form-input"
                    value={length}
                    onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
                  />
                </div>
                <div className="form-group">
                  <label>Room Width (metres)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.5"
                    className="form-input"
                    value={width}
                    onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Cutting &amp; Wastage Allowance</label>
                  <select
                    className="form-select"
                    value={waste}
                    onChange={(e) => setWaste(parseInt(e.target.value))}
                  >
                    <option value={10}>10% (Standard square / straight grid)</option>
                    <option value={15}>15% (Herringbone, chevron, or diagonal)</option>
                    <option value={20}>20% (Intricate cuts &amp; small alcoves)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Coverage per Box (m²)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.2"
                    className="form-input"
                    value={tileAreaPerBox}
                    onChange={(e) => setTileAreaPerBox(parseFloat(e.target.value) || 1)}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                background: 'var(--ink)',
                color: '#fff',
                padding: '32px',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <h3 style={{ margin: '0 0 16px', fontSize: '18px', color: '#d9a57b' }}>
                Your Recommended Order
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px', marginBottom: '24px' }}>
                <div>
                  <span style={{ fontSize: '12px', color: '#a0b1c2', textTransform: 'uppercase', letterSpacing: '1px' }}>Net Floor Area</span>
                  <p style={{ fontSize: '28px', fontFamily: 'Georgia, serif', margin: '4px 0 0' }}>{rawArea} m²</p>
                </div>
                <div>
                  <span style={{ fontSize: '12px', color: '#a0b1c2', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Incl. {waste}% Wastage</span>
                  <p style={{ fontSize: '28px', fontFamily: 'Georgia, serif', margin: '4px 0 0', color: '#d9a57b' }}>{totalWithWaste} m²</p>
                </div>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '13px', color: '#d0d7de' }}>Recommended Boxes to Order:</span>
                  <p style={{ fontSize: '26px', fontWeight: 700, margin: '2px 0 0' }}>{boxesNeeded} Boxes</p>
                </div>
                <Link href="/products/floor-tiles" className="btn-primary" style={{ background: '#d9a57b', color: '#1a2332' }}>
                  Browse Tiles <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Essential Guides */}
        <div style={{ marginBottom: '40px' }}>
          <p className="subpage-eyebrow">TECHNICAL &amp; DESIGN ARTICLES</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: 400, margin: 0 }}>
            Guides from Our Craftsmen
          </h2>
        </div>

        <div className="page-grid-3" style={{ marginBottom: '64px' }}>
          <div className="feature-card">
            <div className="feature-card-icon"><Compass size={22} /></div>
            <h3>How to Measure for Tiling</h3>
            <p>Tips for measuring irregular rooms, calculating recesses, allowing for window reveals, and setting tile center lines.</p>
            <Link href="/guides" style={{ color: '#ac6543', fontWeight: 600, fontSize: '13px' }}>Read Guide &rarr;</Link>
          </div>

          <div className="feature-card">
            <div className="feature-card-icon"><Layers size={22} /></div>
            <h3>Porcelain vs. Natural Stone</h3>
            <p>Understand the maintenance, sealing needs, and aesthetic differences between porcelain and natural limestone or terracotta.</p>
            <Link href="/guides" style={{ color: '#ac6543', fontWeight: 600, fontSize: '13px' }}>Read Guide &rarr;</Link>
          </div>

          <div className="feature-card">
            <div className="feature-card-icon"><BookOpen size={22} /></div>
            <h3>Grout Colours &amp; Joint Widths</h3>
            <p>How contrasting or tone-on-tone grout lines transform the appearance of metro and herringbone tiles in wet rooms.</p>
            <Link href="/guides" style={{ color: '#ac6543', fontWeight: 600, fontSize: '13px' }}>Read Guide &rarr;</Link>
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--line)', padding: '36px', borderRadius: '4px', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', margin: '0 0 12px', fontWeight: 400 }}>Still Have Questions?</h3>
          <p style={{ color: '#627080', fontSize: '15px', maxWidth: '580px', margin: '0 auto 24px' }}>
            Our customer service and technical support desks are available weekdays to answer specific fixing questions.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
            <Link href="/contact" className="btn-primary">Speak to an Advisor</Link>
            <Link href="/brochures" className="btn-secondary">Order Samples</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
