import Reveal from "./Reveal";

const STAR_PATH =
  "M12 .587l3.668 7.431L24 9.748l-6 5.847 1.417 8.268L12 19.771 4.583 23.863 6 15.595 0 9.748l8.332-1.73L12 .587z";

const TESTIMONIALS = [
  {
    name: "Anjali S.",
    city: "Pune",
    text: "Smooth pickup and very polite driver. The car was clean and comfortable. Highly recommend!",
    rating: 5
  },
  {
    name: "Rohit K.",
    city: "Mumbai",
    text: "Great service for airport transfers. On time and affordable pricing.",
    rating: 4.5
  },
  {
    name: "Meera D.",
    city: "Goa",
    text: "Amazing outstation experience. Driver knew the best routes and was very helpful.",
    rating: 5
  }
];

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <svg key={i} className="testimonials__star" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
          <path d={STAR_PATH} fill="#F5A623" />
        </svg>
      );
    } else if (rating >= i - 0.5) {
      const gradientId = `half-star-${i}`;
      stars.push(
        <svg key={i} className="testimonials__star" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId}>
              <stop offset="50%" stopColor="#F5A623" />
              <stop offset="50%" stopColor="#e2e6f5" />
            </linearGradient>
          </defs>
          <path d={STAR_PATH} fill={`url(#${gradientId})`} />
        </svg>
      );
    } else {
      stars.push(
        <svg key={i} className="testimonials__star" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
          <path d={STAR_PATH} fill="#e2e6f5" />
        </svg>
      );
    }
  }
  return <div className="testimonials__stars">{stars}</div>;
}

export default function Testimonials() {
  return (
    <section className="testimonials">
      <Reveal className="testimonials__head">
        <span className="testimonials__kicker">Customer love</span>
        <h2>What riders say</h2>
      </Reveal>
      <div className="testimonials__grid">
        {TESTIMONIALS.map(({ name, city, text, rating }, i) => (
          <Reveal key={name} className="testimonials__card" delay={i * 70}>
            <StarRating rating={rating} />
            <p className="testimonials__text">&ldquo;{text}&rdquo;</p>
            <div className="testimonials__person">
              <span className="testimonials__avatar">{name.charAt(0)}</span>
              <div>
                <span className="testimonials__name">{name}</span>
                <span className="testimonials__city">{city}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
