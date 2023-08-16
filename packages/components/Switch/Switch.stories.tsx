import { Story } from "@storybook/react";
import * as React from "react";
import { Switch, SwitchProps } from "./Switch";
import { within, userEvent } from "@storybook/testing-library";
import { allowLayoutCalculations } from "../../../.storybook/utilities/allowLayoutCalculations";

export default {
  component: Switch,
  parameters: {
    chromatic: { delay: 2000 },
  },
  title: "Components/Inputs/Switch",
};

const Template: Story<Omit<SwitchProps, "isOn" | "onClick">> = (
  args
) => {
  const [switchState, toggleSwitchState] =
    React.useState<boolean>(false);

  return (
    <Switch
      {...args}
      isOn={switchState}
      onClick={() => toggleSwitchState(!switchState)}
    />
  );
};

export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: " Switch Label",
};
WithLabel.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("switch"))
  );
};
