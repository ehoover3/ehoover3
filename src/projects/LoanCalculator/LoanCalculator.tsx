import { useState, useEffect } from "react";
import calculateLoanMonthlyPayment from "./utilities/calculateLoanMonthlyPayment";

export default function LoanCalculator() {
  // inputs
  const [principal, setLoanAmount] = useState(0);
  const [interestRate, setLoanInterestRate] = useState(0);
  const [loanTermInYears, setLoanTermInYears] = useState(0);

  // outputs
  const [loanMonthlyPayment, setLoanMonthlyPayment] = useState("");

  useEffect(() => {
    let monthlyPayment = calculateLoanMonthlyPayment(principal, interestRate, loanTermInYears);
    console.log("monthlyPayment: ", monthlyPayment);
    setLoanMonthlyPayment(monthlyPayment);
    console.log("principal: ", principal);
    console.log("interestRate: ", interestRate);
    console.log("loanTermInYears: ", loanTermInYears);
  }, [principal, interestRate, loanTermInYears]);

  return (
    <div>
      {/* title */}
      <h1>Loan Calculator</h1>

      {/* inputs */}
      <form>
        <div>
          <label>
            <div>Amount</div>
            <input onChange={(e) => setLoanAmount(e.target.valueAsNumber)} type='number' />
          </label>
        </div>

        <div>
          <label>
            <div>Interest Rate</div>
            <input onChange={(e) => setLoanInterestRate(e.target.valueAsNumber)} type='number' />
          </label>
        </div>

        <div>
          <label>
            <div>Term (Years)</div>
            <input onChange={(e) => setLoanTermInYears(e.target.valueAsNumber)} type='number' />
          </label>
        </div>
      </form>

      {/* outputs */}
      <h2>Monthly Payment: ${loanMonthlyPayment}</h2>
    </div>
  );
}
