// components/MessageBanner.stories.tsx
import React from "react";
import { FlexColumnContainer } from "../.storybook/components/FlexColumnContainer";
import MessageBanner from "../Alert/MessageBanner";

export default {
  component: MessageBanner,
  title: "Components/Feedback/MessageBanner",
};

export const Default = () => (
  <MessageBanner>Warning: I'm an evil error message!!</MessageBanner>
);
