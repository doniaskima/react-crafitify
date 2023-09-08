// MagnifyingGlass.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import MagnifyingGlass, { MagnifyingGlassProps } from '../MagnifyingGlass';

export default {
  title: 'Spinners/MagnifyingGlass',
  component: MagnifyingGlass,
  argTypes: {
    visible: { control: 'boolean' },
    height: { control: 'text' },
    width: { control: 'text' },
    className: { control: 'text' },
    wrapperStyle: { control: 'object' },
    ariaLabel: { control: 'text' },
    glassColor: { control: 'color' },
    color: { control: 'color' },
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


const Template: Story<MagnifyingGlassProps> = (args) => (
  <CenteredStory>
  <MagnifyingGlass {...args} />
  </CenteredStory>
 
);

export const Default = Template.bind({});
Default.args = {
  visible: true,
  height: '80',
  width: '80',
  className: '',
  wrapperStyle: {},
  ariaLabel: 'magnifying-glass-loading',
  glassColor: '#c0efff',
  color: '#e15b64',
};
