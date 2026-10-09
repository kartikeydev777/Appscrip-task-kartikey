"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Category, ProductSort } from "@/types/catalog";

const sortOptions: Array<{ label: string; value: ProductSort }> = [
  { label: "Newest", value: "newest" },
  { label: "Price: low to high", value: "price_asc" },
  { label: "Price: high to low", value: "price_desc" }
];

type ProductControlsProps = {
  categories?: Category[];
  type?: "filters" | "sort";
};

export function ProductControls({ categories = [], type = "filters" }: ProductControlsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [q, setQ] = useState(searchParams.get("q") ?? "");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") ?? "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") ?? "");

  const currentCategory = searchParams.get("category") ?? "";
  const currentSort = searchParams.get("sort") ?? "newest";

  const currentParams = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );

  const [expandedFilters, setExpandedFilters] = useState<Record<string, boolean>>({
    "IDEAL FOR": true,
    "OCCASION": false,
    "WORK": false,
    "FABRIC": false,
    "SEGMENT": false,
    "SUITABLE FOR": false,
    "RAW MATERIALS": false,
    "PATTERN": false
  });

  const toggleFilter = (label: string) => {
    setExpandedFilters((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  useEffect(() => {
    setQ(searchParams.get("q") ?? "");
    setMinPrice(searchParams.get("minPrice") ?? "");
    setMaxPrice(searchParams.get("maxPrice") ?? "");
  }, [searchParams]);

  const updateUrl = (updates: Record<string, string>) => {
    const params = new URLSearchParams(currentParams);

    for (const [key, value] of Object.entries(updates)) {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    }

    params.delete("page");
    const queryString = params.toString();
    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateUrl({
      q: q.trim(),
      minPrice: minPrice.trim(),
      maxPrice: maxPrice.trim()
    });
  };

  if (type === "sort") {
    return (
      <div className="sort-control">
          <select
            id="sort-control"
            name="sort"
            value={currentSort}
            onChange={(event) => updateUrl({ sort: event.target.value })}
            className="sort-dropdown"
          >
            <option value="recommended" disabled hidden>RECOMMENDED</option>
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
      </div>
    );
  }

  return (
    <>
      <div className="filters-sidebar" aria-label="Product filters">
        <div className="customizable-row">
          <input id="customizable" type="checkbox" />
          <label htmlFor="customizable">CUSTOMIZABLE</label>
        </div>

        <form className="filter-form" onSubmit={handleSubmit}>
          <div className={`filter-group ${!expandedFilters["IDEAL FOR"] ? "collapsed-filter" : ""}`}>
            <button 
              type="button" 
              aria-expanded={expandedFilters["IDEAL FOR"]} 
              className="filter-accordion-btn"
              onClick={() => toggleFilter("IDEAL FOR")}
            >
              IDEAL FOR <span>
                {expandedFilters["IDEAL FOR"] ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 10L8 6L12 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
              </span>
            </button>
            <p>All</p>
            <div className="filter-options">
              <button
                type="button"
                className="unselect"
                onClick={() => updateUrl({ category: "" })}
              >
                Unselect all
              </button>
              {categories.map((category) => (
                <label className="check-row" key={category.id}>
                  <input
                    type="checkbox"
                    checked={currentCategory === category.name}
                    onChange={(event) =>
                      updateUrl({
                        category: event.target.checked ? category.name : ""
                      })
                    }
                  />
                  {category.name}
                </label>
              ))}
            </div>
          </div>

          {["OCCASION", "WORK", "FABRIC", "SEGMENT", "SUITABLE FOR", "RAW MATERIALS", "PATTERN"].map(
            (label) => (
              <div className={`filter-group ${!expandedFilters[label] ? "collapsed-filter" : ""}`} key={label}>
                <button 
                  type="button" 
                  aria-expanded={expandedFilters[label]} 
                  className="filter-accordion-btn"
                  onClick={() => toggleFilter(label)}
                >
                  {label} <span>
                    {expandedFilters[label] ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 10L8 6L12 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    )}
                  </span>
                </button>
                <p>All</p>
              </div>
            )
          )}
        </form>
      </div>
    </>
  );
}
