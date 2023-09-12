import React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon from '../icons-craftify/index'; 

export default {
  title: 'Components/Icon',  
  component: Icon, 
} as Meta;
 
const Template: Story = (args) => (
    <div>
      <Icon {...args} />
    </div>
  );
  

  export const Close = Template.bind({});
  Close.args = {
    type: 'close',
    size: '24px', 
    color: 'red',  
  };
  

  export const ArrowBack = Template.bind({});
  ArrowBack.args = {
    type: 'arrowBack', 
    size: '32px', 
    color: 'blue', 
  };