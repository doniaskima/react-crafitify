import React from 'react';
import { Story, Meta } from '@storybook/react';
import ProgressRightButton, { ProgressRightButtonProps } from '../ProgressRightButton';

export default {
  title: 'Buttons/ProgressRightButton',
  component: ProgressRightButton,
} as Meta;

const CenteredStory: React.FC = ({ children }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      {children}
    </div>
  );
}

const Template: Story<ProgressRightButtonProps> = (args) => (
  <CenteredStory>
    <ProgressRightButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
};

export const CustomText = Template.bind({});
CustomText.args = {
  children: 'Custom Text',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  children: 'Custom Colors',
  backgroundColor: '#3498db',
  textColor: '#ffffff',
};

export const CustomFontSize = Template.bind({});
CustomFontSize.args = {
  children: 'Custom Font Size',
  fontSize: '1.5rem',
};
