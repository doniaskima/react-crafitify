import React from 'react';
import { Story, Meta } from '@storybook/react';
import Tooltip from '../Tooltip/Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

const centeredContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',  
};

const Template: Story = (args) => (
  <div style={centeredContainerStyle}>
    <Tooltip {...args}>
      <button>Hover me</button>
    </Tooltip>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  text: 'This is a tooltip',
  context: {
    primaryColor: 'blue',
    primaryTextColor: 'white',
  },
};

export const DarkTooltip = Template.bind({});
DarkTooltip.args = {
  text: 'Dark Tooltip',
  dark: true,
  context: {
    primaryColor: 'black',
    primaryTextColor: 'white',
  },
};
