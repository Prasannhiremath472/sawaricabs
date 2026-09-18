import { Link } from "react-router-dom";
import { ArrowRightIcon, CarIcon, PinIcon } from "./icons";
import { routeOrder, routePages } from "../data/routes";

export default function RoutesGrid() {
  return (
    <section id="routes" className="routes">
      <div className="routes__head">
        <span className="routes__kicker">Popular routes</span>
        <h2>Where we go</h2>
        <p>Sixteen routes, run every day. Tap yours to see pricing &amp; cab options.</p>
      </div>
      <div className="routes__grid">
        {routeOrder.map((slug) => {
          const route = routePages[slug];
          return (
            <Link to={`/${slug}`} className="route-card" key={slug}>
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
            </Link>
          );
        })}
        <Link to="/kolhapur-airport-local" className="route-card">
          <span className="route-card__icon">
            <PinIcon width="20" height="20" />
          </span>
          <span className="route-card__body">
            <span className="route-card__name">Kolhapur Airport — Local</span>
            <span className="route-card__meta">Airport transfers · Local rides</span>
          </span>
          <ArrowRightIcon className="route-card__arrow" width="18" height="18" strokeWidth="2" />
        </Link>
      </div>
    </section>
  );
}
