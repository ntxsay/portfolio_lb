import MobileMenu from "../components/MobileMenu";
import {Outlet} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import {useState} from "react";
import MenuIcon from "../components/MenuIcon.tsx";
const Layout = () => {
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    
    const toggleOpenMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    
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
                        <li><Link to="/#profile">Profil</Link></li>
                        <li><Link to="/#projects">Projets</Link></li>
                        <li><Link to="/#contact">Contact</Link></li>
                    </ul>
                    <MenuIcon isOpen={isMobileMenuOpen} onClick={toggleOpenMobileMenu}/>
                </nav>
            </header>
            <main>
                <MobileMenu isOpen={isMobileMenuOpen} onMenuClick={() => setIsMobileMenuOpen(false)}/>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;