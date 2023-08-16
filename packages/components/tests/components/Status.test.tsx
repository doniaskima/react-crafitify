import { screen, render } from "@testing-library/react";
import {
  Status,
  StatusVariant,
} from "../../components/Status/Status";
import { axe } from "jest-axe";

describe("Status", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<Status />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(<Status />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test.each<StatusVariant>(["online", "offline", "away", "busy"])(
    "Should render variants correctly.",
    (variant) => {
      render(<Status variant={variant} label={variant} />);
      expect(screen.getByRole("status").childNodes[0]).toHaveClass(
        variant
      );
    }
  );
});
