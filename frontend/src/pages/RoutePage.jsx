import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/nav.css";
import "../styles/route-page.css";
import {
  routePages,
  cabOptions,
  titleCase,
  cabServiceTitle,
  heroImages,
} from "../data/routes";
import { PhoneIcon, WhatsAppIcon, StarIcon, ClockIcon, UsersIcon, ShieldIcon, PinIcon } from "../components/icons";
import Nav from "../components/Nav";
import WhatsAppFab from "../components/WhatsAppFab";

function heroPhotoCredits(route) {
  const { leftImage, rightImage } = heroImages(route);
  const credits = [leftImage, rightImage].filter(Boolean).map((img) => img.credit);
  const unique = [...new Set(credits)];
  if (!unique.length) return null;
  return <p className="route-hero__photo-credit">{unique.join(" · ")}</p>;
}

function CabOptionCard({ option }) {
  return (
    <div className="cab-option">
      <div className="cab-slider" aria-label={`${option.type} cab models`}>
        <div className="cab-slider__track">
          {option.models.map((model) => (
            <figure className="cab-slide" key={model.name}>
              <img src={model.src} alt={model.name} loading="lazy" />
              <figcaption>{model.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="cab-option__body">
        <h3>{option.type}</h3>
        <p>{option.description}</p>
        <strong>{option.seats}</strong>
      </div>
    </div>
  );
}

export default function RoutePage() {
  const { slug: rawSlug } = useParams();
  const slug = routePages[rawSlug] ? rawSlug : "kolhapur-to-goa";
  const route = routePages[slug];
  const title = titleCase(slug);
  const titleLong = cabServiceTitle(route);

  useEffect(() => {
    document.title = `${title} | Sawari Cabs`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        `Book ${title} with Sawari Cabs. Clean AC cabs, professional drivers, one-way and round-trip options, and 24/7 support.`
      );
    }
  }, [title]);

  const { leftImage, rightImage } = heroImages(route);
  const heroStyle = {
    ...(leftImage ? { "--route-hero-origin-image": `url('${leftImage.src}')` } : {}),
    ...(rightImage ? { "--route-hero-destination-image": `url('${rightImage.src}')` } : {}),
  };

  const waBookText = encodeURIComponent(`${route.origin} to ${route.destination}`);
  const waBookHref = `https://wa.me/919529902335?text=Hi%2C%20I%20want%20to%20book%20${waBookText}%20cab`;

  return (
    <>
      <Nav />

      <div className="route-trust-bar" role="region" aria-label="Service highlights">
        <span className="route-trust-bar__item">
          <StarIcon />
          4.8★ Rated
        </span>
        <span className="route-trust-bar__sep" aria-hidden="true"></span>
        <span className="route-trust-bar__item">
          <ClockIcon />
          24/7 Available
        </span>
        <span className="route-trust-bar__sep" aria-hidden="true"></span>
        <span className="route-trust-bar__item">
          <UsersIcon />
          10,000+ Happy Riders
        </span>
        <span className="route-trust-bar__sep" aria-hidden="true"></span>
        <span className="route-trust-bar__item">
          <ShieldIcon />
          Verified Drivers
        </span>
        <span className="route-trust-bar__sep" aria-hidden="true"></span>
        <span className="route-trust-bar__item">
          <PinIcon />
          Private &amp; AC Cabs
        </span>
      </div>

      <section className="route-hero" style={heroStyle}>
        <div className="route-hero__inner">
          <p className="route-eyebrow">
            <PinIcon width="14" height="14" />
            {route.origin} → {route.destination}
          </p>
          <h1>{titleLong}</h1>
          <p>
            Book a private {route.origin} to {route.destination} cab for {route.uses}. Clean AC cabs, experienced
            drivers, 24/7 support.
          </p>
          <div className="route-hero__actions">
            <a className="route-hero__btn-primary" href="tel:+919529902335">
              <PhoneIcon /> Call to Book Now
            </a>
            <a
              className="route-hero__btn-secondary"
              href={waBookHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> WhatsApp Us
            </a>
          </div>
        </div>
        {heroPhotoCredits(route)}
      </section>

      <main className="route-main">
        <div className="route-stack">
          <section className="route-card">
            <div className="route-card__body">
              <h2>
                Book {route.origin} To {route.destination} One Way Cab
              </h2>
              <p>
                Sawari Cabs provides dedicated {route.origin} to {route.destination} cab service for travellers who
                want a comfortable private ride. Your driver picks you up from your preferred location in{" "}
                {route.origin} and drops you at your exact destination in {route.destination}.
              </p>
              <p>
                Ideal for {route.uses}. Choose the right cab based on your passengers, luggage, and budget.
              </p>
              <div className="route-stats">
                <div className="route-stat">
                  <strong>{route.distance}</strong>
                  <span>Distance</span>
                </div>
                <div className="route-stat">
                  <strong>{route.time}</strong>
                  <span>Travel time</span>
                </div>
                <div className="route-stat">
                  <strong>24/7</strong>
                  <span>Support</span>
                </div>
              </div>
            </div>
          </section>

          <section className="route-card">
            <div className="route-card__body">
              <h2>
                {route.origin} To {route.destination} Route Details
              </h2>
              <p>
                The journey goes {route.path}, depending on traffic, weather, and your pickup and drop points.
              </p>
              <ul className="route-list">
                <li>Pickup from {route.origin} — home, hotel, bus stand, railway station, or custom location</li>
                <li>Drop at {route.drops}</li>
                <li>One-way, round trip, and custom outstation options available</li>
                <li>Meal and rest stops can be arranged with the driver</li>
              </ul>
            </div>
          </section>

          <section className="route-card">
            <div className="route-card__body">
              <h2>Available Cab Options</h2>
              <div className="cab-grid">
                {cabOptions.map((option) => (
                  <CabOptionCard option={option} key={option.type} />
                ))}
              </div>
            </div>
          </section>

          <section className="route-card">
            <div className="route-card__body">
              <h2>Why Choose Sawari Cabs?</h2>
              <ul className="route-list">
                <li>Private cab — no sharing, no strangers</li>
                <li>
                  Drivers experienced on the {route.origin} to {route.destination} route
                </li>
                <li>Clean, well-maintained AC vehicles</li>
                <li>Transparent fare — no hidden charges</li>
                <li>Phone and WhatsApp support round the clock</li>
                <li>On-time pickup, every time</li>
              </ul>
            </div>
          </section>

          <section className="route-card">
            <div className="route-card__body">
              <h2>
                {route.origin} To {route.destination} — FAQs
              </h2>
              <div className="route-faq">
                <details>
                  <summary>
                    How long does {route.origin} to {route.destination} take by taxi?
                  </summary>
                  <p>
                    The journey usually takes around {route.time}, depending on traffic, weather, and your final
                    drop location.
                  </p>
                </details>
                <details>
                  <summary>
                    Can I book a one-way cab from {route.origin} to {route.destination}?
                  </summary>
                  <p>Yes, Sawari Cabs offers both one-way and round-trip cab bookings for this route.</p>
                </details>
                <details>
                  <summary>Can I choose a Sedan or SUV for this route?</summary>
                  <p>Yes, cab type can be selected based on availability, passenger count, luggage, and comfort preference.</p>
                </details>
                <details>
                  <summary>Is the fare fixed or metered?</summary>
                  <p>Fares are discussed and confirmed before the trip. There are no hidden charges or meter surprises.</p>
                </details>
              </div>
            </div>
          </section>
        </div>

        <aside className="booking-box">
          <div className="booking-box__header">
            <h3>Book Your Cab Now</h3>
            <p>Share details &amp; call to confirm instantly</p>
          </div>
          <div className="booking-box__body">
            <label htmlFor="pickup">Pickup City</label>
            <input id="pickup" defaultValue={route.origin} readOnly />
            <label htmlFor="drop">Drop City</label>
            <input id="drop" defaultValue={route.destination} readOnly />
            <label htmlFor="cab">Cab Type</label>
            <select id="cab">
              <option>Hatchback — Budget friendly</option>
              <option>Sedan — Comfortable</option>
              <option>SUV — Groups &amp; families</option>
            </select>
            <div className="booking-box__price-note">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Fare confirmed before booking — no surprises
            </div>
            <a className="route-cta" href="tel:+919529902335">
              <PhoneIcon /> Call +91 95299 02335
            </a>
            <a className="route-cta-wa" href={waBookHref} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> WhatsApp to Book
            </a>
          </div>
        </aside>
      </main>

      <WhatsAppFab />
    </>
  );
}
