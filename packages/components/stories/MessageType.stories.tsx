// components/MessageType.stories.tsx
import React from "react";
import { FlexColumnContainer } from "../.storybook/components/FlexColumnContainer";
import MessageType from "../Alert/MessageType";

export default {
  component: MessageType,
  title: "Components/Feedback/MessageType",
};

export const Error = () => (
  <MessageType type="error">There was an error!</MessageType>
);

export const Warning = () => (
  <MessageType type="warning">Here's some information.</MessageType>
);

export const Success = () => (
  <MessageType type="success">That was successful!</MessageType>
);
