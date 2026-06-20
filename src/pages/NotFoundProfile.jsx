import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-20 text-center">
            <h1 className="text-6xl font-bold text-[#444] mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-[#1e1e1e] mb-6">
                Oups ! Cette page n'existe pas.
            </h2>
            <p className="text-[#444] mb-8 max-w-md">
                Le profil GitHub que vous cherchez ou la page que vous essayez d'atteindre est introuvable.
            </p>
            
            {/* Utilisation de Link pour un retour fluide sans rechargement de la page */}
            <Link 
                to="/" 
                className="bg-[#0d6efd] text-white px-6 py-3 rounded-md font-medium hover:bg-[#0d6efd] transition-colors"
            >
                Retourner à l'accueil
            </Link>
        </div>
    );
};

export default NotFoundPage;