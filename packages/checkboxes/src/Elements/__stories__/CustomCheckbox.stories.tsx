import React from 'react';
import { Meta, Story } from '@storybook/react';
import CustomCheckbox from '../CustomCheckbox';

export default {
  title: 'Checkboxes/CustomCheckbox',
  component: CustomCheckbox,
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

const Template: Story = (args) => (
    <CenteredStory>
      <CustomCheckbox {...args} />
    </CenteredStory>  
)

export const Default = Template.bind({});
Default.args = {};
