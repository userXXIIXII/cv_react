import {useState} from "react";
import {Link} from "react-router-dom";

function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#1e1e1e] text-white p-4">
            <div className="container mx-auto flex justify-between">
                <h2 className="text-xl font-bold">Aarin DEB</h2>

                {/* Menu Desktop */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-blue-400">ACCUEIL</Link>
                    <Link to="/services" className="hover:text-blue-400">SERVICES</Link>
                    <Link to="/realisations" className="hover:text-blue-400">RÉALISATIONS</Link>
                    <Link to="/blog" className="hover:text-blue-400">BLOG</Link>
                    <Link to="/contact" className="hover:text-blue-400">CONTACT</Link>
                </div>
            

                {/* Bouton Hamburger (visible sur mobile/tablette) */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Menu Mobile (visible uniquement si ouvert) */}
            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col space-y-2">
                    <Link to="/" className="block py-2 hover:bg-gray-800" onClick={() => setIsOpen(false)}>ACCUEIL</Link>
                    <Link to="/services" className="block py-2 hover:bg-gray-800" onClick={() => setIsOpen(false)}>SERVICES</Link>
                    <Link to="/realisations" className="block py-2 hover:bg-gray-800" onClick={() => setIsOpen(false)}>RÉALISATIONS</Link>
                    <Link to="/blog" className="block py-2 hover:bg-gray-800" onClick={() => setIsOpen(false)}>BLOG</Link>
                    <Link to="/contact" className="block py-2 hover:bg-gray-800" onClick={() => setIsOpen(false)}>CONTACT</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;