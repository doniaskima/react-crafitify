import React, { Component } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Drawer from '../Drawer/Drawer';

class MyComponent extends Component {
  state = {
    drawerIsVisible: false
  }

  toggleDrawer = () => {
    this.setState(prevState => ({ drawerIsVisible: !prevState.drawerIsVisible }))
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleDrawer}>Toggle Drawer</button>
        <Drawer
          showDrawer={this.state.drawerIsVisible}
          toggleDrawer={this.toggleDrawer}
        >
          <h3>I'm a drawer!</h3>
          <p>You can put everything you want inside easily!</p>
        </Drawer>
      </div>
    )
  }
}
 

// Export default metadata for the Drawer component
export default {
  title: 'Components/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

// Define the template for the Default story
const Template: ComponentStory<typeof Drawer> = (args) => (
  <MyComponent />
);

// Define stories using the Template
export const Default = Template.bind({});
Default.args = {
  showDrawer: false,
  position: 'left',
  isClosable: true,
};

export const RightPosition = Template.bind({});
RightPosition.args = {
  showDrawer: false,
  position: 'right',
  isClosable: true,
};

export const OpenDrawer = Template.bind({});
OpenDrawer.args = {
  showDrawer: true,
  position: 'left',
  isClosable: true,
};

export const RightPositionOpenDrawer = Template.bind({});
RightPositionOpenDrawer.args = {
  showDrawer: true,
  position: 'right',
  isClosable: true,
};
