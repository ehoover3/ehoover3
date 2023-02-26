export default function toCurrency(number: number): string {
  return number.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
