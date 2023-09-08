import React from 'react';
import { Story, Meta } from '@storybook/react';
import ColorRing, { ColorRingProps } from '../ColorRing';  

export default {
  title: 'Spinners/ColorRing',  
  component: ColorRing,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    colors: { control: 'array' },
    className: { control: 'text' },
    wrapperStyle: { control: 'object' },
    ariaLabel: { control: 'text' },
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

const Template: Story<ColorRingProps> = (args) => (
<CenteredStory>
<ColorRing {...args} />
</CenteredStory>
   
);


export const Default = Template.bind({});
Default.args = {
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  colors: ['#ff0000', '#00ff00', '#0000ff'],  
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  width: '40',
  height: '40',  
};
