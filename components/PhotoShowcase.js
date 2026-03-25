import { siteImages } from "../lib/site-images";

const showcaseCards = [
  {
    className: "photo-showcase-card photo-showcase-card--tall",
    src: siteImages.homeGalleryTall,
    alt: "A moment from a St John's Church service",
    kicker: "Real Sundays",
    title: "A parish that already feels alive when you arrive.",
    copy: "Real people, shared worship, and the warmth of a lived-in church community."
  },
  {
    className: "photo-showcase-card photo-showcase-card--wide",
    src: siteImages.homeGalleryWide,
    alt: "People gathered together at St John's Church",
    kicker: "Shared Worship",
    title: "Prayer, music, welcome, and conversation shape the atmosphere.",
    copy: "The site now shows more of the real life behind the words."
  },
  {
    className: "photo-showcase-card",
    src: siteImages.homeGalleryLowerLeft,
    alt: "Parish life at St John's Church in Friern Barnet",
    kicker: "Community",
    title: "Moments of belonging throughout the week.",
    copy: "The church feels active, relational, and rooted in Friern Barnet."
  },
  {
    className: "photo-showcase-card",
    src: siteImages.homeGalleryLowerRight,
    alt: "A St John's Church gathering",
    kicker: "Welcome",
    title: "A calmer first impression without looking flat.",
    copy: "Using the local photo set gives the homepage more warmth and depth."
  }
];

export default function PhotoShowcase() {
  return (
    <section className="section photo-showcase-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Parish Life In View</span>
          <h2 className="section-title">A more vivid sense of the people and place behind St John&apos;s.</h2>
          <p className="section-copy">
            These local photographs bring more warmth, movement, and credibility to the first-visit experience.
          </p>
        </div>

        <div className="photo-showcase-grid">
          {showcaseCards.map((card) => (
            <figure key={card.title} className={`${card.className} reveal`}>
              <img src={card.src} alt={card.alt} loading="lazy" />
              <figcaption className="photo-showcase-copy">
                <span className="photo-showcase-kicker">{card.kicker}</span>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
