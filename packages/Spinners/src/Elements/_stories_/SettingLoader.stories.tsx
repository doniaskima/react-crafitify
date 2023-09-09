import React from 'react';
import { Story, Meta } from '@storybook/react';
import SettingLoader from '../SettingLoader';

export default {
  title: 'Spinners/SettingLoader',
  component: SettingLoader,
  argTypes: {
    size: {
      control: 'text',
      defaultValue: '50px',
    },
    color: {
      control: 'color',
      defaultValue: '#854f1d',
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
        <SettingLoader {...args} />
    </CenteredStory> 
)

export const Default = Template.bind({});
Default.args = {};
