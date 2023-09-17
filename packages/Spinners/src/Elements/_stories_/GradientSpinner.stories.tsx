import React from 'react';
import { Meta, Story } from '@storybook/react';
import GradientSpinner from '../GradientSpinner';  

export default {
  title: 'Spinners/GradientSpinner',
  component: GradientSpinner,
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
    <GradientSpinner {...args} />
  </CenteredStory> 
)

export const Size = Template.bind({});
Size.args = {
  startColor: 'rgb(186, 66, 255)',
  endColor: 'rgb(0, 225, 255)',
  innerColor: 'rgb(36, 36, 36)',
  size: '100px',
};

export const Colors = Template.bind({});
Colors.args = {
  startColor: 'rgb(255, 0, 0)',
  endColor: 'rgb(0, 255, 0)',
  innerColor: 'rgb(0, 0, 255)',
  size: '80px',
};
