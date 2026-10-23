'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag, ShoppingBag } from 'lucide-react';

type CartItem = {
  id: string;
  name: string;
  type: string;
  price: number;
  quantity: number;
  image: string;
};

const initialItems: CartItem[] = [
  {
    id: '1',
    name: 'Handmade Classic Terracotta Square Tile 20x20',
    type: 'Sample Cut Piece (Free)',
    price: 0.0,
    quantity: 1,
    image: 'https://images.pexels.com/photos/17497857/pexels-photo-17497857.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
  },
  {
    id: '2',
    name: 'Nina Campbell Rivage Ivory Glazed Wall Tile',
    type: 'Box (Coverage: 1.0 m²)',
    price: 86.4,
    quantity: 6,
    image: 'https://images.pexels.com/photos/11020457/pexels-photo-11020457.jpeg?auto=compress&cs=tinysrgb&h=800&w=700',
  },
];

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'EXTRA10') {
      setDiscountPercent(10);
      setPromoApplied(true);
    } else {
      alert('Invalid promo code. Try "EXTRA10"');
    }
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = (subtotal * discountPercent) / 100;
  const shipping = subtotal > 500 || subtotal === 0 ? 0 : 45.0;
  const total = Math.max(0, subtotal - discount + shipping);

  return (
    <main className="subpage">
      <Header cartCount={items.length} />

      <section className="subpage-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Shopping Basket</span>
        </div>
        <p className="subpage-eyebrow">YOUR SELECTIONS</p>
        <h1 className="subpage-title">Shopping Basket</h1>
        <p className="subpage-intro">
          Review your chosen wall tiles, floor finishes, sample cuts, and paint specifications.
        </p>
      </section>

      <section className="subpage-content">
        {items.length > 0 ? (
          <div className="cart-layout">
            {/* Items List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {items.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-img"
                  />

                  <div className="cart-item-info">
                    <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', margin: '0 0 4px', fontWeight: 400 }}>
                      {item.name}
                    </h3>
                    <p style={{ margin: '0 0 10px', color: '#627080', fontSize: '13px' }}>{item.type}</p>
                    <span className="cart-item-price">
                      {item.price === 0 ? 'FREE' : `£${item.price.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="cart-item-controls">
                    <div className="cart-qty-picker">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="cart-remove-btn"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', flexWrap: 'wrap', gap: '10px' }}>
                <Link href="/products/wall-tiles" className="btn-secondary" style={{ fontSize: '13px' }}>
                  &larr; Continue Shopping
                </Link>
                <button className="btn-secondary" onClick={() => setItems([])} style={{ fontSize: '13px' }}>
                  Clear Basket
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="cart-summary-card">
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 400, marginTop: 0, marginBottom: '20px' }}>
                Order Summary
              </h2>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px', color: '#627080' }}>
                <span>Subtotal</span>
                <span style={{ fontWeight: 600, color: 'var(--ink)' }}>£{subtotal.toFixed(2)}</span>
              </div>

              {discount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px', color: '#279A4B' }}>
                  <span>Promo Code (10% Off)</span>
                  <span style={{ fontWeight: 600 }}>-£{discount.toFixed(2)}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '14px', color: '#627080' }}>
                <span>Standard Kerbside Delivery</span>
                <span style={{ fontWeight: 600, color: 'var(--ink)' }}>
                  {shipping === 0 ? 'FREE (Orders over £500)' : `£${shipping.toFixed(2)}`}
                </span>
              </div>

              {/* Promo Code Form */}
              <form onSubmit={applyPromo} style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                <input
                  placeholder="Code: EXTRA10"
                  className="form-input"
                  style={{ flex: 1, padding: '8px 12px', fontSize: '13px' }}
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button type="submit" className="btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
                  Apply
                </button>
              </form>
              {promoApplied && (
                <p style={{ color: '#279A4B', fontSize: '12px', margin: '-16px 0 20px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Tag size={13} /> Code EXTRA10 successfully applied!
                </p>
              )}

              <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '16px', fontWeight: 600 }}>Total</span>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: 700, color: 'var(--ink)' }}>
                  £{total.toFixed(2)}
                </span>
              </div>

              <button
                className="btn-primary"
                style={{ width: '100%', marginBottom: '16px' }}
                onClick={() => alert('Proceeding to Secure Checkout with Apple Pay, PayPal & Cards.')}
              >
                Proceed to Checkout <ArrowRight size={16} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '12px', color: '#77818d' }}>
                <ShieldCheck size={16} style={{ color: '#279A4B' }} />
                <span>SSL Encrypted &amp; Secure Payment Processing</span>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 20px', background: 'var(--cream)', borderRadius: '4px' }}>
            <ShoppingBag size={56} style={{ color: '#ac6543', margin: '0 auto 16px' }} />
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '30px', fontWeight: 400, margin: '0 0 12px' }}>
              Your Basket is Currently Empty
            </h2>
            <p style={{ color: '#627080', fontSize: '16px', maxWidth: '480px', margin: '0 auto 28px' }}>
              Explore our collections to add tile cut samples or select boxes for your upcoming project.
            </p>
            <Link href="/products/wall-tiles" className="btn-primary">
              Explore Tile Collections <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
