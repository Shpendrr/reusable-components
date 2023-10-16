import React from "react";
import { render } from "@testing-library/react";
import CustomSelect, {
  ICustomSelect,
  IOption,
} from "@/components/CustomSelect/CustomSelect";
import "@testing-library/jest-dom";

describe("CustomSelect", () => {
  const options: IOption[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  it("renders options correctly", () => {
    const { getByText } = render(
      <CustomSelect options={options} value="option1" onChange={() => {}} />
    );
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
    expect(getByText("Option 3")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const customSelectProps: ICustomSelect<IOption[]> = {
      options,
      value: "option1",
      onChange: () => {},
    };
    const { container } = render(<CustomSelect {...customSelectProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
