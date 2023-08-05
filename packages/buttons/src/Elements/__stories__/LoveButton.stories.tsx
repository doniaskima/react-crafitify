import React from 'react';
import { Story, Meta } from '@storybook/react';
import Lovebtn from '../Lovebtn';

export default {
  title: 'Buttons/LoveButton',
  component: Lovebtn,
} as Meta;

const Template: Story = (args) => <Lovebtn {...args}>Hover Me!</Lovebtn>;

export const Default = Template.bind({});
