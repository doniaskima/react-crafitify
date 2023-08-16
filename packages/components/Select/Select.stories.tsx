import { Story } from "@storybook/react";
import * as React from "react";
import { Select, SelectProps } from "./Select";
import { SelectItem } from "./SelectItem";
import { within, userEvent } from "@storybook/testing-library";
import { allowLayoutCalculations } from "../../../.storybook/utilities/allowLayoutCalculations";

export default {
  component: Select,
  parameters: {
    chromatic: { delay: 2000 },
  },
  title: "Components/Inputs/Select",
};

const Template: Story<SelectProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Select
      {...args}
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
    >
      <SelectItem>CA</SelectItem>
      <SelectItem>MA</SelectItem>
      <SelectItem>FL</SelectItem>
    </Select>
  );
};

export const Default = Template.bind({});

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "State",
};
Placeholder.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("button"))
  );
};

export const Selected = Template.bind({});
Selected.args = {
  selected: 1,
};
Selected.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("button"))
  );
};

export const WithManySelectItems: Story<SelectProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Select
      {...args}
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
    >
      <SelectItem>10</SelectItem>
      <SelectItem>20</SelectItem>
      <SelectItem>30</SelectItem>
      <SelectItem>40</SelectItem>
      <SelectItem>50</SelectItem>
      <SelectItem>60</SelectItem>
      <SelectItem>70</SelectItem>
      <SelectItem>80</SelectItem>
      <SelectItem>90</SelectItem>
    </Select>
  );
};

WithManySelectItems.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("button"))
  );
};
