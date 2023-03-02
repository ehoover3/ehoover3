export default function calculateLoanMonthlyPayment(
  principal: number,
  interestRate: number,
  loanTermInYears: number
): string {
  const monthlyInterestRate = interestRate / 12;
  const loanTermInMonths = loanTermInYears * 12;
  const numerator =
    principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermInMonths);
  const denominator = Math.pow(1 + monthlyInterestRate, loanTermInMonths) - 1;
  const monthlyPayment = numerator / denominator;
  return monthlyPayment.toFixed(2);
}
