import React from 'react';
import { Meta, Story } from '@storybook/react';
import ElevatedButton, { ElevatedButtonProps } from '../ElevatedButton';

export default {
  title: 'Buttons/ElevatedButton',
  component: ElevatedButton,
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

const Template: Story<ElevatedButtonProps> = (args) => (
  <CenteredStory>
    <ElevatedButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  backgroundColor: '#3bbfa9',
  textColor: '#FFF',
  fontSize: '16px', 
  hoverEffect: true,
  boxShadowBase:
    'rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,' + 
    'rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,' +
    'rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,' +
    'rgba(44, 187, 99, 0.15) 0 16px 32px',
};
