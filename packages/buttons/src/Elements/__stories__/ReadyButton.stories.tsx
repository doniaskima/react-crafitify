import React from 'react';
import { Story, Meta } from '@storybook/react';
import ReadyButton, { ReadyButtonProps } from '../ReadyButton';

export default {
  title: 'Buttons/ReadyButton',
  component: ReadyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    shadowColor: { control: 'color' },
    hoverColor: { control: 'color' },
    size: { control: 'text' },  
    boxShadowColor: { control: 'color' },
  },
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

const Template: Story<ReadyButtonProps> = (args) => (
  <CenteredStory>
    <ReadyButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: "I'm Ready",
};
