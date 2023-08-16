import { FlexRowContainer } from "../../../.storybook/components/FlexRowContainer";
import { Link } from "./Link";

export default {
  component: Link,
  title: "Components/Navigation/Link",
};

export const Default = () => (
  <div
    style={{
      background: "rgb(60 60 60)",
      padding: "6px",
      width: "fit-content",
    }}
  >
    <Link href="#">Default</Link>
  </div>
);

export const Variant = () => {
  return (
    <FlexRowContainer>
      <div style={{ background: "rgb(60 60 60)", padding: "6px" }}>
        <Link href="#" variant="primary">
          Primary
        </Link>
      </div>
      <div>
        <Link href="#" variant="secondary">
          Secondary
        </Link>
      </div>
    </FlexRowContainer>
  );
};
