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
  decorators: [(story) => <CenteredWrapper>{story()}</CenteredWrapper>], // Apply the centered wrapper
};

export const Default = () => (
  <CraftifyCheckbox onChange={action('Checkbox changed')} />
);

export const Checked = () => (
  <CraftifyCheckbox defaultChecked={true} onChange={action('Checkbox changed')} />
);

export const CustomColorAndSize = () => (
  <CraftifyCheckbox
    defaultChecked={true}
    checkedColor="#00A9E0"  
    checkboxSize="30px"
    onChange={action('Checkbox changed')}
  />
);
