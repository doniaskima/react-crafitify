import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import './MenuItem.scss';
import { primaryColor } from '../styles';
import ThemeContext from '../context/themeContext';

function MenuItem(props) {
  const { isSelected, uniqueKey, changeState } = props;
  const [isHovered, setIsHovered] = useState(false);
  const context = useContext(ThemeContext);

  const handleHoverOn = () => {
    setIsHovered(true);
  };

  const handleHoverOff = () => {
    setIsHovered(false);
  };

  // Create the hover style object
  const hoverStyle = isHovered
    ? {
        backgroundColor: primaryColor + '22',
      }
    : {};

  // Get the right background color for the menu (if custom theming)
  let mainColor = primaryColor;
  if (context) {
    mainColor = context.primaryColor;
  }

  // Create the menuItemStyle object
  const menuItemStyle = isSelected
    ? {
        backgroundColor: mainColor + '33',
        color: mainColor,
      }
    : {};

  // Change the color of the children if it's the item selected
  const childCopy = isSelected
    ? React.cloneElement(props.children, {
        style: {
          color: mainColor,
        },
      })
    : props.children;

  return (
    <div
      className={`menuItemDiv ${isSelected ? 'selectedMenuItem' : ''}`}
      style={{ ...menuItemStyle, ...hoverStyle }}
      onClick={() => changeState(uniqueKey)}
      onMouseEnter={handleHoverOn}
      onMouseLeave={handleHoverOff}
    >
      <span className="menuItemWrapper">{childCopy}</span>
    </div>
  );
}

MenuItem.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  uniqueKey: PropTypes.string.isRequired,
  changeState: PropTypes.func.isRequired,
};

export default MenuItem;
