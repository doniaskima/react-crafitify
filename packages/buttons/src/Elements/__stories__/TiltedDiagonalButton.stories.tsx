import React from 'react';
import { Story, Meta } from '@storybook/react';
import TiltedDiagonalButton, { TiltedDiagonalButtonProps } from '../TiltedDiagonalButton';

export default {
  title: 'Buttons/TiltedDiagonalButton',
  component: TiltedDiagonalButton,
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
};

const Template: Story<TiltedDiagonalButtonProps> = (args) => (
  <CenteredStory>
    <TiltedDiagonalButton {...args} />
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

export const CustomAction = Template.bind({});
CustomAction.args = {
  children: 'Click Me',
  onClick: () => console.log('Button clicked'),
};

export const LongText = Template.bind({});
LongText.args = {
  children: 'A Button with a Really Long Text',
};

export const IconAndTextButton = Template.bind({});
IconAndTextButton.args = {
  children: (
    <>
      <span>🌟</span>
      <span>Star</span>
    </>
  ),
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

export const CustomClasses = Template.bind({});
CustomClasses.args = {
  children: 'Custom Classes',
  className: 'my-custom-class',
  backgroundColor: '#FF5733',
  textColor: '#222',
  fontSize: '1.2rem',
};
