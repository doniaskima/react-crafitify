import React from 'react';
import { Story, Meta } from '@storybook/react';
import CircleLoader, { CircleLoaderProps } from '../CircleLoader';

export default {
  title: 'Spinners/CircleLoader',
  component: CircleLoader,
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

const Template: Story<CircleLoaderProps> = (args) => (
  <CenteredStory>
    <CircleLoader {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: 'blue',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: '20px',
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  className: 'my-custom-class',
};
