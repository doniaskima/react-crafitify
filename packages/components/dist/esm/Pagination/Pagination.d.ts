import * as React from "react";
export type PaginationVariant = "primary" | "secondary";
export interface PaginationProps extends React.ComponentPropsWithoutRef<"div"> {
    currentPage: number;
    onChangePage: (page: number) => void;
    pages: number;
    variant?: PaginationVariant;
}
export declare const Pagination: React.FC<PaginationProps>;
