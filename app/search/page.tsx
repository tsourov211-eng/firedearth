'use client';

import { Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Heart, SlidersHorizontal, ArrowRight } from 'lucide-react';

const allProducts = [
  { name: 'Handmade Classic Terracotta Square Tile 20x20', price: 78, material: 'Terracotta', category: 'Floor Tiles', image: 'https://images.pexels.com/photos/17497857/pexels-photo-17497857.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000' },
  { name: 'Nina Campbell Rivage Ivory Glazed Wall Tile', price: 86.4, material: 'Ceramic', category: 'Wall Tiles', image: 'https://images.pexels.com/photos/11020457/pexels-photo-11020457.jpeg?auto=compress&cs=tinysrgb&h=800&w=700' },
  { name: 'Nina Campbell La Moulade Indigo Porcelain Tile', price: 88.5, material: 'Porcelain', category: 'Bathroom Tiles', image: 'https://images.pexels.com/photos/9252956/pexels-photo-9252956.jpeg?auto=compress&cs=tinysrgb&h=800&w=700' },
  { name: 'Frammenti Pastel Terrazzo Tile', price: 59.71, material: 'Terrazzo', category: 'Floor Tiles', image: 'https://images.pexels.com/photos/6758509/pexels-photo-6758509.jpeg?auto=compress&cs=tinysrgb&h=800&w=700' },
  { name: 'Stoneware Chalk Handmade Wall Tile', price: 72, material: 'Ceramic', category: 'Kitchen Tiles', image: 'https://images.pexels.com/photos/8089256/pexels-photo-8089256.jpeg?auto=compress&cs=tinysrgb&h=800&w=700' },
  { name: 'Herringbone Natural Stone Effect Tile', price: 64, material: 'Porcelain', category: 'Floor Tiles', image: 'https://images.pexels.com/photos/21874959/pexels-photo-21874959.jpeg?auto=compress&cs=tinysrgb&h=800&w=700' },
  { name: 'Botanical Garden Patterned Wall Tile', price: 91, material: 'Ceramic', category: 'Wall Tiles', image: 'https://images.pexels.com/photos/37360088/pexels-photo-37360088.jpeg?auto=compress&cs=tinysrgb&h=800&w=700' },
  { name: 'Limestone Look Large Format Tile', price: 48, material: 'Porcelain', category: 'Outdoor Tiles', image: 'https://images.pexels.com/photos/16799768/pexels-photo-16799768.jpeg?auto=compress&cs=tinysrgb&h=800&w=700' },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [cartCount, setCartCount] = useState(0);

  const results = useMemo(() => {
    if (!query.trim()) return allProducts;
    const q = query.toLowerCase();
    return allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <section className="subpage-hero">
        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Search</span>
        </div>
        <h1 className="subpage-title">Search Results</h1>
        <div style={{ maxWidth: '540px', margin: '20px auto 0', display: 'flex', background: '#fff', border: '1px solid var(--line)', padding: '6px 14px', alignItems: 'center' }}>
          <Search size={20} style={{ color: '#78837b', marginRight: '10px' }} />
          <input
            style={{ border: 0, outline: 'none', width: '100%', fontSize: '15px' }}
            placeholder="Search tiles, materials, rooms..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </section>

      <section className="subpage-content">
        <div style={{ marginBottom: '28px', color: '#627080', fontSize: '14px' }}>
          Showing <strong>{results.length}</strong> results {query ? `for "${query}"` : 'across all collections'}
        </div>

        <div className="catalog-grid">
          {results.map((product) => (
            <article className="catalog-card" key={product.name}>
              <div className="catalog-image">
                <img src={product.image} alt={product.name} />
                <button
                  className="catalog-heart"
                  aria-label={`Save ${product.name}`}
                  onClick={() => alert(`Saved ${product.name} to wishlist!`)}
                >
                  <Heart size={18} />
                </button>
              </div>
              <div style={{ padding: '8px 0 4px', fontSize: '12px', color: '#ac6543', fontWeight: 600 }}>
                {product.category} &bull; {product.material}
              </div>
              <h2>{product.name}</h2>
              <p>£{product.price.toFixed(2)} /m<sup>2</sup></p>
              <button
                className="sample-button"
                onClick={() => {
                  setCartCount((c) => c + 1);
                  alert(`Added a sample of ${product.name} to basket!`);
                }}
              >
                Order a sample
              </button>
            </article>
          ))}
        </div>

        {results.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--cream)', borderRadius: '4px' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', margin: '0 0 10px', fontWeight: 400 }}>No products matched your search</h2>
            <p style={{ color: '#627080', fontSize: '15px', marginBottom: '20px' }}>Try searching for &quot;Terracotta&quot;, &quot;Zellige&quot;, &quot;Porcelain&quot;, or &quot;Bathroom&quot;.</p>
            <button className="btn-secondary" onClick={() => setQuery('')}>Clear Search Filter</button>
          </div>
        )}
      </section>
    </>
  );
}

export default function SearchPage() {
  return (
    <main className="subpage">
      <Header />
      <Suspense fallback={<div style={{ padding: '80px', textAlign: 'center' }}>Loading search results...</div>}>
        <SearchContent />
      </Suspense>
      <Footer />
    </main>
  );
}
