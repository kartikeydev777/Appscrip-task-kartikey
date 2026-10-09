import Link from "next/link";

export function Breadcrumbs() {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/products">HOME</Link>
        </li>
        <li aria-current="page">SHOP</li>
      </ol>
    </nav>
  );
}
