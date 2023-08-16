import { render } from "@testing-library/react";
import { Badge } from "../../components/Badge/Badge";
import { FaReact } from "react-icons/fa";
import { axe } from "jest-axe";

describe("Badge", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Badge content={<FaReact />} title="ReactJS" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Badge content={<FaReact />} title="ReactJS" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
