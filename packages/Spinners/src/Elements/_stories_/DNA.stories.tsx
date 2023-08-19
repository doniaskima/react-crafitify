import React from 'react';
import { Meta, Story } from '@storybook/react';
import DNA, { DNAProps } from '../DNA'; 

export default {
  title: 'Spinners/DNA',
  component: DNA,
  argTypes: {
    width: {
      control: 'text', 
    },
    height: {
      control: 'text', 
    },
    visible: {
      control: 'boolean',  
    },
    className: {
      control: 'text',  
    },
    ariaLabel: {
      control: 'text', 
    },
  },
} as Meta;

const Template: Story<DNAProps> = (args) => <DNA {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '80', 
  height: '80', 
  visible: true,  
  className: '',  
  ariaLabel: 'dna-loading',  
};
