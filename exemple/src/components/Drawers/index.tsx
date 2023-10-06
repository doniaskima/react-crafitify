import React, { useState } from 'react';
import { Button, Card, Container, Drawer } from 'react-craftify-core';

const Drawers = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showRightDrawer, setShowRightDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const toggleRightDrawer = () => {
    setShowRightDrawer(!showRightDrawer);
  };

  return (
    <Container>
      <Card>
        <div className="componentBlock">
          <h3>Drawers</h3>
          <p className="componentDescr">Display dataset inside table.</p>

          <Button onClick={toggleDrawer} type="primary">
            Show Drawer
          </Button>

          <Button
            style={{ marginLeft: '.5rem' }}
            onClick={toggleRightDrawer}
            type="primary"
          >
            Show Right Drawer
          </Button>

          <Drawer
            showDrawer={showDrawer}
            toggleDrawer={toggleDrawer}
            key="drawer"
          >
            <div>Drawer</div>
            <p>This is a drawer</p>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x, i) => (
              <p key={i}>This is a drawer</p>
            ))}
          </Drawer>

          <Drawer
            showDrawer={showRightDrawer}
            toggleDrawer={toggleRightDrawer}
            position="right"
            key="right-drawer"
          >
            <div>Drawer</div>
            <p>This is a right position drawer</p>
          </Drawer>
        </div>
      </Card>
    </Container>
  );
};

export default Drawers;
