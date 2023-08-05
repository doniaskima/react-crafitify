// ButtonGroupView.tsx

import React from 'react';
import ButtonGroup from '../Elements/ButtonGroup';
 

const ButtonGroupView: React.FC = () => {
  return (
    <div>
      <h2>Button Groups</h2>
      <ButtonGroup>
        <ButtonGroup.Button>Button 1</ButtonGroup.Button>
        <ButtonGroup.Button>Button 2</ButtonGroup.Button>
        <ButtonGroup.Button>Button 3</ButtonGroup.Button>
      </ButtonGroup>

      <h3>Vertical Button Group</h3>
      <ButtonGroup vertical>
        <ButtonGroup.Button>Button 1</ButtonGroup.Button>
        <ButtonGroup.Button>Button 2</ButtonGroup.Button>
        <ButtonGroup.Button>Button 3</ButtonGroup.Button>
      </ButtonGroup>

 
    </div>
  );
};

export default ButtonGroupView;
