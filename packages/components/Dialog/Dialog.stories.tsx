import * as React from "react";
import { Dialog } from "./Dialog";
import { Button } from "../Button/Button";
import { ButtonSet } from "../ButtonSet";

export default {
  component: Dialog,
  title: "Components/Feedback/Dialog",
};

export const Default = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Dialog
      content="Dialog Content"
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button>Open Dialog!</Button>}
      title="Dialog Title"
    />
  );
};

export const VariantBottom = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Dialog
      content="Dialog Content"
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button>Open Dialog!</Button>}
      title="Dialog Title"
      variant="bottom"
    />
  );
};
VariantBottom.storyName = "Variant: Bottom";

export const VariantBottomWithButtonSet = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Dialog
      buttons={
        <ButtonSet>
          <Button>Cancel</Button>
          <Button>Confirm</Button>
        </ButtonSet>
      }
      content="Dialog Content"
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button>Open Dialog!</Button>}
      title="Dialog Title"
      variant="bottom"
    />
  );
};
VariantBottomWithButtonSet.storyName =
  "Variant: Bottom with Button Set";

export const VariantBottomWithNestedDialogs = () => {
  const [isFirstDialogOpen, setIsFirstDialogOpen] =
    React.useState<boolean>(true);
  const [isSecondDialogOpen, setSecondDialogIsOpen] =
    React.useState<boolean>(true);

  return (
    <Dialog
      buttons={
        <ButtonSet>
          <Button>Cancel</Button>
          <Dialog
            buttons={
              <ButtonSet>
                <Button>Cancel</Button>
                <Button>Confirm</Button>
              </ButtonSet>
            }
            content="Dialog Content"
            hasBackdrop={false}
            isOpen={isSecondDialogOpen}
            onOpen={() => setSecondDialogIsOpen(true)}
            onClose={() => setSecondDialogIsOpen(false)}
            trigger={<Button>Open Second Dialog!</Button>}
            title="Dialog Title"
            variant="bottom"
          />
        </ButtonSet>
      }
      content="Dialog Content"
      isOpen={isFirstDialogOpen}
      onOpen={() => setIsFirstDialogOpen(true)}
      onClose={() => setIsFirstDialogOpen(false)}
      trigger={<Button>Open Dialog!</Button>}
      title="Dialog Title"
      variant="bottom"
    />
  );
};
VariantBottomWithNestedDialogs.storyName =
  "Variant: Bottom with Nested Dialogs";

export const VariantCenter = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Dialog
      content="Dialog Content"
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button>Open Dialog!</Button>}
      title="Dialog Title"
      variant="center"
    />
  );
};
VariantCenter.storyName = "Variant: Center";

export const VariantCenterWithButtonSet = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Dialog
      buttons={
        <ButtonSet>
          <Button>Cancel</Button>
          <Button>Confirm</Button>
        </ButtonSet>
      }
      content="Dialog Content"
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button>Open Dialog!</Button>}
      title="Dialog Title"
      variant="center"
    />
  );
};
VariantCenterWithButtonSet.storyName =
  "Variant: Center with Button Set";

export const VariantCenterWithNestedDialogs = () => {
  const [isFirstDialogOpen, setIsFirstDialogOpen] =
    React.useState<boolean>(true);
  const [isSecondDialogOpen, setSecondDialogIsOpen] =
    React.useState<boolean>(true);

  return (
    <Dialog
      buttons={
        <ButtonSet>
          <Button>Cancel</Button>
          <Dialog
            buttons={
              <ButtonSet>
                <Button>Cancel</Button>
                <Button>Confirm</Button>
              </ButtonSet>
            }
            content="Dialog Content"
            hasBackdrop={false}
            isOpen={isSecondDialogOpen}
            onOpen={() => setSecondDialogIsOpen(true)}
            onClose={() => setSecondDialogIsOpen(false)}
            trigger={<Button>Open Second Dialog!</Button>}
            title="Dialog Title"
            variant="center"
          />
        </ButtonSet>
      }
      content="Dialog Content"
      isOpen={isFirstDialogOpen}
      onOpen={() => setIsFirstDialogOpen(true)}
      onClose={() => setIsFirstDialogOpen(false)}
      trigger={<Button>Open Dialog!</Button>}
      title="Dialog Title"
      variant="center"
    />
  );
};
VariantCenterWithNestedDialogs.storyName =
  "Variant: Center with Nested Dialogs";

