import calculateLoanMonthlyPayment from "./calculateLoanMonthlyPayment";

test("principal: 10000, interestRate: 10, loanTermInYears: 30", () => {
  const result = calculateLoanMonthlyPayment(1000, 10, 30);
  expect(result).toBe(833.33);
});

// test("amount: -100, monthlyTerm: 100, interestRate: 10", () => {
//   const result = calculateLoanMonthlyPayment(-100, 100, 10);
//   expect(result).toBe(44);
// });

// test("amount: abc, monthlyTerm: 100, interestRate: 10", () => {
//     const result = calculateLoanMonthlyPayment(-100, 100, 10);
//     expect(result).toBe(44);
//   });

//   test("amount: null, monthlyTerm: 100, interestRate: 10", () => {
//     const result = calculateLoanMonthlyPayment(-100, 100, 10);
//     expect(result).toBe(44);
//   });

//   test("amount: undefined, monthlyTerm: 100, interestRate: 10", () => {
//     const result = calculateLoanMonthlyPayment(-100, 100, 10);
//     expect(result).toBe(44);
//   });

//   test("amount: NaN, monthlyTerm: 100, interestRate: 10", () => {
//     const result = calculateLoanMonthlyPayment(-100, 100, 10);
//     expect(result).toBe(44);
//   });
