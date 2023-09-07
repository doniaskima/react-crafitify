import React, { useState } from "react";
import "./Dropdown.scss";

export interface DropdownProps {
  position?: string;
  elementList?: React.ReactNode[];
}

const Dropdown: React.FC<DropdownProps> = ({ position = "bottom-left", elementList = [<span>empty dropdown...🤔</span>], children }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openDropdown = () => {
    setShowDropdown(true);
    setIsClosing(false);
  };

  const closeDropDown = async () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  const animOut = isClosing ? "dropdownAnimOut" : "";

  const dropdownContent = elementList && (
    elementList.map((slide, i) => {
      return React.cloneElement(slide, {
        key: i,
        className: "dropElement",
      });
    })
  );

  let positionStyle = {
    top: "100%",
    left: "0",
  };

  if (position === "bottom-right") {
    positionStyle = {
      top: "100%",
      right: "0",
    };
  } else if (position === "top-left") {
    positionStyle = {
      bottom: "100%",
      left: "0",
    };
  } else if (position === "top-right") {
    positionStyle = {
      bottom: "100%",
      right: "0",
    };
  }

  return (
    <div className="dropdownWrapper">
      {showDropdown && (
        <div onClick={closeDropDown} className="dropdownOverlay"></div>
      )}

      <span onClick={openDropdown}>{children}</span>

      {showDropdown && (
        <div
          style={positionStyle}
          onClick={closeDropDown}
          className={`dropdown ${animOut}`}
        >
          {dropdownContent}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
