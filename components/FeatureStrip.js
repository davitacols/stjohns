import Link from "next/link";

function ActionLink({ action }) {
  const className = action.style === "secondary" ? "button-ghost" : "button";

  if (action.href.startsWith("mailto:") || action.href.startsWith("tel:")) {
    return (
      <a className={className} href={action.href}>
        {action.label}
      </a>
    );
  }

  return (
    <Link className={className} href={action.href}>
      {action.label}
    </Link>
  );
}

function CardLink({ href, label }) {
  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a className="utility-card-link" href={href}>
        {label}
      </a>
    );
  }

  return (
    <Link className="utility-card-link" href={href}>
      {label}
    </Link>
  );
}

export default function FeatureStrip({ eyebrow, title, copy, actions = [], cards = [], className = "" }) {
  return (
    <section className={`feature-strip ${className}`.trim()}>
      <div className="feature-strip-shell">
        <div className="feature-strip-intro">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="feature-strip-title">{title}</h2>
          <p className="feature-strip-copy">{copy}</p>
          <div className="feature-strip-tags" aria-label="Browse themes">
            {cards.slice(0, 3).map((card) => (
              <span key={`${card.eyebrow}-${card.title}`} className="feature-strip-tag">
                {card.eyebrow}
              </span>
            ))}
          </div>

          {actions.length ? (
            <div className="feature-strip-actions">
              {actions.map((action) => (
                <ActionLink key={`${action.href}-${action.label}`} action={action} />
              ))}
            </div>
          ) : null}
        </div>

        <div className="feature-strip-grid">
          {cards.map((card) => (
            <article
              key={`${card.title}-${card.eyebrow}`}
              className={`utility-card${card.tone ? ` utility-card--${card.tone}` : ""}`}
            >
              <div className="utility-card-content">
                <span className="utility-card-eyebrow">{card.eyebrow}</span>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                <CardLink href={card.href} label={card.linkLabel} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
