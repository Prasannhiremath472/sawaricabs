const routePages = {
  "kolhapur-to-goa": {
    origin: "Kolhapur",
    destination: "Goa",
    distance: "225 km",
    time: "5-6 hrs",
    path: "via Amboli Ghat, Sawantwadi, and North Goa",
    uses: "weekend trips, family vacations, beach holidays, airport drops, and business travel",
    drops: "Goa airport, Panjim, Madgaon, Mapusa, Calangute, Baga, Candolim, or your hotel"
  },
  "goa-to-kolhapur": {
    origin: "Goa",
    destination: "Kolhapur",
    distance: "225 km",
    time: "5-6 hrs",
    path: "via Sawantwadi, Amboli Ghat, and Kolhapur highway routes",
    uses: "return trips, hotel pickups, airport pickups, family travel, and planned outstation journeys",
    drops: "Kolhapur city, railway station, Mahalaxmi Temple area, home, hotel, or office"
  },
  "sangli-to-pune": {
    origin: "Sangli",
    destination: "Pune",
    distance: "235 km",
    time: "4.5-5.5 hrs",
    path: "via Karad, Satara, and Pune highway routes",
    uses: "business visits, student travel, airport transfers, family trips, and medical travel",
    drops: "Pune city, Pune airport, railway station, Hinjewadi, Kharadi, Swargate, or your address"
  },
  "kolhapur-to-pune": {
    origin: "Kolhapur",
    destination: "Pune",
    distance: "235 km",
    time: "4.5-5.5 hrs",
    path: "via Karad, Satara, and Pune express routes",
    uses: "airport transfers, business travel, family visits, same-day travel, and outstation trips",
    drops: "Pune city, airport, railway station, Swargate, Hinjewadi, Kharadi, or preferred address"
  },
  "pune-to-kolhapur": {
    origin: "Pune",
    destination: "Kolhapur",
    distance: "235 km",
    time: "4.5-5.5 hrs",
    path: "via Satara, Karad, and Kolhapur highway routes",
    uses: "family travel, temple visits, business trips, return journeys, and weekend travel",
    drops: "Kolhapur city, Mahalaxmi Temple area, railway station, hotel, office, or home"
  },
  "mumbai-to-kolhapur": {
    origin: "Mumbai",
    destination: "Kolhapur",
    distance: "375 km",
    time: "7-8.5 hrs",
    path: "via Pune, Satara, Karad, and Kolhapur highway routes",
    uses: "airport pickups, family journeys, business travel, temple visits, and long-distance transfers",
    drops: "Kolhapur city, railway station, Mahalaxmi Temple area, hotel, home, or office"
  },
  "kolhapur-to-mumbai": {
    origin: "Kolhapur",
    destination: "Mumbai",
    distance: "375 km",
    time: "7-8.5 hrs",
    path: "via Karad, Satara, Pune, and Mumbai highway routes",
    uses: "Mumbai airport drops, business trips, city transfers, family travel, and one-way journeys",
    drops: "Mumbai city, suburbs, airport, railway station, hotel, or preferred address"
  },
  "pune-to-mumbai": {
    origin: "Pune",
    destination: "Mumbai",
    distance: "150 km",
    time: "3-4 hrs",
    path: "via Mumbai Pune Expressway",
    uses: "airport transfers, corporate travel, family visits, same-day travel, and city transfers",
    drops: "Mumbai airport, Dadar, Bandra, Andheri, Borivali, Navi Mumbai, Thane, or your address"
  },
  "ichalkaranji-to-pune": {
    origin: "Ichalkaranji",
    destination: "Pune",
    distance: "250 km",
    time: "5-6 hrs",
    path: "via Kolhapur, Karad, Satara, and Pune highway routes",
    uses: "business travel, airport drops, family trips, education travel, and planned outstation rides",
    drops: "Pune city, airport, railway station, Hinjewadi, Kharadi, Swargate, or custom location"
  }
};

const routeOrder = [
  "kolhapur-to-goa",
  "goa-to-kolhapur",
  "sangli-to-pune",
  "kolhapur-to-pune",
  "mumbai-to-kolhapur",
  "kolhapur-to-mumbai",
  "pune-to-mumbai",
  "ichalkaranji-to-pune",
  "pune-to-kolhapur"
];

