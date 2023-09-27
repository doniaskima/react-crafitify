import { createElementContext } from "../hooks/use-element-context.hook";
import { CardContext } from "./Card.types";

 

export const [CardContextProvider, useCardContext] = createElementContext<CardContext>(
  'Card compound components cannot be rendered outside the Card component'
);
