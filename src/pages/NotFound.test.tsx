import { render, screen, fireEvent } from "@testing-library/react";
import NotFound from "./NotFound";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("Render text", () => {
  test("render SORRY", () => {
    render(<NotFound />, { wrapper: MemoryRouter });
    const divElement = screen.getByText(/SORRY/i);
    expect(divElement).toBeInTheDocument();
  });

  test("render That page is not found.", () => {
    render(<NotFound />, { wrapper: MemoryRouter });
    const divElement = screen.getByText(/That page is not found./i);
    expect(divElement).toBeInTheDocument();
  });

  test("render Please return to the home page.", () => {
    render(<NotFound />, { wrapper: MemoryRouter });
    const divElement = screen.getByText(/Please return to the home page./i);
    expect(divElement).toBeInTheDocument();
  });

  test("render Go to the home page", () => {
    render(<NotFound />, { wrapper: MemoryRouter });
    const divElement = screen.getByText(/Go to the home page/i);
    expect(divElement).toBeInTheDocument();
  });
});

test("redirect to home page", async () => {
  render(<NotFound />, { wrapper: MemoryRouter });
  const history = createMemoryHistory();
  const linkElement = screen.getByRole("link");
  await fireEvent.click(linkElement);
  expect(history.location.pathname).toBe("/");
});
