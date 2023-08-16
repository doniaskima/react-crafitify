import { Story } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
import {
  MdOutlineArrowBack,
  MdOutlineArrowForward,
} from "react-icons/md";
import { FlexRowContainer } from "../../../.storybook/components/FlexRowContainer";

export default {
  component: Button,
  title: "Components/Inputs/Button",
};

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args}>Button</Button>;
};

export const Default = Template.bind({});

export const Size = () => {
  return (
    <FlexRowContainer>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </FlexRowContainer>
  );
};

export const Variant = () => {
  return (
    <FlexRowContainer>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </FlexRowContainer>
  );
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
  leadingIcon: <MdOutlineArrowBack />,
};

export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
  trailingIcon: <MdOutlineArrowForward />,
};

export const LeadingIconAndTrailingIcon = Template.bind({});
LeadingIconAndTrailingIcon.args = {
  leadingIcon: <MdOutlineArrowBack />,
  trailingIcon: <MdOutlineArrowForward />,
};

export const AllProps = Template.bind({});
AllProps.args = {
  size: "large",
  variant: "secondary",
  leadingIcon: <MdOutlineArrowBack />,
  trailingIcon: <MdOutlineArrowForward />,
};
