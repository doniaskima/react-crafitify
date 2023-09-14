import React, { ReactNode, HTMLProps } from "react";
import "./Container.scss";
import { gutterSize } from "../layoutParams";

export interface ContainerProps extends HTMLProps<HTMLDivElement> {
  full?: boolean;
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = (props) => {
  let CustomContainer;
  let containerClass;

  if (props.full) {
    containerClass = "craftify-container-full";
  } else {
    containerClass = "craftify-container";
  }

  return (
    <div
      className={containerClass}
      {...props}
      style={{
        paddingRight: gutterSize,
        paddingLeft: gutterSize,
        ...(props.style || {}),
      }}
    >
      {props.children}
    </div>
  );
};

export default Container;
