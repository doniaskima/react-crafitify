import React from "react";
import { Meta, Story } from "@storybook/react";
import { ButtonSet, ButtonSetProps } from "../ButtonSet/ButtonSet";
import Button from "../Button/Button";

export default {
  component: ButtonSet,
  title: "Buttons/ButtonSet",
} as Meta;

const Template: Story<ButtonSetProps> = (args) => (
  <ButtonSet {...args}>
    <Button>Galaxy</Button>
    <Button variant="secondary">Dark Matter</Button>
    <Button>Gravity</Button>
    <Button variant="secondary">Void</Button>
  </ButtonSet>
);

export const Default = Template.bind({});
Default.args = {};

export const Column = Template.bind({});
Column.args = {
  flexDirection: "column",
};
