import React, { useState } from "react";
import { Button, Drawer } from "react-craftify-core";

const MyComponent = () => {
  const [drawerIsVisible, setDrawerIsVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerIsVisible(!drawerIsVisible);
  }

  return (
    <div>
      <Button type="primary" onClick={toggleDrawer}>Show the drawer</Button>

      <Drawer
        showDrawer={drawerIsVisible}
        toggleDrawer={toggleDrawer}
      >
        <h3>I'm a drawer!</h3>
        <p>You can put everything you want inside easily!</p>
      </Drawer>
    </div>
  );
}

export default MyComponent;
