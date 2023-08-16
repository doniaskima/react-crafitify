import { render, screen } from "@testing-library/react";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { axe } from "jest-axe";

describe("Switch", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Checkbox isChecked onChange={jest.fn()}>
        Checkbox
      </Checkbox>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Checkbox isChecked onChange={jest.fn()}>
        Checkbox
      </Checkbox>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render label correctly.", () => {
    render(
      <Checkbox isChecked onChange={jest.fn()}>
        Checkbox
      </Checkbox>
    );
    expect(screen.getByText("Checkbox")).toBeInTheDocument();
  });

  test("Should render unchecked correctly.", () => {
    render(<Checkbox onChange={jest.fn()}>Checkbox</Checkbox>);
    expect(screen.getByText("Checkbox")).not.toHaveClass("checked");
  });

  test("Should render disabled correctly.", () => {
    render(
      <Checkbox disabled onChange={jest.fn()}>
        Checkbox
      </Checkbox>
    );
    expect(screen.getByText("Checkbox")).toHaveClass("disabled");
  });
});
