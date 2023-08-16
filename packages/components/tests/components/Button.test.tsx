import { render, screen } from "@testing-library/react";
import {
  Button,
  ButtonSize,
  ButtonType,
  ButtonVariant,
} from "../../components/Button/Button";
import { axe } from "jest-axe";

describe("Button", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<Button>Button</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(<Button>Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test.each<ButtonVariant>(["primary", "secondary"])(
    "Should render variants correctly.",
    (variant) => {
      render(<Button variant={variant}>Button</Button>);
      expect(
        screen.getByRole("button", { name: "Button" })
      ).toHaveClass(variant);
    }
  );
  test.each<ButtonSize>(["small", "medium", "large"])(
    "Should render sizes correctly",
    (size) => {
      render(<Button size={size}>Button</Button>);
      expect(
        screen.getByRole("button", { name: "Button" })
      ).toHaveClass(size);
    }
  );
  test("Should render leading icon correctly.", () => {
    render(<Button leadingIcon="leading">Button</Button>);
    expect(
      screen.getByRole("button", { name: "leading Button" })
    ).toBeInTheDocument();
  });

  test("Should render trailing icon correctly.", () => {
    render(<Button trailingIcon="trailing">Button</Button>);
    expect(
      screen.getByRole("button", { name: "Button trailing" })
    ).toBeInTheDocument();
  });

  test("Should render children correctly.", () => {
    render(<Button>Button</Button>);
    expect(
      screen.getByRole("button", { name: "Button" })
    ).toBeInTheDocument();
  });

  test("Should render disabled correctly.", () => {
    render(<Button disabled>Button</Button>);
    expect(
      screen.getByRole("button", { name: "Button" })
    ).toHaveClass("disabled");
  });

  test.each<ButtonType>(["button", "reset", "submit"])(
    "Should render type correctly.",
    (type) => {
      render(<Button type={type}>Button</Button>);
      expect(
        screen.getByRole("button", { name: "Button" })
      ).toHaveAttribute("type", type);
    }
  );
});
