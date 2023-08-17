import { Story } from "@storybook/react";
import * as React from "react";
import { AiFillEye, AiOutlineArrowRight } from "react-icons/ai";
import {
  TextField,
  TextFieldProps,
  TextFieldType,
} from "../TextField/TextField";

export default {
  component: TextField,
  title: "Components/Inputs/TextField",
};

const Template: Story<Omit<TextFieldProps, "value" | "onChange">> = (
  args
) => {
  const [value, setValue] = React.useState<string>("");

  return (
    <TextField
      {...args}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      value={value}
    />
  );
};

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Label = Template.bind({});
Label.args = {
  label: "TextField",
};

export const DisabledAndLabel = Template.bind({});
DisabledAndLabel.args = {
  disabled: true,
  label: "Disabled",
};

export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
  trailingIcon: <AiOutlineArrowRight />,
};

export const PasswordType = Template.bind({});
PasswordType.args = {
  type: "password",
};

export const TrailingIconAndPasswordType = () => {
  const [value, setValue] = React.useState<string>("");
  const [type, setType] = React.useState<TextFieldType>("password");

  return (
    <TextField
      onChange={(event) => {
        setValue(event.target.value);
      }}
      trailingIcon={
        <AiFillEye
          onClick={() => {
            if (type === "password") {
              setType("text");
            } else {
              setType("password");
            }
          }}
        />
      }
      type={type}
      value={value}
    />
  );
};

export const AllProps = () => {
  const [value, setValue] = React.useState<string>("");
  const [type, setType] = React.useState<TextFieldType>("password");

  return (
    <TextField
      label="TextField"
      size="small"
      onChange={(event) => {
        setValue(event.target.value);
      }}
      trailingIcon={
        <AiFillEye
          onClick={() => {
            if (type === "password") {
              setType("text");
            } else {
              setType("password");
            }
          }}
        />
      }
      type={type}
      value={value}
    />
  );
};
