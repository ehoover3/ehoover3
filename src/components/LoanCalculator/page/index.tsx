import { useState } from "react";
import FormInputs from "../components/FormInputs";
import Results from "../components/Results";
import "../assets/LoanCalculator.css";

export default function LoanCalculator() {
  let [loan, setLoan] = useState<any>({
    loanAmount: 0,
    loanTerm: 0,
    interestRate: 0,
  });

  return (
    <div>
      <div>
        <h1 className='h1_style'>Amortized Loan Calculator</h1>
        <h2 className='h2_style'>Compounded Monthly</h2>
      </div>
      <div className='container'>
        <FormInputs loan={loan} setLoan={setLoan} />
        <Results loan={loan} />
      </div>
    </div>
  );
}
