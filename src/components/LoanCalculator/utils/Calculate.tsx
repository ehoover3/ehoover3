export default function calculate(loanAmount: number, loanTerm: number, interestRate: number) {
  let rateAtTwoDecimalPoints = interestRate / 100 / 12;
  let monthlyPayment =
    (rateAtTwoDecimalPoints * loanAmount) / (1 - Math.pow(1 + rateAtTwoDecimalPoints, -loanTerm));
  let totalInterestPaid = monthlyPayment * loanTerm - loanAmount;
  let totalPaid = loanAmount + totalInterestPaid;
  return {
    monthlyPayment: Number(monthlyPayment.toFixed(2)),
    totalInterestPaid: Number(totalInterestPaid.toFixed(2)),
    totalPaid: Number(totalPaid.toFixed(2)),
  };
}
