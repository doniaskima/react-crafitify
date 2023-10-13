import * as React from "react";
import { IconButtonProps } from "../IconButton/IconButton";
export type BadgeSize = "small" | "medium" | "large";
export interface BadgeProps extends IconButtonProps {
    title: string;
}
export declare const Badge: React.FC<BadgeProps>;
