import React from "react";

interface LoanAmortizationProps {
  principal: number; // the amount borrowed
  interestRate: number; // the annual interest rate
  loanTerm: number; // the length of the loan in months
}

interface PaymentData {
  paymentNumber: number;
  paymentAmount: number;
  principalPaid: number;
  interestPaid: number;
  balance: number;
}

const AmortizationSchedule: React.FC<LoanAmortizationProps> = ({
  principal,
  interestRate,
  loanTerm,
}) => {
  const monthlyRate = interestRate / 1200; // monthly interest rate
  const monthlyPayment = (principal * monthlyRate) / (1 - (1 + monthlyRate) ** -loanTerm); // formula for calculating monthly payment

  // create an array of payment data objects
  const paymentData: PaymentData[] = [];
  let balance = principal;
  for (let i = 1; i <= loanTerm; i++) {
    const interestPaid = balance * monthlyRate;
    const principalPaid = monthlyPayment - interestPaid;
    balance -= principalPaid;
    paymentData.push({
      paymentNumber: i,
      paymentAmount: monthlyPayment,
      principalPaid,
      interestPaid,
      balance,
    });
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Payment #</th>
          <th>Payment Amount</th>
          <th>Principal Paid</th>
          <th>Interest Paid</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {paymentData.map(
          ({ paymentNumber, paymentAmount, principalPaid, interestPaid, balance }) => (
            <tr key={paymentNumber}>
              <td>{paymentNumber}</td>
              <td>{paymentAmount.toFixed(2)}</td>
              <td>{principalPaid.toFixed(2)}</td>
              <td>{interestPaid.toFixed(2)}</td>
              <td>{balance.toFixed(2)}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default AmortizationSchedule;
