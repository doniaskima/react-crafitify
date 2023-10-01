import React, { useState, useContext } from 'react';
import './Tooltip.scss';

import { GetContext } from '../GetContext';

const Tooltip = () => {
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
      <div
        className={`tooltip ${position}`}
        // style={{ transitionDelay: '.25s' }}
      >
        <span className={`tooltiptext ${tooltipStyle}`}>{props.text}</span>
      </div>
    </div>
  );
};

export default Tooltip;
