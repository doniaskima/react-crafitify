import React from 'react';
import { Story, Meta } from '@storybook/react';
import ModernAlert, { ModernAlertProps } from '../Alert/ModernAlert';
 
export default {
  title: 'Components/Feedback/ModernAlert',
  component: ModernAlert,
} as Meta;

const Template: Story<ModernAlertProps> = (args) => <ModernAlert {...args} />;

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  type: 'success',
  message: 'You successfully read this important.',
};

export const InfoAlert = Template.bind({});
InfoAlert.args = {
  type: 'info',
  message: 'This alert needs your attention, but it\'s not super important.',
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  type: 'warning',
  message: 'Better check yourself, you\'re not looking too good.',
};

export const DangerAlert = Template.bind({});
DangerAlert.args = {
  type: 'danger',
  message: 'Change a few things up and try submitting again.',
};

export const PrimaryAlert = Template.bind({});
PrimaryAlert.args = {
  type: 'primary',
  message: 'You successfully read this important.',
};
