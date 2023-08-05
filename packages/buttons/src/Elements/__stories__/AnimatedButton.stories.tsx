import React from 'react';
import { Meta, Story } from '@storybook/react';
import AnimatedButton from '../AnimatedButton';

export default {
  title: 'Buttons/AnimatedButton',
  component: AnimatedButton,
  parameters: {
    docs: {
      description: {
        component: 'A button with animated hover and active effects.',
      },
      source: {
        code: `<AnimatedButton>Hover Me!</AnimatedButton>`,
      },
      props: {
        bgColor: 'The background color of the button.',
        textColor: 'The text color of the button.',
        hoverColor: 'The color of the button when hovered.',
        activeColor: 'The color of the button when active.',
        children: 'The content of the button.',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <AnimatedButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hover Me!',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Hover Me!',
  style: { fontSize: '1.3em', width: '160px', height: '50px' },
};

export const Rounded = Template.bind({});
Rounded.args = {
  children: 'Rounded Hover Me!',
  style: { borderRadius: '10px' },
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  children: 'Custom Color Hover Me!',
  bgColor: '#ff9900', // Change the background color
  textColor: '#fff', // Change the text color
  hoverColor: '#ff0000', // Change the hover color
  activeColor: '#00ff00', // Change the active color
};
