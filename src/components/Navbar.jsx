import {useState} from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);

    const getLinkClass = ({ isActive }) => 
        `uppercase transition-colors duration-200 ${
            isActive ? "text-white" : "text-gray-400 hover:text-white"
        }`;

    return (
        /* 1. L'élément parent devient un <header> sémantique */
        <header className="bg-[#1e1e1e] text-white p-4">

            {/* 2. La balise <nav> englobe le contenu de navigation (logo + liens) */}
            <nav className="container mx-auto flex justify-between items-center">
                <h2 className="text-xl font-bold">Aarin DEB</h2>

                {/* Menu Desktop */}
                <div className="hidden md:flex space-x-6">
                    <NavLink to="/" className={getLinkClass}>
                        Accueil
                    </NavLink>
                    <NavLink to="/services" className={getLinkClass}>
                        Services
                    </NavLink>
                    <NavLink to="/realisations" className={getLinkClass}>
                        Réalisations
                    </NavLink>
                    <NavLink to="/blog" className={getLinkClass}>
                        Blog
                    </NavLink>
                    <NavLink to="/contact" className={getLinkClass}>
                        Contact
                    </NavLink>
                </div>
            
                {/* Bouton Hamburger (visible sur mobile/tablette) */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Menu principal">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </nav>

            {/* Menu Mobile (visible uniquement si ouvert) */}
            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col space-y-2">
                    <NavLink
                    to="/" 
                    className={getLinkClass}
                    onClick={() => setIsOpen(false)}
                    >
                        ACCUEIL
                    </NavLink>
                    <NavLink 
                    to="/services" 
                    className={getLinkClass}            
                    onClick={() => setIsOpen(false)}>
                        SERVICES
                    </NavLink>
                    <NavLink 
                    to="/realisations" 
                    className={getLinkClass}                
                    onClick={() => setIsOpen(false)}>
                        RÉALISATIONS
                    </NavLink>
                    <NavLink 
                    to="/blog" 
                    className={getLinkClass} 
                    onClick={() => setIsOpen(false)}>
                        BLOG
                    </NavLink>
                    <NavLink 
                    to="/contact" 
                    className={getLinkClass} 
                    onClick={() => setIsOpen(false)}>
                        CONTACT
                    </NavLink>
                </div>
            )}
            
        </header>
    );
}

export default Navbar;