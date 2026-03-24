import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <article className="notice-panel">
          <span className="eyebrow">Page Not Found</span>
          <h1 className="callout-title">That page doesn't exist in this rebuild.</h1>
          <p className="callout-copy">
            Try heading back to the homepage or using the main navigation to find the section you need.
          </p>
          <div className="button-row spacer-top">
            <Link className="button" href="/">
              Go home
            </Link>
            <Link className="button-ghost" href="/contact">
              Contact the church
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
