import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button51 from '../Button51';

export default {
  title: 'Buttons/Button51',
  component: Button51,
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
    <Button51 {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button 51',
  pseudoBackgroundColor: '#D5EDF6', 
};
