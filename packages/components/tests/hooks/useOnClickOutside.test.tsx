import {
  screen,
  fireEvent,
  render,
  renderHook,
} from "@testing-library/react";
import * as React from "react";
import { useOnClickOutside } from "../../hooks";

describe("useOnClickInside", () => {
  test("Should run handler on click outside element.", () => {
    const handler = jest.fn();

    const { result } = renderHook(() => {
      const ref = React.useRef<HTMLButtonElement>(null);

      useOnClickOutside(ref, handler);

      return ref;
    });

    const buttonRef = result.current;

    render(
      <button type="button" ref={buttonRef}>
        Button
      </button>
    );

    fireEvent.mouseDown(document.body);

    expect(handler).toHaveBeenCalledTimes(1);
  });

  test("Should not run handler on click multiple elements.", () => {
    const handler = jest.fn();

    const { result } = renderHook(() => {
      const ref1 = React.useRef<HTMLButtonElement>(null);
      const ref2 = React.useRef<HTMLButtonElement>(null);
      const ref3 = React.useRef<HTMLButtonElement>(null);

      useOnClickOutside([ref1, ref2, ref3], handler);

      return { ref1, ref2, ref3 };
    });

    const { ref1, ref2, ref3 } = result.current;

    render(
      <React.Fragment>
        <button type="button" ref={ref1}>
          Button
        </button>
        <button type="button" ref={ref2}>
          Button
        </button>
        <button type="button" ref={ref3}>
          Button
        </button>
        <button type="button">Button</button>
      </React.Fragment>
    );

    fireEvent.mouseDown(screen.getAllByRole("button")[0]);
    fireEvent.mouseDown(screen.getAllByRole("button")[1]);
    fireEvent.mouseDown(screen.getAllByRole("button")[2]);

    expect(handler).toHaveBeenCalledTimes(0);

    fireEvent.mouseDown(screen.getAllByRole("button")[3]);

    expect(handler).toHaveBeenCalledTimes(1);
  });
});
