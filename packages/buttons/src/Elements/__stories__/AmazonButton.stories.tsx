import React from 'react';
import { Story, Meta } from '@storybook/react';
import AmazonButton, { AmazonButtonProps } from '../AmazonButton';

export default {
  title: 'Buttons/AmazonButton',
  component: AmazonButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    textColor: { control: 'color' },
    fontSize: { control: 'number' },
    width: { control: 'text' },
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


const Template: Story<AmazonButtonProps> = (args) => (
    <CenteredStory>
        <AmazonButton {...args} />
    </CenteredStory>  
)

export const Default = Template.bind({});
Default.args = {
  children: 'Amazon',
};

export const Customized = Template.bind({});
Customized.args = {
  children: 'Custom Button',
  backgroundColor: '#ff9900',
  borderColor: '#ff9900',
  textColor: '#ffffff',
  fontSize: 16,
  width: '150px',
};
