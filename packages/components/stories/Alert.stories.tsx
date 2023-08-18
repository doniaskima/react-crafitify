import React from "react";
import { Alert } from "../Alert/Alert";
import { FlexColumnContainer } from "../.storybook/components/FlexColumnContainer";

export default {
  component: Alert,
  title: "Components/Feedback/Alert",
};

export const Default = () => <Alert>Default Alert!</Alert>;

export const Closeable = () => (
  <Alert closeable variant="info">
    I am a closeable Alert component!
  </Alert>
);

export const Variant = () => (
  <FlexColumnContainer>
    <Alert variant="error">There was an error!</Alert>
    <Alert variant="info">Here's some information.</Alert>
    <Alert variant="success">That was successful!</Alert>
    <Alert variant="warning">This is a warning!</Alert>
  </FlexColumnContainer>
);

export const VariantAndCloseable = () => (
  <FlexColumnContainer>
    <Alert closeable variant="error">
      There was an error!
    </Alert>
    <Alert closeable variant="info">
      Here's some information.
    </Alert>
    <Alert closeable variant="success">
      That was successful!
    </Alert>
    <Alert closeable variant="warning">
      This is a warning!
    </Alert>
  </FlexColumnContainer>
);

export const WithLongText = () => (
  <Alert variant="warning">
    I am some very long text for the Alert component!
  </Alert>
);

export const CustomColorsAndText = () => (
  <FlexColumnContainer>
    <Alert variant="info" iconColor="purple" backgroundColor="lightyellow">
      Customized Alert with purple icon and light yellow background!
    </Alert>
    <Alert variant="error" iconColor="green" backgroundColor="pink">
      Customized Alert with green icon and pink background!
    </Alert>
  </FlexColumnContainer>
);

export const FilledBackground = () => (
  <FlexColumnContainer>
    <Alert variant="info" backgroundColor="lightblue">
      This alert has a filled background with matching border color.
    </Alert>
    <Alert variant="error" backgroundColor="lightcoral">
      This alert has a filled background with matching border color.
    </Alert>
  </FlexColumnContainer>
);
