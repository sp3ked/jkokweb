import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./Pages/Larp", () => () => null);

test("renders the homepage", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: "Joey Kokinda" })).toBeInTheDocument();
});
