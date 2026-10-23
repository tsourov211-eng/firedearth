'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Compass, Feather, HeartHandshake, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="subpage">
      <Header />

      <section className="subpage-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>About Us</span>
        </div>
        <p className="subpage-eyebrow">OUR HERITAGE &amp; PASSION</p>
        <h1 className="subpage-title">Tiles with Soul, Spaces with Character.</h1>
        <p className="subpage-intro">
          From rustic handmade terracotta to contemporary geometric porcelain and authentic British paints, 
          we curate surfaces that turn everyday rooms into spaces of enduring warmth.
        </p>
      </section>

      <section className="subpage-content">
        <div className="page-grid-2" style={{ alignItems: 'center', marginBottom: '64px' }}>
          <div>
            <span style={{ color: '#ac6543', fontWeight: 700, fontSize: '12px', letterSpacing: '2px' }}>THE BEGINNING</span>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 400, margin: '14px 0 20px', lineHeight: 1.2 }}>
              Rooted in Artisanal Craftsmanship &amp; Authentic Materials
            </h2>
            <p style={{ color: '#627080', fontSize: '16px', lineHeight: 1.7, marginBottom: '18px' }}>
              Founded with a passion for traditional craftsmanship, our journey began by salvaging authentic handmade terracotta tiles. Over the decades, we have expanded to encompass master-glazed Moroccan zelliges, Italian terrazzo, English limestone, and an exquisite palette of eco-friendly paints.
            </p>
            <p style={{ color: '#627080', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}>
              Every tile in our collection has a story: made by families of generational artisans who understand clay, pigment, temperature, and texture.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <Link href="/products/wall-tiles" className="btn-primary">
                Explore Collections <ArrowRight size={16} />
              </Link>
              <Link href="/showrooms" className="btn-secondary">
                Visit Our Showrooms
              </Link>
            </div>
          </div>
          <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.08)' }}>
            <img
              src="https://images.pexels.com/photos/19737861/pexels-photo-19737861.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000"
              alt="Craftsmanship workshop"
              style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>

        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
          <p className="subpage-eyebrow">OUR PILLARS</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '34px', fontWeight: 400 }}>What Defines Us</h2>
        </div>

        <div className="page-grid-4" style={{ marginBottom: '64px' }}>
          <div className="feature-card">
            <div className="feature-card-icon"><Feather size={24} /></div>
            <h3>Generational Craft</h3>
            <p>We work directly with artisan kilns in Spain, Italy, Portugal, and Morocco who preserve age-old handmade techniques.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon"><Compass size={24} /></div>
            <h3>Considered Design</h3>
            <p>Every tone, contour, and glaze finish is curated to create soothing, balanced interiors that outlast fleeting trends.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon"><HeartHandshake size={24} /></div>
            <h3>Responsible Sourcing</h3>
            <p>We champion sustainable manufacturing, recycled glass mosaics, low-VOC paint formulations, and ethical quarrying.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon"><Award size={24} /></div>
            <h3>Expert Guidance</h3>
            <p>Our showroom design consultants and technical team help you measure, choose, and install with total confidence.</p>
          </div>
        </div>

        <div style={{ background: 'var(--cream)', padding: '56px 40px', borderRadius: '4px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: 400, margin: '0 0 16px' }}>Ready to Begin Your Project?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 28px', color: '#627080', fontSize: '16px' }}>
            Order up to four complimentary cut samples delivered directly to your home or schedule an in-person design consultation.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/brochures" className="btn-primary">Order Free Cut Samples</Link>
            <Link href="/visualiser" className="btn-secondary">Launch Room Visualiser</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
