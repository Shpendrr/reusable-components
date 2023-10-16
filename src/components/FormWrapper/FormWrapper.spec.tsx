import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormWrapper from "@/components/FormWrapper/FormWrapper";

describe("FormWrapper", () => {
  it("renders children", () => {
    const { getByText } = render(
      <FormWrapper>
        <div>Child element</div>
      </FormWrapper>
    );
    expect(getByText("Child element")).toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    const { container } = render(
      <FormWrapper>
        <div>Child element</div>
      </FormWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
