import { useEffect, useState } from "react";

const query = (q) =>
  typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia(q)
    : null;

export const useMediaQuery = (q) => {
  const [matches, setMatches] = useState(() => query(q)?.matches ?? false);

  useEffect(() => {
    const mq = query(q);
    if (!mq) return undefined;
    const onChange = (event) => setMatches(event.matches);
    setMatches(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [q]);

  return matches;
};

// Tailwind `sm` is 640px. Below it, or on any touch-first device, 3D scenes
// autorotate instead of mounting OrbitControls, so a thumb swipe scrolls the page.
export const useCanOrbit = () =>
  useMediaQuery("(min-width: 640px) and (hover: hover) and (pointer: fine)");

export const useReducedMotion = () =>
  useMediaQuery("(prefers-reduced-motion: reduce)");

export const useIsSmall = () => useMediaQuery("(max-width: 639px)");
