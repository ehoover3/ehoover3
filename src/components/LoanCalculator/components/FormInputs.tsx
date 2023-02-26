import Form from "react-bootstrap/Form";

export default function FormInputs({ loan, setLoan }: any) {
  let { loanAmount, loanTerm, interestRate } = loan;

  return (
    <Form className='width25percent'>
      <Form.Group className='mb-3' controlId='formLoanAmount'>
        <Form.Label>Loan Amount ($)</Form.Label>
        <Form.Control
          type='number'
          value={loanAmount}
          onChange={(e) => setLoan({ ...loan, loanAmount: Number(e.target.value) })}
        />
      </Form.Group>
      <input
        className='width100percent'
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
      <input
        className='width100percent'
        type='range'
        min='1'
        max='120'
        value={loanTerm}
        onChange={(e) => setLoan({ ...loan, loanTerm: Number(e.target.value) })}
      />
      <Form.Group className='mb-3' controlId='formLoanTermMonths'>
        <Form.Label>Interest Rate (%)</Form.Label>
        <Form.Control
          type='number'
          value={interestRate}
          onChange={(e) => setLoan({ ...loan, interestRate: Number(e.target.value) })}
        />
      </Form.Group>
      <input
        className='width100percent'
        type='range'
        min='1'
        max='100'
        value={interestRate}
        onChange={(e) => setLoan({ ...loan, interestRate: Number(e.target.value) })}
      />
    </Form>
  );
}
