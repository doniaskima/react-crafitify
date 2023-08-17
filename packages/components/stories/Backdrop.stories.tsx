import { Backdrop } from "../Backdrop";

export default {
  component: Backdrop,
  title: "Components/Backdrop",
};

export const Default = () => <Backdrop />;

export const NoBackground = () => <Backdrop showBackground={false} />;
