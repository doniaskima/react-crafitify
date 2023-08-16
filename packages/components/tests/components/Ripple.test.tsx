import { render, fireEvent, screen } from "@testing-library/react";
import { Ripple } from "../../components/Ripple/Ripple";
import { axe } from "jest-axe";

describe("Ripple", () => {
  test("Should render component corectly.", () => {
    const { container } = render(<Ripple />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(<Ripple />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Interaction", () => {
  test("Should addRipple on userEvent.", () => {
    render(<Ripple duration={10000} />);

    fireEvent.mouseDown(screen.getByRole("presentation"));

    expect(
      screen.getAllByRole("presentation")[1]
    ).toBeInTheDocument();
  });
});
