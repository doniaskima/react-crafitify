import React from 'react';
import './Statistic.scss';
interface StatisticProps {
  title?: string;
  value?: number | undefined;
  prevValue?: number | undefined;
  currency?: string | undefined;
  valueClassName?: string;
}
declare const Statistic: React.FC<StatisticProps>;
export default Statistic;
