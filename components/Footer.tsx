'use client';

import Link from 'next/link';
import { CircleDot, Facebook, Instagram, Music2, ChevronUp, MapPin, Package } from 'lucide-react';

const socials = [Facebook, Instagram, CircleDot, Music2];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer" id="about">
        <div className="footer-container">
          {/* Row 1 */}
          <div className="footer-row footer-row-1">
            <div className="footer-col footer-col-brand">
              <Link href="/" className="footer-brand">
                <img src="/logo.png" alt="webnibo" className="footer-logo-img" />
              </Link>
              <p className="footer-brand-desc">
                Specialists in handmade artisan tiles, luxury natural stone, and British-crafted paints. Crafted with timeless soul.
              </p>
              <div className="footer-socials">
                {socials.map((Icon, index) => (
                  <a
                    key={index}
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Social link"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-col">
              <h3>Customer Services</h3>
              <Link href="/brochures">Brochures &amp; Paint Card</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/returns">Returns &amp; Refunds</Link>
              <Link href="/guides">Technical Guides</Link>
              <Link href="/support">Help &amp; FAQs</Link>
            </div>

            <div className="footer-col">
              <h3>Trade &amp; Services</h3>
              <Link href="/trade">Trade Portal &amp; Discount</Link>
              <Link href="/advice">Advice Hub &amp; Calculator</Link>
              <Link href="/visualiser">3D Room Visualiser</Link>
              <Link href="/terms/trade">Trade Terms &amp; Conditions</Link>
              <Link href="/contact">Commercial Project Enquiries</Link>
            </div>
          </div>

          {/* Row 2 */}
          <div className="footer-row footer-row-2">
            <div className="footer-col">
              <h3>Information</h3>
              <Link href="/about">About Us &amp; Heritage</Link>
              <Link href="/showrooms">Find a Local Showroom</Link>
              <Link href="/delivery">Delivery Information</Link>
              <Link href="/stories">Our Stories &amp; Journal</Link>
              <Link href="/careers">Careers at webnibo</Link>
            </div>

            <div className="footer-col">
              <h3>Legal &amp; Policy</h3>
              <Link href="/legal/modern-slavery">Modern Slavery Statement</Link>
              <Link href="/legal/company-info">Company Information</Link>
              <Link href="/terms">Full Terms &amp; Conditions</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/privacy">Cookie Preferences</Link>
            </div>

            <div className="footer-col footer-col-showrooms">
              <h3>Showrooms &amp; Samples</h3>
              <p className="footer-showroom-desc">
                Over 25 design showrooms nationwide. Experience our surfaces under true natural light.
              </p>
              <div className="footer-showroom-actions">
                <Link href="/showrooms" className="footer-action-link">
                  <MapPin size={14} /> Find Nearest Showroom &rarr;
                </Link>
                <Link href="/brochures" className="footer-action-link">
                  <Package size={14} /> Order 4 Free Cut Samples &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} webnibo. All rights reserved. Crafted with timeless soul.
        </div>
      </footer>

      <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
        <ChevronUp size={18} />
      </button>
    </>
  );
}
