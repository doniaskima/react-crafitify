import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import CraftifyCheckbox from '../CraftifyCheckbox';

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ensure the story takes up the full viewport height */
`;

export default {
  title: 'Checkboxes/CraftifyCheckbox',
  component: CraftifyCheckbox,
  decorators: [(story) => <CenteredWrapper>{story()}</CenteredWrapper>],
  controls: { hideNoControlsWarning: true }, 
};

const Template = ({ onChange, ...args }) => (
  <CraftifyCheckbox onChange={onChange} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onChange: action('Checkbox changed'),  
};

export const Checked = Template.bind({});
Checked.args = {
  defaultChecked: true,
  onChange: action('Checkbox changed'), 
};

export const CustomColorAndSize = Template.bind({});
CustomColorAndSize.args = {
  defaultChecked: true,
  checkboxColor: '#00A9E0',
  checkboxSize: '30px',
  onChange: action('Checkbox changed'), 
};

// Add a control for checkboxColor
CustomColorAndSize.argTypes = {
  checkboxColor: { control: 'color' },
};

// Add a control for checkboxSize
CustomColorAndSize.argTypes = {
  checkboxSize: { control: 'text' },
};
