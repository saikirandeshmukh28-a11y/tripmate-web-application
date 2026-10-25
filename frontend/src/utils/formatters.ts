/**
 * Format a number into Indian Rupee currency format (e.g. ₹48,200)
 */
export function formatINR(amount: number): string {
  return '₹' + amount.toLocaleString('en-IN')
}

/**
 * Format percentage
 */
export function formatPercent(value: number): string {
  return `${Math.round(value)}%`
}
