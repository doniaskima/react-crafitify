import * as React from "react";
import { Radio } from "../Radio/Radio";
import { RadioSet } from "./RadioSet";

export default {
  component: RadioSet,
  title: "Components/Inputs/RadioSet",
};

export const Default = () => {
  const [isSelectedArray, setIsSelectedArray] = React.useState<
    Array<boolean>
  >([false, false, false, false]);
  return (
    <RadioSet>
      <Radio
        isSelected={isSelectedArray[0]}
        onChange={() =>
          setIsSelectedArray([true, false, false, false])
        }
      >
        Galaxy
      </Radio>
      <Radio
        isSelected={isSelectedArray[1]}
        onChange={() =>
          setIsSelectedArray([false, true, false, false])
        }
      >
        Dark Matter
      </Radio>
      <Radio
        isSelected={isSelectedArray[2]}
        onChange={() =>
          setIsSelectedArray([false, false, true, false])
        }
      >
        Gravity
      </Radio>
      <Radio
        isSelected={isSelectedArray[3]}
        onChange={() =>
          setIsSelectedArray([false, false, false, true])
        }
      >
        Void
      </Radio>
    </RadioSet>
  );
};

export const Selected = () => {
  const [isSelectedArray, setIsSelectedArray] = React.useState<
    Array<boolean>
  >([false, false, true, false]);
  return (
    <RadioSet>
      <Radio
        isSelected={isSelectedArray[0]}
        onChange={() =>
          setIsSelectedArray([true, false, false, false])
        }
      >
        Galaxy
      </Radio>
      <Radio
        isSelected={isSelectedArray[1]}
        onChange={() =>
          setIsSelectedArray([false, true, false, false])
        }
      >
        Dark Matter
      </Radio>
      <Radio
        isSelected={isSelectedArray[2]}
        onChange={() =>
          setIsSelectedArray([false, false, true, false])
        }
      >
        Gravity
      </Radio>
      <Radio
        isSelected={isSelectedArray[3]}
        onChange={() =>
          setIsSelectedArray([false, false, false, true])
        }
      >
        Void
      </Radio>
    </RadioSet>
  );
};
