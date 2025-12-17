export const interpolateGradient = (progress: number): string => {
  // Seven-stop gradient from DOS #0a0a0a to Windows 11 #0067c0
  const stops = [
    { pos: 0, color: '#0a0a0a' },
    { pos: 0.15, color: '#008080' },
    { pos: 0.3, color: '#4682b4' },
    { pos: 0.45, color: '#4169e1' },
    { pos: 0.6, color: '#228b22' },
    { pos: 0.75, color: '#1ba1e2' },
    { pos: 0.9, color: '#0078d4' },
    { pos: 1, color: '#0067c0' }
  ];

  // Find the two stops to interpolate between
  let start = stops[0];
  let end = stops[stops.length - 1];

  for (let i = 0; i < stops.length - 1; i++) {
    if (progress >= stops[i].pos && progress <= stops[i + 1].pos) {
      start = stops[i];
      end = stops[i + 1];
      break;
    }
  }

  // Calculate local progress between the two stops
  const localProgress = (progress - start.pos) / (end.pos - start.pos);

  // Interpolate RGB values
  const startRgb = hexToRgb(start.color);
  const endRgb = hexToRgb(end.color);

  const r = Math.round(startRgb.r + (endRgb.r - startRgb.r) * localProgress);
  const g = Math.round(startRgb.g + (endRgb.g - startRgb.g) * localProgress);
  const b = Math.round(startRgb.b + (endRgb.b - startRgb.b) * localProgress);

  return `rgb(${r}, ${g}, ${b})`;
};

const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : { r: 0, g: 0, b: 0 };
};