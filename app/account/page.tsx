'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CircleUserRound, Package, Clock } from 'lucide-react';

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setLoggedIn(true);
    }
  };

  return (
    <main style={{ minHeight: '100vh', background: '#fff' }}>
      <section className="subpage-hero" style={{ padding: '52px 20px 42px' }}>
        <p className="subpage-eyebrow">CUSTOMER PORTAL</p>
        <h1 className="subpage-title">{loggedIn ? 'Welcome Back' : isLogin ? 'Sign In to Your Account' : 'Create an Account'}</h1>
        <p className="subpage-intro">
          Track sample dispatches, review past tile specifications, save your favourite wishlists, and manage delivery addresses.
        </p>
      </section>

      <section className="subpage-content" style={{ maxWidth: '480px', margin: '40px auto 60px', padding: '0 16px' }}>
        {loggedIn ? (
          <div style={{ background: '#fff', border: '1px solid var(--line)', padding: 'clamp(20px, 4vw, 40px)', borderRadius: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
              <div className="feature-card-icon" style={{ background: 'var(--cream)' }}>
                <CircleUserRound size={28} />
              </div>
              <div>
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', margin: 0, fontWeight: 400 }}>
                  Account Dashboard
                </h2>
                <p style={{ margin: '4px 0 0', color: '#627080', fontSize: '14px' }}>Logged in as: <strong>{email}</strong></p>
              </div>
            </div>

            <div style={{ background: 'var(--cream)', padding: '24px', borderRadius: '4px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Package size={20} style={{ color: '#ac6543' }} />
                <h3 style={{ margin: 0, fontSize: '16px' }}>Recent Sample Order #WN-88192</h3>
              </div>
              <p style={{ color: '#627080', fontSize: '13px', margin: '0 0 12px' }}>
                4x Cut Tile Samples (Dispatched via Royal Mail Tracked 48)
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#e1f5fe', color: '#0288d1', padding: '4px 10px', borderRadius: '2px', fontSize: '12px', fontWeight: 600 }}>
                <Clock size={13} /> In Transit &bull; Expected Tomorrow
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/" className="btn-primary" style={{ flex: 1, textAlign: 'center' }}>
                Return to Shop
              </Link>
              <button className="btn-secondary" onClick={() => setLoggedIn(false)}>
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="contact-form-card" style={{ background: '#fff' }}>
            <div style={{ display: 'flex', gap: '20px', borderBottom: '1px solid var(--line)', paddingBottom: '16px', marginBottom: '28px' }}>
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                style={{
                  background: 'none',
                  border: 0,
                  fontSize: '16px',
                  fontWeight: isLogin ? 700 : 400,
                  color: isLogin ? 'var(--ink)' : '#78837b',
                  borderBottom: isLogin ? '2px solid #ac6543' : '2px solid transparent',
                  paddingBottom: '8px',
                  cursor: 'pointer',
                  transition: 'all .2s',
                }}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                style={{
                  background: 'none',
                  border: 0,
                  fontSize: '16px',
                  fontWeight: !isLogin ? 700 : 400,
                  color: !isLogin ? 'var(--ink)' : '#78837b',
                  borderBottom: !isLogin ? '2px solid #ac6543' : '2px solid transparent',
                  paddingBottom: '8px',
                  cursor: 'pointer',
                  transition: 'all .2s',
                }}
              >
                Create Account
              </button>
            </div>

            <form onSubmit={handleAuth}>
              <div className="form-group">
                <label>Email Address *</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="email"
                    className="form-input"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Password *</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="password"
                    className="form-input"
                    required
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {isLogin && (
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                  <a
                    href="#forgot"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Password reset instructions sent to your email.');
                    }}
                    style={{ fontSize: '13px', color: '#ac6543', textDecoration: 'underline' }}
                  >
                    Forgot your password?
                  </a>
                </div>
              )}

              <button type="submit" className="btn-primary" style={{ width: '100%', marginBottom: '20px' }}>
                {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight size={16} />
              </button>

              <div style={{ textAlign: 'center', fontSize: '13px', color: '#77818d' }}>
                Looking for trade accounts?{' '}
                <Link href="/trade" style={{ color: '#ac6543', textDecoration: 'underline' }}>
                  Apply for a Trade Portal login
                </Link>
              </div>
            </form>
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link href="/" style={{ color: '#78837b', fontSize: '13px', textDecoration: 'none' }}>
            &larr; Back to store
          </Link>
        </div>
      </section>
    </main>
  );
}
