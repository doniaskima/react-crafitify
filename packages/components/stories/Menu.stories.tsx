import { Story } from "@storybook/react";
import * as React from "react";
import { within, userEvent } from "@storybook/testing-library";
import { Menu, MenuProps } from "../Menu/Menu";
import { MenuItem } from "../Menu/MenuItem";
import { Button } from "../Button/Button";
import { MenuSeparator } from "../Menu/MenuSeparator";
import { MenuHeader } from "../Menu/MenuHeader";
import { allowLayoutCalculations } from "../.storybook/utilities/allowLayoutCalculations";

export default {
  component: Menu,
  parameters: {
    chromatic: { delay: 2000 },
    layout: "centered",
  },
  title: "Components/Navigation/Menu",
};

const Template: Story<MenuProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Menu
      {...args}
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button variant="secondary">Click Me!</Button>}
    >
      <MenuItem>Menu Item One</MenuItem>
      <MenuItem>Menu Item Two</MenuItem>
      <MenuItem>Menu Item Three</MenuItem>
      <MenuItem>Menu Item Four</MenuItem>
    </Menu>
  );
};

const WithHeaderAndSeparatorTemplate: Story<MenuProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Menu
      {...args}
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button variant="secondary">Click Me!</Button>}
    >
      <MenuItem>New File</MenuItem>
      <MenuItem>New Folder</MenuItem>
      <MenuItem>Save As</MenuItem>
      <MenuSeparator />
      <MenuHeader>Edit</MenuHeader>
      <MenuItem>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
      <MenuSeparator />
      <MenuItem>Print</MenuItem>
    </Menu>
  );
};

export const Default = Template.bind({});

export const AlignmentBottomLeft = Template.bind({});
AlignmentBottomLeft.args = {
  alignment: "bottomLeft",
};
AlignmentBottomLeft.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("button"))
  );
};
AlignmentBottomLeft.storyName = "Alignment: Bottom Left";

export const AlignmentBottomLeftWithHeaderAndSeparator =
  WithHeaderAndSeparatorTemplate.bind({});
AlignmentBottomLeftWithHeaderAndSeparator.args = {
  alignment: "bottomLeft",
};
AlignmentBottomLeftWithHeaderAndSeparator.play = ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("button"))
  );
};
AlignmentBottomLeftWithHeaderAndSeparator.storyName =
  "Alignment: Bottom Left with Header and Separator";

export const AlignmentBottomRight = Template.bind({});
AlignmentBottomRight.args = {
  alignment: "bottomRight",
};
AlignmentBottomRight.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("button"))
  );
};
AlignmentBottomRight.storyName = "Alignment: Bottom Right";

export const AlignmentBottomRightWithHeaderAndSeparator =
  WithHeaderAndSeparatorTemplate.bind({});
AlignmentBottomRightWithHeaderAndSeparator.args = {
  alignment: "bottomRight",
};
AlignmentBottomRightWithHeaderAndSeparator.play = ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("button"))
  );
};
AlignmentBottomRightWithHeaderAndSeparator.storyName =
  "Alignment: Bottom Right with Header and Separator";

export const AlignmentBottomCenter = Template.bind({});
AlignmentBottomCenter.args = {
  alignment: "bottomCenter",
};
AlignmentBottomCenter.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("button"))
  );
};
AlignmentBottomCenter.storyName = "Alignment: Bottom Center";

export const AlignmentBottomCenterWithHeaderAndSeparator =
  WithHeaderAndSeparatorTemplate.bind({});
AlignmentBottomCenterWithHeaderAndSeparator.args = {
  alignment: "bottomCenter",
};
AlignmentBottomCenterWithHeaderAndSeparator.play = ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("button"))
  );
};
AlignmentBottomCenterWithHeaderAndSeparator.storyName =
  "Alignment: Bottom Center with Header and Separator";

export const AlignmentTopLeft = Template.bind({});
AlignmentTopLeft.args = {
  alignment: "topLeft",
};
AlignmentTopLeft.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("button"))
  );
};
AlignmentTopLeft.storyName = "Alignment: Top Left";

export const AlignmentTopLeftWithHeaderAndSeparator =
  WithHeaderAndSeparatorTemplate.bind({});
AlignmentTopLeftWithHeaderAndSeparator.args = {
  alignment: "topLeft",
};
AlignmentTopLeftWithHeaderAndSeparator.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("button"))
  );
};
AlignmentTopLeftWithHeaderAndSeparator.storyName =
  "Alignment: Top Left with Header and Separator";

export const AlignmentTopRight = Template.bind({});
AlignmentTopRight.args = {
  alignment: "topRight",
};
AlignmentTopRight.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("button"))
  );
};
AlignmentTopRight.storyName = "Alignment: Top Right";

export const AlignmentTopRightWithHeaderAndSeparator =
  WithHeaderAndSeparatorTemplate.bind({});
AlignmentTopRightWithHeaderAndSeparator.args = {
  alignment: "topRight",
};
AlignmentTopRightWithHeaderAndSeparator.play = ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("button"))
  );
};
AlignmentTopRightWithHeaderAndSeparator.storyName =
  "Alignment: Top Right with Header and Separator";

export const AlignmentTopCenter = Template.bind({});
AlignmentTopCenter.args = {
  alignment: "topCenter",
};
AlignmentTopCenter.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("button"))
  );
};
AlignmentTopCenter.storyName = "Alignment: Top Center";

export const AlignmentTopCenterWithHeaderAndSeparator =
  WithHeaderAndSeparatorTemplate.bind({});
AlignmentTopCenterWithHeaderAndSeparator.args = {
  alignment: "topCenter",
};
AlignmentTopCenterWithHeaderAndSeparator.play = ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);
  allowLayoutCalculations(() =>
    userEvent.click(canvas.getByRole("button"))
  );
};
AlignmentTopCenterWithHeaderAndSeparator.storyName =
  "Alignment: Top Center with Header and Separator";
