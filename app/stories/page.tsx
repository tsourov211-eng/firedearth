'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, BookOpen, Clock, Heart } from 'lucide-react';

const stories = [
  {
    id: 1,
    category: 'Real Homes',
    title: 'Warm Terracotta in a Highgate Townhouse',
    excerpt: 'How interior designer Sophie Miller used handmade square terracotta and lime plaster to introduce earthy tactility to a Victorian kitchen renovation.',
    readTime: '4 min read',
    date: 'Autumn 2026',
    image: 'https://images.pexels.com/photos/19737861/pexels-photo-19737861.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    featuredTile: 'Handmade Classic Terracotta',
    tileSlug: 'terracotta-tiles',
  },
  {
    id: 2,
    category: 'Designer Spotlight',
    title: 'Nina Campbell on Riviera Light & Pattern',
    excerpt: 'An exclusive conversation exploring the inspiration behind the Rivage and La Moulade collections—infusing French elegance with British craftsmanship.',
    readTime: '6 min read',
    date: 'Season Highlight',
    image: 'https://images.pexels.com/photos/11020457/pexels-photo-11020457.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    featuredTile: 'Rivage Ivory Glazed Tile',
    tileSlug: 'nina-campbell',
  },
  {
    id: 3,
    category: 'Inspiration',
    title: 'Transforming Compact Bathrooms with Zellige',
    excerpt: 'Why glossy, light-bouncing Moroccan zellige tiles make small en-suites and cloakrooms feel expansive, textured, and deeply calming.',
    readTime: '5 min read',
    date: 'Design Guide',
    image: 'https://images.pexels.com/photos/9252956/pexels-photo-9252956.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    featuredTile: 'Moroccan Handcut Zellige',
    tileSlug: 'zellige-tiles',
  },
  {
    id: 4,
    category: 'Real Homes',
    title: 'A Cotswolds Barn with Timeless Flagstones',
    excerpt: 'Preserving rustic architectural integrity with tumbled limestone flooring equipped with modern sustainable underfloor heating.',
    readTime: '7 min read',
    date: 'Heritage Project',
    image: 'https://images.pexels.com/photos/16799768/pexels-photo-16799768.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    featuredTile: 'Tumbled English Limestone',
    tileSlug: 'limestone-tiles',
  },
];

export default function StoriesPage() {
  const [filter, setFilter] = useState('All');

  const filteredStories = filter === 'All' ? stories : stories.filter((s) => s.category === filter);

  return (
    <main className="subpage">
      <Header />

      <section className="subpage-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Our Stories</span>
        </div>
        <p className="subpage-eyebrow">THE JOURNAL</p>
        <h1 className="subpage-title">Stories, Ideas &amp; Real Homes</h1>
        <p className="subpage-intro">
          Step inside beautiful spaces, meet the generational craftsmen who shape our materials, and discover inspiration for your next room.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '28px', flexWrap: 'wrap' }}>
          {['All', 'Real Homes', 'Designer Spotlight', 'Inspiration'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '8px 20px',
                border: filter === cat ? '1px solid var(--ink)' : '1px solid var(--line)',
                background: filter === cat ? 'var(--ink)' : '#fff',
                color: filter === cat ? '#fff' : 'var(--ink)',
                cursor: 'pointer',
                borderRadius: '20px',
                fontSize: '13px',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="subpage-content">
        <div className="page-grid-2" style={{ gap: '48px 36px', marginBottom: '64px' }}>
          {filteredStories.map((story) => (
            <article
              key={story.id}
              style={{
                border: '1px solid var(--line)',
                borderRadius: '4px',
                overflow: 'hidden',
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ height: '300px', position: 'relative' }}>
                <img
                  src={story.image}
                  alt={story.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'rgba(255,255,255,0.95)',
                    padding: '5px 12px',
                    fontSize: '11px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  {story.category}
                </span>
              </div>

              <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#77818d', marginBottom: '12px' }}>
                  <span>{story.date}</span>
                  <span>&bull;</span>
                  <span>{story.readTime}</span>
                </div>

                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', fontWeight: 400, margin: '0 0 14px', lineHeight: 1.3 }}>
                  {story.title}
                </h2>

                <p style={{ color: '#627080', fontSize: '15px', lineHeight: 1.6, flex: 1, margin: '0 0 24px' }}>
                  {story.excerpt}
                </p>

                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '13px', color: '#77818d' }}>
                    Featured: <Link href={`/products/${story.tileSlug}`} style={{ color: '#ac6543', textDecoration: 'underline' }}>{story.featuredTile}</Link>
                  </span>
                  <Link href={`/products/${story.tileSlug}`} style={{ color: 'var(--ink)', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600 }}>
                    Explore Look <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Share your home CTA */}
        <div style={{ background: 'var(--cream)', padding: '56px 40px', borderRadius: '4px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: 400, margin: '0 0 12px' }}>
            Share Your Finished Project
          </h2>
          <p style={{ color: '#627080', fontSize: '15px', maxWidth: '580px', margin: '0 auto 24px' }}>
            We love seeing our tiles in real homes. Tag @webnibo on Instagram or email high-resolution photos of your completed renovation to feature in our Journal.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
            <Link href="/contact" className="btn-primary">Submit Your Home Project</Link>
            <Link href="/products/wall-tiles" className="btn-secondary">Shop All Collections</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
