import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "@/components/Button/Button";

describe("Button", () => {
  it("renders the button text", () => {
    const { getByText } = render(<Button>Click me!</Button>);
    expect(getByText("Click me!")).toBeInTheDocument();
  });

  it("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click me!</Button>
    );
    fireEvent.click(getByText("Click me!"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("matches the snapshot", () => {
    const { container } = render(<Button>Click me!</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
