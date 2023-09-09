import React from 'react';
import { Story, Meta } from '@storybook/react';
import Hypnotic from '../Hypnotic';  

export default {
  title: 'Spinners/Hypnotic',
  component: Hypnotic,
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
    <Hypnotic {...args} />
  </CenteredStory>  
);

export const Default = Template.bind({});
Default.args = {
  size: '80px',      
};

Default.args = {};
