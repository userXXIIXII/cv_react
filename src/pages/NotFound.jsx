import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-grow text-center px-6 py-20 bg-[#EEE]">

            <h1 className="text-9xl font-extrabold text-[#0d6efd] mb-4 tracking-widest drop-shadow-sm">
                404
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold text-[#1e1e1e] mb-6">
                Page introuvable
            </h2>
            <p className="text-[#444] mb-10 text-lg max-w-md">
                Désolé, la page que vous recherchez semble avoir disparu, a été déplacée ou n'a peut-être jamais existé.
            </p>
    
            <Link 
                to="/" 
                className="bg-[#0d6efd] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#0d6efd] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
                Retourner à l'accueil
            </Link>
            
        </div>
    );
};

export default NotFound;