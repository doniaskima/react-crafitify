import React from 'react';
import { Meta, Story } from '@storybook/react';
import BlobButton from '../BlobButton';

export default {
  title: 'Buttons/BlobButton',
  component: BlobButton,
} as Meta;

const CenteredStory: React.FC = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {children}
    </div>
  );
};

const Template: Story = (args) => (
  <CenteredStory>
    <BlobButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Blob Button',
};

export const Customized = Template.bind({});
Customized.args = {
  children: 'Custom Blob Button',
  padding: '20px 40px',
  fontSize: '20px',
  textColor: 'red',
  hoverTextColor: 'white',
  borderColor: 'green',
  borderSize: '3px',
  borderRadius: '50px',
  innerBackgroundColor: 'blue',
  blobColor: 'yellow',
  blobWidth: '30%',
};
