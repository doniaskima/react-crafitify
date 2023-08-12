import React from 'react';
import { Meta, Story } from '@storybook/react';

import CustomIconButton, { CustomIconButtonProps } from '../CustomIconButton';

export default {
  title: 'Buttons/CustomIconButton',
  component: CustomIconButton,
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

const Template: Story<CustomIconButtonProps> = (args) => (
  <CenteredStory>
    <CustomIconButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Hover me',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  children: 'Hover me',
  size: 'large',
  backgroundColor: '#6a92ef',
  textColor: 'white',
  hoverColor: 'hsl(217, 77%, 71%)',
  activeColor: 'hsl(218, 76%, 84%)',
  width: '200px',   
  height: '60px',   
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  children: 'Hover me',
  size: 'small',
  backgroundColor: '#3c3c3c',
  textColor: '#fff',
  hoverColor: 'hsl(180, 77%, 71%)',
  activeColor: 'hsl(218, 76%, 84%)',
  width: '120px',  
  height: '30px',   
};
