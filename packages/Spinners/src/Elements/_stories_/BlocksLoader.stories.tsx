import React from 'react';
import { Meta, Story } from '@storybook/react';
import BlocksLoader, { BlocksProps } from '../BlocksLoader';

export default {
  title: 'Spinners/BlocksLoader',
  component: BlocksLoader,
  argTypes: {
    visible: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' },
    className: { control: 'text' },
    wrapperStyle: { control: 'object' },
    ariaLabel: { control: 'text' },
  },
} as Meta;

const Template: Story<BlocksProps> = (args) => <BlocksLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
  visible: true,
  width: '80',
  height: '80',
  className: '',
  wrapperStyle: {},
  ariaLabel: 'blocks-loading',
};
