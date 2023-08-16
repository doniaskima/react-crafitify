import { Story } from "@storybook/react";
import * as React from "react";
import { DatePicker, DatePickerProps } from "./DatePicker";
import { within, userEvent } from "@storybook/testing-library";
import { allowLayoutCalculations } from "../../../.storybook/utilities/allowLayoutCalculations";

export default {
  component: DatePicker,
  parameters: {
    chromatic: { delay: 2000 },
  },
  title: "Components/Inputs/DatePicker",
};

const Template: Story<DatePickerProps> = (args) => {
  const [value, setValue] = React.useState<string>("");
  return <DatePicker {...args} setValue={setValue} value={value} />;
};

export const Default = Template.bind({});

export const Selected = Template.bind({});
Selected.args = {
  selected: new Date(2022, 5, 2),
};
Selected.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("button"))
  );
};
