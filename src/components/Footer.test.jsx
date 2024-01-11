import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Footer from "./Footer";

describe("Renders the Footer component when the Game is in the initial state", () => {
  it("Renders the Footer component", () => {
    render(<Footer timerValue={15} />);

    // Test to validate the timer is set to 15
    const footerTimer = screen.queryByTestId("timer");
    expect(footerTimer).toHaveTextContent(15);

    const footerStartButton = screen.queryByTestId("start_buttom");
    expect(footerStartButton).toHaveTextContent("Start");
  });
});