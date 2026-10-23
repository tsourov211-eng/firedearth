'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Eye, Layers, Check, ArrowRight, ShoppingBag } from 'lucide-react';

const rooms = [
  {
    id: 'bathroom',
    name: 'Serene Master Bathroom',
    sceneImage: 'https://images.pexels.com/photos/8089256/pexels-photo-8089256.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
  },
  {
    id: 'kitchen',
    name: 'Country Hearth Kitchen',
    sceneImage: 'https://images.pexels.com/photos/21874959/pexels-photo-21874959.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
  },
  {
    id: 'outdoor',
    name: 'Garden Terrace & Paving',
    sceneImage: 'https://images.pexels.com/photos/16799768/pexels-photo-16799768.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
  },
  {
    id: 'splashback',
    name: 'Artisan Kitchen Splashback',
    sceneImage: 'https://images.pexels.com/photos/37360088/pexels-photo-37360088.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
  },
];

const tileOptions = [
  {
    id: 'terracotta',
    name: 'Handmade Classic Terracotta 20x20',
    color: '#b36d43',
    price: '£78.00 /m²',
    material: 'Natural Terracotta',
    texture: 'Raw Matt Tactile',
    overlayFilter: 'sepia(0.35) contrast(1.1) saturate(1.2)',
  },
  {
    id: 'zellige-green',
    name: 'Moroccan Handcut Zellige Forest',
    color: '#345e50',
    price: '£92.00 /m²',
    material: 'Glazed Ceramic',
    texture: 'Glossy Undulated Glaze',
    overlayFilter: 'hue-rotate(75deg) contrast(1.15) saturate(1.1)',
  },
  {
    id: 'indigo',
    name: 'Nina Campbell La Moulade Indigo',
    color: '#263b52',
    price: '£88.50 /m²',
    material: 'High-fire Porcelain',
    texture: 'Smooth Satin Silk',
    overlayFilter: 'hue-rotate(185deg) contrast(1.2)',
  },
  {
    id: 'terrazzo',
    name: 'Frammenti Pastel Terrazzo Tile',
    color: '#c29b8c',
    price: '£59.71 /m²',
    material: 'Agglomerate Marble',
    texture: 'Honed Smooth Matt',
    overlayFilter: 'saturate(0.85) brightness(1.05)',
  },
  {
    id: 'chalk',
    name: 'Stoneware Chalk Handmade Ceramic',
    color: '#e7e3dc',
    price: '£72.00 /m²',
    material: 'Earthenware Ceramic',
    texture: 'Crackle Glaze Pearl',
    overlayFilter: 'contrast(0.95) brightness(1.1) saturate(0.8)',
  },
];

export default function VisualiserPage() {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [selectedTile, setSelectedTile] = useState(tileOptions[0]);
  const [cartCount, setCartCount] = useState(0);

  return (
    <main className="subpage">
      <Header cartCount={cartCount} />

      <section className="subpage-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Room Visualiser</span>
        </div>
        <p className="subpage-eyebrow">INTERACTIVE 3D EXPERIENCE</p>
        <h1 className="subpage-title">Digital Room Visualiser</h1>
        <p className="subpage-intro">
          Test our artisan terracotta, Moroccan zellige, and natural stones across different home settings in real-time.
        </p>
      </section>

      <section className="subpage-content">
        {/* Room Category Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '32px', flexWrap: 'wrap' }}>
          {rooms.map((room) => (
            <button
              key={room.id}
              onClick={() => setSelectedRoom(room)}
              style={{
                padding: '12px 24px',
                border: selectedRoom.id === room.id ? '2px solid var(--ink)' : '1px solid var(--line)',
                background: selectedRoom.id === room.id ? 'var(--ink)' : '#fff',
                color: selectedRoom.id === room.id ? '#fff' : 'var(--ink)',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'all 0.2s',
                borderRadius: '2px',
              }}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Visualiser Canvas Stage */}
        <div className="visualiser-stage" style={{ position: 'relative' }}>
          <img
            src={selectedRoom.sceneImage}
            alt={selectedRoom.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: selectedTile.overlayFilter,
              transition: 'filter 0.5s ease',
            }}
          />

          {/* Active Overlay Tag */}
          <div className="visualiser-overlay-badge">
            <span style={{ fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#ac6543', fontWeight: 700 }}>
              ACTIVE MATERIAL
            </span>
            <h3 style={{ margin: '4px 0 2px', fontFamily: 'Georgia, serif', fontSize: '19px', fontWeight: 400 }}>
              {selectedTile.name}
            </h3>
            <p style={{ margin: '0 0 10px', color: '#627080', fontSize: '13px' }}>
              {selectedTile.material} &bull; {selectedTile.texture} &bull; <strong>{selectedTile.price}</strong>
            </p>
            <button
              className="btn-primary"
              style={{ padding: '8px 16px', fontSize: '12px' }}
              onClick={() => {
                setCartCount(cartCount + 1);
                alert(`Added a free cut sample of "${selectedTile.name}" to your basket!`);
              }}
            >
              <ShoppingBag size={14} /> Order Free Sample
            </button>
          </div>
        </div>

        {/* Material Palette Controls */}
        <div style={{ marginTop: '40px', background: '#fff', border: '1px solid var(--line)', padding: '32px', borderRadius: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', margin: 0, fontWeight: 400 }}>
                Choose Surface Tile &amp; Finish
              </h3>
              <p style={{ margin: '4px 0 0', color: '#627080', fontSize: '14px' }}>
                Click a swatch below to apply the finish to the scene above.
              </p>
            </div>
            <Link href="/products/wall-tiles" className="btn-secondary" style={{ fontSize: '13px' }}>
              View All 150+ Tiles <ArrowRight size={14} />
            </Link>
          </div>

          <div className="page-grid-4" style={{ gap: '16px' }}>
            {tileOptions.map((tile) => (
              <div
                key={tile.id}
                onClick={() => setSelectedTile(tile)}
                style={{
                  border: selectedTile.id === tile.id ? '2px solid #ac6543' : '1px solid var(--line)',
                  borderRadius: '4px',
                  padding: '16px',
                  cursor: 'pointer',
                  background: selectedTile.id === tile.id ? '#faf8f5' : '#fff',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <span
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: tile.color,
                      border: '2px solid #fff',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ margin: 0, fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {tile.name}
                    </h4>
                    <span style={{ fontSize: '12px', color: '#78837b' }}>{tile.price}</span>
                  </div>
                </div>
                {selectedTile.id === tile.id && (
                  <span style={{ position: 'absolute', top: '10px', right: '10px', color: '#ac6543' }}>
                    <Check size={18} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Callout */}
        <div style={{ marginTop: '56px', textAlign: 'center', background: 'var(--cream)', padding: '48px', borderRadius: '4px' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '30px', fontWeight: 400, margin: '0 0 12px' }}>
            Want 3D Renders of Your Exact Room?
          </h2>
          <p style={{ color: '#627080', fontSize: '15px', maxWidth: '620px', margin: '0 auto 24px' }}>
            Our showroom teams can model your architect plans or room sketches into full photorealistic 3D CAD visualisations completely free of charge.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
            <Link href="/showrooms" className="btn-primary">Book Showroom Session</Link>
            <Link href="/contact" className="btn-secondary">Upload Your Room Plans</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
