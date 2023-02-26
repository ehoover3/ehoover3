import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

test("render Technical Skills", () => {
  render(<ProjectCard />);
  const divElement = screen.getByText(/Technical Skills/i);
  expect(divElement).toBeInTheDocument();
});

// TODO test for passed in props
