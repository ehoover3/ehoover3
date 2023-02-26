export default function calculateLoanMonthlyPayment(
  amount: number,
  monthlyTerm: number,
  interestRate: number
): number {
  let numberOfPayments: number = monthlyTerm * 12;

  return (
    (amount * (interestRate * (1 + interestRate) ** numberOfPayments)) /
    ((1 + interestRate) ** numberOfPayments - 1)
  );
}
