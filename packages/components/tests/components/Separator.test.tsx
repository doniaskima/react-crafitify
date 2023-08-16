import { screen, render } from "@testing-library/react";
import { axe } from "jest-axe";
import { Separator } from "../../components/Separator/Separator";

describe("Separator", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<Separator />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(<Separator />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render horizontally correctly.", () => {
    render(<Separator direction="horizontal" />);

    expect(screen.getByRole("separator")).toHaveStyle({
      borderTop: "1px solid #c8c8c8",
    });
  });
  test("Should render vertically correctly.", () => {
    render(<Separator direction="vertical" />);

    expect(screen.getByRole("separator")).toHaveStyle({
      borderLeft: "1px solid #c8c8c8",
    });
  });
});
