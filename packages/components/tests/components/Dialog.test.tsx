import { fireEvent, render, screen } from "@testing-library/react";
import { Dialog } from "../../components/Dialog/Dialog";
import { Button } from "../../components/Button/Button";
import { ButtonSet } from "../../components/ButtonSet/ButtonSet";
import { axe } from "jest-axe";
import { BaseDialogVariant } from "src/components/Dialog/BaseDialog";

describe("Dialog", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Dialog
        content="Dialog Content"
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Dialog Title"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Dialog
        content="Dialog Content"
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Dialog Title"
      />
    );
    const results = axe(container, {
      rules: { tabindex: { enabled: false } },
    });
    expect(await results).toHaveNoViolations();
  });
});

describe("Interaction", () => {
  test("Should trigger onClose on Escape key down.", () => {
    const onClose = jest.fn();

    render(
      <Dialog
        content="Dialog Content"
        isOpen
        onOpen={jest.fn}
        onClose={onClose}
        trigger={<Button>Trigger</Button>}
        title="Dialog Title"
      />
    );

    fireEvent.keyDown(document.body, { key: "Escape" });

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe("Props", () => {
  test("Should render buttons correctly.", () => {
    render(
      <Dialog
        buttons={
          <ButtonSet>
            <Button variant="secondary">Cancel</Button>
            <Button variant="secondary">Confirm</Button>
          </ButtonSet>
        }
        content="Dialog Content"
        isOpen
        onOpen={jest.fn()}
        onClose={jest.fn()}
        trigger={<Button variant="secondary">Open Dialog!</Button>}
        title="Dialog Title"
      />
    );
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Confirm")).toBeInTheDocument();
  });
  test("Should render content correctly.", () => {
    render(
      <Dialog
        content="Dialog Content"
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Dialog Title"
      />
    );
    expect(screen.getByText("Dialog Content")).toBeInTheDocument();
  });

  test("Should render closed correctly.", () => {
    render(
      <Dialog
        content="Dialog Content"
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Dialog Title"
      />
    );
    expect(
      screen.queryByText("Dialog Title")
    ).not.toBeInTheDocument();
  });

  test("Should render title correctly.", () => {
    render(
      <Dialog
        content="Dialog Content"
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
        title="Dialog Title"
      />
    );
    expect(screen.getByText("Dialog Title")).toBeInTheDocument();
  });

  test.each<BaseDialogVariant>(["bottom", "center", "left", "right"])(
    "Should render variants correctly.",
    (variant) => {
      render(
        <Dialog
          ariaLabel={variant}
          buttons={
            <ButtonSet>
              <Button>Cancel</Button>
              <Button>Confirm</Button>
            </ButtonSet>
          }
          content="Dialog Content"
          isOpen
          onOpen={jest.fn}
          onClose={jest.fn()}
          trigger={<Button>Trigger</Button>}
          title="Dialog Title"
          variant={variant}
        />
      );
      expect(screen.getByRole("dialog")).toHaveClass(variant);
    }
  );
});
