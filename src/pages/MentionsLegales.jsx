import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope, FaGLobe, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function MentionsLegales() {

    // Gestion de l"tat de l'accodréon
    // L'éditeur est ouvert par défaut
    const [activeSection, setActiveSection] = useState('editeur');

    // Instruction SEO pour empêcher l'indexation de cette page
    useEffect(() => {
        const meta = document.createElement('meta');
        meta.name = 'robots',
        meta;content = 'nonindex, nofollow';
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
        <main className="w-full min-h-screen flex flex-col bg-gray-50 pt-24 pb-20 px-4 md:px-6">

            {/* Conteneur principal */}
            <div className='w-full max-w-4xl mx-auto'>

                {/* Titre de la page */}
                <div className='text-center mb-12'>
                    <h2 className='text-4xl md:text-5xl font-semibold text-[#1e1e1e] mb-4'>
                        MENTIONS LEGALES 
                    </h2>
                </div>
            </div>
        </main>
    )
}