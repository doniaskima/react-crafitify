import React from 'react';
import { Meta, Story } from '@storybook/react';
import TodoCheckbox, { TodoCheckboxProps } from '../TodoCheckbox';

export default {
  title: 'Checkboxes/TodoCheckbox',
  component: TodoCheckbox,
  argTypes: {
    checkedColor: { control: 'color' },  
    uncheckedColor: { control: 'color' }, 
    label: { control: 'text' },  
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
  

const Template: Story<TodoCheckboxProps> = (args) => (
    <CenteredStory>
      <TodoCheckbox {...args} />
    </CenteredStory>
)

export const Default = Template.bind({});
Default.args = {
  checkedColor: '#06842c',  
  uncheckedColor: '#bdc1c6', 
  label: 'Get out of bed',  
};
