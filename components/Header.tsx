'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  ArrowRight,
  CircleDot,
  CircleUserRound,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  Music2,
  Search,
  ShoppingBasket,
  Store,
  X,
} from 'lucide-react';

const socials = [Facebook, Instagram, CircleDot, Music2];

export type MegaMenuSection = { title: string; items: string[] };
export type MegaMenu = { label: string; href?: string; sections: MegaMenuSection[]; feature?: string };

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replaceAll('&', 'and')
    .replaceAll(/[^a-z0-9]+/g, '-')
    .replaceAll(/(^-|-$)/g, '');

export const megaMenus: MegaMenu[] = [
  {
    label: 'Wall Tiles',
    sections: [
      {
        title: 'Shop by area',
        items: [
          'Kitchen Wall Tiles',
          'Bathroom Wall Tiles',
          'Splashback Tiles',
          'Fireplace Tiles',
          'Living Room Wall Tiles',
          'Outdoor Wall Tiles',
          'Shower Wall Tiles',
        ],
      },
      {
        title: 'Shop by colour',
        items: ['Black Tiles', 'Black & White Tiles', 'Blue Tiles', 'White Tiles', 'Cream Tiles', 'Green Tiles', 'Grey Tiles', 'Red & Pink Tiles'],
      },
      {
        title: 'Shop by material',
        items: ['Porcelain & Ceramic Tiles', 'Marble Tiles', 'Terracotta Tiles', 'Slate Tiles', 'Stone Tiles', 'Zellige Tiles', 'Limestone Tiles', 'Terrazzo Tiles'],
      },
      {
        title: 'Shop by style',
        items: ['Patterned Tiles', 'Quarry Tiles', 'Victorian Tiles', 'Moroccan Tiles', 'Wood Effect Tiles', 'Marble Effect Tiles', 'Stone Effect Tiles', 'Handmade Tiles'],
      },
      {
        title: 'Shop by shape',
        items: ['Mosaic Tiles', 'Metro Tiles', 'Herringbone Tiles', 'Hexagon Tiles', 'Kit Kat Tiles'],
      },
      {
        title: 'Designers',
        items: ['Bert & May', 'Nina Campbell', 'Neisha Crosland', 'Kelly Hoppen', 'Designers Guild'],
      },
    ],
    feature: 'Explore all luxury wall tiles',
  },
  {
    label: 'Floor Tiles',
    sections: [
      {
        title: 'Shop by room',
        items: ['Kitchen Floor Tiles', 'Bathroom Floor Tiles', 'Hallway Floor Tiles', 'Living Room Floor Tiles', 'Outdoor Floor Tiles'],
      },
      {
        title: 'Popular styles',
        items: ['Stone Effect Tiles', 'Wood Effect Tiles', 'Encaustic Tiles', 'Patterned Tiles', 'Terracotta Tiles'],
      },
      {
        title: 'Choose a finish',
        items: ['Matt Tiles', 'Gloss Tiles', 'Textured Tiles', 'Anti-slip Tiles', 'Large Format Tiles'],
      },
      {
        title: 'Need help?',
        items: ['Floor Tile Guide', 'How to Measure', 'Order Free Samples', 'Tile Calculator'],
      },
    ],
    feature: 'Find your perfect floor foundation',
  },
  {
    label: 'Bathroom Tiles',
    sections: [
      {
        title: 'Shop by space',
        items: ['Bathroom Wall Tiles', 'Bathroom Floor Tiles', 'Shower Tiles', 'Splashback Tiles', 'Wet Room Tiles'],
      },
      {
        title: 'Create the look',
        items: ['Spa Style', 'Modern Monochrome', 'Classic Country', 'Colourful Bathrooms', 'Small Bathroom Ideas'],
      },
      {
        title: 'Shop by material',
        items: ['Porcelain Tiles', 'Ceramic Tiles', 'Marble Tiles', 'Mosaic Tiles', 'Zellige Tiles'],
      },
      {
        title: 'Bathroom advice',
        items: ['Bathroom Tile Guide', 'Tile Calculator', 'Book a Consultation', 'Order Samples'],
      },
    ],
    feature: 'Design a calming sanctuary at home',
  },
  {
    label: 'Kitchen Tiles',
    sections: [
      {
        title: 'Shop by area',
        items: ['Kitchen Wall Tiles', 'Kitchen Floor Tiles', 'Splashback Tiles', 'Utility Room Tiles', 'Pantry Tiles'],
      },
      {
        title: 'Find your style',
        items: ['Country Kitchen', 'Contemporary Kitchen', 'Colourful Kitchen', 'Industrial Kitchen', 'Classic Kitchen'],
      },
      {
        title: 'Bestselling looks',
        items: ['Metro Tiles', 'Handmade Tiles', 'Patterned Tiles', 'Terracotta Tiles', 'Stone Effect Tiles'],
      },
      {
        title: 'Kitchen advice',
        items: ['Kitchen Tile Guide', 'How to Measure', 'View Inspiration', 'Order Samples'],
      },
    ],
    feature: 'Make your kitchen the heart of the home',
  },
  {
    label: 'Outdoor Tiles',
    sections: [
      {
        title: 'Shop by area',
        items: ['Patio Tiles', 'Terrace Tiles', 'Balcony Tiles', 'Garden Path Tiles', 'Poolside Tiles'],
      },
      {
        title: 'Outdoor styles',
        items: ['Stone Effect Tiles', 'Terracotta Tiles', 'Patterned Tiles', 'Porcelain Paving', 'Cobbles'],
      },
      {
        title: 'Plan your project',
        items: ['Outdoor Tile Guide', 'Installation Advice', 'Tile Calculator', 'Order Samples'],
      },
    ],
    feature: 'Extend your interior elegance outdoors',
  },
  {
    label: 'Paint',
    sections: [
      {
        title: 'Shop paint',
        items: ['All Paint Colours', 'Interior Paint', 'Exterior Paint', 'Trim and Woodwork', 'Sample Pots'],
      },
      {
        title: 'Colour families',
        items: ['Neutrals', 'Blues', 'Greens', 'Reds and Pinks', 'Yellows'],
      },
      {
        title: 'Find inspiration',
        items: ['Paint by Room', 'Seasonal Colours', 'Colour Pairings', 'Paint Advice'],
      },
    ],
    feature: 'Curated paints made in the UK',
  },
  {
    label: 'Clearance',
    sections: [
      {
        title: 'Shop clearance',
        items: ['All Clearance Tiles', 'Wall Tile Clearance', 'Floor Tile Clearance', 'Paint Clearance', 'Last Chance'],
      },
      {
        title: 'Shop by saving',
        items: ['Under £25 /m²', 'Under £40 /m²', 'Under £60 /m²', 'Biggest Reductions'],
      },
      {
        title: 'Good to know',
        items: ['Clearance FAQs', 'Delivery Information', 'Order Samples'],
      },
    ],
    feature: 'Extra 10% off clearance items with code EXTRA10',
  },
  {
    label: 'Our Stories',
    href: '/stories',
    sections: [
      {
        title: 'Get inspired',
        items: ['In Your Home', 'Latest Projects', 'Autumn Edit', 'Colour Stories', 'Meet the Makers'],
      },
      {
        title: 'Read our advice',
        items: ['Bathroom Ideas', 'Kitchen Ideas', 'Outdoor Ideas', 'Tile Trends', 'How To Guides'],
      },
      {
        title: 'About webnibo',
        items: ['Our Story', 'Our Showrooms', 'Sustainability'],
      },
    ],
    feature: 'Discover real homes and creative makers',
  },
  {
    label: 'Support',
    href: '/support',
    sections: [
      {
        title: 'We can help',
        items: ['Contact Us', 'Visit a Showroom', 'Book a Consultation', 'Room Visualiser', 'Trade Enquiries'],
      },
      {
        title: 'Useful tools',
        items: ['Tile Calculator', 'How to Measure', 'Order Free Samples', 'Download a Brochure'],
      },
      {
        title: 'Customer care',
        items: ['Delivery Information', 'Returns and Refunds', 'FAQs', 'Technical Guides'],
      },
    ],
    feature: 'Expert customer care and project assistance',
  },
];

