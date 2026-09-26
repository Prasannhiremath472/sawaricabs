import { Link } from "react-router-dom";
import { ArrowRightIcon, CarIcon, PinIcon } from "./icons";
import { routeOrder, routePages } from "../data/routes";
import Reveal from "./Reveal";

export default function RoutesGrid() {
  return (
    <section id="routes" className="routes">
      <Reveal className="routes__head">
        <span className="routes__kicker">Popular routes</span>
        <h2>Where we go</h2>
        <p>Sixteen routes, run every day. Tap yours to see pricing &amp; cab options.</p>
      </Reveal>
      <div className="routes__grid">
        {routeOrder.map((slug, i) => {
          const route = routePages[slug];
          return (
            <Reveal
              as={Link}
              to={`/${slug}`}
              className="route-card"
              delay={(i % 4) * 60}
              key={slug}
            >
              <span className="route-card__icon">
                <CarIcon width="20" height="20" />
              </span>
              <span className="route-card__body">
                <span className="route-card__name">
                  {route.origin} <span className="route-card__sep">→</span> {route.destination}
                </span>
                <span className="route-card__meta">
                  {route.distance} · {route.time}
                </span>
              </span>
              <ArrowRightIcon className="route-card__arrow" width="18" height="18" strokeWidth="2" />
            </Reveal>
          );
        })}
        <Reveal as={Link} to="/kolhapur-airport-local" className="route-card" delay={(routeOrder.length % 4) * 60}>
          <span className="route-card__icon">
            <PinIcon width="20" height="20" />
          </span>
          <span className="route-card__body">
            <span className="route-card__name">Kolhapur Airport — Local</span>
            <span className="route-card__meta">Airport transfers · Local rides</span>
          </span>
          <ArrowRightIcon className="route-card__arrow" width="18" height="18" strokeWidth="2" />
        </Reveal>
      </div>
    </section>
  );
}
