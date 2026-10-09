"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";

type FilterLayoutProps = {
  totalItems: number;
  sortControl: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
};

export function FilterLayout({
  totalItems,
  sortControl,
  sidebar,
  children
}: FilterLayoutProps) {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsFilterVisible(true);
    }
  }, []);

  // Avoid hydration mismatch by rendering a generic initial state or just letting CSS handle it.
  // We'll let CSS handle the initial hiding via media query, but the React state needs to match eventually.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <>
        <section className="plp-toolbar" aria-label="Product listing controls">
          <div className="toolbar-left desktop-only">
            <strong>{totalItems} ITEMS</strong>
            <button className="hide-filter-btn">
              <span>&lt; HIDE FILTER</span>
            </button>
          </div>
          <div className="mobile-filter-toggle">
            <button>FILTER</button>
          </div>
          <div className="toolbar-separator mobile-only"></div>
          <div className="toolbar-right">{sortControl}</div>
        </section>

        <div className="catalog-layout">
          <aside className="desktop-sidebar">{sidebar}</aside>
          <section className="catalog-results" aria-labelledby="results-title">
            {children}
          </section>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="plp-toolbar" aria-label="Product listing controls">
        <div className="toolbar-left desktop-only">
          <strong>{totalItems} ITEMS</strong>
          <button
            className="hide-filter-btn"
            onClick={() => setIsFilterVisible(!isFilterVisible)}
          >
            <span>
              &lt; {isFilterVisible ? "HIDE" : "SHOW"} FILTER
            </span>
          </button>
        </div>
        <div className="mobile-filter-toggle">
          <button onClick={() => setIsFilterVisible(!isFilterVisible)}>
            FILTER
          </button>
        </div>
        <div className="toolbar-separator mobile-only"></div>
        <div className="toolbar-right">{sortControl}</div>
      </section>

      <div className={`catalog-layout ${!isFilterVisible ? "filter-hidden" : ""}`}>
        {isFilterVisible && <aside className="desktop-sidebar">{sidebar}</aside>}
        <section className="catalog-results" aria-labelledby="results-title">
          {children}
        </section>
      </div>
    </>
  );
}
