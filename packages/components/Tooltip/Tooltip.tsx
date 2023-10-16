import React, { useState, useContext, useEffect } from 'react';
import './Tooltip.scss';
import GetContext from '../GetContext';

const Tooltip = (props) => {
  const { primaryColor, primaryTextColor } = useContext(GetContext);

  const [tooltipStyle, setTooltipStyle] = useState('');

  useEffect(() => {
    if (props.dark) {
      setTooltipStyle('tooltiptextDark');
    }
  }, [props.dark]);

  // Manage the position.
  let position = '';
  if (props.position === 'bottom') {
    position = 'bottomTooltip';
  }

  return (
    <div className="tooltipWrapper">
      {props.children}
      <div className={`tooltip ${position}`}>
        <span className={`tooltiptext ${tooltipStyle}`}>{props.text}</span>
      </div>
    </div>
  );
};

export default Tooltip;
