import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button51, { Button51Props } from '../Button51';

export default {
  title: 'Buttons/Button51',
  component: Button51,
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

const Template: Story<Button51Props> = (args) => (
  <CenteredStory>
    <Button51 {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button 51',
  pseudoBackgroundColor: '#D5EDF6',
};

export const Customized = Template.bind({});
Customized.args = {
  children: 'Customized Button',
  backgroundColor: '#FC6C85',
  borderColor: '#FF5733',
  textColor: '#FFFFFF',
  pseudoBackgroundColor: '#FFD1DC',
  hoverPseudoBackgroundColor: '#ef66d8', 
  fontSize: '20px',
  height: '',
  fontWeight: 100,
};
