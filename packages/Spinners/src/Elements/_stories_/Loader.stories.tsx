import { ComponentMeta, ComponentStory } from '@storybook/react';
import Loader from '../Loader';

export default {
  title: 'Spinners/Loader',
  component: Loader,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    type: {
      description: 'Type of the loader component',
      options: ['ring', 'rotate', 'dots'],
      control: { type: 'select' },
    },
    color: {
      control: { type: 'color' },
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => (
  <div
    style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '150px',
      gap: '50px',
    }}
  >
    <Loader {...args} />
    <Loader {...args} type="rotate" />
    <Loader {...args} type="dots" />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: 32,
  borderSize: 4,
};
