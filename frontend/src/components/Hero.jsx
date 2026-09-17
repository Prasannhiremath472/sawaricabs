import { Link } from "react-router-dom";
import { destinationImages } from "../data/routes";
import { ArrowRightIcon, StarIcon, ShieldIcon, ClockIcon } from "./icons";

export default function Hero() {
  const bg = destinationImages.Kolhapur;

  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />
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
          <a className="hero__cta" href="tel:+917387338634">
            Call +91-7387338634
            <ArrowRightIcon width="18" height="18" strokeWidth="2.25" />
          </a>
          <a className="hero__cta hero__cta--ghost" href="#book">
            Get a quote
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
      </div>
      <div className="hero__media">
        <img src={bg.src} alt={bg.alt} loading="eager" />
        <span className="hero__credit">{bg.credit}</span>
      </div>
    </section>
  );
}
