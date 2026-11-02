import mealtimeLogo from './logo.jpg';
import mealtimeIcon from './icon-192.png';

export const LOGO_FALLBACK_SVG =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
      '<rect width="100" height="100" rx="22" fill="#800020"/>' +
      '<circle cx="50" cy="50" r="38" fill="none" stroke="#FFD700" stroke-width="2.5" opacity="0.4"/>' +
      '<text x="50" y="58" font-size="38" text-anchor="middle" dominant-baseline="middle">🍽️</text>' +
      '</svg>'
  );

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.currentTarget;
  if (target.src !== LOGO_FALLBACK_SVG) {
    target.src = LOGO_FALLBACK_SVG;
  }
};

export { mealtimeLogo, mealtimeIcon };
