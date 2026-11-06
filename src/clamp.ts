// Limits a value to the inclusive range from min to max.
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
