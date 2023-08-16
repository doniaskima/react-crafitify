import {
  createEvent,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import {
  Menu,
  MenuAlignment,
  MenuSeparator,
  MenuItem,
  MenuHeader,
} from "../../components/Menu";
import { axe } from "jest-axe";
import { Button } from "../../components/Button/Button";
import { act } from "react-dom/test-utils";

// Disable console.error for each test in this file
// console.error Warning: `NaN` is an invalid value for the `left` css style property. (Ripples Click)
beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => undefined);
});

describe("Menu", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Menu
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
      >
        <MenuItem>One</MenuItem>
      </Menu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Menu
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
      >
        <MenuItem>One</MenuItem>
      </Menu>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Interaction", () => {
  test("Should trigger onOpen when trigger is clicked.", () => {
    const onOpen = jest.fn();

    render(
      <Menu
        isOpen={false}
        onOpen={onOpen}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
      >
        <MenuItem>One</MenuItem>
      </Menu>
    );

    act(() => screen.getByRole("button").click());

    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  test("Should trigger onClose when trigger is clicked.", () => {
    const onClose = jest.fn();

    render(
      <Menu
        isOpen
        onOpen={jest.fn()}
        onClose={onClose}
        trigger={<Button>Trigger</Button>}
      >
        <MenuItem>One</MenuItem>
      </Menu>
    );

    act(() => screen.getByRole("button").click());

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("Should trigger onClose on Space on a Menu Item.", () => {
    const onClose = jest.fn();

    render(
      <Menu
        isOpen
        onOpen={jest.fn()}
        onClose={onClose}
        trigger={<Button>Trigger</Button>}
      >
        <MenuItem>One</MenuItem>
      </Menu>
    );

    const firstMenuItem = screen.getAllByRole("menuitem")[0];

    const event = createEvent.keyDown(firstMenuItem, {
      code: "Space",
    });

    fireEvent(firstMenuItem, event);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("Should trigger onClose on Escape key down.", () => {
    const onClose = jest.fn();

    render(
      <Menu
        isOpen
        onOpen={jest.fn()}
        onClose={onClose}
        trigger={<Button>Trigger</Button>}
      >
        <MenuItem>One</MenuItem>
      </Menu>
    );

    fireEvent.keyDown(document.body, { key: "Escape" });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("Should trigger onClose when Menu Item is clicked.", () => {
    const onClose = jest.fn();

    render(
      <Menu
        isOpen
        onOpen={jest.fn()}
        onClose={onClose}
        trigger={<Button>Trigger</Button>}
      >
        <MenuItem>One</MenuItem>
      </Menu>
    );

    const firstMenuItem = screen.getAllByRole("menuitem")[0];

    firstMenuItem.click();

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("Should handle focus correctly", () => {
    render(
      <Menu
        isOpen
        onOpen={jest.fn()}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
      >
        <MenuItem>One</MenuItem>
        <MenuSeparator />
        <MenuItem>Two</MenuItem>
        <MenuHeader>Header</MenuHeader>
        <MenuItem>Three</MenuItem>
      </Menu>
    );

    const firstMenuItem = screen.getAllByRole("menuitem")[0];

    expect(firstMenuItem).toHaveFocus();

    const event1 = createEvent.keyDown(firstMenuItem, {
      code: "ArrowDown",
    });

    fireEvent(firstMenuItem, event1);

    const secondMenuItem = screen.getAllByRole("menuitem")[1];

    expect(secondMenuItem).toHaveFocus();

    const event2 = createEvent.keyDown(secondMenuItem, {
      code: "ArrowDown",
    });

    fireEvent(secondMenuItem, event2);

    const thirdMenuItem = screen.getAllByRole("menuitem")[2];

    expect(thirdMenuItem).toHaveFocus();

    const event3 = createEvent.keyDown(thirdMenuItem, {
      code: "ArrowDown",
    });

    fireEvent(thirdMenuItem, event3);

    expect(firstMenuItem).toHaveFocus();

    const event4 = createEvent.keyDown(firstMenuItem, {
      code: "ArrowUp",
    });

    fireEvent(firstMenuItem, event4);

    expect(thirdMenuItem).toHaveFocus();

    const event5 = createEvent.keyDown(thirdMenuItem, {
      code: "ArrowUp",
    });

    fireEvent(thirdMenuItem, event5);

    expect(secondMenuItem).toHaveFocus();
  });
});

describe("Props", () => {
  test("Should render children correctly.", () => {
    render(
      <Menu
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
      >
        <MenuItem>One</MenuItem>
      </Menu>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("menuitem")).toHaveTextContent("One");
  });

  test("Should render trigger correctly.", () => {
    render(
      <Menu
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
      >
        <MenuItem>One</MenuItem>
      </Menu>
    );
    expect(screen.getAllByRole("button")[0]).toHaveTextContent(
      "Trigger"
    );
  });

  test("Should render alignment correctly.", () => {
    render(
      <Menu
        alignment="topLeft"
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
      >
        <MenuItem>One</MenuItem>
      </Menu>
    );
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  test("Should render closed correctly.", () => {
    render(
      <Menu
        alignment="topLeft"
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
      >
        <MenuItem>One</MenuItem>
      </Menu>
    );
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  test.each<MenuAlignment>([
    "bottomLeft",
    "bottomCenter",
    "bottomRight",
    "topLeft",
    "topCenter",
    "topRight",
  ])("Should render alignment correctly.", (alignment) => {
    render(
      <Menu
        alignment={alignment}
        isOpen
        onOpen={jest.fn}
        onClose={jest.fn()}
        trigger={<Button>Trigger</Button>}
      >
        <MenuItem>One</MenuItem>
      </Menu>
    );
    expect(screen.getByRole("menuitem")).toBeInTheDocument();
  });
});
