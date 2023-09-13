import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MunuItem';
import  './Menu.css';

function Menu(props) {
  const { children, selectedItem: selectedItemProp, style, className } = props;
  const [selectedItem, setSelectedItem] = useState(selectedItemProp);

  useEffect(() => {
    // Update the selected item if it changes in the props
    setSelectedItem(selectedItemProp);
  }, [selectedItemProp]);

  const changeState = (uniqueKey) => {
    // Change the selectedItem in the state
    setSelectedItem(uniqueKey);
  };

  // Pass props to children
  const childrenWithProps = React.Children.map(children, (child) => {
    // Check if it's the selected menu item or not to create the component
    const isSelected = child.props.uniqueKey === selectedItem;
    return React.cloneElement(child, {
      changeState,
      isSelected,
    });
  });

  return (
    <div style={style} className={`menuDiv ${className}`}>
      {childrenWithProps}
    </div>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  selectedItem: PropTypes.string,
};

Menu.Item = MenuItem;

export default Menu;