export default function Header({ cartCount = 0 }: { cartCount?: number }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  return (
    <>
      <div className="top-strip">
        <div className="top-socials">
          {socials.map((Icon, index) => (
            <Icon key={index} size={15} strokeWidth={2.2} />
          ))}
        </div>
        <div className="top-links">
          <Link href="/trade">Trade</Link>
          <Link href="/advice">Advice Hub</Link>
          <Link href="/about">About Us</Link>
        </div>
      </div>

      <header className="site-header">
        <div className="header-main">
          {/* Left: Mobile hamburger menu button */}
          <div className="header-left">
            <button
              className="mobile-menu-button"
              aria-label={mobileMenu ? 'Close menu' : 'Open menu'}
              onClick={() => {
                setMobileMenu(!mobileMenu);
                if (searchOpen) setSearchOpen(false);
              }}
            >
              {mobileMenu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Center: Brand Logo */}
          <div className="header-center">
            <Link className="wordmark" href="/" aria-label="webnibo">
              <img src="/logo.png" alt="webnibo" className="site-logo" />
            </Link>
          </div>

          {/* Search Box: inline on desktop, dropdown overlay on mobile */}
          <form
            className={`search-box ${searchOpen ? 'search-visible' : ''}`}
            onSubmit={handleSearchSubmit}
          >
            <Search size={18} className="search-input-icon" />
            <input
              aria-label="Search products"
              placeholder="Search tiles, paint, textures..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" aria-label="Submit search" className="search-submit-btn">
              Search
            </button>
            {searchOpen && (
              <button
                type="button"
                className="search-close-mobile-btn"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                <X size={18} />
              </button>
            )}
          </form>

          {/* Right: Actions */}
          <div className="header-right header-actions">
            <Link href="/visualiser" className="header-action action-desktop-only">
              <Store size={24} />
              <span>
                Room
                <br />
                Visualiser
              </span>
            </Link>
            <Link href="/showrooms" className="header-action action-desktop-only">
              <MapPin size={23} />
              <span>
                Find a<br />
                Showroom
              </span>
            </Link>
            <Link href="/account" className="header-icon action-desktop-only" aria-label="Account">
              <CircleUserRound size={24} />
            </Link>

            {/* Mobile Search Toggle */}
            <button
              className="mobile-search-btn"
              aria-label="Search"
              onClick={() => {
                setSearchOpen(!searchOpen);
                if (mobileMenu) setMobileMenu(false);
              }}
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>

            {/* Cart Basket */}
            <Link href="/cart" className="header-icon basket" aria-label="Basket">
              <ShoppingBasket size={24} />
              <span className="cart-badge">{cartCount}</span>
            </Link>
          </div>
        </div>

        <nav className={`main-nav ${mobileMenu ? 'nav-open' : ''}`} aria-label="Primary navigation">
          {megaMenus.map((menu) => {
            const topHref = menu.href || `/products/${slugify(menu.label)}`;
            return (
              <div className="nav-item" key={menu.label}>
                <Link className="nav-link" href={topHref} onClick={() => setMobileMenu(false)}>
                  {menu.label}
                </Link>
                <div className="mega-menu" role="region" aria-label={`${menu.label} menu`}>
                  <div className="mega-menu-inner">
                    <div className="mega-menu-grid">
                      {menu.sections.map((section) => (
                        <div className="mega-menu-column" key={section.title}>
                          <h3>{section.title}</h3>
                          {section.items.map((item) => (
                            <Link
                              href={`/products/${slugify(item)}`}
                              key={item}
                              onClick={() => setMobileMenu(false)}
                            >
                              {item}
                            </Link>
                          ))}
                          <Link
                            className="mega-view-all"
                            href={topHref}
                            onClick={() => setMobileMenu(false)}
                          >
                            View all
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="mega-menu-footer">
                      <span>{menu.feature}</span>
                      <Link href={topHref} onClick={() => setMobileMenu(false)}>
                        Explore {menu.label} <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="mobile-drawer-footer">
            <Link href="/visualiser" onClick={() => setMobileMenu(false)} className="mobile-action-pill">
              <Store size={18} /> Room Visualiser
            </Link>
            <Link href="/showrooms" onClick={() => setMobileMenu(false)} className="mobile-action-pill">
              <MapPin size={18} /> Find Showroom
            </Link>
            <Link href="/account" onClick={() => setMobileMenu(false)} className="mobile-action-pill">
              <CircleUserRound size={18} /> My Account
            </Link>
            <Link href="/cart" onClick={() => setMobileMenu(false)} className="mobile-action-pill">
              <ShoppingBasket size={18} /> Basket ({cartCount})
            </Link>
            <Link href="/trade" onClick={() => setMobileMenu(false)} className="mobile-action-pill">
              Trade Portal
            </Link>
            <Link href="/advice" onClick={() => setMobileMenu(false)} className="mobile-action-pill">
              Advice Hub
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
