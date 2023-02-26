import calculateLoanMonthlyPayment from "./calculateLoanMonthlyPayment";

test("amount: 10000, monthlyTerm: 100, interestRate: 10", () => {
  const result = calculateLoanMonthlyPayment(10000, 120, 10);
  expect(result).toBe(132.15);
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
