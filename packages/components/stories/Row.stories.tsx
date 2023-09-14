import React from 'react';
import { Story, Meta } from '@storybook/react';
import Row from '../Layout/Row'; 

export default {
  title: 'Components/Layout/Row',
  component: Row,
} as Meta;

const Template: Story = (args) => (
  <Row {...args}>
    <div style={{ width: '50%', padding: '12px' }}>Column 1</div>
    <div style={{ width: '50%', padding: '12px' }}>Column 2</div>
  </Row>
);

export const DefaultRow = Template.bind({});
DefaultRow.args = {};


