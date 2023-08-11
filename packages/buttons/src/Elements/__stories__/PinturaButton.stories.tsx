import React from 'react';
import { Story, Meta } from '@storybook/react';
import PinturaButton, { PinturaButtonProps } from '../PinturaButton';

export default {
  title: 'Buttons/PinturaButton',
  component: PinturaButton,
  argTypes: {
    children: { control: 'text' },
    background: { control: 'color' },
    hoverBackground: { control: 'color' },
    borderColor: { control: 'color' },
    textColor: { control: 'color' },
    fontSize: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    boxShadow: { control: 'text' },  
    disabled: { control: 'boolean' },
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

const Template: Story<PinturaButtonProps> = (args) => (
  <CenteredStory>
    <PinturaButton {...args}>{args.children}</PinturaButton>
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Pintura Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Pintura Button',
  disabled: true,
};

export const Customized = Template.bind({});
Customized.args = {
  children: 'Customized Pintura Button',
  background: 'linear-gradient(to bottom right, #EF4765, #FF9A5A)',
  hoverBackground: '#FF9A5A',
  borderColor: '#FF9A5A',
  textColor: '#FFFFFF',
  fontSize: '20px',
  width: '200px',
  height: '60px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',  
};
