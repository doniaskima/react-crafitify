import React from 'react';
import './Statistic.scss';

interface StatisticProps {
  title?: string;
  value?: number | undefined;
  prevValue?: number | undefined;
  currency?: string | undefined;
  valueClassName?: string;
}

const Statistic: React.FC<StatisticProps> = ({
  title = '',
  value,
  prevValue,
  currency,
  valueClassName = '',
}) => {
  const prcntChange =
    Math.round(((value - prevValue) / prevValue) * 100 * 100) / 100;

  const positiveChange = prcntChange >= 0;

  let iconType = 'arrowTop';
  let iconBgColor = '#23d160';
  if (!positiveChange) {
    iconType = 'arrowDown';
    iconBgColor = '#ff2b2b';
  }

  function numberWithCommas(x: number): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <div className="statWrapper">
      <div>
        <div className="title">{title}</div>
      </div>

      <div className="statBottomWrapper">
        <div className="mainVal">
          <div className={`value ${valueClassName}`}>
            {numberWithCommas(value || 0)}
          </div>
          <div className="currency">{currency}</div>
        </div>

        <div className="otherVal">
          <div className="prcntChangeDiv">
            <div style={{ backgroundColor: iconBgColor }} className="arrow">
              {/* <Icon
                type={iconType}
                color="#fff"
                size="30px"
              /> */}
            </div>
            <div className="prcntChange">
              <span>{positiveChange && '+'}{prcntChange}%</span>
            </div>
          </div>
          <div className="prevVal">Previously: {numberWithCommas(prevValue || 0)}</div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
