import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      // Force Lenis à scroller tout en haut instantanément
      lenis.scrollTo(0, { immediate: true });
    } else {
      // Fallback si Lenis n'est pas encore prêt
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}