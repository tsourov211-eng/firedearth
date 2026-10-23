'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Briefcase, HeartHandshake, Palette, MapPin, ArrowRight } from 'lucide-react';

const positions = [
  {
    title: 'Showroom Design Consultant',
    location: 'London Chelsea',
    type: 'Full-time',
    description: 'Provide bespoke design consultations, tile spatial planning, and colour matching for luxury residential clients.',
  },
  {
    title: 'Commercial Trade Account Manager',
    location: 'Oxfordshire / Hybrid',
    type: 'Full-time',
    description: 'Grow relationships with architectural practices, interior studios, and residential developers.',
  },
  {
    title: 'Technical Specification Specialist',
    location: 'Head Office (Adderbury)',
    type: 'Full-time',
    description: 'Advise fixers and architects on adhesive specifications, wet room membranes, and stone aftercare.',
  },
];

export default function CareersPage() {
  return (
    <main className="subpage">
      <Header />

      <section className="subpage-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Careers</span>
        </div>
        <p className="subpage-eyebrow">JOIN OUR TEAM</p>
        <h1 className="subpage-title">Careers at webnibo</h1>
        <p className="subpage-intro">
          We are always looking for passionate design consultants, colour enthusiasts, and materials experts to join our family.
        </p>
      </section>

      <section className="subpage-content">
        <div className="page-grid-3" style={{ marginBottom: '64px' }}>
          <div className="feature-card">
            <div className="feature-card-icon"><Palette size={22} /></div>
            <h3>Creativity &amp; Passion</h3>
            <p>Immerse yourself in authentic materials, seasonal pigment collections, and inspiring interior projects.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon"><HeartHandshake size={22} /></div>
            <h3>Collaborative Culture</h3>
            <p>Work alongside experienced designers, artisan kilns, and renowned British interior icons.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon"><Briefcase size={22} /></div>
            <h3>Growth &amp; Development</h3>
            <p>Continuous training in surface materials, CAD design software, and commercial sales progression.</p>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <p className="subpage-eyebrow">OPEN OPPORTUNITIES</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '30px', fontWeight: 400, margin: 0 }}>
            Current Vacancies
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '64px' }}>
          {positions.map((pos) => (
            <div
              key={pos.title}
              style={{
                border: '1px solid var(--line)',
                padding: '28px',
                borderRadius: '4px',
                background: '#fff',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '20px', margin: '0 0 6px', fontWeight: 400 }}>
                  {pos.title}
                </h3>
                <div style={{ display: 'flex', gap: '14px', fontSize: '13px', color: '#77818d', marginBottom: '8px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={14} style={{ color: '#ac6543' }} /> {pos.location}
                  </span>
                  <span>&bull;</span>
                  <span>{pos.type}</span>
                </div>
                <p style={{ margin: 0, color: '#627080', fontSize: '14px', maxWidth: '640px' }}>
                  {pos.description}
                </p>
              </div>

              <button
                className="btn-primary"
                onClick={() => alert(`To apply for ${pos.title}, please send your CV and portfolio to careers@webnibo.com`)}
              >
                Apply Now <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
