import { Story } from "@storybook/react";
import * as React from "react";
import { within, userEvent } from "@storybook/testing-library";
import { Popup, PopupProps } from "./Popup";
import { Button } from "../Button/Button";
import { allowLayoutCalculations } from "../../../.storybook/utilities/allowLayoutCalculations";

export default {
  component: Popup,
  // Delay Chromatic capture to allow animation for Storybook play to run for Popup
  parameters: {
    chromatic: { delay: 2000 },
    layout: "centered",
  },
  title: "Components/Feedback/Popup",
};

const Template: Story<
  Omit<PopupProps, "text"> & Pick<Partial<PopupProps>, "text">
> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popup
      text="I am a Popup!"
      {...args}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
    >
      <Button variant="secondary">Hover Me!</Button>
    </Popup>
  );
};

export const Default = Template.bind({});

export const PositionBottom = Template.bind({});
PositionBottom.args = {
  position: "bottom",
};
PositionBottom.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.hover(canvas.getByRole("button"))
  );
};
PositionBottom.storyName = "Position: Bottom";

export const PositionBottomWithIndicator = Template.bind({});
PositionBottomWithIndicator.args = {
  hasIndicator: true,
  position: "bottom",
};
PositionBottomWithIndicator.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.hover(canvas.getByRole("button"))
  );
};
PositionBottomWithIndicator.storyName =
  "Position: Bottom with Indicator";

export const PositionBottomWithIndicatorAndLongText = Template.bind(
  {}
);
PositionBottomWithIndicatorAndLongText.args = {
  hasIndicator: true,
  position: "bottom",
  text: "I am some very, very, very, very long text!!!!!!",
};
PositionBottomWithIndicatorAndLongText.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.hover(canvas.getByRole("button"))
  );
};
PositionBottomWithIndicatorAndLongText.storyName =
  "Position: Bottom with Indicator and Long Text ";

export const PositionTop = Template.bind({});
PositionTop.args = {
  position: "top",
};
PositionTop.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.hover(canvas.getByRole("button"))
  );
};
PositionTop.storyName = "Position: Top";

export const PositionTopWithIndicator = Template.bind({});
PositionTopWithIndicator.args = {
  hasIndicator: true,
  position: "top",
};
PositionTopWithIndicator.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.hover(canvas.getByRole("button"))
  );
};
PositionTopWithIndicator.storyName = "Position: Top with Indicator";

export const PositionTopWithIndicatorAndLongText = Template.bind({});
PositionTopWithIndicatorAndLongText.args = {
  hasIndicator: true,
  position: "top",
  text: "I am some very, very, very, very long text!!!!!!",
};
PositionTopWithIndicatorAndLongText.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.hover(canvas.getByRole("button"))
  );
};
PositionTopWithIndicatorAndLongText.storyName =
  "Position: Top with Indicator and Long Text ";

export const PositionLeft = Template.bind({});
PositionLeft.args = {
  position: "left",
};
PositionLeft.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.hover(canvas.getByRole("button"))
  );
};
PositionLeft.storyName = "Position: Left";

export const PositionLeftWithIndicator = Template.bind({});
PositionLeftWithIndicator.args = {
  hasIndicator: true,
  position: "left",
};
PositionLeftWithIndicator.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.hover(canvas.getByRole("button"))
  );
};
PositionLeftWithIndicator.storyName = "Position: Left with Indicator";

export const PositionLeftWithIndicatorAndLongText = Template.bind({});
PositionLeftWithIndicatorAndLongText.args = {
  hasIndicator: true,
  position: "left",
  text: "I am some very, very, very, very long text!!!!!!",
};
PositionLeftWithIndicatorAndLongText.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.hover(canvas.getByRole("button"))
  );
};
PositionLeftWithIndicatorAndLongText.storyName =
  "Position: Left with Indicator and Long Text ";

export const PositionRight = Template.bind({});
PositionRight.args = {
  position: "right",
};
PositionRight.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.hover(canvas.getByRole("button"))
  );
};
PositionRight.storyName = "Position: Right";

export const PositionRightWithIndicator = Template.bind({});
PositionRightWithIndicator.args = {
  hasIndicator: true,
  position: "right",
};
PositionRightWithIndicator.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.hover(canvas.getByRole("button"))
  );
};
PositionRightWithIndicator.storyName =
  "Position: Right with Indicator";

export const PositionRightWithIndicatorAndLongText = Template.bind(
  {}
);
PositionRightWithIndicatorAndLongText.args = {
  hasIndicator: true,
  position: "right",
  text: "I am some very, very, very, very long text!!!!!!",
};
PositionRightWithIndicatorAndLongText.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.hover(canvas.getByRole("button"))
  );
};
PositionRightWithIndicatorAndLongText.storyName =
  "Position: Right with Indicator and Long Text ";
