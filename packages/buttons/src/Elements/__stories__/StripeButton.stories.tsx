import React from 'react';
import { Story, Meta } from '@storybook/react';
import StripeButton, { StripeButtonProps } from '../StripeButton';  

export default {
  title: 'Buttons/StripeButton',
  component: StripeButton,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    boxShadow: { control: 'text' },
    textColor: { control: 'color' },
    fontSize: { control: 'number' },
    height: { control: 'number' },  
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

const Template: Story<StripeButtonProps> = (args) => (
  <CenteredStory>
    <StripeButton {...args}>{args.children}</StripeButton>
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Stripe Button',
};



