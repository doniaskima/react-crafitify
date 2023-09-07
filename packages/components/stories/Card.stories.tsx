import React from 'react';
import { Story, Meta } from '@storybook/react';
import Card from '../Card/Card';
 
export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story = (args) => (
  <Card {...args}>
    <div>
      <h2>Card Content</h2>
      <p>This is some content inside the card.</p>
    </div>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  border: 'none',
  padding: '16px',
  className: '',
};

export const CardWithBorder = Template.bind({});
CardWithBorder.args = {
  title: 'Card Title with Border',
  border: 'solid 1px #ccc',
  padding: '16px',
  className: '',
};

export const CardWithCustomPadding = Template.bind({});
CardWithCustomPadding.args = {
  title: 'Card Title with Custom Padding',
  border: 'none',
  padding: '24px',
  className: '',
};
