import React from 'react';
import { Story, Meta } from '@storybook/react';
import StyledCheckbox from '../StyledCheckbox';

export default {
  title: 'Components/StyledCheckbox',
  component: StyledCheckbox,
} as Meta;

const Template: Story = () => <StyledCheckbox />;

export const Default = Template.bind({});
