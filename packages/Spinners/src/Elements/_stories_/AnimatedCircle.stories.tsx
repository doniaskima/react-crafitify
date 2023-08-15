import React from 'react';
import { Story, Meta } from '@storybook/react';
import AnimatedCircle, { AnimatedCircleProps } from '../AnimatedCircle';

export default {
  title: 'Spinners/AnimatedCircle',
  component: AnimatedCircle,
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

const Template: Story<AnimatedCircleProps> = (args) => (
  <CenteredStory>
    <AnimatedCircle {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  color: 'hsl(214, 97%, 59%)',
  size: '3.25em',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: 'blue',
  size: '3.5em',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  color: 'green',
  size: '4em',
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  color: 'purple',
  size: '3.75em',
  className: 'my-custom-class',
};
