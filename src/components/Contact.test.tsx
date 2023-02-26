import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

test("render Contact", () => {
  render(<Contact />);
  const divElement = screen.getByText(/Contact/i);
  expect(divElement).toBeInTheDocument();
});
