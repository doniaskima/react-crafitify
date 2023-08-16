import { render, screen } from "@testing-library/react";
import {
  TextField,
  TextFieldSize,
  TextFieldType,
} from "../../components/TextField/TextField";
import { axe } from "jest-axe";

describe("TextField", () => {
  // Fixes some jest-axe issues
  const { getComputedStyle } = window;
  window.getComputedStyle = (elt) => getComputedStyle(elt);
  // Fixes some jest-axe issues
  test("Should render component correctly.", () => {
    const { container } = render(<TextField onChange={jest.fn()} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(<TextField onChange={jest.fn()} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test.each<TextFieldSize>(["small", "medium", "large"])(
    "Should render size correctly.",
    (size) => {
      render(<TextField onChange={jest.fn()} size={size} />);
      expect(screen.getByLabelText("textfield")).toHaveClass(size);
    }
  );

  test("Should render disabled correctly.", () => {
    render(<TextField disabled onChange={jest.fn()} />);
    expect(screen.getByLabelText("textfield")).toHaveClass(
      "disabled"
    );
  });

  test("Should render label correctly.", () => {
    render(<TextField label="label" onChange={jest.fn()} />);
    expect(screen.getByLabelText("label")).toBeInTheDocument();
  });

  test.each<TextFieldType>([
    "email",
    "number",
    "password",
    "search",
    "tel",
    "text",
    "time",
    "url",
  ])("Should render type correctly.", (type) => {
    render(<TextField onChange={jest.fn()} type={type} />);
    expect(screen.getByLabelText("textfield")).toHaveAttribute(
      "type",
      type
    );
  });

  test("Should render trailing icon correctly.", () => {
    render(
      <TextField onChange={jest.fn()} trailingIcon="trailing" />
    );
    expect(screen.getByText("trailing")).toBeInTheDocument();
  });
});
