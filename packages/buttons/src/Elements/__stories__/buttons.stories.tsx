import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '../Buttons';
import styled, { css } from 'styled-components';

export default {
  title: 'Buttons/Buttons',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'outline'],
      },
    },
    bgColor: {
      control: 'color',
    },
    textColor: {
      control: 'color',
    },
    hoverColor: {
      control: 'color',
    },
  },
} as Meta;

const buttonVariantStyles = {
  primary: css`
    background-color: ${({ bgColor }) => bgColor || '#1a202c'};
    color: ${({ textColor }) => textColor || '#fff'};
    &:hover {
      background-color: ${({ hoverColor }) => hoverColor || '#4a5568'};
    }
  `,
  secondary: css`
    background-color: ${({ bgColor }) => bgColor || '#a0aec0'};
    color: ${({ textColor }) => textColor || '#000'};
    &:hover {
      background-color: ${({ hoverColor }) => hoverColor || '#cbd5e0'};
    }
  `,
  outline: css`
    border: 1px solid ${({ bgColor }) => bgColor || '#a0aec0'};
    color: ${({ textColor }) => textColor || '#000'};
    &:hover {
      background-color: ${({ hoverColor }) => hoverColor || '#edf2f7'};
    }
  `,
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  transition: color 0.2s;
  outline: none;
  font-weight: medium;
  height: 48px; /* h-12 multiplied by 4 to match tailwindcss scale */
  padding: 24px; /* px-6 multiplied by 4 to match tailwindcss scale */
  border-radius: 0.375rem; /* rounded-md multiplied by 4 to match tailwindcss scale */
  align-items: center;
  justify-content: center;
  ${({ variant, ...props }) => buttonVariantStyles[variant](props)};
`;

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Template: Story<ButtonProps> = (args) => (
  <CenteredWrapper>
    <Button {...args} />
  </CenteredWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline Button',
  variant: 'outline',
};