export const VariantLeft = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Dialog
      content="Dialog Content"
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button>Open Dialog!</Button>}
      title="Dialog Title"
      variant="left"
    />
  );
};
VariantLeft.storyName = "Variant: Left";

export const VariantLeftWithButtonSet = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Dialog
      buttons={
        <ButtonSet>
          <Button>Cancel</Button>
          <Button>Confirm</Button>
        </ButtonSet>
      }
      content="Dialog Content"
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button>Open Dialog!</Button>}
      title="Dialog Title"
      variant="left"
    />
  );
};
VariantLeftWithButtonSet.storyName = "Variant: Left with Button Set";

export const VariantLeftWithNestedDialogs = () => {
  const [isFirstDialogOpen, setIsFirstDialogOpen] =
    React.useState<boolean>(true);
  const [isSecondDialogOpen, setSecondDialogIsOpen] =
    React.useState<boolean>(true);

  return (
    <Dialog
      buttons={
        <ButtonSet>
          <Button>Cancel</Button>
          <Dialog
            buttons={
              <ButtonSet>
                <Button>Cancel</Button>
                <Button>Confirm</Button>
              </ButtonSet>
            }
            content="Dialog Content"
            hasBackdrop={false}
            isOpen={isSecondDialogOpen}
            onOpen={() => setSecondDialogIsOpen(true)}
            onClose={() => setSecondDialogIsOpen(false)}
            trigger={<Button>Open Second Dialog!</Button>}
            title="Dialog Title"
            variant="left"
          />
        </ButtonSet>
      }
      content="Dialog Content"
      isOpen={isFirstDialogOpen}
      onOpen={() => setIsFirstDialogOpen(true)}
      onClose={() => setIsFirstDialogOpen(false)}
      trigger={<Button>Open Dialog!</Button>}
      title="Dialog Title"
      variant="left"
    />
  );
};
VariantLeftWithNestedDialogs.storyName =
  "Variant: Left with Nested Dialogs";

export const VariantRight = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Dialog
      content="Dialog Content"
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button>Open Dialog!</Button>}
      title="Dialog Title"
      variant="right"
    />
  );
};
VariantRight.storyName = "Variant: Right";

export const VariantRightWithButtonSet = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  return (
    <Dialog
      buttons={
        <ButtonSet>
          <Button>Cancel</Button>
          <Button>Confirm</Button>
        </ButtonSet>
      }
      content="Dialog Content"
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      trigger={<Button>Open Dialog!</Button>}
      title="Dialog Title"
      variant="right"
    />
  );
};
VariantRightWithButtonSet.storyName =
  "Variant: Right with Button Set";

export const VariantRightWithNestedDialogs = () => {
  const [isFirstDialogOpen, setIsFirstDialogOpen] =
    React.useState<boolean>(true);
  const [isSecondDialogOpen, setSecondDialogIsOpen] =
    React.useState<boolean>(true);

  return (
    <Dialog
      buttons={
        <ButtonSet>
          <Button>Cancel</Button>
          <Dialog
            buttons={
              <ButtonSet>
                <Button>Cancel</Button>
                <Button>Confirm</Button>
              </ButtonSet>
            }
            content="Dialog Content"
            hasBackdrop={false}
            isOpen={isSecondDialogOpen}
            onOpen={() => setSecondDialogIsOpen(true)}
            onClose={() => setSecondDialogIsOpen(false)}
            trigger={<Button>Open Second Dialog!</Button>}
            title="Dialog Title"
            variant="right"
          />
        </ButtonSet>
      }
      content="Dialog Content"
      isOpen={isFirstDialogOpen}
      onOpen={() => setIsFirstDialogOpen(true)}
      onClose={() => setIsFirstDialogOpen(false)}
      trigger={<Button>Open Dialog!</Button>}
      title="Dialog Title"
      variant="right"
    />
  );
};
VariantRightWithNestedDialogs.storyName =
  "Variant: Right with Nested Dialogs";
