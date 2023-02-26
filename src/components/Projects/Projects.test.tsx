import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

test("render Projects", () => {
  render(<Projects />);
  const divElement = screen.getByText(/Projects/i);
  expect(divElement).toBeInTheDocument();
});
