import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-grow text-center px-6 py-20 bg-gray-50">

            <h1 className="text-9xl font-extrabold text-blue-600 mb-4 tracking-widest drop-shadow-sm">
                404
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold text-[#1e1e1e] mb-6">
                Page introuvable
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-md">
                Désolé, la page que vous recherchez semble avoir disparu, a été déplacée ou n'a peut-être jamais existé.
            </p>
    
            <Link 
                to="/" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
                Retourner à l'accueil
            </Link>
            
        </div>
    );
};

export default NotFound;