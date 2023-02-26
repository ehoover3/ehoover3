import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("ensure text renders", () => {
  test("Loan Calculator", () => {
    render(<Hero />);
    const divElement = screen.getByText("Loan Calculator");
    expect(divElement).toBeInTheDocument();
  });

  test("Eric Hoover | Software Engineer", () => {
    render(<Hero />);
    const divElement = screen.getByText("Eric Hoover | Software Engineer");
    expect(divElement).toBeInTheDocument();
  });

  test("https://www.linkedin.com/in/hoov", () => {
    render(<Hero />);
    const divElement = screen.getByText("https://www.linkedin.com/in/hoov");
    expect(divElement).toBeInTheDocument();
  });
});

describe("test the buttons", () => {
  test("Prev", () => {
    render(<Hero />);
    const button = screen.getByText(/Prev/i);
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  test("Next", () => {
    render(<Hero />);
    const button = screen.getByText(/Next/i);
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });
});
