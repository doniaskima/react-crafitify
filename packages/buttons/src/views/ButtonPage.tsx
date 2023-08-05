// ButtonPage.tsx

import React from 'react';
import { PrimaryButton, SecondaryButton, IconButton } from '../Elements';

const ButtonPage: React.FC = () => {
  return (
    <div>
      <h2>Primary Button</h2>
      <PrimaryButton>Click Me</PrimaryButton>

      <h2>Secondary Button</h2>
      <SecondaryButton>Click Me</SecondaryButton>

      <h2>Icon Button</h2>
      <IconButton>
        <svg /* Add your SVG icon here */ />
      </IconButton>
 
    </div>
  );
};

export default ButtonPage;
