import { render } from "@testing-library/react";
import { DatePicker } from "../../components/DatePicker/DatePicker";

describe("DatePicker", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<DatePicker setValue={jest.fn()} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
