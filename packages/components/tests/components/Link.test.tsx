import { render, screen } from "@testing-library/react";
import { Link, LinkVariant } from "../../components/Link/Link";
import { axe } from "jest-axe";

describe("Link", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Link href="https://www.google.com/">Google.com</Link>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Link href="https://www.google.com/">Google.com</Link>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test.each<LinkVariant>(["primary", "secondary"])(
    "Should render variants correctly.",
    (variant) => {
      render(
        <Link href="https://www.google.com/" variant={variant}>
          Google.com
        </Link>
      );
      expect(screen.getAllByRole("link")[0]).toHaveClass(variant);
    }
  );
});
