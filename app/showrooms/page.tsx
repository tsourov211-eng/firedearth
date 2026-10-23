'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Clock, Calendar, Check, Search } from 'lucide-react';

const showrooms = [
  {
    id: 'london-chelsea',
    name: 'London Chelsea Showroom',
    address: '136 Kings Road, Chelsea, London SW3 4TR',
    phone: '020 7589 0489',
    hours: 'Mon – Sat: 9:30 am – 5:30 pm | Sun: 11:00 am – 5:00 pm',
    features: ['Full Tile Gallery', 'Paint Mixing Studio', 'Luxury Bathroom Displays', 'Expert Colour Consultants'],
    image: 'https://images.pexels.com/photos/8089256/pexels-photo-8089256.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  },
  {
    id: 'edinburgh',
    name: 'Edinburgh Morningside',
    address: '118 Morningside Road, Edinburgh EH10 4BX',
    phone: '0131 447 9127',
    hours: 'Mon – Sat: 9:00 am – 5:00 pm | Sun: Closed',
    features: ['Handcrafted Ceramic Wall', 'Natural Stone Displays', 'Design Consultation Desk'],
    image: 'https://images.pexels.com/photos/11020457/pexels-photo-11020457.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  },
  {
    id: 'bath',
    name: 'Bath Milsom Street',
    address: '18 Milsom Street, Bath BA1 1DE',
    phone: '01225 464 611',
    hours: 'Mon – Sat: 9:30 am – 5:30 pm | Sun: 11:00 am – 4:00 pm',
    features: ['Terracotta & Zellige Gallery', 'Outdoor Paving Showcase', 'Sample Takeaway Bar'],
    image: 'https://images.pexels.com/photos/17497857/pexels-photo-17497857.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  },
  {
    id: 'cotswolds',
    name: 'Cotswolds & Oxfordshire',
    address: 'Twyford Mill, Oxford Road, Adderbury OX17 3HP',
    phone: '01295 812 088',
    hours: 'Mon – Fri: 9:00 am – 5:00 pm | Sat: 9:30 am – 5:00 pm',
    features: ['Flagship Destination', 'Heritage Barn Showroom', 'Free Customer Parking', 'Extensive Garden & Patio Displays'],
    image: 'https://images.pexels.com/photos/16799768/pexels-photo-16799768.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  },
  {
    id: 'manchester',
    name: 'Manchester Deansgate',
    address: '260 Deansgate, Manchester M3 4LY',
    phone: '0161 832 9488',
    hours: 'Mon – Sat: 9:30 am – 5:30 pm | Sun: 11:00 am – 4:00 pm',
    features: ['Architectural Tile Lab', 'Large Format Porcelain', 'Full Paint Colour Wall'],
    image: 'https://images.pexels.com/photos/21874959/pexels-photo-21874959.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  },
];

export default function ShowroomsPage() {
  const [search, setSearch] = useState('');
  const [bookingModal, setBookingModal] = useState<string | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const filteredShowrooms = showrooms.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="subpage">
      <Header />

      <section className="subpage-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Showrooms</span>
        </div>
        <p className="subpage-eyebrow">TOUCH &amp; EXPERIENCE</p>
        <h1 className="subpage-title">Find Your Local Showroom</h1>
        <p className="subpage-intro">
          There is no substitute for experiencing the tactility of hand-moulded terracotta, running your fingers along authentic glazed zelliges, or viewing large-scale paint swatches in true natural light.
        </p>

        <div style={{ maxWidth: '480px', margin: '30px auto 0', display: 'flex', background: '#fff', border: '1px solid var(--line)', padding: '6px 14px', alignItems: 'center' }}>
          <Search size={20} style={{ color: '#78837b', marginRight: '10px' }} />
          <input
            style={{ border: 0, outline: 'none', width: '100%', fontSize: '15px' }}
            placeholder="Search by city, town or postcode..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      <section className="subpage-content">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {filteredShowrooms.map((showroom) => (
            <div key={showroom.id} className="showroom-card">
              <div style={{ position: 'relative', minHeight: '240px' }}>
                <img
                  src={showroom.image}
                  alt={showroom.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              <div className="showroom-card-info">
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', margin: '0 0 12px', fontWeight: 400 }}>
                  {showroom.name}
                </h2>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#627080', fontSize: '14px', marginBottom: '8px' }}>
                  <MapPin size={18} style={{ color: '#ac6543', flexShrink: 0, marginTop: '2px' }} />
                  <span>{showroom.address}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#627080', fontSize: '14px', marginBottom: '8px' }}>
                  <Phone size={18} style={{ color: '#ac6543', flexShrink: 0 }} />
                  <span>{showroom.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#627080', fontSize: '14px', marginBottom: '18px' }}>
                  <Clock size={18} style={{ color: '#ac6543', flexShrink: 0 }} />
                  <span>{showroom.hours}</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {showroom.features.map((feat) => (
                    <span
                      key={feat}
                      style={{
                        background: 'var(--cream)',
                        color: 'var(--ink)',
                        fontSize: '12px',
                        padding: '4px 10px',
                        borderRadius: '2px',
                        border: '1px solid #dedbd4',
                      }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <button
                    className="btn-primary"
                    onClick={() => {
                      setBookingModal(showroom.name);
                      setBookingSuccess(false);
                    }}
                  >
                    <Calendar size={16} /> Book Design Consultation
                  </button>
                  <a href={`tel:${showroom.phone.replaceAll(' ', '')}`} className="btn-secondary">
                    Call Showroom
                  </a>
                </div>
              </div>
            </div>
          ))}

          {filteredShowrooms.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <p style={{ color: '#627080', fontSize: '18px' }}>No showrooms matched &quot;{search}&quot;.</p>
              <button className="btn-secondary" onClick={() => setSearch('')}>
                Show All Showrooms
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Booking Modal */}
      {bookingModal && (
        <div className="modal-backdrop" onClick={() => setBookingModal(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            {bookingSuccess ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <Check size={48} style={{ color: '#279A4B', margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', margin: '0 0 10px' }}>Consultation Booked!</h3>
                <p style={{ color: '#627080', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                  Thank you! Our design consultant at <strong>{bookingModal}</strong> will contact you to confirm your date, time, and project notes.
                </p>
                <button className="btn-primary" onClick={() => setBookingModal(null)}>
                  Close
                </button>
              </div>
            ) : (
              <div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', margin: '0 0 8px' }}>
                  Book Consultation: {bookingModal}
                </h3>
                <p style={{ color: '#627080', fontSize: '13px', marginBottom: '20px' }}>
                  Enjoy a complimentary 1-on-1 session with our in-house interior consultants.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setBookingSuccess(true);
                  }}
                >
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input className="form-input" required placeholder="Full Name" />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input className="form-input" type="email" required placeholder="name@domain.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone *</label>
                    <input className="form-input" type="tel" required placeholder="07123 456789" />
                  </div>
                  <div className="form-group">
                    <label>Preferred Date</label>
                    <input className="form-input" type="date" required />
                  </div>
                  <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                    <button type="submit" className="btn-primary" style={{ flex: 1 }}>
                      Confirm Booking
                    </button>
                    <button type="button" className="btn-secondary" onClick={() => setBookingModal(null)}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
