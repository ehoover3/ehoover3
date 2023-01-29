import { useState, useEffect } from "react";
import calculate from "../utils/Calculate";
import toCurrency from "../utils/ToCurrency";
import "../assets/LoanCalculator.css";
export default function Results({ loan, EULERSNUMBER }: any) {
  let { loanAmount, loanTerm, interestRate } = loan;

  interface loanCalculationsInterface {
    monthlyPayment: number;
    totalInterestPaid: number;
    totalPaid: number;
  }

  let [loanCalculations, setLoanCalculations] = useState<loanCalculationsInterface>({
    monthlyPayment: 0,
    totalInterestPaid: 0,
    totalPaid: 0,
  });

  useEffect(() => {
    setLoanCalculations(calculate(loanAmount, loanTerm, interestRate));
  }, [loanAmount, loanTerm, interestRate]);

  return (
    <div style={{ width: "25%" }}>
      <div className='flexspacebetween'>
        <div>MONTHLY PAYMENT:</div>
        <div>{toCurrency(loanCalculations.monthlyPayment)}</div>
      </div>
      <div className='flexspacebetween'>
        <div>TOTAL INTEREST PAID: </div>
        <div>{toCurrency(loanCalculations.totalInterestPaid)}</div>
      </div>
      <div className='flexspacebetween'>
        <div>LOAN AMOUNT:</div>
        <div>{toCurrency(loanAmount)}</div>
      </div>
      <div className='flexspacebetween'>
        <div>TOTAL PAID:</div>
        <div>{toCurrency(loanCalculations.totalPaid)}</div>
      </div>
    </div>
  );
}
