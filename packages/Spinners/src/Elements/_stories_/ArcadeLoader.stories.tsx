import React from 'react';
import { Story, Meta } from '@storybook/react';
import ArcadeLoader, { ArcadeLoaderProps } from '../ArcadeLoader';  

export default {
  title: 'Spinners/ArcadeLoader',
  component: ArcadeLoader,
  argTypes: {
    size: {
      control: 'text', 
    },
    color: {
      control: 'color',  
    },
  },
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

const Template: Story<ArcadeLoaderProps> = (args) => (
  <CenteredStory>
    <ArcadeLoader {...args} />
  </CenteredStory>  
)

export const Default = Template.bind({});
Default.args = {};
