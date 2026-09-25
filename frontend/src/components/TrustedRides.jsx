import { ShieldIcon, StarIcon, ClockIcon } from "./icons";

export default function TrustedRides() {
  return (
    <section className="trust">
      <div className="trust__card">
        <div className="trust__copy">
          <span className="trust__kicker">Why riders trust us</span>
          <h2>Worry-free travel, every time</h2>
          <p>
            Thousands of customers choose Sawari Cabs for safe, punctual and comfortable
            journeys. We screen drivers, maintain vehicles to high standards and offer clear
            cancellation and refund policies.
          </p>
          <ul className="trust__tags">
            <li>Driver background checked</li>
            <li>Regular vehicle inspections</li>
            <li>Flexible refunds</li>
          </ul>
          <a className="trust__call" href="tel:+919529902335">
            Call now — +91 95299 02335
          </a>
        </div>
        <div className="trust__stats">
          <div className="trust__stat">
            <span className="trust__stat-icon">
              <ShieldIcon width="22" height="22" strokeWidth="2" />
            </span>
            <div>
              <strong>Secure Bookings</strong>
              <span>Encrypted &amp; private</span>
            </div>
          </div>
          <div className="trust__stat">
            <span className="trust__stat-icon">
              <StarIcon width="22" height="22" strokeWidth="2" />
            </span>
            <div>
              <strong>4.8 / 5</strong>
              <span>Average rating</span>
            </div>
          </div>
          <div className="trust__stat">
            <span className="trust__stat-icon">
              <ClockIcon width="22" height="22" strokeWidth="2" />
            </span>
            <div>
              <strong>On-time Promise</strong>
              <span>Or your ride is discounted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
