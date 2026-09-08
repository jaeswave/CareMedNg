import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls the window to the top every time the route (URL) changes.
// Without this, React Router keeps the browser's previous scroll position,
// which is why clicking a nav link could land you in the middle/footer
// of the new page instead of the top.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
