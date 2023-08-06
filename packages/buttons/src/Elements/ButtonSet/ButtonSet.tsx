import * as React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
 

export interface ButtonSetProps extends React.ComponentPropsWithoutRef<"ul"> {
  children: React.ReactNode;
  flexDirection?: "row" | "column";
}

const StyledButtonSet = styled.ul`
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
  width: 100%;

  &.buttonSetColumn {
    align-items: center;
    flex-direction: column;
  }
`;

const StyledButtonSetItem = styled.li`
  list-style: none;
`;

export const ButtonSet: React.FC<ButtonSetProps> = (props) => {
  const { children, className, flexDirection = "row", ...rest } = props;

  return (
    <StyledButtonSet
      className={`buttonSet ${flexDirection === "column" ? "buttonSetColumn" : ""} ${className}`}
      role="list"
      {...rest}
    >
      {React.Children.map(children, (button, index) => {
        if ((button as React.ReactElement).type === Button) {
          return (
            <StyledButtonSetItem
              key={index}
              role="listitem"
            >
              {button}
            </StyledButtonSetItem>
          );
        } else {
          return null;
        }
      })}
    </StyledButtonSet>
  );
};

ButtonSet.displayName = "ButtonSet";
