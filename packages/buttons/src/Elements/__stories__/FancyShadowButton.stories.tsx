import React from 'react';
import { Meta, Story } from '@storybook/react';

import FancyShadowButton, { FancyShadowButtonProps } from '../FancyShadowButton';

export default {
  title: 'Buttons/FancyShadowButton',
  component: FancyShadowButton,
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

const Template: Story<FancyShadowButtonProps> = (args) => (
  <CenteredStory>
    <FancyShadowButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  bgColor: '#68ecc0', 
};
