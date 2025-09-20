import * as React from "react";
import { SwitchProps } from "../Switch/Switch";
declare const _default: {
    component: React.FC<SwitchProps>;
    parameters: {
        chromatic: {
            delay: number;
        };
    };
    title: string;
};
export default _default;
export declare const Default: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, Omit<SwitchProps, "onClick" | "isOn">>;
export declare const WithLabel: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, Omit<SwitchProps, "onClick" | "isOn">>;
