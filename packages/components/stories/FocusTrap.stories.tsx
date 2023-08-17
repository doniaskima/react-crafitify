import { FocusTrap } from "../FocusTrap/FocusTrap";
import { Button } from "../Button";
import { ButtonSet } from "../ButtonSet";

export default {
  component: FocusTrap,
  title: "Components/Utilities/FocusTrap",
};

export const Default = () => (
  <FocusTrap>
    <ButtonSet>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonSet>
  </FocusTrap>
);
