import React from "react";
import { Tooltip } from "react-craftify-core";
 

const TooltipComponent = (props) => {

  return (
    <div>
      <Tooltip text="I'm a default tooltip!">Hover me!</Tooltip>
    </div>
  )
}

export default TooltipComponent;