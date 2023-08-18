import { Backdrop } from "../Backdrop";

export default {
  component: Backdrop,
  title: "Components/Utilities/Backdrop",
};

export const Default = () => <Backdrop />;

export const NoBackground = () => <Backdrop showBackground={false} />;
