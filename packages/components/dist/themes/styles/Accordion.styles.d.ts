declare const accordionStyles: {
    base: (props?: ({
        color?: "gray" | "white" | "slate" | "zinc" | null | undefined;
        radius?: "base" | "none" | "sm" | "md" | "lg" | null | undefined;
        shadow?: "base" | "none" | "sm" | "md" | "lg" | "xl" | null | undefined;
        shadowColor?: "none" | "gray" | "slate" | "zinc" | null | undefined;
        size?: "sm" | "md" | "lg" | "xl" | null | undefined;
        tone?: "transparent" | "light" | "solid" | null | undefined;
        bordered?: boolean | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    body: (props?: ({
        size?: "sm" | "md" | "lg" | "xl" | null | undefined;
        bordered?: boolean | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    header: (props?: ({
        activeColor?: "black" | "blue" | "gray" | "green" | "purple" | "red" | "white" | "yellow" | "dark" | null | undefined;
        size?: "sm" | "md" | "lg" | "xl" | null | undefined;
        state?: "active" | "inactive" | null | undefined;
        tone?: "light" | "solid" | null | undefined;
        radius?: "base" | "none" | "sm" | "md" | "lg" | null | undefined;
        bordered?: boolean | null | undefined;
        withRing?: boolean | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    icon: (props?: ({
        state?: "active" | "inactive" | null | undefined;
        size?: "sm" | "md" | "lg" | "xl" | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
};
export { accordionStyles };
