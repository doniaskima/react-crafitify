import { screen, render } from "@testing-library/react";
import { axe } from "jest-axe";
import { Chart, ChartType } from "../../components/Chart";

const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const data = [
  {
    name: "2018",
    Angular: getRandomInteger(4000, 5000),
    React: getRandomInteger(1000, 2000),
    Vue: getRandomInteger(0, 1000),
  },
  {
    name: "2019",
    Angular: getRandomInteger(4000, 5000),
    React: getRandomInteger(3000, 4000),
    Vue: getRandomInteger(500, 1500),
  },
  {
    name: "2020",
    Angular: getRandomInteger(2000, 3000),
    React: getRandomInteger(4000, 5000),
    Vue: getRandomInteger(2000, 3000),
  },
  {
    name: "2021",
    Angular: getRandomInteger(1000, 2000),
    React: getRandomInteger(5000, 6000),
    Vue: getRandomInteger(4000, 5000),
  },
];

const dataKeys = ["React", "Angular", "Vue"];

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(
      <Chart
        data={data}
        dataKeys={dataKeys}
        title="Most Popular Javascript Frameworks"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test.each<ChartType>(["line", "bar"])(
    "Should render variants correctly.",
    (type) => {
      render(
        <Chart
          data={data}
          dataKeys={dataKeys}
          title={`${type} Chart`}
          type={type}
        />
      );
      expect(screen.getByText(`${type} Chart`)).toBeInTheDocument();
    }
  );
});
