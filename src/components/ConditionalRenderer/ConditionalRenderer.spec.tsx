import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ConditionalRenderer from "@/components/ConditionalRenderer/ConditionalRenderer";

describe("ConditionalRenderer", () => {
  it("renders the content when the condition is true", () => {
    const { getByText } = render(
      <ConditionalRenderer
        condition={true}
        render={() => <div>Rendered content</div>}
      />
    );
    expect(getByText("Rendered content")).toBeInTheDocument();
  });

  it("does not render the content when the condition is false", () => {
    const { queryByText } = render(
      <ConditionalRenderer
        condition={false}
        render={() => <div>Rendered content</div>}
      />
    );
    expect(queryByText("Rendered content")).not.toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    const { container } = render(
      <ConditionalRenderer
        condition={true}
        render={() => <div>Rendered content</div>}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
