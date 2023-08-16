import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SpinnerDiamond, SpinnerDiamondProps } from '../SpinnerDiamond';

export default {
  title: 'Spinners/SpinnerDiamond',
  component: SpinnerDiamond,
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

const Template: Story<SpinnerDiamondProps> = (args) => (
  <CenteredStory>
    <SpinnerDiamond {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  secondaryColor: '#1BFD9C',
  speed: 1,
  still: false,
  thickness: 100,
};
