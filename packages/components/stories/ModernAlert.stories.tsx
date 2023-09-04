import React from "react";
import { FlexColumnContainer } from "../.storybook/components/FlexColumnContainer";
import ModernAlert from "../Alert/ModernAlert";

export default {
  component: ModernAlert,
  title: "Components/Feedback/ModernAlert",
};


export const Simple = () => <ModernAlert variant="simple">Simple Alert!</ModernAlert>;

export const Success = () => (
  <ModernAlert variant="success">Success Alert Message</ModernAlert>
);

export const Danger = () => (
  <ModernAlert variant="danger">Danger Alert Message</ModernAlert>
);

export const Warning = () => (
  <ModernAlert variant="warning">Warning Alert Message</ModernAlert>
);

export const CustomColorsAndText = () => (
  <FlexColumnContainer>
    <ModernAlert variant="simple" backgroundColor="#ebebeb">
      Customized Simple Alert with custom background color!
    </ModernAlert>
    <ModernAlert variant="success" backgroundColor="#a8f0c6">
      Customized Success Alert with custom background color!
    </ModernAlert>
    <ModernAlert variant="danger" backgroundColor="#f7a7a3">
      Customized Danger Alert with custom background color!
    </ModernAlert>
    <ModernAlert variant="warning" backgroundColor="#ffd48a">
      Customized Warning Alert with custom background color!
    </ModernAlert>
  </FlexColumnContainer>
);
