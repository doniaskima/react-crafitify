import { screen, render } from "@testing-library/react";
import { axe } from "jest-axe";
import { Backdrop } from "../../components/Backdrop";

describe("Backdrop", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<Backdrop />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(<Backdrop />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render with no background correctly.", () => {
    render(
      <Backdrop data-testid="Backdrop" showBackground={false} />
    );
    expect(screen.getByTestId("Backdrop")).toHaveClass(
      "noBackground"
    );
  });
});
