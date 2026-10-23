'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, Download, Package, Check, Palette } from 'lucide-react';

const digitalBrochures = [
  {
    title: 'The Autumn Edit Lookbook',
    subtitle: 'Warming terracotta, earthy neutrals, and tactile seasonal glazes.',
    pages: '48 pages',
    size: '12 MB',
    image: 'https://images.pexels.com/photos/19737861/pexels-photo-19737861.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  },
  {
    title: 'Handcrafted Tiles & Mosaics',
    subtitle: 'The comprehensive catalogue of Moroccan zellige, English limestone, and Italian terrazzo.',
    pages: '96 pages',
    size: '28 MB',
    image: 'https://images.pexels.com/photos/8089256/pexels-photo-8089256.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  },
  {
    title: 'The Architectural Paint Card',
    subtitle: '120 richly pigmented, eco-formulated heritage and modern shades made in the UK.',
    pages: '32 pages',
    size: '8 MB',
    image: 'https://images.pexels.com/photos/6758509/pexels-photo-6758509.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  },
  {
    title: 'Outdoor Living & Porcelain Paving',
    subtitle: '20mm exterior porcelain, cobbles, and stone finishes for patios and garden paths.',
    pages: '40 pages',
    size: '15 MB',
    image: 'https://images.pexels.com/photos/16799768/pexels-photo-16799768.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  },
];

export default function BrochuresPage() {
  const [paintCardOrdered, setPaintCardOrdered] = useState(false);
  const [address, setAddress] = useState({
    name: '',
    email: '',
    street: '',
    city: '',
    postcode: '',
  });

  const handleOrderCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.name && address.street && address.postcode) {
      setPaintCardOrdered(true);
    }
  };

  return (
    <main className="subpage">
      <Header />

      <section className="subpage-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Brochures &amp; Paint Cards</span>
        </div>
        <p className="subpage-eyebrow">INSPIRATION TO YOUR DOOR</p>
        <h1 className="subpage-title">Brochures &amp; Complimentary Paint Cards</h1>
        <p className="subpage-intro">
          Browse our digital catalogues online or request physical paint colour cards and cut tile samples delivered straight to your home.
        </p>
      </section>

      <section className="subpage-content">
        <div className="page-grid-2" style={{ alignItems: 'start', marginBottom: '64px' }}>
          {/* Physical Paint Card Request */}
          <div className="contact-form-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <Palette size={24} style={{ color: '#ac6543' }} />
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', margin: 0, fontWeight: 400 }}>
                Order Free Paint Card
              </h2>
            </div>
            <p style={{ color: '#627080', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
              Order our physical, hand-matched colour chart featuring our signature palette of 120 interior and exterior paints. Delivered via Royal Mail within 2-3 working days.
            </p>

            {paintCardOrdered ? (
              <div style={{ padding: '30px 10px', textAlign: 'center', background: '#fff', border: '1px solid #279A4B', borderRadius: '4px' }}>
                <Check size={44} style={{ color: '#279A4B', margin: '0 auto 12px' }} />
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', margin: '0 0 8px' }}>Colour Card Dispatched!</h3>
                <p style={{ color: '#627080', fontSize: '14px', lineHeight: 1.6 }}>
                  Thank you, <strong>{address.name}</strong>. Your complimentary paint card has been registered for delivery to <strong>{address.street}, {address.postcode}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleOrderCard}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    className="form-input"
                    required
                    placeholder="e.g. Charlotte Bronte"
                    value={address.name}
                    onChange={(e) => setAddress({ ...address, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    className="form-input"
                    required
                    placeholder="charlotte@example.com"
                    value={address.email}
                    onChange={(e) => setAddress({ ...address, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Delivery Address Line *</label>
                  <input
                    className="form-input"
                    required
                    placeholder="Street Address or House Name"
                    value={address.street}
                    onChange={(e) => setAddress({ ...address, street: e.target.value })}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Town / City *</label>
                    <input
                      className="form-input"
                      required
                      placeholder="e.g. Oxford"
                      value={address.city}
                      onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Postcode *</label>
                    <input
                      className="form-input"
                      required
                      placeholder="e.g. OX1 2AA"
                      value={address.postcode}
                      onChange={(e) => setAddress({ ...address, postcode: e.target.value })}
                    />
                  </div>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Order Free Paint Card
                </button>
              </form>
            )}
          </div>

          {/* Sample Service Callout */}
          <div style={{ background: 'var(--cream)', padding: 'clamp(20px, 4vw, 40px)', borderRadius: '4px', border: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <Package size={24} style={{ color: '#ac6543' }} />
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', margin: 0, fontWeight: 400 }}>
                Four Free Cut Tile Samples
              </h2>
            </div>
            <p style={{ color: '#627080', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
              Lighting changes everything in a home. Order up to 4 cut tile samples free of charge directly from any product page. Place them in your room, check the natural morning and evening light, and pair them with your furnishings.
            </p>
            <ul style={{ margin: '0 0 28px', paddingLeft: '20px', color: '#627080', fontSize: '14px', lineHeight: 1.8 }}>
              <li>Carefully cut sample portions of genuine artisan tiles</li>
              <li>Includes complete colour swatches and finish details</li>
              <li>Fast, secure parcel delivery to mainland UK</li>
            </ul>
            <Link href="/products/wall-tiles" className="btn-primary" style={{ width: '100%' }}>
              Browse Tile Catalogue to Order Samples
            </Link>
          </div>
        </div>

        {/* Digital Downloads */}
        <div style={{ marginBottom: '32px' }}>
          <p className="subpage-eyebrow">DIGITAL LOOKBOOKS</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: 400, margin: 0 }}>
            Download Online Catalogues
          </h2>
        </div>

        <div className="page-grid-4">
          {digitalBrochures.map((brochure) => (
            <div
              key={brochure.title}
              style={{
                border: '1px solid var(--line)',
                borderRadius: '4px',
                overflow: 'hidden',
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ height: '180px', position: 'relative' }}>
                <img
                  src={brochure.image}
                  alt={brochure.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', margin: '0 0 8px', fontWeight: 400 }}>
                  {brochure.title}
                </h3>
                <p style={{ color: '#627080', fontSize: '13px', lineHeight: 1.5, flex: 1, margin: '0 0 16px' }}>
                  {brochure.subtitle}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#77818d', marginBottom: '14px' }}>
                  <span>{brochure.pages}</span>
                  <span>{brochure.size} PDF</span>
                </div>
                <button
                  className="btn-secondary"
                  onClick={() => alert(`Downloading "${brochure.title}" (PDF)...`)}
                  style={{ width: '100%', fontSize: '13px' }}
                >
                  <Download size={14} /> Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
