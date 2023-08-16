import { FaReact } from "react-icons/fa";
import { Badge } from "./Badge";
import { FlexRowContainer } from "../../../.storybook/components/FlexRowContainer";

export default {
  component: Badge,
  title: "Components/Presentation/Badge",
};

export const Default = () => (
  <Badge content={<FaReact />} title="ReactJS" />
);

export const Size = () => {
  return (
    <FlexRowContainer>
      <Badge content={<FaReact />} size="small" title="ReactJS" />
      <Badge content={<FaReact />} size="medium" title="ReactJS" />
      <Badge content={<FaReact />} size="large" title="ReactJS" />
    </FlexRowContainer>
  );
};
