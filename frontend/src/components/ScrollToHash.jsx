import { useEffect } from "react";
import { useLocation } from "react-router-dom";

if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const scrollToElement = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };
      if (!scrollToElement()) {
        const timeout = setTimeout(scrollToElement, 100);
        return () => clearTimeout(timeout);
      }
    } else {
      // The site sets `html { scroll-behavior: smooth }` globally for anchor
      // links, but that also makes window.scrollTo animate here, which looks
      // like the page failing to reset. Force an instant jump to the top.
      const root = document.documentElement;
      root.classList.add("no-smooth-scroll");
      const jumpToTop = () => window.scrollTo(0, 0);
      // Run now, and again after the new page's images/fonts settle, so a
      // late layout shift (which can nudge scroll position back down) can't
      // leave the page scrolled away from the top.
      jumpToTop();
      const raf = requestAnimationFrame(jumpToTop);
      const timeout = setTimeout(() => {
        jumpToTop();
        root.classList.remove("no-smooth-scroll");
      }, 200);
      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(timeout);
        root.classList.remove("no-smooth-scroll");
      };
    }
  }, [location.pathname, location.hash]);

  return null;
}
