import React, { useState, useEffect } from "react";
import { Card, Container, Menu } from "react-craftify-core";
import { Link } from "react-router-dom";
 

const Menus = () => {
  const [selectedItem, setSelectedItem] = useState(window.location.pathname.split("/")[1]);

  useEffect(() => {
    if (location !== prevLocation) {
      // Get the right selected item for the actual path
      setSelectedItem(window.location.pathname.split("/")[1]);
    }
  }, [location]);

  return (
    <Container>
      <Card>
        <div className="componentBlock">
          <h3 className="componentTitle">Menu</h3>
          <p className="componentDescr">Simple menu</p>

          <Card style={{ padding: 0 }}>
            <Menu
              style={{ width: 250, padding: "1.2rem 0" }}
              selectedItem={selectedItem}
            >
              <Menu.Item uniqueKey="">
                <Link to="/">Menu item 1</Link>
              </Menu.Item>

              <Menu.Item uniqueKey="2">
                <Link to="/2">Menu item 2</Link>
              </Menu.Item>

              <Menu.Item uniqueKey="3">
                <Link to="/3">Menu item 3</Link>
              </Menu.Item>

              <Menu.Item uniqueKey="4">
                <Link to="/4">Menu item 4</Link>
              </Menu.Item>

              <Menu.Item uniqueKey="5">
                <Link to="/5">Menu item 5</Link>
              </Menu.Item>

              <Menu.Item uniqueKey="6">
                <button>Menu item 6</button>
              </Menu.Item>
            </Menu>
          </Card>
        </div>
      </Card>
    </Container>
  );
};

export default Menus;
