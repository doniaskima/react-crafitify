import React from "react";
import { gutterSize } from "../layoutParams";
import styles from "./Col.scss";

const Col = (props) => {
  let colClass;
  if (props.grid) {
    colClass = props.grid.split(" ");
  }
  let classString = styles["col"];
  colClass.forEach((cls) => {
    if (cls.split("-").includes("offset")) {
      classString += ` ${styles[cls]}`;
    } else {
      classString += ` ${styles[`col-${cls}`]}`;
    }
  });

  return (
    <div className={classString} {...props}>
      {props.children}
    </div>
  );
};

export default Col;
