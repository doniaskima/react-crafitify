import { Typography, TypographyProps } from "../Typography/Typography";
import { Story } from "@storybook/react";

export default {
  component: Typography,
  title: "Components/Presentation/Typography",
};

const Template: Story<
  Omit<TypographyProps, "children"> &
    Pick<Partial<TypographyProps>, "children">
> = (args) => (
  <Typography children="" {...args} variant="secondary" />
);

export const Default = () => (
  <div
    style={{
      background: "rgb(60 60 60)",
      padding: "6px",
      width: "fit-content",
    }}
  >
    <Typography>Default Typography</Typography>
  </div>
);

export const VariantPrimary: Story<TypographyProps> = () => (
  <div
    style={{
      background: "rgb(60 60 60)",
      padding: "6px",
      width: "fit-content",
    }}
  >
    <Typography>Primary Variant Typography</Typography>
  </div>
);
VariantPrimary.storyName = "Variant: Primary";

export const VariantSecondary: Story<TypographyProps> = () => (
  <Typography variant="secondary">
    Secondary Variant Typography
  </Typography>
);
VariantSecondary.storyName = "Variant: Secondary";

export const TypeH1 = Template.bind({});
TypeH1.args = {
  children: "h1. Typography",
  type: "h1",
};
TypeH1.storyName = "Type: H1";

export const TypeH2 = Template.bind({});
TypeH2.args = {
  children: "h2. Typography",
  type: "h2",
};
TypeH2.storyName = "Type: H2";

export const TypeH3 = Template.bind({});
TypeH3.args = {
  children: "h3. Typography",
  type: "h3",
};
TypeH3.storyName = "Type: H3";

export const WeightLight = Template.bind({});
WeightLight.args = {
  children: "Typography Light Weight",
  weight: "light",
};
WeightLight.storyName = "Weight: Light";

export const WeightNormal = Template.bind({});
WeightNormal.args = {
  children: "Typography Normal Weight",
  weight: "normal",
};
WeightNormal.storyName = "Weight: Normal";

export const WeightBold = Template.bind({});
WeightBold.args = {
  children: "Typography Bold Weight",
  weight: "bold",
};
WeightBold.storyName = "Weight: Bold";
