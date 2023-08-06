// FancyGradientButton.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';

import CustomStyledButton, { FancyGradientButtonProps } from '../FancyGradientButton';

export default {
  title: 'Buttons/FancyGradientButton',
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

const Template: Story<FancyGradientButtonProps> = (args) => (
  <CenteredStory>
    <CustomStyledButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  mainBgColor: '#814fd1',
  gradientBgColor1: 'rgb(222, 203, 226)',
  gradientBgColor2: 'rgb(79, 131, 209)',
  ringColor: '#6f00ff',
  shadowColor: 'rgba(79, 99, 209, 0.64)',
  hoverShadowColor: 'rgba(79, 99, 209, 0.64)',
  mainFgColor: '#313133',
  hoverFgColor: 'rgb(38, 11, 53)',
  children: 'Button',
};
