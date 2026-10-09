import Link from "next/link";

type PaginationProps = {
  page: number;
  totalPages: number;
  searchParams: URLSearchParams;
};

const pageHref = (searchParams: URLSearchParams, page: number) => {
  const params = new URLSearchParams(searchParams);
  params.set("page", String(page));
  return `/products?${params.toString()}`;
};

export function Pagination({
  page,
  totalPages,
  searchParams
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="pagination" aria-label="Product pagination">
      {page > 1 ? (
        <Link href={pageHref(searchParams, page - 1)}>Previous</Link>
      ) : (
        <span aria-disabled="true">Previous</span>
      )}

      <div className="page-list">
        {pages.map((pageNumber) => (
          <Link
            key={pageNumber}
            href={pageHref(searchParams, pageNumber)}
            aria-current={pageNumber === page ? "page" : undefined}
          >
            {pageNumber}
          </Link>
        ))}
      </div>

      {page < totalPages ? (
        <Link href={pageHref(searchParams, page + 1)}>Next</Link>
      ) : (
        <span aria-disabled="true">Next</span>
      )}
    </nav>
  );
}
