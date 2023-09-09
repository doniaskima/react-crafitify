import React from 'react';
import { Story, Meta } from '@storybook/react';
import Arcade2 from '../Arcade2';  

export default {
  title: 'Spinners/Arcade2',
  component: Arcade2,
} as Meta;

const CenteredStory: React.FC = ({ children }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      {children}
    </div>
  );
}

const Template: Story = (args) => (
  <CenteredStory>
    <Arcade2 {...args} />
  </CenteredStory>  
);

export const Default = Template.bind({});
Default.args = {};
