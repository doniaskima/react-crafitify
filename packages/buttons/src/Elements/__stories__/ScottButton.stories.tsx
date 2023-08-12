import React from 'react';
import { Meta, Story } from '@storybook/react';
import ScottButton, { ScottButtonProps } from '../ScottButton'; // Make sure to import the correct path

export default {
  title: 'Buttons/ScottButton',
  component: ScottButton,
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

const Template: Story<ScottButtonProps> = (args) => (
  <CenteredStory>
    <ScottButton {...args}>Scott Button</ScottButton>
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  borderColor: '#18181a',
  textColor: '#18181a',
  hoverBgColor: 'black',
  hoverTextColor: 'white',
  altText: 'Alternate text',
 
};
