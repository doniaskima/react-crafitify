import React from 'react';
import { Story } from '@storybook/react';
import Messages from '../Message/index'; 

export default {
  title: 'Components/Messages',
  component: Messages,
};


const Template: Story = () => {
  return (
    <div>
      <button onClick={() => Messages('Success message', 'success')}>Show Success</button>
      <button onClick={() => Messages('Error message', 'error')}>Show Error</button>
      <button onClick={() => Messages('Question message', 'question')}>Show Question</button>
      <button onClick={() => Messages('Info message', 'info')}>Show Info</button>
    </div>
  );
};


export const Default = Template.bind({});
