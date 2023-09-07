// components/MessageAlert.stories.tsx
import React from "react";
import { FlexColumnContainer } from "../.storybook/components/FlexColumnContainer";
import MessageAlert from "../Alert/MessageAlert";

export default {
  component: MessageAlert,
  title: "Components/Feedback/MessageAlert",
};

export const Default = () => (
  <MessageAlert variant="default">This is the default look</MessageAlert>
);

export const Error = () => (
  <MessageAlert variant="error">A problem has occurred!</MessageAlert>
);

export const Warning = () => (
  <MessageAlert variant="warning">Are you sure you wanna do this?</MessageAlert>
);

export const Neutral = () => (
  <MessageAlert variant="neutral">This might help you!</MessageAlert>
);

export const Success = () => (
  <MessageAlert variant="success">You did something good!</MessageAlert>
);

export const Uhm = () => (
  <MessageAlert variant="uhm">In case something went wrong!</MessageAlert>
);

export const MultipleMessages = () => (
    <FlexColumnContainer>
      <MessageAlert variant="default">This is the default look</MessageAlert>
      <MessageAlert variant="error">A problem has occurred!</MessageAlert>
      <MessageAlert variant="warning">Are you sure you wanna do this?</MessageAlert>
      <MessageAlert variant="neutral">This might help you!</MessageAlert>
      <MessageAlert variant="success">You did something good!</MessageAlert>
      <MessageAlert variant="uhm">In case something went wrong!</MessageAlert>
    </FlexColumnContainer>
);