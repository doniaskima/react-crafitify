// components/MessageType.stories.tsx
import React from "react";
import { FlexColumnContainer } from "../.storybook/components/FlexColumnContainer";
import MessageType from "../Alert/MessageType";

export default {
  component: MessageType,
  title: "Components/Feedback/MessageType",
};

export const Error = () => (
  <MessageType type="error">Pastrami biltong sirloin alcatra...</MessageType>
);

export const Warning = () => (
  <MessageType type="warning">Pastrami fatback frankfurter...</MessageType>
);

export const Success = () => (
  <MessageType type="success">Pig tri-tip ground round...</MessageType>
);
