import { render, screen } from "@testing-library/react";
import {
  Typography,
  TypographyType,
  TypographyVariant,
  TypographyWeight,
} from "../../components/Typography/Typography";
import { axe } from "jest-axe";

describe("Switch", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<Typography>Typography</Typography>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(<Typography>Typography</Typography>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test.each<TypographyType>(["h1", "h2", "h3"])(
    "Should render type correctly.",
    (type) => {
      render(<Typography type={type}>Typography</Typography>);
      expect(screen.getByText("Typography")).toHaveClass(
        `typography${type}`
      );
    }
  );

  test.each<TypographyVariant>(["primary", "secondary"])(
    "Should render variant correctly.",
    (variant) => {
      render(<Typography variant={variant}>Typography</Typography>);
      expect(screen.getByText("Typography")).toHaveClass(variant);
    }
  );

  test.each<TypographyWeight>(["light", "normal", "bold"])(
    "Should render weight correctly.",
    (weight) => {
      render(<Typography weight={weight}>Typography</Typography>);
      expect(screen.getByText("Typography")).toHaveClass(weight);
    }
  );
});
