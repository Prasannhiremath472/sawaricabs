import { StarIcon, ClockIcon, UsersIcon, ShieldIcon, PinIcon } from "./icons";

export default function TrustBar() {
  return (
    <div className="trust-bar" role="region" aria-label="Service highlights">
      <span className="trust-bar__item">
        <StarIcon />
        4.8★ Rated Service
      </span>
      <span className="trust-bar__sep" aria-hidden="true"></span>
      <span className="trust-bar__item">
        <ClockIcon />
        24/7 Available
      </span>
      <span className="trust-bar__sep" aria-hidden="true"></span>
      <span className="trust-bar__item">
        <UsersIcon />
        10,000+ Happy Riders
      </span>
      <span className="trust-bar__sep" aria-hidden="true"></span>
      <span className="trust-bar__item">
        <ShieldIcon />
        Safe &amp; Verified Drivers
      </span>
      <span className="trust-bar__sep" aria-hidden="true"></span>
      <span className="trust-bar__item">
        <PinIcon />
        Maharashtra &amp; Goa Routes
      </span>
    </div>
  );
}
