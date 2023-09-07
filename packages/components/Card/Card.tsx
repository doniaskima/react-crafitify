import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

export default function Card(props) {
  const { border, title, children, className, padding } = props;
  let borderStyle = '';
  if (border === 'none') {
    borderStyle = 'noBorderCard';
  }
  const cardHeader = title ? (
    <div className="cardHead">
      <div className="cardHeadTitle">
        <span>{title}</span>
      </div>
    </div>
  ) : null;
  return (
    <div {...props} className={`card ${borderStyle} ${className}`}>
      {cardHeader}
      <div style={padding && { padding }} className="cardBody">
        {children}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  border: PropTypes.string,
  className: PropTypes.string,
  padding: PropTypes.string,
};
