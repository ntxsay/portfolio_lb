
const MobileMenu = () => {
    return (
        <section id="menu" className="mobileMenu">
            <ul className="mobileMenu__list">
                <li>
                    <button id="btnProfile">Profil</button>
                </li>
                <li>
                    <button id="btnProjects">Projets</button>
                </li>
                <li>
                    <button id="btnContact">Contact</button>
                </li>
            </ul>
        </section>
    );
};

export default MobileMenu;