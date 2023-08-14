import React from 'react';
import { Story, Meta } from '@storybook/react';

import PathCheckbox, { PathCheckboxProps } from '../PathCheckbox';

export default {
  title: 'Checkboxes/PathCheckbox',
  component: PathCheckbox,
  argTypes: {
    onChange: { action: 'changed' },
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
  

const Template: Story<PathCheckboxProps> = (args) => (
    <CenteredStory>
       <PathCheckbox {...args} />
    </CenteredStory>
)

export const Default = Template.bind({});
Default.args = {
  onChange: (isChecked: boolean) => {
    console.log('Checkbox is now ' + (isChecked ? 'checked' : 'unchecked'));
  },
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  ...Default.args,
  size: '40px',
};

export const Checked = Template.bind({});
Checked.args = {
  ...Default.args,
  defaultChecked: true,
};

export const Colored = Template.bind({});
Colored.args = {
  ...Default.args,
  uncheckedColor: '#FF6347',
  checkedColor: '#00BFFF',
};
