'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { RotateCcw, AlertCircle, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

export default function ReturnsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [returnForm, setReturnForm] = useState({
    orderNumber: '',
    name: '',
    email: '',
    itemDetails: '',
    reason: 'Surplus to requirement (unopened)',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (returnForm.orderNumber && returnForm.name && returnForm.email) {
      setSubmitted(true);
    }
  };

  return (
    <main className="subpage">
      <Header />

      <section className="subpage-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Returns &amp; Refunds</span>
        </div>
        <p className="subpage-eyebrow">HASSLE-FREE PROCESS</p>
        <h1 className="subpage-title">Returns &amp; Cancellation Policy</h1>
        <p className="subpage-intro">
          We want you to be completely delighted with your purchase. Here is our straightforward guide to returning items or requesting a refund.
        </p>
      </section>

      <section className="subpage-content">
        <div className="page-grid-3" style={{ marginBottom: '48px' }}>
          <div className="feature-card">
            <div className="feature-card-icon"><RotateCcw size={22} /></div>
            <h3>14-Day Notice Window</h3>
            <p>You have 14 days from the date of physical delivery to notify us if you wish to return your complete order.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon"><AlertCircle size={22} /></div>
            <h3>Full, Unopened Boxes Only</h3>
            <p>Because tiles vary by firing batch, we can only accept returns of complete, unopened boxes in pristine resale condition.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon"><ShieldCheck size={22} /></div>
            <h3>Prompt Refunds</h3>
            <p>Once received and inspected at our central depot, refunds are issued to your original payment method within 5–7 days.</p>
          </div>
        </div>

        <div className="page-grid-2" style={{ alignItems: 'start', marginBottom: '48px' }}>
          <div style={{ background: '#fff', border: '1px solid var(--line)', padding: '36px', borderRadius: '4px' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: 400, marginTop: 0, marginBottom: '18px' }}>
              Return Conditions &amp; Guidelines
            </h2>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#627080', fontSize: '14px', lineHeight: 1.8 }}>
              <li><strong>No Showroom Returns:</strong> Orders cannot be returned to our retail showrooms due to health and safety regulations for heavy pallet offloading. All returns must be delivered to our central distribution depot.</li>
              <li><strong>Excess Individual Tiles:</strong> We cannot accept returns of loose individual tiles or partial boxes. We recommend keeping surplus tiles for future repairs or maintenance.</li>
              <li><strong>Paints &amp; Ancillaries:</strong> Only standard, unopened paint tins with intact factory seals may be returned. Custom tint formulations are non-refundable.</li>
              <li><strong>Return Shipping:</strong> The customer is responsible for safe return transit. We can arrange pallet collection via our nominated carrier (collection fee deducted from refund).</li>
            </ul>

            <div style={{ marginTop: '28px', padding: '18px', background: 'var(--cream)', borderRadius: '4px' }}>
              <p style={{ margin: 0, fontSize: '13px', color: '#627080' }}>
                <strong>Warehouse Return Address:</strong><br />
                webnibo Returns Central Depot<br />
                Unit 4, Churchill Way Logistics Centre<br />
                Lancashire, BB9 6RT, United Kingdom
              </p>
            </div>
          </div>

          <div className="contact-form-card">
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: 400, marginTop: 0, marginBottom: '8px' }}>
              Submit a Return Request
            </h2>
            <p style={{ color: '#627080', fontSize: '14px', marginBottom: '24px' }}>
              Enter your order details below to receive a Return Authorisation (RA) number and shipping instructions.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <CheckCircle2 size={44} style={{ color: '#279A4B', margin: '0 auto 12px' }} />
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', margin: '0 0 8px' }}>Return Request Logged</h3>
                <p style={{ color: '#627080', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Thank you, <strong>{returnForm.name}</strong>. Reference <strong>#{returnForm.orderNumber}</strong> has been logged. Our returns team will email your RA label and booking instructions to <strong>{returnForm.email}</strong>.
                </p>
                <button className="btn-secondary" onClick={() => setSubmitted(false)}>
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Order Number *</label>
                  <input
                    className="form-input"
                    required
                    placeholder="e.g. WN-98421"
                    value={returnForm.orderNumber}
                    onChange={(e) => setReturnForm({ ...returnForm, orderNumber: e.target.value })}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      className="form-input"
                      required
                      placeholder="Your Name"
                      value={returnForm.name}
                      onChange={(e) => setReturnForm({ ...returnForm, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      className="form-input"
                      required
                      placeholder="Your Email"
                      value={returnForm.email}
                      onChange={(e) => setReturnForm({ ...returnForm, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Reason for Return</label>
                  <select
                    className="form-select"
                    value={returnForm.reason}
                    onChange={(e) => setReturnForm({ ...returnForm, reason: e.target.value })}
                  >
                    <option>Surplus to requirement (unopened boxes)</option>
                    <option>Colour / texture not as expected</option>
                    <option>Transit damage (requires photos)</option>
                    <option>Ordered incorrect product</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Item Name(s) &amp; Box Quantity</label>
                  <textarea
                    rows={3}
                    className="form-textarea"
                    placeholder="e.g. Handmade Classic Terracotta (6 full boxes unopened)"
                    value={returnForm.itemDetails}
                    onChange={(e) => setReturnForm({ ...returnForm, itemDetails: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Submit Return Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
