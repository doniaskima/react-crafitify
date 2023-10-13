declare const cardStyles: {
    base: (props?: ({
        bordered?: boolean | null | undefined;
        color?: "gray" | "white" | "slate" | "zinc" | null | undefined;
        radius?: "base" | "none" | "sm" | "md" | "lg" | null | undefined;
        shadow?: "base" | "none" | "sm" | "md" | "lg" | "xl" | null | undefined;
        withDivider?: boolean | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    body: (props?: ({
        size?: "base" | "sm" | "md" | "lg" | null | undefined;
        withDivider?: boolean | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    footer: (props?: ({
        size?: "base" | "sm" | "md" | "lg" | null | undefined;
        radius?: "base" | "none" | "sm" | "md" | "lg" | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    header: (props?: ({
        size?: "base" | "sm" | "md" | "lg" | null | undefined;
        radius?: "base" | "none" | "sm" | "md" | "lg" | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    image: (props?: ({
        radius?: "base" | "none" | "sm" | "md" | "lg" | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
};
export { cardStyles };
