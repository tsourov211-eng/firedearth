'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { allProducts, roomTiles } from '@/lib/products';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CircleUserRound,
  Heart,
  Package,
} from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/19737861/pexels-photo-19737861.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000';
const communityImages = [
  { url: 'https://images.pexels.com/photos/6758509/pexels-photo-6758509.jpeg?auto=compress&cs=tinysrgb&h=1000&w=700', alt: 'Pink bathroom interior' },
  { url: 'https://images.pexels.com/photos/11020457/pexels-photo-11020457.jpeg?auto=compress&cs=tinysrgb&h=1000&w=700', alt: 'Warm home interior' },
  { url: 'https://images.pexels.com/photos/9252956/pexels-photo-9252956.jpeg?auto=compress&cs=tinysrgb&h=1000&w=700', alt: 'Blue tiled bathroom' },
];

function SectionHeading({ children, centered = false }: { children: React.ReactNode; centered?: boolean }) {
  return <h2 className={`section-heading ${centered ? 'text-center' : ''}`}>{children}</h2>;
}

export default function Home() {
  const [roomOffset, setRoomOffset] = useState(0);
  const [productOffset, setProductOffset] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const roomGridRef = useRef<HTMLDivElement>(null);
  const productGridRef = useRef<HTMLDivElement>(null);

  const shiftRoom = (direction: number) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 640 && roomGridRef.current) {
      roomGridRef.current.scrollBy({ left: direction * 260, behavior: 'smooth' });
    } else {
      setRoomOffset((current) => Math.max(0, Math.min(roomTiles.length - 3, current + direction)));
    }
  };

  const shiftProducts = (direction: number) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 640 && productGridRef.current) {
      productGridRef.current.scrollBy({ left: direction * 280, behavior: 'smooth' });
    } else {
      setProductOffset((current) => Math.max(0, Math.min(allProducts.length - 3, current + direction)));
    }
  };

  return (
    <main>
      <Header cartCount={cartCount} />

      {/* Clearance Promo Banner */}
      <section className="promo-bar">
        EXTRA 10% OFF{' '}
        <Link href="/products/clearance" style={{ textDecoration: 'underline', color: 'inherit', margin: '0 6px', fontWeight: 600 }}>
          CLEARANCE COLLECTION
        </Link>{' '}
        | CODE EXTRA10
      </section>

      {/* Hero Section */}
      <section className="hero" id="top" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="eyebrow">THE NEW SEASON</p>
          <h1>The Autumn Edit.</h1>
          <p className="hero-lead">A celebration of autumn&apos;s richer palette.</p>
          <p className="hero-body">
            Discover warming terracotta, earthy neutrals and natural textures,
            <br className="desktop-only" /> bringing warmth and character to the home.
          </p>
          <Link className="outline-button light-button" href="/products/wall-tiles">
            Shop the Edit
          </Link>
        </div>
        <div className="hero-dots">
          <span className="active" /><span /><span /><span /><span />
        </div>
      </section>

      {/* Service Value Highlights */}
      <section className="service-bar">
        <Link href="/brochures" style={{ display: 'flex', gap: '18px', alignItems: 'center', color: 'inherit' }}>
          <Package size={37} strokeWidth={1.4} />
          <span>Four Free Cut Samples</span>
        </Link>
        <Link href="/showrooms" style={{ display: 'flex', gap: '18px', alignItems: 'center', color: 'inherit' }}>
          <CircleUserRound size={40} strokeWidth={1.3} />
          <span>Visit Your Local Showroom</span>
        </Link>
        <Link href="/brochures" style={{ display: 'flex', gap: '18px', alignItems: 'center', color: 'inherit' }}>
          <BookOpen size={39} strokeWidth={1.3} />
          <span>View Our Online Brochure</span>
        </Link>
      </section>

      {/* Shop by Room Section */}
      <section className="content-section room-section" id="edit">
        <div className="section-top">
          <SectionHeading>Shop by room</SectionHeading>
          <div className="carousel-controls">
            <button onClick={() => shiftRoom(-1)} aria-label="Previous rooms">
              <ArrowLeft size={24} />
            </button>
            <button onClick={() => shiftRoom(1)} aria-label="Next rooms">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
        <div ref={roomGridRef} className="room-grid" style={{ transform: `translateX(-${roomOffset * 25}%)` }}>
          {roomTiles.map((room) => (
            <Link className="room-card" href={`/products/${room.slug}`} key={room.title} title={`Explore ${room.title}`}>
              <div className="room-card-image-wrap">
                <img src={room.image} alt={room.title} />
              </div>
              <span className="room-card-title">{room.title}</span>
              <span className="room-card-link-text">Explore collection &rarr;</span>
            </Link>
          ))}
        </div>
        <div className="pagination-dots">
          {roomTiles.map((_, idx) => (
            <span key={idx} className={idx === roomOffset ? 'active' : ''} />
          ))}
        </div>
      </section>

      {/* Most Loved Section */}
      <section className="content-section products-section" id="products">
        <div className="section-top">
          <SectionHeading>Most loved</SectionHeading>
          <div className="carousel-controls">
            <button onClick={() => shiftProducts(-1)} aria-label="Previous products">
              <ArrowLeft size={24} />
            </button>
            <button onClick={() => shiftProducts(1)} aria-label="Next products">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
        <div ref={productGridRef} className="product-grid" style={{ transform: `translateX(-${productOffset * 33.333}%)` }}>
          {allProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <Link href={`/products/${product.slug}`} className="product-card-link" aria-label={`View ${product.name}`}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  {product.badge && <span className="back-soon">{product.badge}</span>}
                  <button
                    className="heart-button"
                    aria-label={`Save ${product.name} to wishlist`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      alert(`Saved "${product.name}" to wishlist!`);
                    }}
                  >
                    <Heart size={18} />
                  </button>
                </div>
              </Link>
              <div className="swatches">
                {(product.swatches || ['#b36d43', '#d8a57b', '#d9c8aa', '#9c8061']).map((swatch, idx) => (
                  <i key={idx} style={{ background: swatch }} />
                ))}
                <button
                  aria-label="Add to cart"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCartCount((c) => c + 1);
                    alert(`Added 1 box of "${product.name}" to your basket!`);
                  }}
                  title="Add to basket"
                >
                  +
                </button>
              </div>
              <Link href={`/products/${product.slug}`} className="product-card-info-link">
                <h3>{product.name}</h3>
                <p>£{product.price.toFixed(2)} /m<sup>2</sup></p>
              </Link>
              <div className="product-card-action">
                <Link href={`/products/${product.slug}`} className="product-view-btn">
                  View Product Details &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="pagination-dots">
          {Array.from({ length: Math.max(1, allProducts.length - 2) }).map((_, idx) => (
            <span key={idx} className={idx === productOffset ? 'active' : ''} />
          ))}
        </div>
      </section>

      {/* Community / Stories Section */}
      <section className="community-section" id="stories">
        <SectionHeading centered>In Your Home</SectionHeading>
        <p>Browse the latest photos from our community.</p>
        <p>Share how you have used our products by tagging @webnibo on Instagram or using the hashtag #webnibo</p>
        <div className="community-grid">
          {communityImages.map((img, i) => (
            <img key={i} src={img.url} alt={img.alt} />
          ))}
        </div>
        <Link className="outline-button dark-outline" href="/stories">
          View More Stories
        </Link>
      </section>

      {/* Advice Section */}
      <section className="advice-section" id="advice">
        <SectionHeading centered>Need advice or inspiration?</SectionHeading>
        <p>We are here to help you in any way we can.</p>
        <p>Read up on our advice hub to get all the help you need.</p>
        <div className="advice-links">
          <Link href="/products/bathroom-tiles">Bathroom Tiles</Link>
          <Link href="/advice">Advice Hub</Link>
          <Link href="/products/kitchen-tiles">Kitchen Tiles</Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <SectionHeading centered>Join our Newsletter &amp; Get Exclusive Offers</SectionHeading>
        <p>
          Be the first to hear about our new collections, interior trends for the season and
          <br className="desktop-only" /> exciting offers.
        </p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (email) setSubscribed(true);
          }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            aria-label="Email address"
          />
          <button aria-label="Subscribe">→</button>
        </form>
        <label className="consent">
          <input type="checkbox" required />
          <span>I agree to receiving marketing emails and special deals from webnibo</span>
        </label>
        {subscribed && <p className="success-message">Thank you — you&apos;re on the list.</p>}
      </section>

      <Footer />
    </main>
  );
}
