import { FlexColumnContainer } from "../.storybook/components/FlexColumnContainer";
import { Separator } from "../Separator/Separator";

export default {
  component: Separator,
  title: "Components/Presentation/Separator",
};

export const Default = () => <Separator />;

export const Stroke = () => {
  return (
    <FlexColumnContainer>
      <Separator direction="horizontal" />
      <Separator direction="horizontal" stroke={2} />
      <Separator direction="horizontal" stroke={5} />
    </FlexColumnContainer>
  );
};

export const Horizontal = () => <Separator direction="horizontal" />;

export const Vertical = () => (
  <div style={{ height: "500px" }}>
    <Separator direction="vertical" />
  </div>
);