const destinationImages = {
  Kolhapur: {
    src: "/assets/destinations/kolhapur.jpg",
    alt: "Mahalaxmi Temple exterior in Kolhapur",
    credit: "Photo: Dharmadhyaksha, CC BY-SA 4.0, Wikimedia Commons"
  },
  Goa: {
    src: "/assets/destinations/goa.jpg",
    alt: "Sunset at Vagator Beach in Goa",
    credit: "Photo: Swapnilshirali, CC BY-SA 4.0, Wikimedia Commons"
  },
  Sangli: {
    src: "/assets/destinations/sangli.jpg",
    alt: "Ganpati Mandir in Sangli",
    credit: "Photo: Pratish Khedekar, CC BY-SA 4.0, Wikimedia Commons"
  },
  Pune: {
    src: "/assets/destinations/pune.jpg",
    alt: "Shaniwar Wada in Pune",
    credit: "Photo: Samrudhi shelagaonkar, CC BY-SA 4.0, Wikimedia Commons"
  },
  Mumbai: {
    src: "/assets/destinations/mumbai.jpg",
    alt: "Gateway of India in Mumbai",
    credit: "Photo: Jawahar Soneji, CC BY-SA 4.0, Wikimedia Commons"
  },
  Ichalkaranji: {
    src: "/assets/destinations/ichalkaranji.jpg",
    alt: "Ichalkaranji city landmark",
    credit: "Photo: Subodh Kulkarni, CC BY-SA 4.0, Wikimedia Commons"
  }
};

const cabOptions = [
  {
    type: "Hatchback",
    description: "Best for small families or budget travel.",
    seats: "4 seats",
    models: [
      {
        name: "Maruti Suzuki Swift",
        src: "/assets/cabs/hatchback-swift.jpg"
      },
      {
        name: "Maruti Suzuki Wagon R",
        src: "/assets/cabs/hatchback-wagonr.jpg"
      },
      {
        name: "Hyundai Grand i10",
        src: "/assets/cabs/hatchback-grand-i10.jpg"
      }
    ]
  },
  {
    type: "Sedan",
    description: "Comfortable option for longer highway travel.",
    seats: "4 seats",
    models: [
      {
        name: "Maruti Suzuki Dzire",
        src: "/assets/cabs/sedan-dzire.jpg"
      },
      {
        name: "Honda Amaze",
        src: "/assets/cabs/sedan-amaze.jpg"
      },
      {
        name: "Hyundai Xcent",
        src: "/assets/cabs/sedan-xcent.jpg"
      }
    ]
  },
  {
    type: "SUV",
    description: "Recommended for groups and extra luggage.",
    seats: "6 seats",
    models: [
      {
        name: "Toyota Innova Crysta",
        src: "/assets/cabs/suv-innova-crysta.jpg"
      },
      {
        name: "Maruti Suzuki Ertiga",
        src: "/assets/cabs/suv-ertiga.jpg"
      },
      {
        name: "Mahindra Xylo",
        src: "/assets/cabs/suv-xylo.jpg"
      }
    ]
  }
];

function titleCase(slug) {
  const route = routePages[slug];
  return `${route.origin} to ${route.destination} Taxi`;
}

function cabServiceTitle(route) {
  return `${route.origin} To ${route.destination} Cab Service`;
}

function heroImageStyle(route) {
  const originImage = destinationImages[route.origin];
  const destinationImage = destinationImages[route.destination];
  const leftImage = originImage || destinationImage;
  const rightImage = destinationImage || originImage;

  if (!leftImage) return "";
  return ` style="--route-hero-origin-image: url('${leftImage.src}'); --route-hero-destination-image: url('${rightImage.src}')"`;
}

function heroPhotoCredits(route) {
  const originImage = destinationImages[route.origin];
  const destinationImage = destinationImages[route.destination];
  const credits = [originImage, destinationImage]
    .filter(Boolean)
    .map((img) => img.credit);
  const unique = [...new Set(credits)];
  if (!unique.length) return "";
  return `<p class="route-hero__photo-credit">${unique.join(" · ")}</p>`;
}

function cabOptionCard(option) {
  const slides = option.models.map((model) => `
    <figure class="cab-slide">
      <img src="${model.src}" alt="${model.name}" loading="lazy" />
      <figcaption>${model.name}</figcaption>
    </figure>`).join("");

  return `
    <div class="cab-option">
      <div class="cab-slider" aria-label="${option.type} cab models">
        <div class="cab-slider__track">${slides}</div>
      </div>
      <div class="cab-option__body">
        <h3>${option.type}</h3>
        <p>${option.description}</p>
        <strong>${option.seats}</strong>
      </div>
    </div>`;
}

