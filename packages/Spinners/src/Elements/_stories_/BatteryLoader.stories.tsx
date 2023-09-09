import React from 'react';
import { Story, Meta } from '@storybook/react';
import BatteryLoader from '../BatteryLoader';

export default {
  title: 'Spinners/BatteryLoader',
  component: BatteryLoader,
  argTypes: {
    size: {
      control: 'text',
      defaultValue: '80px',
    },
    color: {
      control: 'color',
      defaultValue: '#000',
    },
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

const Template: Story = (args) => (
    <CenteredStory>
         <BatteryLoader {...args} />
    </CenteredStory> 
);

export const Default = Template.bind({});
Default.args = {};
