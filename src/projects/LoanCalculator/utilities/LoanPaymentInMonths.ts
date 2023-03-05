export default function calculateLoanMonthlyPayment(
  amount: number,
  termInYears: number,
  interestRateInYears: number
): string {
  if (amount <= 0 || interestRateInYears <= 0 || termInYears <= 0) {
    return "Invalid input";
  }

  const interestRateInYearsNotAsPercentage = interestRateInYears / 100;
  const interestRateInMonths = interestRateInYearsNotAsPercentage / 12;
  const termInMonths = termInYears * 12;

  const numerator =
    amount * interestRateInMonths * Math.pow(1 + interestRateInMonths, termInMonths);
  const denominator = Math.pow(1 + interestRateInMonths, termInMonths) - 1;
  if (denominator === 0) {
    return "Divide by zero error";
  }
  const monthlyPayment = numerator / denominator;
  return monthlyPayment.toFixed(2);
}
