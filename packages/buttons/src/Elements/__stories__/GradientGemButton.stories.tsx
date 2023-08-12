import React from 'react';
import { Meta, Story } from '@storybook/react';
import GradientGemButton, { GradientGemButtonProps } from '../GradientGemButton';

export default {
  title: 'Buttons/GradientGemButton',
  component: GradientGemButton,
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

const Template: Story<GradientGemButtonProps> = (args) => (
  <CenteredStory>
    <GradientGemButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {};

export const CustomColor = Template.bind({});
CustomColor.args = {
  backgroundColor: 'linear-gradient(144deg, #FF6347, #1E90FF 50%, #32CD32)',
  textColor: '#FFFFFF',
  spanBackgroundColor: 'rgb(5, 6, 45)',
  spanBackgroundHover: 'none',
};

export const CustomFontSize = Template.bind({});
CustomFontSize.args = {
  fontSize: '24px',
};

export const CustomWidthAndHeight = Template.bind({});
CustomWidthAndHeight.args = {
  width: '200px',
  height: '60px',
};
