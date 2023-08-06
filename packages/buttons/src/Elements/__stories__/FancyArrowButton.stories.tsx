// FancyArrowButton.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';

import FancyArrowButton from '../FancyArrowButton';

export default {
  title: 'Buttons/FancyArrowButton',
  component: FancyArrowButton,
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

const Template: Story = (args) => (
  <CenteredStory>
    <FancyArrowButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
