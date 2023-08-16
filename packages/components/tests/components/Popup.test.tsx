import { render, screen } from "@testing-library/react";
import { Popup } from "../../components/Popup";
import { axe } from "jest-axe";
import { Button } from "../../components/Button";
import { BasePopupPosition } from "../../components/Popup/BasePopup";

describe("Popup", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Popup onClose={jest.fn()} onOpen={jest.fn()} text="Popup">
        <Button>Trigger</Button>
      </Popup>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Popup onClose={jest.fn()} onOpen={jest.fn()} text="Popup">
        <Button>Trigger</Button>
      </Popup>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Interaction", () => {
  test("Should trigger onOpen and onClose correctly.", () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();

    render(
      <>
        <button>Button</button>
        <Popup onClose={onClose} onOpen={onOpen} text="Popup">
          <Button>Trigger</Button>
        </Popup>
      </>
    );

    screen.getAllByRole("button")[1].focus();

    expect(onOpen).toHaveBeenCalledTimes(1);

    screen.getAllByRole("button")[0].focus();

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe("Props", () => {
  test.each<BasePopupPosition>(["bottom", "top", "left", "right"])(
    "Should render position correctly.",
    (position) => {
      render(
        <Popup
          isOpen
          onClose={jest.fn()}
          onOpen={jest.fn()}
          position={position}
          text="Popup"
        >
          <Button>Trigger</Button>
        </Popup>
      );
      expect(screen.getByRole("tooltip")).toHaveClass(position);
    }
  );

  test("Should render indicator correctly.", () => {
    render(
      <Popup
        hasIndicator
        isOpen
        onClose={jest.fn()}
        onOpen={jest.fn()}
        text="Popup"
      >
        <Button>Trigger</Button>
      </Popup>
    );
    expect(screen.getByRole("tooltip")).toHaveClass("indicator");
  });
});
