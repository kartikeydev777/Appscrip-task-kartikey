import Link from "next/link";

export function SiteHeader() {
  return (
    <header>
      <div className="top-strip" aria-label="Promotions">
        <span>Lorem ipsum dolor</span>
        <span>Lorem ipsum dolor</span>
        <span>Lorem ipsum dolor</span>
      </div>
      <div className="site-header">
        <div className="header-left">
          <div className="mobile-menu" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 12H21M3 6H21M3 18H21" stroke="#252020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <Link className="mark" href="/products" aria-label="Appscrip home">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12L24 24M24 12L12 24" stroke="#252020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="6" y="6" width="24" height="24" stroke="#252020" strokeWidth="2"/>
            </svg>
          </Link>
        </div>
        <Link className="brand" href="/products">
          LOGO
        </Link>
        <div className="header-icons" aria-label="Header actions">
          <Link href="/products" aria-label="Search products">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#252020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <Link href="/products" aria-label="Wishlist">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#252020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <Link href="/products" aria-label="Bag">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="#252020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 6H21" stroke="#252020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="#252020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <Link href="/products" aria-label="Account" className="desktop-only">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#252020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#252020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <span className="language desktop-only">
            ENG <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="#252020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </div>
      </div>
      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/products">SHOP</Link>
        <Link href="/products">SKILLS</Link>
        <Link href="/products">STORIES</Link>
        <Link href="/products">ABOUT</Link>
        <Link href="/products">CONTACT US</Link>
      </nav>
    </header>
  );
}
