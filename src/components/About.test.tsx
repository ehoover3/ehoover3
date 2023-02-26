import { render, screen } from "@testing-library/react";
import About from "./About";

test("render Contact", () => {
  render(<About />);
  const divElement = screen.getByText(/About/i);
  expect(divElement).toBeInTheDocument();
});
