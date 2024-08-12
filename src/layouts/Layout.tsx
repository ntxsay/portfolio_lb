import MobileMenu from "../components/MobileMenu";
import {Outlet} from 'react-router-dom';
const Layout = () => {
    return (
        <>
            <header>
                <div className="header__logo">
                    <a href="#landing">
                        <span>{"<"}</span><h1>Loïc Bastaraud</h1><span>{"/>"}</span>
                    </a>
                </div>
                <nav>
                    <ul>
                        <li><a href="#profile">Profil</a></li>
                        <li><a href="#projects">Projets</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <button className="menu-icon" id="menuIcon" aria-label="Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </header>
            <main>
                <MobileMenu/>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;