import React from 'react';
import {
  PrimaryButton,
  SecondaryButton,
  IconButton,
  ButtonGroup
} from '../components';

const ButtonPage: React.FC = () => {
  const handlePrimaryClick = () => {
    console.log('Primary button clicked');
  };

  const handleSecondaryClick = () => {
    console.log('Secondary button clicked');
  };

  const handleIconClick = () => {
    console.log('Icon button clicked');
  };

  return (
    <div>
      <h1>Button Examples</h1>
      <ButtonGroup>
        <PrimaryButton label="Primary Button" onClick={handlePrimaryClick} />
        <SecondaryButton label="Secondary Button" onClick={handleSecondaryClick} />
        <IconButton icon="check" onClick={handleIconClick} />
      </ButtonGroup>
    </div>
  );
};

export default ButtonPage;
