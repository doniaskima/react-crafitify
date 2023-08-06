import React from 'react';
import { Meta, Story } from '@storybook/react';

import HoverEffectButton, { HoverEffectButtonProps } from '../HoverEffectButton';

export default {
  title: 'Buttons/HoverEffectButton',
  component: HoverEffectButton,
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

const Template: Story<HoverEffectButtonProps> = (args) => (
  <CenteredStory>
    <HoverEffectButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const CustomText = Template.bind({});
CustomText.args = {
  children: 'Custom Text',
};

