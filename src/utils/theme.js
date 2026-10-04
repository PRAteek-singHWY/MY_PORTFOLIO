// Reads a theme colour from the CSS variables in index.css, for places that
// cannot use CSS directly: SVG presentation attributes and Three.js materials.
export const themeColor = (name, fallback) => {
  if (typeof window === "undefined") return fallback;
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
};
