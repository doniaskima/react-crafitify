import { Meta, Story } from '@storybook/react';
import PlaceholderLoader, { PlaceholderLoaderProps } from '../PlaceholderLoader';

export default {
  title: 'Spinners/PlaceholderLoader',
  component: PlaceholderLoader,
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

const Template: Story<PlaceholderLoaderProps> = (args) => (
  <CenteredStory>
    <PlaceholderLoader {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  width: '250px',
  height: '130px',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: '250px',
  height: '130px',
};
