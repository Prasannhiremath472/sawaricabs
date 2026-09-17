import { useEffect, useRef, useState } from "react";
import { PhoneIcon, WhatsAppIcon, ChevronDownIcon, ClockAlertIcon } from "./icons";

const CITIES = ["Kolhapur", "Goa", "Pune", "Mumbai", "Sangli", "Ichalkaranji"];

function CityField({ id, label, value, onSelect }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(value);
  const wrapRef = useRef(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    function handleOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, []);

  const matches = query.trim()
    ? CITIES.filter((c) => c.toLowerCase().includes(query.trim().toLowerCase()))
    : CITIES;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div className={`hb-city-wrap${open ? " is-open" : ""}`} ref={wrapRef}>
        <input
          id={id}
          type="text"
          placeholder="Select or type city…"
          autoComplete="off"
          readOnly={!open}
          value={query}
          onClick={() => setOpen((v) => !v)}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        />
        <ChevronDownIcon className="hb-city-chevron" width="16" height="16" stroke="#94a3b8" strokeWidth="2" />
        <ul className="hb-city-list">
          {matches.length ? (
            matches.map((city) => (
              <li
                key={city}
                className={city === value ? "is-active" : ""}
                onMouseDown={(e) => {
                  e.preventDefault();
                  onSelect(city);
                  setOpen(false);
                }}
              >
                {city}
              </li>
            ))
          ) : (
            <li className="hb-no-result">No city found</li>
          )}
        </ul>
      </div>
    </>
  );
}

export default function BookingCard() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [cabType, setCabType] = useState("Hatchback — Budget friendly");

  const waMessage =
    "Hi, I want to book a cab" +
    (pickup ? ` from ${pickup}` : "") +
    (drop ? ` to ${drop}` : "");
  const waHref = `https://wa.me/917387338634?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="home-booking-card">
      <div className="home-booking-card__header">
        <h3>BOOK YOUR CAB NOW</h3>
        <p>Share details &amp; call to confirm instantly</p>
      </div>
      <div className="home-booking-card__body">
        <CityField id="hb-pickup" label="PICKUP CITY" value={pickup} onSelect={setPickup} />
        <CityField id="hb-drop" label="DROP CITY" value={drop} onSelect={setDrop} />
        <label htmlFor="hb-cab">CAB TYPE</label>
        <select id="hb-cab" value={cabType} onChange={(e) => setCabType(e.target.value)}>
          <option>Hatchback — Budget friendly</option>
          <option>Sedan — Comfortable</option>
          <option>SUV — Groups &amp; families</option>
        </select>
        <div className="home-booking-card__note">
          <ClockAlertIcon width="15" height="15" />
          Fare confirmed before booking — no surprises
        </div>
        <a className="home-booking-card__btn-call" href="tel:+917387338634">
          <PhoneIcon width="16" height="16" />
          Call +91-7387338634
        </a>
        <a className="home-booking-card__btn-wa" href={waHref} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon width="16" height="16" />
          WhatsApp to Book
        </a>
      </div>
    </div>
  );
}
