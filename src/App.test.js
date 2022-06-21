import { render, screen } from "@testing-library/react";
import Navbar from "./components/Navbar/Navbar";

test("renders learn react link", () => {
  render(<Navbar />);
  expect(screen.getByText(/furniture/i)).toBeInTheDocument();
});
