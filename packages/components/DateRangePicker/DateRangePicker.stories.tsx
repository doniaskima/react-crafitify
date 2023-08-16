import { Story } from "@storybook/react";
import {
  DateRangePicker,
  DateRangePickerProps,
} from "./DateRangePicker";
import { within, userEvent } from "@storybook/testing-library";
import { allowLayoutCalculations } from "../../../.storybook/utilities/allowLayoutCalculations";

export default {
  component: DateRangePicker,
  parameters: {
    chromatic: { delay: 2000 },
  },
  title: "Components/Inputs/DateRangePicker",
};

const Template: Story<DateRangePickerProps> = () => {
  return <DateRangePicker selected={new Date(2022, 5, 2)} />;
};

export const Default = Template.bind({});
Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("button"))
  );
};
