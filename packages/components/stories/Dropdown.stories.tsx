import React from "react";
import { Story, Meta } from "@storybook/react";
import Dropdown, { DropdownProps } from "../Dropdown/Dropdown";

export default {
  title: "Components/Dropdown",
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

export const WithButton = Template.bind({});
WithButton.args = {
  children: (
    <>
      <button>Click Me</button>
    </>
  ),
  elementList: [
    <button onClick={() => console.log("Button clicked!")}>Send a message!</button>,
  ],
};

export const WithLink = Template.bind({});
WithLink.args = {
  children: (
    <>
      <button>Click Me</button>
    </>
  ),
  elementList: [
    <a
      target="_blank"
      rel="noopener noreferrer"
      href=" https://www.npmjs.com/package/react-craftify-spinners"
    >
      Go to  https://www.npmjs.com/package/react-craftify-spinners
    </a>,
  ],
};

export const WithMultipleElements = Template.bind({});
WithMultipleElements.args = {
  children: (
    <>
      <button>Click Me</button>
    </>
  ),
  elementList: [
    <button onClick={() => console.log("Button clicked!")}>Send a message!</button>,
    <a
      target="_blank"
      rel="noopener noreferrer"
      href=" https://www.npmjs.com/package/react-craftify-spinners"
    >
      Go to  https://www.npmjs.com/package/react-craftify-spinners
    </a>,
    
  ],
};
