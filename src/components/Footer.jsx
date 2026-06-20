import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };

    return (
        <footer className="bg-[#EEE] text-[#444] pt-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
                
                {/* Colonne 1 : Infos contact */}
                <div>
                    <h3 className="font-bold text-lg mb-4 text-[#1e1e1e]">Aarin DEB</h3>
                    <p>40 Avenue de la Divsion Leclerc<br/>94230 Cachan, France</p>
                    <p className="mt-2">Téléphone : 06 50 24 13 97</p>
                
                    <div className="flex space-x-4 mt-4">

                        <a href="/githubProfile" 
                        className="text-[#444] hover:text-[#0d6efd] text-2xl">
                            <FaGithub />
                        </a>

                        <a href="https://www.instagram.com/aarin_dev/" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-[#444] hover:text-[#0d6efd] text-2xl">
                            <FaInstagram />
                        </a>

                        <a href="https://www.linkedin.com/in/aarin-deb" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-[#444] hover:text-[#0d6efd] text-2xl">
                            <FaLinkedin />
                        </a>

                    </div>
                </div>
            

                {/* Colonne 2 : Liens utiles */}
                <div>
                    <h3 className="font-bold text-lg mb-4 text-[#1e1e1e]">Liens utiles</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="hover:text-[#0d6efd]">
                                <span className="text-[#0d6efd] mr-2">›</span>Accueil
                            </Link>
                        </li>
                        <li>
                            <Link to="/Services" className="hover:text-[#0d6efd]">
                                <span className="text-[#0d6efd] mr-2">›</span>Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/Realisations" className="hover:text-[#0d6efd]">
                                <span className="text-[#0d6efd] mr-2">›</span>Réalisations
                            </Link>
                        </li>
                        <li>
                            <Link to="/Blog" className="hover:text-[#0d6efd]">
                                <span className="text-[#0d6efd] mr-2">›</span>Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/Contact" className="hover:text-[#0d6efd]">
                                <span className="text-[#0d6efd] mr-2">›</span>Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/MentionsLegales" className="hover:text-[#0d6efd]">
                                <span className="text-[#0d6efd] mr-2">›</span>Mentions légales
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Colonne 3 : Dernières réalisations */}
                <div>
                    <h3 className="font-bold text-lg mb-4 text-[#1e1e1e]">Mes derniers réalisations</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link className="hover:text-[#0d6efd]">
                                <span className="text-[#0d6efd] mr-2">›</span>Fresh food
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-[#0d6efd]">
                                <span className="text-[#0d6efd] mr-2">›</span>Restaurant Akira
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-[#0d6efd]">
                                <span className="text-[#0d6efd] mr-2">›</span>Espace bien-être
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Colonne 4 : Derniers articles */}
                <div>
                    <h3 className="font-bold text-lg mb-4 text-[#1e1e1e]">Mes derniers articles</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link className="hover:text-[#0d6efd]">
                                <span className="text-[#0d6efd] mr-2">›</span>Coder son site en HTML/CSS
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-[#0d6efd]">
                                <span className="text-[#0d6efd] mr-2">›</span>Vendre ses produits sur le web
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-[#0d6efd]">
                                <span className="text-[#0d6efd] mr-2">›</span>Se positionner sur Google
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="bg-[#1e1e1e] text-white text-center py-4 text-sm border-b-20 border-white">
                © Designed by Aarin DEB
            </div>

            {/* Bouton retour en haut dynamique */}
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 p-6 rounded-full text-white shadow-lg transition-all duration-300 bg-[#298eff] hover:bg-[#1e73d4] z-50"
                >
                    <FaArrowUp />
                </button>
            )}
            
        </footer>
    );
}
export default Footer;