function renderRoutePage() {
  const app = document.getElementById("route-page");
  const slug = app.dataset.route;
  const route = routePages[slug] || routePages["kolhapur-to-goa"];
  const title = titleCase(slug);
  const titleLong = cabServiceTitle(route);

  document.title = `${title} | Sawari Cabs`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      `Book ${title} with Sawari Cabs. Clean AC cabs, professional drivers, one-way and round-trip options, and 24/7 support.`
    );
  }

  const dropdown = routeOrder.map((item) => `<a href="/${item}.html">${titleCase(item)}</a>`).join("");

  const phoneIcon = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const waIcon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`;

  app.innerHTML = `
    <nav class="route-nav" aria-label="Primary navigation">
      <div class="route-nav__inner">
        <a class="route-nav__brand" href="/" aria-label="Sawari Cabs home">
          <span class="route-nav__mark" aria-hidden="true"><img src="/logo.png" alt="" width="44" height="44" /></span>
          <span>Sawari Cabs</span>
        </a>
        <button class="route-nav__toggle" type="button" aria-label="Toggle navigation" aria-expanded="false"><span></span></button>
        <div class="route-nav__menu">
          <a href="/">Home</a>
          <a href="/#about">About Us</a>
          <div class="route-nav__routes">
            <a class="route-nav__active" href="/#routes">All Routes <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            <div class="route-nav__dropdown">${dropdown}</div>
          </div>
          <a href="/blog">Blog</a>
          <a href="/#contact">Contact Us</a>
          <a class="route-nav__cta-mobile" href="tel:+917387338634">${phoneIcon} Call Now</a>
        </div>
        <a class="route-nav__cta" href="tel:+917387338634">${phoneIcon} Call Now</a>
      </div>
    </nav>

    <div class="route-trust-bar" role="region" aria-label="Service highlights">
      <span class="route-trust-bar__item"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>4.8★ Rated</span>
      <span class="route-trust-bar__sep" aria-hidden="true"></span>
      <span class="route-trust-bar__item"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>24/7 Available</span>
      <span class="route-trust-bar__sep" aria-hidden="true"></span>
      <span class="route-trust-bar__item"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/></svg>10,000+ Happy Riders</span>
      <span class="route-trust-bar__sep" aria-hidden="true"></span>
      <span class="route-trust-bar__item"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>Verified Drivers</span>
      <span class="route-trust-bar__sep" aria-hidden="true"></span>
      <span class="route-trust-bar__item"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" stroke-width="2"/></svg>Private &amp; AC Cabs</span>
    </div>

    <section class="route-hero"${heroImageStyle(route)}>
      <div class="route-hero__inner">
        <p class="route-eyebrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" stroke-width="2"/></svg>
          ${route.origin} → ${route.destination}
        </p>
        <h1>${titleLong}</h1>
        <p>Book a private ${route.origin} to ${route.destination} cab for ${route.uses}. Clean AC cabs, experienced drivers, 24/7 support.</p>
        <div class="route-hero__actions">
          <a class="route-hero__btn-primary" href="tel:+917387338634">
            ${phoneIcon} Call to Book Now
          </a>
          <a class="route-hero__btn-secondary" href="https://wa.me/917387338634?text=Hi%2C%20I%20want%20to%20book%20${encodeURIComponent(route.origin + ' to ' + route.destination)}%20cab" target="_blank" rel="noopener noreferrer">
            ${waIcon} WhatsApp Us
          </a>
        </div>
      </div>
      ${heroPhotoCredits(route)}
    </section>

    <main class="route-main">
      <div class="route-stack">
        <section class="route-card">
          <div class="route-card__body">
            <h2>Book ${route.origin} To ${route.destination} One Way Cab</h2>
            <p>Sawari Cabs provides dedicated ${route.origin} to ${route.destination} cab service for travellers who want a comfortable private ride. Your driver picks you up from your preferred location in ${route.origin} and drops you at your exact destination in ${route.destination}.</p>
            <p>Ideal for ${route.uses}. Choose the right cab based on your passengers, luggage, and budget.</p>
            <div class="route-stats">
              <div class="route-stat"><strong>${route.distance}</strong><span>Distance</span></div>
              <div class="route-stat"><strong>${route.time}</strong><span>Travel time</span></div>
              <div class="route-stat"><strong>24/7</strong><span>Support</span></div>
            </div>
          </div>
        </section>

        <section class="route-card">
          <div class="route-card__body">
            <h2>${route.origin} To ${route.destination} Route Details</h2>
            <p>The journey goes ${route.path}, depending on traffic, weather, and your pickup and drop points.</p>
            <ul class="route-list">
              <li>Pickup from ${route.origin} — home, hotel, bus stand, railway station, or custom location</li>
              <li>Drop at ${route.drops}</li>
              <li>One-way, round trip, and custom outstation options available</li>
              <li>Meal and rest stops can be arranged with the driver</li>
            </ul>
          </div>
        </section>

        <section class="route-card">
          <div class="route-card__body">
            <h2>Available Cab Options</h2>
            <div class="cab-grid">
              ${cabOptions.map(cabOptionCard).join("")}
            </div>
          </div>
        </section>

        <section class="route-card">
          <div class="route-card__body">
            <h2>Why Choose Sawari Cabs?</h2>
            <ul class="route-list">
              <li>Private cab — no sharing, no strangers</li>
              <li>Drivers experienced on the ${route.origin} to ${route.destination} route</li>
              <li>Clean, well-maintained AC vehicles</li>
              <li>Transparent fare — no hidden charges</li>
              <li>Phone and WhatsApp support round the clock</li>
              <li>On-time pickup, every time</li>
            </ul>
          </div>
        </section>

        <section class="route-card">
          <div class="route-card__body">
            <h2>${route.origin} To ${route.destination} — FAQs</h2>
            <div class="route-faq">
              <details><summary>How long does ${route.origin} to ${route.destination} take by taxi?</summary><p>The journey usually takes around ${route.time}, depending on traffic, weather, and your final drop location.</p></details>
              <details><summary>Can I book a one-way cab from ${route.origin} to ${route.destination}?</summary><p>Yes, Sawari Cabs offers both one-way and round-trip cab bookings for this route.</p></details>
              <details><summary>Can I choose a Sedan or SUV for this route?</summary><p>Yes, cab type can be selected based on availability, passenger count, luggage, and comfort preference.</p></details>
              <details><summary>Is the fare fixed or metered?</summary><p>Fares are discussed and confirmed before the trip. There are no hidden charges or meter surprises.</p></details>
            </div>
          </div>
        </section>
      </div>

      <aside class="booking-box">
        <div class="booking-box__header">
          <h3>Book Your Cab Now</h3>
          <p>Share details &amp; call to confirm instantly</p>
        </div>
        <div class="booking-box__body">
          <label for="pickup">Pickup City</label>
          <input id="pickup" value="${route.origin}" readonly />
          <label for="drop">Drop City</label>
          <input id="drop" value="${route.destination}" readonly />
          <label for="cab">Cab Type</label>
          <select id="cab">
            <option>Hatchback — Budget friendly</option>
            <option>Sedan — Comfortable</option>
            <option>SUV — Groups &amp; families</option>
          </select>
          <div class="booking-box__price-note">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M12 8v4l3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            Fare confirmed before booking — no surprises
          </div>
          <a class="route-cta" href="tel:+917387338634">${phoneIcon} Call +91-7387338634</a>
          <a class="route-cta-wa" href="https://wa.me/917387338634?text=Hi%2C%20I%20want%20to%20book%20${encodeURIComponent(route.origin + ' to ' + route.destination)}%20cab" target="_blank" rel="noopener noreferrer">${waIcon} WhatsApp to Book</a>
        </div>
      </aside>
    </main>

    <a class="whatsapp-fab" href="https://wa.me/917387338634?text=Hi%2C%20I%20want%20to%20book%20a%20cab" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      ${waIcon}
    </a>`;
}

renderRoutePage();

(function () {
  var nav = document.querySelector(".route-nav");
  var toggle = document.querySelector(".route-nav__toggle");
  if (!nav || !toggle) return;

  function setOpen(isOpen) {
    nav.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-open"));
  });

  nav.addEventListener("click", function (e) {
    var link = e.target.closest("a");
    if (!link) return;
    var href = link.getAttribute("href");
    if (href && !href.startsWith("#") && href !== "/") {
      // Close menu immediately then navigate
      setOpen(false);
      e.preventDefault();
      setTimeout(function () { window.location.href = href; }, 80);
    } else {
      setOpen(false);
    }
  });

  // Close menu on outside click
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target)) setOpen(false);
  });

  // Hide navbar on scroll down, show on scroll up (mobile only)
  var lastY = 0;
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      if (window.innerWidth > 840) { ticking = false; return; }
      var y = window.scrollY;
      if (y > lastY && y > 80) {
        nav.style.transform = "translateY(-100%)";
        setOpen(false);
      } else {
        nav.style.transform = "";
      }
      lastY = y;
      ticking = false;
    });
  });
})();
