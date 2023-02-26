import calculate from "./Calculate";

describe("Loan Calculator", () => {
  it("should return the correct monthly payment, total interest paid, and total paid", () => {
    const result = calculate(100, 10, 10);
    expect(result).toEqual({
      monthlyPayment: 10.46,
      totalInterestPaid: 4.64,
      totalPaid: 104.64,
    });
  });
});
