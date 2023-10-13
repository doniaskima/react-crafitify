/// <reference types="react" />
import { CardProps } from './Card.types';
declare const Card: import("react").ForwardRefExoticComponent<Omit<CardProps, "ref"> & import("react").RefAttributes<HTMLDivElement>> & {
    displayName?: string | undefined;
} & {
    Header: import("./CardHeader/CardHeader.types").CardHeaderComponent;
    Image: import("./CardImage/CardImage.types").CardImageComponent;
    Body: import("./CardBody/CardBody.types").CardBodyComponent;
    Footer: import("./CardFooter/CardFooter.types").CardFooterComponent;
};
export default Card;
