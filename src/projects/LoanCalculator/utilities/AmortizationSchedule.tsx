import React from "react";

interface LoanAmortizationProps {
  principal: number;
  interestRate: number;
  loanTerm: number;
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
  // TODO make monthlyRate more readable by breaking up the 1200 to 100 and 12
  const monthlyRate = interestRate / 1200;
  const monthlyPayment = (principal * monthlyRate) / (1 - (1 + monthlyRate) ** -loanTerm);

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
