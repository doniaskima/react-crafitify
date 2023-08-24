import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import LData from "./Mouse.json";

export default ({ style }: { style?: React.CSSProperties }) => {
  return (
    <Player
      autoplay
      loop
      src={LData}
      style={{
        ...style,
      }}
    />
  );
};
