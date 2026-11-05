// Returns the sum of the given numbers.
export function sum(values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}
