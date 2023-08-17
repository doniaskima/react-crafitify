import { Chart } from "../Chart/Chart";

export default {
  component: Chart,
  // Delay Chromatic capture to allow animation for Chart
  parameters: { chromatic: { delay: 2000 } },
  title: "Components/Presentation/Chart",
};

const data = [
  {
    name: "2018",
    Angular: 4500,
    React: 1000,
    Vue: 200,
  },
  {
    name: "2019",
    Angular: 4000,
    React: 3000,
    Vue: 1200,
  },
  {
    name: "2020",
    Angular: 2800,
    React: 4400,
    Vue: 2700,
  },
  {
    name: "2021",
    Angular: 2000,
    React: 5600,
    Vue: 3600,
  },
];

const dataKeys = ["React", "Angular", "Vue"];

export const LineChart = () => (
  <Chart
    data={data}
    dataKeys={dataKeys}
    title="Most Popular Javascript Frameworks"
    type="line"
  />
);

export const BarChart = () => (
  <Chart
    data={data}
    dataKeys={dataKeys}
    title="Most Popular Javascript Frameworks"
    type="bar"
  />
);
