import React from 'react';
import { Meta, Story } from '@storybook/react';
import FallingLines, { FallingLinesProps } from '../FallingLines';  

export default {
  title: 'Spinners/FallingLines',
  component: FallingLines,
  argTypes: {
    color: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
    visible: { control: 'boolean' },
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


const Template: Story<FallingLinesProps> = (args) => (
  <CenteredStory>
      <FallingLines {...args} />
  </CenteredStory>
)

export const Default = Template.bind({});
Default.args = {
  color: '#000000',  
  width: '100',  
  height: '100', 
  visible: true, 
};
