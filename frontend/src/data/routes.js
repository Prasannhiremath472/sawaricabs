export const routePages = {
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

export const routeOrder = [
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

export const destinationImages = {
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

export const cabOptions = [
  {
    type: "Hatchback",
    description: "Best for small families or budget travel.",
    seats: "4 seats",
    models: [
      { name: "Maruti Suzuki Swift", src: "/assets/cabs/hatchback-swift.jpg" },
      { name: "Maruti Suzuki Wagon R", src: "/assets/cabs/hatchback-wagonr.jpg" },
      { name: "Hyundai Grand i10", src: "/assets/cabs/hatchback-grand-i10.jpg" }
    ]
  },
  {
    type: "Sedan",
    description: "Comfortable option for longer highway travel.",
    seats: "4 seats",
    models: [
      { name: "Maruti Suzuki Dzire", src: "/assets/cabs/sedan-dzire.jpg" },
      { name: "Honda Amaze", src: "/assets/cabs/sedan-amaze.jpg" },
      { name: "Hyundai Xcent", src: "/assets/cabs/sedan-xcent.jpg" }
    ]
  },
  {
    type: "SUV",
    description: "Recommended for groups and extra luggage.",
    seats: "6 seats",
    models: [
      { name: "Toyota Innova Crysta", src: "/assets/cabs/suv-innova-crysta.jpg" },
      { name: "Maruti Suzuki Ertiga", src: "/assets/cabs/suv-ertiga.jpg" },
      { name: "Mahindra Xylo", src: "/assets/cabs/suv-xylo.jpg" }
    ]
  }
];

export function titleCase(slug) {
  const route = routePages[slug];
  return `${route.origin} to ${route.destination} Taxi`;
}

export function cabServiceTitle(route) {
  return `${route.origin} To ${route.destination} Cab Service`;
}

export function heroImages(route) {
  const originImage = destinationImages[route.origin];
  const destinationImage = destinationImages[route.destination];
  const leftImage = originImage || destinationImage;
  const rightImage = destinationImage || originImage;
  return { leftImage, rightImage };
}
