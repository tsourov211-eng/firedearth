'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  allProducts,
  categoryDetails,
  Product,
} from '@/lib/products';
import {
  ChevronDown,
  Heart,
  Search,
  SlidersHorizontal,
  X,
  Package,
  ShieldCheck,
  Truck,
  Layers,
  ArrowRight,
  Eye,
  Check,
  Plus,
  Minus,
} from 'lucide-react';

const filterGroups = [
  { label: 'Area', options: ['Kitchen', 'Bathroom', 'Living room', 'Outdoor'] },
  { label: 'Colour', options: ['White', 'Cream', 'Blue', 'Green', 'Pink', 'Neutral', 'Warm'] },
  { label: 'Material', options: ['Ceramic', 'Porcelain', 'Terracotta', 'Terrazzo'] },
  { label: 'Style', options: ['Handmade', 'Patterned', 'Metro', 'Herringbone'] },
];

function formatPrice(price: number) {
  return `£${price.toFixed(2)}`;
}

export default function ProductsPage({ params }: { params: { slug: string } }) {
  const [cartCount, setCartCount] = useState(0);

  // Check if current slug is a specific product
  const singleProduct = useMemo(() => {
    return allProducts.find((p) => p.slug === params.slug);
  }, [params.slug]);

  // If it's a category or generic slug
  const humanTitle = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const category = categoryDetails[params.slug] ?? {
    title: humanTitle || 'Curated Tile Collection',
    intro: 'Explore beautiful materials, rich earthy pigments, and timeless tactile textures for your home.',
    count: allProducts.length,
  };

  // State for single product PDP
  const [boxQuantity, setBoxQuantity] = useState(3);
  const [sampleAdded, setSampleAdded] = useState(false);

  // State for category catalog
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sort, setSort] = useState('Recommended');
  const [filterOpen, setFilterOpen] = useState(false);
  const [search, setSearch] = useState('');

  const visibleProducts = useMemo(() => {
    // If slug matches a category (e.g. wall-tiles, floor-tiles, etc.)
    const categoryMatched = allProducts.filter((product) => {
      if (params.slug === 'wall-tiles') return product.category === 'wall-tiles';
      if (params.slug === 'floor-tiles') return product.category === 'floor-tiles';
      if (params.slug === 'bathroom-tiles') return product.category === 'bathroom-tiles' || product.suitability.includes('Bathroom');
      if (params.slug === 'kitchen-tiles') return product.category === 'kitchen-tiles' || product.suitability.includes('Kitchen');
      if (params.slug === 'outdoor-tiles') return product.category === 'outdoor-tiles' || product.suitability.includes('Outdoor');
      if (params.slug === 'splashback-tiles') return product.suitability.includes('Splashback');
      return true;
    });

    const filtered = categoryMatched.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesFilter =
        selectedFilters.length === 0 ||
        selectedFilters.some(
          (filter) =>
            product.material.toLowerCase().includes(filter.toLowerCase()) ||
            product.colour.toLowerCase().includes(filter.toLowerCase()) ||
            product.finish.toLowerCase().includes(filter.toLowerCase()) ||
            product.suitability.toLowerCase().includes(filter.toLowerCase())
        );
      return matchesSearch && matchesFilter;
    });

    return [...filtered].sort((a, b) =>
      sort === 'Price: Low to high'
        ? a.price - b.price
        : sort === 'Price: High to low'
        ? b.price - a.price
        : 0
    );
  }, [params.slug, search, selectedFilters, sort]);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((current) =>
      current.includes(filter) ? current.filter((item) => item !== filter) : [...current, filter]
    );
  };

  // RENDER SINGLE PRODUCT DETAIL VIEW (PDP)
  if (singleProduct) {
    const relatedProducts = allProducts.filter((p) => p.slug !== singleProduct.slug).slice(0, 3);
    const totalCoverage = (boxQuantity * singleProduct.coveragePerBox).toFixed(2);
    const totalPrice = (boxQuantity * singleProduct.pricePerBox).toFixed(2);

    return (
      <main className="subpage">
        <Header cartCount={cartCount} />

        <div className="subpage-content" style={{ paddingTop: '32px' }}>
          {/* Breadcrumbs */}
          <nav className="products-breadcrumbs" aria-label="Breadcrumb" style={{ padding: '0 0 24px', margin: 0 }}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href={`/products/${singleProduct.category}`}>{singleProduct.categoryName}</Link>
            <span>/</span>
            <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{singleProduct.name}</span>
          </nav>

          {/* Product Detail Layout */}
          <div className="page-grid-2" style={{ gap: '48px', alignItems: 'start', marginBottom: '64px' }}>
            {/* Gallery Image */}
            <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--line)', background: 'var(--cream)' }}>
              <img
                src={singleProduct.image}
                alt={singleProduct.name}
                style={{ width: '100%', height: 'clamp(300px, 50vw, 560px)', objectFit: 'cover', display: 'block' }}
              />
              {singleProduct.badge && (
                <span
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: '#fff',
                    color: 'var(--ink)',
                    padding: '6px 14px',
                    fontSize: '11px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  }}
                >
                  {singleProduct.badge}
                </span>
              )}
            </div>

            {/* Info & Buying Panel */}
            <div>
              <span style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#ac6543', fontWeight: 700 }}>
                {singleProduct.categoryName} &bull; {singleProduct.material}
              </span>
              <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 400, margin: '8px 0 16px', lineHeight: 1.2 }}>
                {singleProduct.name}
              </h1>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '20px' }}>
                <span style={{ fontSize: '32px', fontFamily: 'Georgia, serif', fontWeight: 700, color: 'var(--ink)' }}>
                  £{singleProduct.price.toFixed(2)}
                </span>
                <span style={{ color: '#627080', fontSize: '15px' }}>
                  /m² (or £{singleProduct.pricePerBox.toFixed(2)} per box)
                </span>
              </div>

              <p style={{ color: '#627080', fontSize: '15px', lineHeight: 1.7, marginBottom: '28px' }}>
                {singleProduct.description}
              </p>

              {/* Quantity Box Selector */}
              <div style={{ background: 'var(--cream)', padding: '24px', borderRadius: '4px', border: '1px solid var(--line)', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div>
                    <label style={{ fontSize: '14px', fontWeight: 600 }}>Quantity (Boxes)</label>
                    <p style={{ margin: '2px 0 0', fontSize: '13px', color: '#627080' }}>
                      1 box = {singleProduct.coveragePerBox} m² &bull; Total coverage: <strong>{totalCoverage} m²</strong>
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', background: '#fff', border: '1px solid var(--line)', borderRadius: '2px', padding: '4px 8px' }}>
                    <button
                      onClick={() => setBoxQuantity((q) => Math.max(1, q - 1))}
                      style={{ border: 0, background: 'none', cursor: 'pointer', padding: '4px 8px' }}
                      aria-label="Decrease box quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span style={{ minWidth: '32px', textAlign: 'center', fontSize: '16px', fontWeight: 600 }}>
                      {boxQuantity}
                    </span>
                    <button
                      onClick={() => setBoxQuantity((q) => q + 1)}
                      style={{ border: 0, background: 'none', cursor: 'pointer', padding: '4px 8px' }}
                      aria-label="Increase box quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--line)', paddingTop: '12px' }}>
                  <span style={{ fontSize: '14px', color: '#627080' }}>Estimated Total:</span>
                  <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)' }}>£{totalPrice}</span>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '14px', marginBottom: '28px', flexWrap: 'wrap' }}>
                <button
                  className="btn-primary"
                  style={{ flex: 1, padding: '16px 28px' }}
                  onClick={() => {
                    setCartCount((c) => c + boxQuantity);
                    alert(`Added ${boxQuantity} box(es) of "${singleProduct.name}" to your basket!`);
                  }}
                >
                  <Package size={18} /> Add {boxQuantity} Boxes to Basket
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    setCartCount((c) => c + 1);
                    setSampleAdded(true);
                  }}
                  style={{ padding: '16px 24px' }}
                >
                  {sampleAdded ? <><Check size={16} style={{ color: '#279A4B' }} /> Sample in Basket</> : 'Order Free Cut Sample'}
                </button>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <Link
                  href="/visualiser"
                  className="btn-secondary"
                  style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '8px' }}
                >
                  <Eye size={16} /> Preview in Room Visualiser
                </Link>
              </div>

              {/* Specifications Table */}
              <div style={{ borderTop: '1px solid var(--line)', paddingTop: '24px' }}>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '20px', margin: '0 0 16px', fontWeight: 400 }}>
                  Technical Specifications
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', fontSize: '13px' }}>
                  <div style={{ background: '#faf9f6', padding: '10px 14px', borderRadius: '2px' }}>
                    <span style={{ color: '#77818d', display: 'block' }}>Tile Dimensions</span>
                    <strong style={{ color: 'var(--ink)' }}>{singleProduct.dimensions}</strong>
                  </div>
                  <div style={{ background: '#faf9f6', padding: '10px 14px', borderRadius: '2px' }}>
                    <span style={{ color: '#77818d', display: 'block' }}>Material</span>
                    <strong style={{ color: 'var(--ink)' }}>{singleProduct.material}</strong>
                  </div>
                  <div style={{ background: '#faf9f6', padding: '10px 14px', borderRadius: '2px' }}>
                    <span style={{ color: '#77818d', display: 'block' }}>Surface Finish</span>
                    <strong style={{ color: 'var(--ink)' }}>{singleProduct.finish}</strong>
                  </div>
                  <div style={{ background: '#faf9f6', padding: '10px 14px', borderRadius: '2px' }}>
                    <span style={{ color: '#77818d', display: 'block' }}>Slip Resistance</span>
                    <strong style={{ color: 'var(--ink)' }}>{singleProduct.slipRating}</strong>
                  </div>
                  <div style={{ background: '#faf9f6', padding: '10px 14px', borderRadius: '2px', gridColumn: 'span 2' }}>
                    <span style={{ color: '#77818d', display: 'block' }}>Suitability</span>
                    <strong style={{ color: 'var(--ink)' }}>{singleProduct.suitability}</strong>
                  </div>
                </div>
              </div>

              {/* Trust Features */}
              <div style={{ marginTop: '24px', display: 'flex', gap: '20px', fontSize: '12px', color: '#627080' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <Truck size={15} style={{ color: '#ac6543' }} /> Free delivery over £500
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <ShieldCheck size={15} style={{ color: '#ac6543' }} /> 14-day satisfaction returns
                </span>
              </div>
            </div>
          </div>

          {/* Related Products Carousel */}
          <section style={{ borderTop: '1px solid var(--line)', paddingTop: '48px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
              <div>
                <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#ac6543', fontWeight: 700 }}>
                  COORDINATING DESIGNS
                </span>
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: 400, margin: '4px 0 0' }}>
                  You May Also Like
                </h2>
              </div>
              <Link href={`/products/${singleProduct.category}`} className="btn-secondary" style={{ fontSize: '13px' }}>
                View All {singleProduct.categoryName} <ArrowRight size={14} />
              </Link>
            </div>

            <div className="catalog-grid">
              {relatedProducts.map((rel) => (
                <article className="catalog-card" key={rel.name}>
                  <Link href={`/products/${rel.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <div className="catalog-image">
                      <img src={rel.image} alt={rel.name} />
                      {rel.badge && <span className="catalog-badge">{rel.badge}</span>}
                    </div>
                  </Link>
                  <div className="catalog-swatches">
                    {(rel.swatches || ['#b36d43', '#d9c8aa', '#24364f']).map((swatch, i) => (
                      <i key={i} style={{ backgroundColor: swatch }} />
                    ))}
                    <span>+4 colours</span>
                  </div>
                  <Link href={`/products/${rel.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h2>{rel.name}</h2>
                    <p>{formatPrice(rel.price)} /m<sup>2</sup></p>
                  </Link>
                  <Link href={`/products/${rel.slug}`} className="sample-button" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                    View Tile Details
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </div>

        <Footer />
      </main>
    );
  }

  // RENDER CATEGORY CATALOG VIEW
  return (
    <main className="products-page">
      <Header cartCount={cartCount} />

      <nav className="products-breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/products/wall-tiles">Collections</Link>
        <span>/</span>
        <span style={{ color: 'var(--ink)' }}>{category.title}</span>
      </nav>

      <section className="products-intro">
        <p className="eyebrow">THE WEBNIBO COLLECTION</p>
        <h1>{category.title}</h1>
        <p>{category.intro}</p>
      </section>

      <section className="products-toolbar">
        <span>{visibleProducts.length} designs available</span>
        <div className="toolbar-actions">
          <button className="mobile-filter-button" onClick={() => setFilterOpen(!filterOpen)}>
            <SlidersHorizontal size={16} /> Filter
          </button>
          <label>
            Sort by{' '}
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option>Recommended</option>
              <option>Price: Low to high</option>
              <option>Price: High to low</option>
            </select>
            <ChevronDown size={15} />
          </label>
        </div>
      </section>

      <div className="products-layout">
        <aside className={`product-filters ${filterOpen ? 'filter-open' : ''}`}>
          <div className="filter-heading">
            <span>Filter by</span>
            <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
              <X size={18} />
            </button>
          </div>
          {filterGroups.map((group) => (
            <div className="filter-group" key={group.label}>
              <h2>{group.label}</h2>
              {group.options.map((option) => (
                <label key={option}>
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(option)}
                    onChange={() => toggleFilter(option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          ))}
          {selectedFilters.length > 0 && (
            <button className="clear-filters" onClick={() => setSelectedFilters([])}>
              Clear all filters
            </button>
          )}
        </aside>

        <section className="product-results" aria-label={`${category.title} products`}>
          <div className="product-results-heading">
            <p>Showing {visibleProducts.length} of {category.count} designs</p>
            {selectedFilters.length > 0 && (
              <div className="active-filter-list">
                {selectedFilters.map((filter) => (
                  <button key={filter} onClick={() => toggleFilter(filter)}>
                    {filter} <X size={13} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="catalog-grid">
            {visibleProducts.map((product) => (
              <article className="catalog-card" key={product.name}>
                <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div className="catalog-image">
                    <img src={product.image} alt={product.name} />
                    {product.badge && <span className="catalog-badge">{product.badge}</span>}
                    <button
                      className="catalog-heart"
                      aria-label={`Save ${product.name}`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        alert(`Saved ${product.name} to wishlist!`);
                      }}
                    >
                      <Heart size={18} />
                    </button>
                  </div>
                </Link>

                <div className="catalog-swatches">
                  {(product.swatches || ['#b36d43', '#d9c8aa', '#24364f']).map((swatch, idx) => (
                    <i key={idx} style={{ backgroundColor: swatch }} />
                  ))}
                  <span>+4 colours</span>
                </div>

                <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h2>{product.name}</h2>
                  <p>{formatPrice(product.price)} /m<sup>2</sup></p>
                </Link>

                <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="sample-button"
                    style={{ flex: 1, textAlign: 'center', textDecoration: 'none' }}
                  >
                    View Details
                  </Link>
                  <button
                    className="sample-button"
                    style={{ background: 'var(--cream)', border: '1px solid var(--line)' }}
                    onClick={() => {
                      setCartCount((c) => c + 1);
                      alert(`Added a sample of ${product.name} to basket!`);
                    }}
                    title="Quick add sample"
                  >
                    Sample +
                  </button>
                </div>
              </article>
            ))}
          </div>

          {visibleProducts.length === 0 && (
            <div className="empty-products">
              <h2>No products found</h2>
              <p>Try removing a filter or searching for another design.</p>
            </div>
          )}
        </section>
      </div>

      <section className="products-help">
        <p className="eyebrow">NEED A LITTLE HELP?</p>
        <h2>See it in your space.</h2>
        <p>Order up to four free cut samples or speak to our team for considered advice.</p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '20px' }}>
          <Link href="/brochures" className="btn-primary">Order Free Samples</Link>
          <Link href="/advice" className="btn-secondary">Visit Advice Hub</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
