import { IconButton } from "../IconButton/IconButton";
import { FaReact } from "react-icons/fa";
import { FlexRowContainer } from "../.storybook/components/FlexRowContainer";

export default {
  component: IconButton,
  title: "Components/Presentation/IconButton",
};

export const Default = () => <IconButton content={<FaReact />} />;

export const Children = () => <IconButton>1</IconButton>;

export const Disabled = () => <IconButton disabled>D</IconButton>;

export const Size = () => {
  return (
    <FlexRowContainer>
      <IconButton content={<FaReact />} size="small" />
      <IconButton content={<FaReact />} size="medium" />
      <IconButton content={<FaReact />} size="large" />
    </FlexRowContainer>
  );
};

export const VariantPrimary = () => (
  <IconButton variant="primary">P</IconButton>
);
VariantPrimary.storyName = "Variant: Primary";

export const VariantSecondary = () => (
  <IconButton variant="secondary">S</IconButton>
);
VariantSecondary.storyName = "Variant: Secondary";

export const VariantPrimaryAndDisabled = () => (
  <IconButton disabled variant="primary">
    P
  </IconButton>
);
VariantPrimaryAndDisabled.storyName = "Variant: Primary And Disabled";

export const VariantSecondaryAndDisabled = () => (
  <IconButton disabled variant="secondary">
    S
  </IconButton>
);
VariantSecondaryAndDisabled.storyName =
  "Variant: Secondary And Disabled";
