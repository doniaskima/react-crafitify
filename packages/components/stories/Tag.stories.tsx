import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tag } from '../Tag';


export default {
  title: 'Components/Tag/Tag',
  Component: Tag,
  argTypes: {
    color: {
      description: 'Color of the button',
      options: ['primary', 'secondary', 'error'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => (
  <div
    style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '350px',
    }}
  >
    <Tag {...args} unremovable />
    <Tag {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  children: 'Tag',
};
