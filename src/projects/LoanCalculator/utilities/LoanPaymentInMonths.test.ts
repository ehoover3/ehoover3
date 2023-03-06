import calculateLoanMonthlyPayment from "./LoanPaymentInMonths";

describe("calculateLoanMonthlyPayment with parameters: principal, interestRate, term", () => {
  it('returns "Invalid input" when any input is <= 0', () => {
    expect(calculateLoanMonthlyPayment(1, 1, 0)).toBe("Invalid input");
    expect(calculateLoanMonthlyPayment(0, 1, 1)).toBe("Invalid input");
    expect(calculateLoanMonthlyPayment(1, 0, 1)).toBe("Invalid input");
    expect(calculateLoanMonthlyPayment(-1, 1, 1)).toBe("Invalid input");
    expect(calculateLoanMonthlyPayment(1, 1, -1)).toBe("Invalid input");
    expect(calculateLoanMonthlyPayment(1, -1, 1)).toBe("Invalid input");
    expect(calculateLoanMonthlyPayment(1000, 0, 5)).toBe("Invalid input");
    expect(calculateLoanMonthlyPayment(1000, -1, 5)).toBe("Invalid input");
    expect(calculateLoanMonthlyPayment(1000, 1, 0)).toBe("Invalid input");
  });

  it("calculates monthly payment correctly", () => {
    expect(calculateLoanMonthlyPayment(5000, 5, 3)).toBe("149.85");
    expect(calculateLoanMonthlyPayment(10000, 10, 2.5)).toBe("378.11");
    expect(calculateLoanMonthlyPayment(1000, 10, 10)).toBe("13.22");
    expect(calculateLoanMonthlyPayment(1000, 10, 120)).toBe("8.33");
  });
});
