import React from "react";
import "./Dropdown.scss";
export interface DropdownProps {
    position?: string;
    elementList?: React.ReactNode[];
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
