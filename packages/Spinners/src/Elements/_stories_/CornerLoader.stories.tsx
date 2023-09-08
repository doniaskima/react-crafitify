import React from 'react';
import { Story, Meta } from '@storybook/react';
import CornerLoader, { CornerLoaderProps } from '../CornerLoader';

export default {
  title: 'Spinners/CornerLoader',
  component: CornerLoader,
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


const Template: Story<CornerLoaderProps> = (args) => (
  <CenteredStory>
   <CornerLoader {...args} />
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
  size: '5rem',
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  className: 'my-custom-class',
};
