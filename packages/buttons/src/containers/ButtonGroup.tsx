import React from 'react';

interface ButtonGroupProps {
  children: React.ReactNode;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children }) => {
  return <div className="button-group">{children}</div>;
};

export default ButtonGroup;
