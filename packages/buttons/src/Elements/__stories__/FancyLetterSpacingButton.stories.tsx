import React from 'react';
import { Meta, Story } from '@storybook/react';

import FancyLetterSpacingButton, { FancyLetterSpacingButtonProps } from '../FancyLetterSpacingButton';

export default {
  title: 'Buttons/FancyLetterSpacingButton',
  component: FancyLetterSpacingButton,
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

const Template: Story<FancyLetterSpacingButtonProps> = (args) => (
  <CenteredStory>
    <FancyLetterSpacingButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'BUTTON',
  color: 'black',
  hoverColor: 'white',
  activeColor: 'white',
  letterSpacing: '0.2em',
  hoverLetterSpacing: '0.5em',
  activeLetterSpacing: '0.4em',
  size: 'medium',
  backgroundColor: 'transparent',
  hoverBackgroundColor: '#171717', 
};
