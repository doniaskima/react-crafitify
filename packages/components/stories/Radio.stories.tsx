import * as React from "react";
import { Radio } from "../Radio/Radio";

export default {
  component: Radio,
  title: "Components/Inputs/Radio",
};

export const Default = () => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);

  return (
    <Radio
      isSelected={isSelected}
      onChange={() => setIsSelected(!isSelected)}
    >
      Default
    </Radio>
  );
};

export const Disabled = () => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);

  return (
    <Radio
      disabled
      isSelected={isSelected}
      onChange={() => setIsSelected(!isSelected)}
    >
      Disabled
    </Radio>
  );
};

export const DisabledAndChecked = () => {
  const [isSelected, setIsSelected] = React.useState<boolean>(true);

  return (
    <Radio
      disabled
      isSelected={isSelected}
      onChange={() => setIsSelected(!isSelected)}
    >
      Disabled
    </Radio>
  );
};

export const Selected = () => {
  const [isSelected, setIsSelected] = React.useState<boolean>(true);

  return (
    <Radio
      isSelected={isSelected}
      onChange={() => setIsSelected(!isSelected)}
    >
      Selected
    </Radio>
  );
};
