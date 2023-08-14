import React from 'react';
import { Story, Meta } from '@storybook/react';
import StyledSwitch from '../StyledSwitch'; // Update the import path
import { action } from '@storybook/addon-actions'; // Import the action function

export default {
  title: 'Checkboxes/StyledSwitch',
  component: StyledSwitch,
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

const Template: Story = () => (
  <CenteredStory>
    <StyledSwitch onChange={action('Checkbox clicked')} />  
  </CenteredStory>
);

export const Default = Template.bind({});
