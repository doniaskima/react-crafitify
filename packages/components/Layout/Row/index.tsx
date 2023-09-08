import React, { ReactNode, HTMLProps } from "react";
import { gutterSize } from "../layoutParams";

interface RowProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

const Row: React.FC<RowProps> = (props) => {
  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
    marginRight: `-${gutterSize}`,
    marginLeft: `-${gutterSize}`,
    ...(props.style || {}),
  };

  return (
    <div {...props} style={rowStyle}>
      {props.children}
    </div>
  );
};

export default Row;
