import React from "react";
import { Button, Dropdown, Link } from "react-craftify-core";
import message from "react-craftify-core/Message";
 
 

const DropdownComponent = () => {

  const elementList = [
    <button onClick={ () => message("Button clicked", "success") }>Send a message!</button>,
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/doniaskima/react-crafitify">Go to My  Github </a>,
    <Link to="https://github.com/doniaskima/react-crafitify">Go to intro</Link>,
  ];

  return(
    <div style={{ margin: "40px 0"}}>

      <Dropdown elementList={ elementList }>

        <Button type="primary">menu</Button>

      </Dropdown>

    </div>
  )
};

export default DropdownComponent;