import { Meta, Story } from '@storybook/react';
import ConicButton, { ConicButtonProps } from '../ConicButton';

export default {
  title: 'Buttons/ConicButton',
  component: ConicButton,
  argTypes: {
    children: { control: 'text' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
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

const Template: Story<ConicButtonProps> = (args) => (
  <CenteredStory>
    <ConicButton {...args} />
  </CenteredStory>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Conic Button',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  children: 'Custom Color Button',
  color: '#FF5733',
  fontSize: '20px',
  width: '150px',
  height: '50px',
};
