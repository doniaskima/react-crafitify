import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../Button/Button';

export default {
  title: 'Buttons/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    loading: {
      description: 'State of loading for the button',
      control: { type: 'radio', options: [true, false] },
    },
    full: {
      description: 'Full width for the button',
      control: { type: 'radio', options: [true, false] },
    },
    size: {
      description: 'Size of the button',
      control: { type: 'select' },
      options: ['sm', 'm', 'lg'],
    },
    disabled: {
      description: 'Disabled for the button',
      control: { type: 'radio', options: [true, false] },
    },
    outline: {
      description: 'Outline for the button',
      control: { type: 'radio', options: [true, false] },
    },
    label: {
      defaultValue: '',
      description: 'Text to display in the button',
      control: { type: 'text' },
    },
    color: {
      description: 'Color of the button',
      options: ['primary', 'secondary', 'error'],
      control: { type: 'select' },
    },
    as: {
      options: ['a', 'button'],
      description: 'The type of element to render',
      control: { type: 'select' },
    },
    href: {
      defaultValue: '',
      control: { type: 'text' },
      description: 'The URL to the button',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div
    style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '150px',
    }}
  >
    <Button {...args} />
    <br />
    <Button {...args} disabled />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Click me!',
};
