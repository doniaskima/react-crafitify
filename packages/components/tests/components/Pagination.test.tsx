import { render, screen } from "@testing-library/react";
import { Pagination } from "../../components/Pagination";
import { axe } from "jest-axe";

describe("Pagination", () => {
  test("Should render component correctly.", () => {
    const { container } = render(
      <Pagination
        currentPage={2}
        pages={3}
        onChangePage={jest.fn()}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Pagination
        currentPage={2}
        pages={3}
        onChangePage={jest.fn()}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Interaction", () => {
  test("Should decrease page on left chevron click.", () => {
    render(
      <Pagination
        currentPage={2}
        pages={3}
        onChangePage={jest.fn()}
      />
    );

    expect(screen.getAllByRole("button")[2]).toHaveTextContent("2");

    expect(screen.getAllByRole("button")[2]).toHaveClass(
      "currentPageIcon"
    );

    screen.getAllByRole("button")[0].click();

    expect(screen.getAllByRole("button")[2]).toHaveTextContent("2");

    expect(screen.getAllByRole("button")[2]).toHaveClass(
      "currentPageIcon"
    );

    screen.getAllByRole("button")[4].click();

    expect(screen.getAllByRole("button")[2]).toHaveTextContent("2");

    expect(screen.getAllByRole("button")[2]).toHaveClass(
      "currentPageIcon"
    );
  });

  test("Should not trigger onChangePage on page button click.", () => {
    render(
      <Pagination
        currentPage={1}
        pages={1}
        onChangePage={jest.fn()}
      />
    );

    screen.getAllByRole("button")[0].click();

    screen.getAllByRole("button")[2].click();
  });

  test("Should trigger onChangePage on page button click.", () => {
    const onChangePage = jest.fn();
    render(
      <Pagination
        currentPage={5}
        pages={10}
        onChangePage={onChangePage}
      />
    );

    screen.getAllByRole("button")[2].click();

    expect(onChangePage).toHaveBeenCalledTimes(1);
  });
});
