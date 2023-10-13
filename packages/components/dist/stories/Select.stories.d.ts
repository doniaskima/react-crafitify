import { Story } from "@storybook/react";
import * as React from "react";
import { SelectProps } from "../Select/Select";
declare const _default: {
    component: React.FC<SelectProps>;
    parameters: {
        chromatic: {
            delay: number;
        };
    };
    title: string;
};
export default _default;
export declare const Default: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, SelectProps>;
export declare const Placeholder: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, SelectProps>;
export declare const Selected: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, SelectProps>;
export declare const WithManySelectItems: Story<SelectProps>;
