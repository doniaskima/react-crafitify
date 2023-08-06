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
  children: <span className="text">Hover Me!</span>,
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  children: <span className="text">Hover Me!</span>,
  size: 'large',
  backgroundColor: '#6a92ef',
  textColor: 'white',
  hoverColor: 'hsl(217, 77%, 71%)',
  activeColor: 'hsl(218, 76%, 84%)',
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  children: <span className="text">Hover Me!</span>,
  size: 'small',
  backgroundColor: '#3c3c3c',
  textColor: '#fff',
  hoverColor: 'hsl(180, 77%, 71%)',
  activeColor: 'hsl(218, 76%, 84%)',
};
