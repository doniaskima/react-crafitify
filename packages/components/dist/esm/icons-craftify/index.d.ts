import React from 'react';
import PropTypes from 'prop-types';
import './Icon.scss';
declare const Icon: {
  (props: any): React.JSX.Element;
  propTypes: {
    type: PropTypes.Validator<string>;
    size: PropTypes.Requireable<string>;
    color: PropTypes.Requireable<string>;
  };
};
export default Icon;
