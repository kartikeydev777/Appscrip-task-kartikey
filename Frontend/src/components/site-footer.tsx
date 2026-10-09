"use client";
import { useState } from "react";

export function SiteFooter() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    metta: false,
    quick: false,
    follow: false
  });

  const toggle = (key: string) => setExpanded(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <section className="footer-signup" aria-labelledby="signup-title">
            <h2 id="signup-title">BE THE FIRST TO KNOW</h2>
            <p className="desktop-only">Sign up for updates from mettā muse.</p>
            <p className="mobile-only">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.
            </p>
            <form className="newsletter-form">
              <label htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your e-mail..."
              />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </section>

          <section className="footer-contact" aria-label="Contact information">
            <h2 className="desktop-only">CONTACT US</h2>
            <h2 className="mobile-only">CALL US</h2>
            <p>+44 221 133 5360<br className="desktop-only"/> <span className="mobile-only">♦</span> customercare@mettamuse.com</p>
            <h2>CURRENCY</h2>
            <p className="currency-line"><span className="flag">🇺🇸</span> <span className="mobile-only">♦</span> USD</p>
            <small className="desktop-only">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </small>
          </section>
        </div>

        <div className="footer-rule" />

        <section className="footer-links" aria-label="Footer links">
          <div className={`footer-accordion-group ${!expanded.metta ? "mobile-collapsed" : ""}`}>
            <h2 onClick={() => toggle("metta")} className="footer-accordion-btn">
              mettā muse <span>
                {expanded.metta ? "⌃" : "⌄"}
              </span>
            </h2>
            <div className="links-col">
              <a href="#footer">About Us</a>
              <a href="#footer">Stories</a>
              <a href="#footer">Artisans</a>
              <a href="#footer">Boutiques</a>
              <a href="#footer">Contact Us</a>
              <a href="#footer">EU Compliances Docs</a>
            </div>
          </div>
          <div className={`footer-accordion-group ${!expanded.quick ? "mobile-collapsed" : ""}`}>
            <h2 onClick={() => toggle("quick")} className="footer-accordion-btn">
              QUICK LINKS <span>
                {expanded.quick ? "⌃" : "⌄"}
              </span>
            </h2>
            <div className="links-col">
              <a href="#footer">Orders & Shipping</a>
              <a href="#footer">Join/Login as a Seller</a>
              <a href="#footer">Payment & Pricing</a>
              <a href="#footer">Return & Refunds</a>
              <a href="#footer">FAQs</a>
              <a href="#footer">Privacy Policy</a>
              <a href="#footer">Terms & Conditions</a>
            </div>
          </div>
          <div className={`footer-accordion-group ${!expanded.follow ? "mobile-collapsed" : ""}`}>
            <h2 onClick={() => toggle("follow")} className="footer-accordion-btn">
              FOLLOW US <span>
                {expanded.follow ? "⌃" : "⌄"}
              </span>
            </h2>
            <div className="links-col">
              <div className="social-links" aria-label="Social links">
              <a href="#footer" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C9.284 2 8.944 2.012 7.87 2.06C6.797 2.109 6.066 2.279 5.438 2.523C4.789 2.775 4.238 3.108 3.687 3.659C3.136 4.21 2.803 4.761 2.551 5.41C2.307 6.038 2.137 6.769 2.088 7.842C2.04 8.916 2.028 9.256 2.028 11.972C2.028 14.688 2.04 15.028 2.088 16.102C2.137 17.175 2.307 17.906 2.551 18.534C2.803 19.183 3.136 19.734 3.687 20.285C4.238 20.836 4.789 21.169 5.438 21.421C6.066 21.665 6.797 21.835 7.87 21.884C8.944 21.932 9.284 21.944 12 21.944C14.716 21.944 15.056 21.932 16.13 21.884C17.203 21.835 17.934 21.665 18.562 21.421C19.211 21.169 19.762 20.836 20.313 20.285C20.864 19.734 21.197 19.183 21.449 18.534C21.693 17.906 21.863 17.175 21.912 16.102C21.96 15.028 21.972 14.688 21.972 11.972C21.972 9.256 21.96 8.916 21.912 7.842C21.863 6.769 21.693 6.038 21.449 5.41C21.197 4.761 20.864 4.21 20.313 3.659C19.762 3.108 19.211 2.775 18.562 2.523C17.934 2.279 17.203 2.109 16.13 2.06C15.056 2.012 14.716 2 12 2ZM12 4.167C14.667 4.167 14.982 4.177 16.039 4.225C17.025 4.27 17.534 4.428 17.87 4.558C18.318 4.732 18.638 4.945 18.974 5.281C19.31 5.617 19.523 5.937 19.697 6.385C19.828 6.721 19.986 7.23 20.031 8.216C20.079 9.273 20.089 9.588 20.089 12.255C20.089 14.922 20.079 15.237 20.031 16.294C19.986 17.28 19.828 17.789 19.697 18.125C19.523 18.573 19.31 18.893 18.974 19.229C18.638 19.565 18.318 19.778 17.87 19.952C17.534 20.082 17.025 20.24 16.039 20.285C14.982 20.333 14.667 20.343 12 20.343C9.333 20.343 9.018 20.333 7.961 20.285C6.975 20.24 6.466 20.082 6.13 19.952C5.682 19.778 5.362 19.565 5.026 19.229C4.69 18.893 4.477 18.573 4.303 18.125C4.172 17.789 4.014 17.28 3.969 16.294C3.921 15.237 3.911 14.922 3.911 12.255C3.911 9.588 3.921 9.273 3.969 8.216C4.014 7.23 4.172 6.721 4.303 6.385C4.477 5.937 4.69 5.617 5.026 5.281C5.362 4.945 5.682 4.732 6.13 4.558C6.466 4.428 6.975 4.27 7.961 4.225C9.018 4.177 9.333 4.167 12 4.167ZM12 7.235C9.368 7.235 7.235 9.368 7.235 12C7.235 14.632 9.368 16.765 12 16.765C14.632 16.765 16.765 14.632 16.765 12C16.765 9.368 14.632 7.235 12 7.235ZM12 14.882C10.408 14.882 9.118 13.592 9.118 12C9.118 10.408 10.408 9.118 12 9.118C13.592 9.118 14.882 10.408 14.882 12C14.882 13.592 13.592 14.882 12 14.882ZM17.288 8.012C17.288 8.739 16.699 9.328 15.972 9.328C15.245 9.328 14.656 8.739 14.656 8.012C14.656 7.285 15.245 6.696 15.972 6.696C16.699 6.696 17.288 7.285 17.288 8.012Z" fill="white"/></svg>
              </a>
              <a href="#footer" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5.42111 9.87354H8.72398V20.5367H5.42111V9.87354ZM7.07254 4.09375C8.12933 4.09375 8.98604 4.95046 8.98604 6.00725C8.98604 7.06404 8.12933 7.92075 7.07254 7.92075C6.01576 7.92075 5.15905 7.06404 5.15905 6.00725C5.15905 4.95046 6.01576 4.09375 7.07254 4.09375ZM20.6136 20.5367H17.3107V15.3524C17.3107 14.1147 17.2887 12.5222 15.5898 12.5222C13.8689 12.5222 13.6049 13.8659 13.6049 15.2644V20.5367H10.3021V9.87354H13.4729V11.332H13.5169C13.9587 10.4952 15.0416 9.61386 16.6436 9.61386C19.9873 9.61386 20.6136 11.8136 20.6136 14.6677V20.5367Z" fill="white"/></svg>
              </a>
            </div>
            <h2>mettā muse ACCEPTS</h2>
            <div className="payment-row" aria-label="Accepted payments">
              <span>G Pay</span>
              <span>Mastercard</span>
              <span>PayPal</span>
              <span>AMEX</span>
              <span>Apple Pay</span>
              <span>Shop Pay</span>
              </div>
            </div>
          </div>
        </section>

        <p className="copyright">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
