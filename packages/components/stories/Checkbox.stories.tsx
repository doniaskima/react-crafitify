import * as React from "react";
import { Checkbox } from "../Checkbox/Checkbox";

export default {
  component: Checkbox,
  title: "Components/Inputs/Checkbox",
};

export const Default = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  return (
    <Checkbox
      isChecked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    >
      Default
    </Checkbox>
  );
};

export const Disabled = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  return (
    <Checkbox
      disabled
      isChecked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    >
      Disabled
    </Checkbox>
  );
};

export const DisabledAndChecked = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  return (
    <Checkbox
      disabled
      isChecked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    >
      Disabled
    </Checkbox>
  );
};

export const Checked = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  return (
    <Checkbox
      isChecked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    >
      Checked
    </Checkbox>
  );
};
