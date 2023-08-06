import React from 'react';
import { Meta, Story } from '@storybook/react';

import GradientBorderButton, { GradientBorderButtonProps } from '../GradientBorderButton';

export default {
  title: 'Buttons/GradientBorderButton',
  component: GradientBorderButton,
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

const Template: Story<GradientBorderButtonProps> = (args) => (
  <CenteredStory>
    <GradientBorderButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
};

export const CustomText = Template.bind({});
CustomText.args = {
  children: 'Custom Text',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  children: 'Large Button',
  size: 'large',
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  children: 'Small Button',
  size: 'small',
};
