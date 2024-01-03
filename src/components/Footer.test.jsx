import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Footer from "./Footer";

describe("Renders the Footer component when the Game is in the initial state", () => {
  it("Renders the Footer component", () => {
    render(<Footer timerValue={15} />);
    expect(screen.getByText("Start")).toBeInTheDocument();
  });
});