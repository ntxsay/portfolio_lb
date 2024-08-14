import React from "react";

interface MobileMenuProp {
    isOpen: boolean
    onMenuClick: () => void
}

const MobileMenu: React.FC<MobileMenuProp> = (props) => {
    
    const goToSection = (section: string) => {
        window.location.href = '/' + section;
        props.onMenuClick();
    }
    
    return (
        <section id="menu" className={`mobileMenu ${props.isOpen ? "active" : ""}`}>
            <ul className="mobileMenu__list">
                <li>
                    <button id="btnProfile" onClick={() => goToSection("#profile")}>Profil</button>
                </li>
                <li>
                    <button id="btnProjects" onClick={() => goToSection("#projects")}>Projets</button>
                </li>
                <li>
                    <button id="btnContact" onClick={() => goToSection("#contact")}>Contact</button>
                </li>
            </ul>
        </section>
    );
};

export default MobileMenu;