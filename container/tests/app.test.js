import { render, screen } from "@testing-library/react";
import App from "../src/app";

test("renders container app", () => {
  render(<App />);
  const linkElement = screen.getByText(/MFE/i);
  expect(linkElement).toBeInTheDocument();
});
