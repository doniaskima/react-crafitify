import React from "react";
import { Story, Meta } from "@storybook/react";
import Dropdown, { DropdownProps } from "../Dropdown/Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  children: (
    <>
      <button>Click Me</button>
     
    </>
  ),
};
