import React from 'react';
import { Meta, Story } from '@storybook/react';
import AnimatedButton, { ButtonProps } from '../AnimatedButton'; 

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

const CenteredTemplate: Story<ButtonProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <AnimatedButton {...args} />
  </div>
);

export const Default = CenteredTemplate.bind({});
Default.args = {
  children: 'Hover Me!',
};

export const Large = CenteredTemplate.bind({});
Large.args = {
  children: ' Hover Me!',
  fontSize: '1.3em',  
  width: '160px',
  height: '50px',
};

export const Rounded = CenteredTemplate.bind({});
Rounded.args = {
  children: ' Hover Me!',
  style: { borderRadius: '10px' },
};

export const CustomColor = CenteredTemplate.bind({});
CustomColor.args = {
  children: '  Hover Me!',
  bgColor: '#ff9900', 
  textColor: '#fff', 
  hoverColor: '#ff0000',
  activeColor: '#00ff00', 
};
