import React from 'react';
import { Meta, Story } from '@storybook/react';
import RainbowFill from '../RainbowFill'; 

export default {
  title: 'Buttons/RainbowFill',
  component: RainbowFill,
  argTypes: {
    gradient: {
      control: {
        type: 'object',
      },
    },
    textColor: {
      control: {
        type: 'color',
      },
    },
    textBackground: {
      control: {
        type: 'color',
      },
    },
    padding: {
      control: {
        type: 'text',
      },
    },
  },
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
      <RainbowFill {...args}>Button</RainbowFill>
    </CenteredStory>
)

 
export const Default = Template.bind({});
Default.args = {
  gradient: {
    start: 'blue',
    end: 'red',
  },
};



export const CustomColorsAndPadding = Template.bind({});
CustomColorsAndPadding.args = {
  gradient: {
    start: 'purple',
    end: 'orange',
  },
  textColor: 'white',
  textBackground: 'green',
  padding: '1.5rem 4rem',
};
