import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope, FaGlobe, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function MentionsLegales() {

    // Gestion de l"tat de l'accodréon
    // L'éditeur est ouvert par défaut
    const [activeSection, setActiveSection] = useState('editeur');

    // Instruction SEO pour empêcher l'indexation de cette page
    useEffect(() => {
        const meta = document.createElement('meta');
        meta.name = 'robots',
        meta.content = 'nonindex, nofollow';
        document.head.appendChild(meta);

        // Retirer la balise audn on quitte la page
        return () => {
            document.head.removeChild(meta);
        };
    }, []);

    // Fonction pour basculer l'ouverture/fermeture des sections
    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <main className="w-full flex-grow flex flex-col bg-gray-50 py-10 px-4 md:px-6">

            {/* Conteneur principal */}
            <div className='w-full max-w-4xl mx-auto'>

                {/* Titre de la page */}
                <div className='text-center mb-12'>
                    <h2 className='text-4xl md:text-5xl font-semibold text-[#1e1e1e] mb-4'>
                        MENTIONS LEGALES 
                    </h2>
                </div>
            </div>

            {/* Accordéon */}
            <div className='bg-white rounded-md shadow-md border border-gray-200 overflow-hidden'>

                {/* Section 1 : éditeur du site */}
                <div className='border-b border-gray-200'>
                    <button
                        onClick={() => toggleSection('editeur')}
                        className= {`w-full px-6 py-4 flex justify-between items-center transition-colors duration-200 ${
                        activeSection === 'editeur' ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-800 hover:bg-gray-50'
                        }`} >
                        <span className='font-medium'>Editeur du site</span>
                        {activeSection === 'editeur' ? <FaChevronUp /> : <FaChevronDown />}
                    </button>

                    {/* Contenu Editeur */}
                    {activeSection === 'editeur' && (
                        <div className='p-6 text-gray-700'>
                            <h3 className='text-2xl font-semibold text-[#1e1e1e] mb-4'>
                                Aarin DEB
                            </h3>
                            <div className='space-y-2'>
                                <p className='flex items-start'>
                                    <FaMapMarkerAlt className='w-5 h-5 mr-3 mt-1 text-gray-800 flex-shrink-0' />
                                    40 Avenue de la Division Leclerc,<br />94230 Cachan, France
                                </p>
                                <p className='flex items-center'>
                                    <FaMobileAlt className='w-5 h-5 mr-3 mt-1 text-gray-800 flex-shrink-0' />
                                    06 50 24 13 97
                                </p>
                                <p className='flex items-center text-blue-600'>
                                    <FaEnvelope className='w-5 h-5 mr-3 mt-1 text-gray-800 flex-shrink-0' />
                                    <a 
                                    href="mailto:aarindeb2003@gmail.com" 
                                    className='hover:underline'>
                                        aarindeb2003@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Section 2 : Hébergeur */}
                <div className='border-b border-gray-200'>
                    <button 
                            onClick={() => toggleSection('hebergeur')}
                            className={`w-full px-6 py-4 flex justify-between items-center transition-colors duration-200 ${
                                activeSection === 'hebergeur' ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-800 hover:bg-gray-50'
                            }`}
                        >
                            <span className="font-medium">Hébergeur</span>
                            {activeSection === 'hebergeur' ? <FaChevronUp /> : <FaChevronDown />}
                        </button>

                        {/* Contenu Hébergeur */}
                        {activeSection === 'hebergeur' && (
                            <div className='p-6 text-gray-700'>
                                <h3 className='text-2xl font-semibold text-[#1e1e1e] mb-4'>
                                    Vercel Inc.
                                </h3>
                                <div className='space-y-2'>
                                    <p>
                                        440 N Barranca Ave #4133<br />
                                        Convina, CA 91723<br />
                                        États-Unis
                                    </p>
                                    <p className='flex items-center text-blue-600 mt-4'>
                                        <FaGlobe className='w-5 h-5 mr-3 text-gray-800 flex-shrink-0' />
                                        <a 
                                        href="https:/vercel.com" 
                                        target="_blank"
                                        rel='noopener noreferrer'
                                        className='hover:underline'>
                                            www.vercel.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        )}
                </div>
                
                {/* Section 3 : Crédits */}
                <div>
                    <button
                    onClick={() => toggleSection('credits')}
                    className={`w-full px-6 py-4 flex justify-between items-center transition-colors duration-200 ${
                        activeSection === 'credits' ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-800 hover:bg-gray-50'
                    }`}>
                        <span className='font-medium'>Crédits</span>
                        {activeSection === 'credits' ? <FaChevronUp /> : <FaChevronDown />}
                    </button>

                    {/* Contenu Crédits */}
                    {activeSection === 'credits' && (
                        <div className='p-6 text-gray-700 space-y-4'>
                            <h3 className='text-2xl font-semibold text-[#1e1e1e] mb-4'>
                                Crédits
                            </h3>
                            <p>
                                Site développé par Aarin DEB, étudiant du CEF.
                            </p>
                            <p>
                                Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>Pixabay</a>.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
};

export default MentionsLegales;