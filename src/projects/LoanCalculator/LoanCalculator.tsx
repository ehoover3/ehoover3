import { useState, useEffect } from "react";
import calculateLoanMonthlyPayment from "./utilities/LoanPaymentInMonths";
import AmortizationSchedule from "./utilities/AmortizationSchedule";

export default function LoanCalculator() {
  // inputs
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTermInYears, setLoanTermInYears] = useState(0);

  // outputs
  const [loanMonthlyPayment, setLoanMonthlyPayment] = useState("");

  useEffect(() => {
    let monthlyPayment = calculateLoanMonthlyPayment(principal, interestRate, loanTermInYears);
    setLoanMonthlyPayment(monthlyPayment);
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
            <input onChange={(e) => setPrincipal(e.target.valueAsNumber)} type='number' />
          </label>
        </div>

        <div>
          <label>
            <div>Interest Rate</div>
            <input onChange={(e) => setInterestRate(e.target.valueAsNumber)} type='number' />
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
      <AmortizationSchedule
        principal={principal}
        interestRate={interestRate}
        loanTerm={loanTermInYears}
      />
    </div>
  );
}
