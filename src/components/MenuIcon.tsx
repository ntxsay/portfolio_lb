import React from "react";

interface MenuIconProp {
    isOpen: boolean
    onClick: () => void
}

const MenuIcon: React.FC<MenuIconProp> = (props) => {
    return (
        <div className={`menu-icon ${props.isOpen ? "active" : ""}`} onClick={props.onClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default MenuIcon;