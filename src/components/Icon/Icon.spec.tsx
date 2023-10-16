import { render } from "@testing-library/react";
import { IconType } from "@/lib/constants/icon-type";
import "@testing-library/jest-dom";
import Icon from "@/components/Icon/Icon";

describe("Icon", () => {
  it("renders the DownArrowIcon component when iconType is IconType.DOWN_ARROW_ICON", () => {
    const { container } = render(<Icon iconType={IconType.DOWN_ARROW_ICON} />);
    expect(container.querySelector(".down-arrow-icon")).toBeInTheDocument();
  });

  it("does not render any component when iconType is not recognized", () => {
    const { container } = render(<Icon iconType="unknown-icon" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
