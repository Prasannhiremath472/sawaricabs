import { ArrowRightIcon, StarIcon, ShieldIcon, ClockIcon } from "./icons";
import BookingCard from "./BookingCard";

export default function Hero() {
  return (
    <section id="book" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__form">
        <BookingCard />
      </div>
      <div className="hero__content">
        <span className="hero__badge">
          <StarIcon width="14" height="14" strokeWidth="2" />
          4.8★ rated by 10,000+ riders
        </span>
        <h1>
          Your ride across
          <br />
          <span className="hero__accent">Maharashtra &amp; Goa.</span>
        </h1>
        <p>
          Private intercity cabs, booked in a phone call. No apps, no surge pricing —
          just a driver who shows up on time.
        </p>
        <div className="hero__actions">
          <a className="hero__cta" href="tel:+919529902335">
            Call +91 95299 02335
            <ArrowRightIcon width="18" height="18" strokeWidth="2.25" />
          </a>
        </div>
        <ul className="hero__points">
          <li>
            <ShieldIcon width="16" height="16" strokeWidth="2" />
            Verified drivers
          </li>
          <li>
            <ClockIcon width="16" height="16" strokeWidth="2" />
            24/7 availability
          </li>
        </ul>
        <dl className="hero__stats">
          <div>
            <dt>16</dt>
            <dd>Routes served daily</dd>
          </div>
          <div>
            <dt>10,000+</dt>
            <dd>Riders and counting</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
