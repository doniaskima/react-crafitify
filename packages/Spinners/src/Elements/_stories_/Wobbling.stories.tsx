import React from 'react';
import { Story, Meta } from '@storybook/react';
import WobblingLoader from '../Wobbling';

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

export default {
  title: 'Spinners/WobblingLoader',
  component: WobblingLoader,
  argTypes: {
    size: {
      control: 'text',
      defaultValue: '20px',
    },
  },
} as Meta;

const Template: Story = (args) => (
  <CenteredStory>
    <WobblingLoader {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {};
