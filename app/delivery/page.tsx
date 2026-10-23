'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Truck, AlertTriangle, ShieldCheck, Clock, Globe, ArrowRight } from 'lucide-react';

export default function DeliveryPage() {
  return (
    <main className="subpage">
      <Header />

      <section className="subpage-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Delivery Information</span>
        </div>
        <p className="subpage-eyebrow">SAFE &amp; RELIABLE TRANSPORT</p>
        <h1 className="subpage-title">Delivery &amp; Logistics Guide</h1>
        <p className="subpage-intro">
          Natural stones, ceramics, and architectural paints require specialized handling. Here is everything you need to know about our kerbside pallet deliveries and schedules.
        </p>
      </section>

      <section className="subpage-content">
        <div className="page-grid-3" style={{ marginBottom: '56px' }}>
          <div className="feature-card">
            <div className="feature-card-icon"><Truck size={22} /></div>
            <h3>Free Delivery Over £500</h3>
            <p>Orders over £500 qualify for free standard kerbside delivery across mainland UK destinations.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon"><Clock size={22} /></div>
            <h3>Standard 3-5 Working Days</h3>
            <p>In-stock tiles and paints are typically prepared, pallet-wrapped, and dispatched within 3 to 5 business days.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon"><Globe size={22} /></div>
            <h3>Exports &amp; Islands</h3>
            <p>We regularly supply projects in the Channel Islands, Isle of Man, Europe, and international destinations upon request.</p>
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '4px', padding: '40px', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', background: '#fdf6ed', padding: '20px 24px', borderRadius: '4px', borderLeft: '4px solid #b36d43', marginBottom: '32px' }}>
            <AlertTriangle size={24} style={{ color: '#b36d43', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ margin: '0 0 6px', color: '#68371c', fontSize: '16px' }}>Important Notice Before Booking Tradespeople</h4>
              <p style={{ margin: 0, color: '#68371c', fontSize: '14px', lineHeight: 1.6 }}>
                We strongly advise that you do not book tilers, builders, or decorators until your delivery has arrived, been offloaded, and thoroughly inspected. Heavy stone deliveries can occasionally be affected by regional road conditions or transport factors outside our control.
              </p>
            </div>
          </div>

          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: 400, margin: '0 0 20px' }}>
            Understanding Kerbside Pallet Offload
          </h2>
          <p style={{ color: '#627080', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
            Tiles are heavy, fragile architectural materials. Orders weighing over 30 kg are securely packed onto wooden pallets and shrink-wrapped for maximum stability.
          </p>

          <div className="page-grid-2" style={{ gap: '24px', margin: '30px 0' }}>
            <div style={{ background: 'var(--cream)', padding: '24px', borderRadius: '4px' }}>
              <h4 style={{ margin: '0 0 10px', fontSize: '16px' }}>How Delivery Takes Place:</h4>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#627080', fontSize: '14px', lineHeight: 1.8 }}>
                <li>Deliveries take place between <strong>8:00 am and 6:00 pm</strong>, Monday to Friday.</li>
                <li>Vehicles are equipped with tail-lifts and manual pallet pump trucks.</li>
                <li>The driver will position the pallet at the <strong>kerbside or hard driveway</strong> adjacent to the public highway.</li>
                <li>Drivers are not insured to move pallets into houses, up flights of steps, or onto gravel/grass.</li>
              </ul>
            </div>

            <div style={{ background: 'var(--cream)', padding: '24px', borderRadius: '4px' }}>
              <h4 style={{ margin: '0 0 10px', fontSize: '16px' }}>Site Access Requirements:</h4>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#627080', fontSize: '14px', lineHeight: 1.8 }}>
                <li>Large 18-tonne curtain-sided or box lorries require adequate street width.</li>
                <li>Please notify our team prior to dispatch if your property has height restrictions, weight limits, or narrow lanes.</li>
                <li>Smaller 7.5-tonne delivery vehicles can be arranged on special request.</li>
              </ul>
            </div>
          </div>

          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 400, margin: '32px 0 14px' }}>
            Sample &amp; Paint Deliveries
          </h3>
          <p style={{ color: '#627080', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
            Cut tile samples and paint colour cards are delivered via Royal Mail Tracked 48. Small parcel paint orders and maintenance sealers are dispatched via DPD Express Courier with 1-hour SMS tracking windows.
          </p>
        </div>

        <div style={{ textAlign: 'center', background: 'var(--cream)', padding: '40px', borderRadius: '4px' }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', margin: '0 0 12px', fontWeight: 400 }}>Questions About Your Shipment?</h3>
          <p style={{ color: '#627080', fontSize: '15px', marginBottom: '20px' }}>
            Our delivery logistics team is happy to coordinate specific delivery days to match your project schedule.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Delivery Support <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
