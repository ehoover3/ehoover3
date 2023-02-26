import { ReactElement, useState } from "react";
import LoanInputs from "../components/LoanInputs";
import LoanOutputs from "../components/LoanOutputs";
import "../assets/styles.css";

export default function LoanCalculator(): ReactElement {
  type LoanType = {
    loanAmount: number;
    loanTerm: number;
    interestRate: number;
  };

  let [loan, setLoan] = useState<LoanType>({
    loanAmount: 0,
    loanTerm: 0,
    interestRate: 0,
  });

  return (
    <div>
      <div>
        <h1>Loan Calculator</h1>
        <h2>Compounded Monthly</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <LoanInputs loan={loan} setLoan={setLoan} />
        <LoanOutputs loan={loan} />
      </div>
    </div>
  );
}
