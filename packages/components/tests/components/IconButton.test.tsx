import { render, screen } from "@testing-library/react";
import {
  IconButton,
  IconButtonSize,
} from "../../components/IconButton/IconButton";
import { FaReact } from "react-icons/fa";
import { axe } from "jest-axe";

describe("IconButton", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <IconButton content={<FaReact />} size="medium" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <IconButton content={<FaReact />} size="medium" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Interaction", () => {
  test("Should trigger onClick correctly.", () => {
    const ariaLabel = "React Icon Button";
    const onClick = jest.fn();
    render(
      <IconButton
        ariaLabel={ariaLabel}
        content={<FaReact />}
        size="medium"
        onClick={onClick}
      />
    );
    screen.getByLabelText(ariaLabel).click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe("Props", () => {
  test.each<IconButtonSize>(["small", "medium", "large"])(
    "Should render sizes correctly",
    (size) => {
      render(
        <IconButton
          ariaLabel={`${size} icon button`}
          content={<FaReact />}
          size={size}
        />
      );
      expect(
        screen.getByLabelText(`${size} icon button`)
      ).toHaveClass(size);
    }
  );
});
