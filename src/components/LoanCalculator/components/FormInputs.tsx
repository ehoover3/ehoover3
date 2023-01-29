import Form from "react-bootstrap/Form";

export default function FormInputs({ loan, setLoan }: any) {
  let { loanAmount, loanTerm, interestRate } = loan;

  return (
    <Form style={{ width: "25%" }}>
      <Form.Group className='mb-3' controlId='formLoanAmount'>
        <Form.Label>Loan Amount ($)</Form.Label>
        <Form.Control
          type='number'
          value={loanAmount}
          onChange={(e) => setLoan({ ...loan, loanAmount: Number(e.target.value) })}
        />
      </Form.Group>
      <input
        style={{ width: "100%" }}
        type='range'
        min='1'
        max='1000000'
        value={loanAmount}
        onChange={(e) => setLoan({ ...loan, loanAmount: Number(e.target.value) })}
      />

      <Form.Group className='mb-3' controlId='formLoanTermMonths'>
        <Form.Label>Loan Term (Months)</Form.Label>
        <Form.Control
          type='number'
          value={loanTerm}
          onChange={(e) => setLoan({ ...loan, loanTerm: Number(e.target.value) })}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formLoanTermMonths'>
        <Form.Label>Interest Rate (%)</Form.Label>
        <Form.Control
          type='number'
          value={interestRate}
          onChange={(e) => setLoan({ ...loan, interestRate: Number(e.target.value) })}
        />
      </Form.Group>
    </Form>
  );
}
