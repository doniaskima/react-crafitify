import * as React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./Chart.module.scss";

export interface LineChartProps {
  /**
   * The data for the LineChart
   */
  data: Array<object>;
  /**
   * The data keys for the LineChart
   */
  dataKeys: Array<string>;
  /**
   * The strokes for the LineChart
   */
  strokes: Array<string>;
  /**
   * The title for the LineChart
   */
  title: string;
}

/**
 * @private
 */
export const LineChart: React.FC<LineChartProps> = (props) => {
  const { data, dataKeys, strokes, title } = props;
  return (
    <RechartsLineChart
      className={styles.font}
      width={data.length * 150}
      height={400}
      data={data}
      margin={{
        top: 50,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <text
        x={500 / 2}
        y={20}
        fill="black"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan fontSize="14">{title}</tspan>
      </text>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <Tooltip />
      {dataKeys.map((dataKey, index) => {
        return (
          <Line
            dataKey={dataKey}
            key={index}
            stroke={strokes[index]}
            strokeWidth={2}
          />
        );
      })}
    </RechartsLineChart>
  );
};

LineChart.displayName = "LineChart";
