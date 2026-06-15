import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-[#EEE] text-[#444] pt-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
                
                {/* Colonne 1 : Infos contact */}
                <div>
                    <h3 className="font-bold text-lg mb-4 text-[#1e1e1e]">Aarin DEB</h3>
                    <p>40 Avenue de la Divsion Leclerc<br/>94230 Cachan, France</p>
                    <p className="mt-2">Téléphone : 06 50 24 13 97</p>
                
                    <div className="flex space-x-4 mt-4">
                        <a href="https://github.com/userXXIIXII">GitHub</a>
                        <a href="https://www.instagram.com/aarin_dev/">Instagram</a>
                        <a href="www.linkedin.com/in/aarin-deb">LinkedIn</a>
                    </div>
                </div>
            

                {/* Colonne 2 : Liens utiles */}
                <div>
                    <h3 className="font-bold text-lg mb-4 text-[#1e1e1e]">Liens utiles</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-[#0d6efd]">Accueil</Link></li>
                        <li><Link to="/Services" className="hover:text-[#0d6efd]">Services</Link></li>
                        <li><Link to="/Realisations" className="hover:text-[#0d6efd]">Réalisations</Link></li>
                        <li><Link to="/Blog" className="hover:text-[#0d6efd]">Blog</Link></li>
                        <li><Link to="/Contact" className="hover:text-[#0d6efd]">Contact</Link></li>
                    </ul>
                </div>

                {/* Colonne 3 : Dernières réalisations */}
                <div>
                    <h3 className="font-bold text-lg mb-4 text-[#1e1e1e]">Mes derniers articles</h3>
                    <ul className="space-y-2">
                        <li><Link className="hover:text-[#0d6efd]">Fresh food</Link></li>
                        <li><Link className="hover:text-[#0d6efd]">Restaurant Akira</Link></li>
                        <li><Link className="hover:text-[#0d6efd]">Espace bien-être</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer;