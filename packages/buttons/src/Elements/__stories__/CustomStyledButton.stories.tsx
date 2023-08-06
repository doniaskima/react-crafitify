import React from 'react';
import { Meta, Story } from '@storybook/react';

import CustomStyledButton, { CustomStyledButtonProps } from '../CustomStyledButton';

export default {
  title: 'Buttons/CustomStyledButton',
  component: CustomStyledButton,
} as Meta;

const CenteredStory: React.FC = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {children}
    </div>
  );
};

const Template: Story<CustomStyledButtonProps> = (args) => (
  <CenteredStory>
    <CustomStyledButton {...args} />
  </CenteredStory>
);

export const Primary = Template.bind({});
Primary.args = {
  design: 'primary',
  children: 'To the Galaxy',
};

export const Secondary = Template.bind({});
Secondary.args = {
  design: 'secondary',
  children: 'Explore',
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  size: 'large',
  children: 'Large Button',
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  size: 'small',
  children: 'Small Button',
};

export const CustomColorButton = Template.bind({});
CustomColorButton.args = {
  backgroundColor: '#ff6600',
  textColor: '#ffffff',
  hoverColor: '#ff8c1a',
  activeColor: '#ff1a1a',
  children: 'Custom Color Button',
};
