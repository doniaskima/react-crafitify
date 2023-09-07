import React from 'react';
import { Story, Meta } from '@storybook/react';
import Table from '../Table';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const Template: Story = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: ['Column 1', 'Column 2', 'Column 3'], 
  rows: [
    { 'Column 1': 'Row 1, Column 1', 'Column 2': 'Row 1, Column 2', 'Column 3': 'Row 1, Column 3' },
    { 'Column 1': 'Row 2, Column 1', 'Column 2': 'Row 2, Column 2', 'Column 3': 'Row 2, Column 3' },
  ],
  bordered: false, 
  style: {}, 
  className: '',
};

export const BorderedTable = Template.bind({});
BorderedTable.args = {
  ...Default.args,
  bordered: true,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  ...Default.args,
  style: {
    backgroundColor: 'lightgray',
    border: '1px solid black',
  },
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  ...Default.args,
  className: 'custom-table',
};
