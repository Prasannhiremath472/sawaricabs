import { useEffect } from "react";
import "../styles/nav.css";
import "../styles/route-page.css";
import { cabOptions, destinationImages, localServices } from "../data/routes";
import { PhoneIcon, WhatsAppIcon, StarIcon, ClockIcon, UsersIcon, ShieldIcon, PinIcon } from "../components/icons";
import Nav from "../components/Nav";
import WhatsAppFab from "../components/WhatsAppFab";

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

export default function LocalServicePage() {
  const service = localServices["kolhapur-airport-local"];
  const cityImage = destinationImages[service.city];

  useEffect(() => {
    document.title = `${service.title} | Sawari Cabs`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        `Book ${service.title} with Sawari Cabs. Airport pickup, drop, and local rides within ${service.city}. Clean AC cabs, 24/7 support.`
      );
    }
  }, [service]);

  const heroStyle = cityImage
    ? {
        "--route-hero-origin-image": `url('${cityImage.src}')`,
        "--route-hero-destination-image": `url('${cityImage.src}')`,
      }
    : {};

  const waBookText = encodeURIComponent(`${service.city} airport / local`);
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
            {service.city} Airport &amp; Local
          </p>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <div className="route-hero__actions">
            <a className="route-hero__btn-primary" href="tel:+919529902335">
              <PhoneIcon /> Call to Book Now
            </a>
            <a className="route-hero__btn-secondary" href={waBookHref} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> WhatsApp Us
            </a>
          </div>
        </div>
        {cityImage && <p className="route-hero__photo-credit">{cityImage.credit}</p>}
      </section>

      <main className="route-main">
        <div className="route-stack">
          <section className="route-card">
            <div className="route-card__body">
              <h2>Book {service.city} Airport Pickup &amp; Drop</h2>
              <p>
                Sawari Cabs provides dedicated airport transfers and local point-to-point rides within{" "}
                {service.city}. Your driver tracks your flight and picks you up right at arrivals, or takes you to
                the airport with time to spare.
              </p>
              <p>Ideal for {service.uses}. Choose the right cab based on your passengers, luggage, and budget.</p>
              <div className="route-stats">
                <div className="route-stat">
                  <strong>On Time</strong>
                  <span>Flight tracking</span>
                </div>
                <div className="route-stat">
                  <strong>Local</strong>
                  <span>Point-to-point</span>
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
              <h2>{service.city} Local &amp; Airport Service Details</h2>
              <p>
                Whether you're landing at {service.city} airport, heading out for a flight, or need a local ride
                across the city, book a private cab with a fixed fare confirmed in advance.
              </p>
              <ul className="route-list">
                <li>Airport pickup with flight tracking — no waiting around</li>
                <li>Drop at {service.city} airport with buffer time for check-in</li>
                <li>Local rides to temples, railway station, hotels, or any address in {service.city}</li>
                <li>Hourly or point-to-point local booking options available</li>
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
                <li>Drivers experienced with {service.city} airport routes and local roads</li>
                <li>Clean, well-maintained AC vehicles</li>
                <li>Transparent fare — no hidden charges</li>
                <li>Phone and WhatsApp support round the clock</li>
                <li>On-time pickup, every time</li>
              </ul>
            </div>
          </section>

          <section className="route-card">
            <div className="route-card__body">
              <h2>{service.city} Airport &amp; Local — FAQs</h2>
              <div className="route-faq">
                <details>
                  <summary>Do you track my flight for airport pickup?</summary>
                  <p>
                    Yes. We track your flight status and adjust the pickup time automatically for delays, so your
                    driver is always there when you land.
                  </p>
                </details>
                <details>
                  <summary>Can I book a local ride within {service.city} for a few hours?</summary>
                  <p>Yes, hourly and point-to-point local booking options are available — just call or WhatsApp us.</p>
                </details>
                <details>
                  <summary>Can I choose a Sedan or SUV?</summary>
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
            <label htmlFor="pickup">Pickup</label>
            <input id="pickup" defaultValue={`${service.city} Airport`} readOnly />
            <label htmlFor="drop">Drop</label>
            <input id="drop" placeholder="Any address in the city" />
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
