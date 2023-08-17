import { FlexColumnContainer } from "../.storybook/components/FlexColumnContainer";
import { Status } from "../Status/Status";

export default {
  component: Status,
  title: "Components/Presentation/Status",
};

export const Default = () => <Status />;

export const Variant = () => {
  return (
    <FlexColumnContainer>
      <Status variant="online" label="Online" />
      <Status variant="away" label="Away" />
      <Status variant="busy" label="Busy" />
      <Status variant="offline" label="Offline" />
    </FlexColumnContainer>
  );
};
