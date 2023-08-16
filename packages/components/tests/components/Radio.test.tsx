import { render, screen } from "@testing-library/react";
import { Radio } from "../../components/Radio/Radio";
import { axe } from "jest-axe";

describe("Switch", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Radio isSelected onChange={jest.fn()}>
        Radio
      </Radio>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Radio isSelected onChange={jest.fn()}>
        Radio
      </Radio>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render label correctly.", () => {
    render(
      <Radio isSelected onChange={jest.fn()}>
        Radio
      </Radio>
    );
    expect(screen.getByText("Radio")).toBeInTheDocument();
  });

  test("Should render unchecked correctly.", () => {
    render(<Radio onChange={jest.fn()}>Radio</Radio>);
    expect(screen.getByText("Radio")).not.toHaveClass("selected");
  });

  test("Should render disabled correctly.", () => {
    render(
      <Radio disabled onChange={jest.fn()}>
        Radio
      </Radio>
    );
    expect(screen.getByText("Radio")).toHaveClass("disabled");
  });
});
