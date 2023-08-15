import React from 'react';
import { Story, Meta } from '@storybook/react';
import CubeLoader, { CubeLoaderProps } from '../CubeLoader';

export default {
  title: 'Spinners/CubeLoader',
  component: CubeLoader,
} as Meta;

const CenteredStory: React.FC = ({ children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {children}
    </div>
  );
};

const Template: Story<CubeLoaderProps> = (args) => (
  <CenteredStory>
    <CubeLoader {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: '#3498db',
  borderColor: '#e74c3c',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: '80px',
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  className: 'my-custom-class',
};
