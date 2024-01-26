import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import NumberButton from "./NumberButton";

describe("Renders the NumberButton component", () => {
  it("Renders the NumberButton component", () => {
    render(<NumberButton number={1} />);

    const numberButton = screen.queryByTestId("numberButton");
    expect(numberButton).toBeTypeOf("object");
  });
});