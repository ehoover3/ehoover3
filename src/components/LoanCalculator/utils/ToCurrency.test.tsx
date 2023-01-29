import toCurrency from "./ToCurrency";

describe("Loan Calculator", () => {
  it("should return a formatted positive number", () => {
    const result = toCurrency(100);
    expect(result).toEqual("$100.00");
  });

  it("should return a formatted negative number", () => {
    const result = toCurrency(-100);
    expect(result).toEqual("-$100.00");
  });

  it("should return a formatted 0 number", () => {
    const result = toCurrency(0);
    expect(result).toEqual("$0.00");
  });
});
