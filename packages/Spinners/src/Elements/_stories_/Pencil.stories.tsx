// Pencil.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import Pencil from '../Pencil'; 

export default {
  title: 'Spinners/Pencil', 
  component: Pencil,
} as Meta;


const Template: Story = () => <Pencil />;

export const Default = Template.bind({});
Default.storyName = 'Default Pencil'; 
