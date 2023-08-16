import { render, screen } from "@testing-library/react";
import { Radio } from "../../components/Radio";
import { RadioSet } from "../../components/RadioSet";
import { axe } from "jest-axe";

describe("RadioSet", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <RadioSet>
        <Radio onChange={() => undefined}>Radio</Radio>
      </RadioSet>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <RadioSet>
        <Radio onChange={() => undefined}>Radio</Radio>
      </RadioSet>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test("Should render children correctly.", () => {
    render(
      <RadioSet>
        <Radio onChange={() => undefined}>Radio</Radio>
        <div>Div</div>
      </RadioSet>
    );
    expect(screen.getByRole("list")).not.toHaveTextContent("Div");
    expect(screen.getByRole("list")).toHaveTextContent("Radio");
  });
});
