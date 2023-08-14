import React from 'react';
import { Story, Meta } from '@storybook/react';
import StyledCheckbox from '../StyledCheckbox';

export default {
  title: 'Checkboxes/StyledCheckbox',
  component: StyledCheckbox,
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
  


const Template: Story = () => (
    <CenteredStory>
       <StyledCheckbox />
    </CenteredStory>
) 

export const Default = Template.bind({});
