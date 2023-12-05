import React from "react";
import Button from "../../../../packages/components/Button/Button";
import {ButtonSet} from "../../../../packages/components/ButtonSet";

const ButtonSetComponent = () => {
  return (
    <div>
      <ButtonSet flexDirection="row">
        <Button>Button 1</Button>
        <Button
        className="primary-button custom-1" 
        variant="primary"
        backgroundColor="#055C9D"
        hoverColor="#D8A7B1"
        activeColor="#EF7C8E"
      >
        Custom Button 
      </Button>
     
      </ButtonSet>

      <ButtonSet flexDirection="column">
      <Button
         className="primary-button custom-1" 
         variant="primary"
         backgroundColor="#F79489"

      >
        Custom Button 
      </Button>
        <Button
         className="primary-button custom-1" 
         variant="primary"
         backgroundColor="#F8AFA6"
         hoverColor="#D8A7B1"
         activeColor="#EF7C8E"
      >
        Custom Button 
      </Button>
      </ButtonSet>
    </div>
  );
};

export default ButtonSetComponent;
