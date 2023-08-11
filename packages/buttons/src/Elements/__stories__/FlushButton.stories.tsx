import React from 'react';
import { Meta, Story } from '@storybook/react';
import FlushButton from '../FlushButton';

export default {
  title: 'Buttons/FlushButton',
  component: FlushButton,
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
  
const Template: Story = (args) =>(
   <CenteredStory>
      <FlushButton {...args} />
   </CenteredStory> 
)

 

export const Customized = Template.bind({});
Customized.args = {
  content: 'Custom Button',
  textColor: 'hsla(210, 50%, 85%, 1)',
  shadowColor: 'hsla(210, 40%, 52%, 0.4)',
  btnColor: 'hsl(210, 80%, 42%)',
  bgColor: '#141218',
  fontSize: '30px',
  width: '300px', 
  height: '60px', 
};
