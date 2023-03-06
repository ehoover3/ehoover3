import React from "react";
import { render } from "@testing-library/react";
import AmortizationSchedule from "./AmortizationSchedule";

describe("AmortizationSchedule", () => {
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

  const defaultProps: LoanAmortizationProps = {
    principal: 100000,
    interestRate: 6.5,
    loanTerm: 360,
  };

  test("renders the table headings correctly", () => {
    const { getByText } = render(<AmortizationSchedule {...defaultProps} />);
    expect(getByText("Payment #")).toBeInTheDocument();
    expect(getByText("Payment Amount")).toBeInTheDocument();
    expect(getByText("Principal Paid")).toBeInTheDocument();
    expect(getByText("Interest Paid")).toBeInTheDocument();
    expect(getByText("Balance")).toBeInTheDocument();
  });

  test("renders the correct number of rows in the table", () => {
    const { getAllByRole } = render(<AmortizationSchedule {...defaultProps} />);
    const rows = getAllByRole("row");
    // Subtracting 1 to exclude the table header row
    expect(rows.length - 1).toEqual(defaultProps.loanTerm);
  });
});
