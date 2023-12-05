import * as React from 'react';
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
export declare const LineChart: React.FC<LineChartProps>;
