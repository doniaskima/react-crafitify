import React from 'react';
import { Story, Meta } from '@storybook/react';
import Container, { ContainerProps } from '../Layout/Container/Container'; 

export default {
  title: 'Components/Layout/Container',
  component: Container,
} as Meta;

const Template: Story<ContainerProps> = (args) => (
  <Container {...args}>
    <div>
      <p>Container Content</p>
    </div>
  </Container>
);

export const DefaultContainer = Template.bind({});
DefaultContainer.args = {
};

