import calculateLoanMonthlyPayment from "./LoanPaymentInMonths";

// test("principal: 10000, interestRate: 10, loanTermInYears: 30", () => {
//   const result = calculateLoanMonthlyPayment(1000, 10, 30);
//   expect(result).toBe(833.33);
// });

// describe("calculateLoanMonthlyPayment", () => {
//   it("should calculate monthly payment correctly with given inputs", () => {
//     const principal = 100000;
//     const interestRate = 6.5;
//     const loanTermInYears = 30;
//     const expectedMonthlyPayment = "632.07";
//     expect(calculateLoanMonthlyPayment(principal, interestRate, loanTermInYears)).toEqual(
//       expectedMonthlyPayment
//     );
//   });

//   it("should return 0 if principal is 0", () => {
//     const principal = 0;
//     const interestRate = 6.5;
//     const loanTermInYears = 30;
//     const expectedMonthlyPayment = "0.00";
//     expect(calculateLoanMonthlyPayment(principal, interestRate, loanTermInYears)).toEqual(
//       expectedMonthlyPayment
//     );
//   });

//   it("should return 0 if interestRate is 0", () => {
//     const principal = 100000;
//     const interestRate = 0;
//     const loanTermInYears = 30;
//     const expectedMonthlyPayment = "0.00";
//     expect(calculateLoanMonthlyPayment(principal, interestRate, loanTermInYears)).toEqual(
//       expectedMonthlyPayment
//     );
//   });

//   it("should return 0 if loanTermInYears is 0", () => {
//     const principal = 100000;
//     const interestRate = 6.5;
//     const loanTermInYears = 0;
//     const expectedMonthlyPayment = "0.00";
//     expect(calculateLoanMonthlyPayment(principal, interestRate, loanTermInYears)).toEqual(
//       expectedMonthlyPayment
//     );
//   });
// });

// principal: number,
// interestRate: number,
// loanTermInYears: number

describe("calculateLoanMonthlyPayment", () => {
  it('returns "Invalid input" when any input is <= 0', () => {
    expect(calculateLoanMonthlyPayment(1, 0, 1)).toBe("Invalid input");
    expect(calculateLoanMonthlyPayment(0, 1, 1)).toBe("Invalid input");
    expect(calculateLoanMonthlyPayment(1, 1, 0)).toBe("Invalid input");
    expect(calculateLoanMonthlyPayment(-1, 1, 1)).toBe("Invalid input");
    expect(calculateLoanMonthlyPayment(1, -1, 1)).toBe("Invalid input");
    expect(calculateLoanMonthlyPayment(1, 1, -1)).toBe("Invalid input");
    expect(calculateLoanMonthlyPayment(1000, 5, 0)).toBe("Invalid input");
    expect(calculateLoanMonthlyPayment(1000, 5, -1)).toBe("Invalid input");
    expect(calculateLoanMonthlyPayment(1000, 0, 1)).toBe("Invalid input");
  });

  it("calculates monthly payment correctly", () => {
    // expect(calculateLoanMonthlyPayment(1000, 5, 1)).toBe("17.09");
    expect(calculateLoanMonthlyPayment(5000, 3, 5)).toBe("149.85");
    expect(calculateLoanMonthlyPayment(10000, 2.5, 10)).toBe("378.11");
    expect(calculateLoanMonthlyPayment(1000, 10, 10)).toBe("13.22");
    expect(calculateLoanMonthlyPayment(1000, 120, 10)).toBe("8.33");
  });
});

// amt: number,
// termInYears: number,
// apr: number
