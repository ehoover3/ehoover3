import { useState, useEffect } from "react";
import FormInputs from "../components/LoanCalculator/components/FormInputs";
import Results from "../components/LoanCalculator/components/Results";
export default function LoanCalculator() {
  let [loan, setLoan] = useState<any>({
    loanAmount: 0,
    loanTerm: 0,
    interestRate: 0,
  });

  return (
    <div>
      <div>
        <h1
          style={{
            textAlign: "center",
            marginTop: "5%",
          }}
        >
          Amortized Loan Calculator
        </h1>
        <h2 style={{ fontSize: "18px", textAlign: "center", marginBottom: "2.5%" }}>
          Compounded Monthly
        </h2>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <FormInputs loan={loan} setLoan={setLoan} />
        <Results loan={loan} />
      </div>
    </div>
  );
}
