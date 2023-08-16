import { Alert } from "./Alert";
import { FlexColumnContainer } from "../../../.storybook/components/FlexColumnContainer";

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

export const Variant = () => {
  return (
    <FlexColumnContainer>
      <Alert variant="error">There was an error!</Alert>
      <Alert variant="info">Here's some information.</Alert>
      <Alert variant="success">That was successful!</Alert>
      <Alert variant="warning">This is a warning!</Alert>
    </FlexColumnContainer>
  );
};

export const VariantAndCloseable = () => {
  return (
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
};

export const WithLongText = () => (
  <Alert variant="warning">
    I am some very long text for the Alert component!
  </Alert>
);
