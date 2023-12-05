import React from 'react';
import PropTypes from 'prop-types';
declare const LoadingBar: {
  ({
    text,
    textColor,
    barColor,
    className,
  }: {
    text: any;
    textColor: any;
    barColor: any;
    className: any;
  }): React.JSX.Element;
  propTypes: {
    text: PropTypes.Requireable<string>;
    textColor: PropTypes.Requireable<string>;
    barColor: PropTypes.Requireable<string>;
    className: PropTypes.Requireable<string>;
  };
};
export default LoadingBar;
