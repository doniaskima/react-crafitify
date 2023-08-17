import { Button } from "../Button/Button";
import { ButtonSet } from "../ButtonSet/ButtonSet";

export default {
  component: ButtonSet,
  title: "Components/Inputs/ButtonSet",
};

export const Default = () => (
  <ButtonSet>
    <Button>Galaxy</Button>
    <Button variant="secondary">Dark Matter</Button>
    <Button>Gravity</Button>
    <Button variant="secondary">Void</Button>
  </ButtonSet>
);

export const Column = () => (
  <ButtonSet flexDirection="column">
    <Button>Galaxy</Button>
    <Button variant="secondary">Dark Matter</Button>
    <Button>Gravity</Button>
    <Button variant="secondary">Void</Button>
  </ButtonSet>
);
