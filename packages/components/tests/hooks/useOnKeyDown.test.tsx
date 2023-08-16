import { fireEvent, renderHook } from "@testing-library/react";
import { useOnKeyDown } from "../../hooks";

describe("useOnKeyDown", () => {
  test("Should run handler on correct key down.", () => {
    const handler = jest.fn();

    renderHook(() => {
      useOnKeyDown(["Escape"], handler);
    });

    fireEvent.keyDown(document.body, { key: "Escape" });

    expect(handler).toHaveBeenCalledTimes(1);
  });

  test("Should not run handler on incorrect key down.", () => {
    const handler = jest.fn();

    renderHook(() => {
      useOnKeyDown(["Escape"], handler);
    });

    fireEvent.keyDown(document.body, { key: "ArrowUp" });

    expect(handler).toHaveBeenCalledTimes(0);
  });
});
