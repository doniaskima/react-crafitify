import * as React from 'react';
export type ChartType = 'line' | 'bar';
export interface ChartProps {
  /**
   * The data for the Chart
   */
  data: Array<object>;
  /**
   * The data keys for the LineChart
   */
  dataKeys: Array<string>;
  /**
   * The title for the LineChart
   */
  title: string;
  /**
   * The type for the Chart
   *
   * @default "line"
   */
  type?: ChartType;
}
/**
 * @public
 *
 * @description
 *
 * The Chart component is used to display some complex data to a user.
 */
export declare const Chart: React.FC<ChartProps>;
