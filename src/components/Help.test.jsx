import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoizedHelp } from "./Help";

describe("Renders the Help component", () => {
  it("Renders the Help component", () => {
    render(<MemoizedHelp />);

    const helpText = screen.queryByTestId("help");
    expect(helpText).toHaveTextContent(
      "Pick 4 numbers that sum to the target in 15 seconds"
    );
  });
});
