import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Footer from "./Footer";

const onStartClick = () => {
  console.log('Start button clicked')
}

describe("Renders the Footer component when the Game is in the initial state", () => {
  it("Renders the Footer component", () => {
    render(<Footer timerValue={15} onStartClick={onStartClick}/>);

    // Test to validate the timer is set to 15
    const footerTimer = screen.queryByTestId("timer");
    expect(footerTimer).toHaveTextContent(15);

    const footerStartButton = screen.queryByTestId("start_button");
    expect(footerStartButton).toHaveTextContent("Start");
  });
});

describe("Validate that the start button fires and event when clicked", () => {
  it("Renders the Footer component along with the start button", () => {
    render(<Footer timerValue={15} onStartClick={onStartClick}/>);

    const footerStartButton = screen.queryByTestId("start_button");
    expect(footerStartButton).toHaveTextContent("Start");

    // Create a spy for the start button click event
    const startClickSpy = vi.spyOn(footerStartButton, "click");
    footerStartButton.click();
    expect(startClickSpy).toHaveBeenCalledOnce();
  });
});