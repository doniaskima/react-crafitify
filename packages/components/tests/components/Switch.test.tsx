import { render, screen } from "@testing-library/react";
import { Switch } from "../../components/Switch/Switch";
import { axe } from "jest-axe";

describe("Switch", () => {
  test("Should render component correctly.", () => {
    // Fixes some jest-axe issues
    const { getComputedStyle } = window;
    window.getComputedStyle = (elt) => getComputedStyle(elt);
    // Fixes some jest-axe issues
    const { container } = render(
      <Switch isOn onClick={jest.fn()} label=" Switch Label" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Switch isOn onClick={jest.fn()} label="Switch Label" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render label correctly.", () => {
    const label = "Switch Label";

    render(<Switch isOn onClick={jest.fn()} label={label} />);
    expect(screen.getByRole("switch")).toHaveTextContent(label);
  });

  test("Should render on correctly.", () => {
    render(<Switch isOn onClick={jest.fn()} label="Switch Label" />);
    expect(screen.getByRole("switch")).toHaveClass("on");
  });

  test("Should render off correctly.", () => {
    render(<Switch onClick={jest.fn()} label="Switch Label" />);
    expect(screen.getByRole("switch")).not.toHaveClass("on");
  });
});
