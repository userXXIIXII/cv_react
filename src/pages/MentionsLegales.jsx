import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope, FaGlobe, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function MentionsLegales() {
    const [activeSection, setActiveSection] = useState('editeur');

    useEffect(() => {
        const meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = 'noindex, nofollow';
        document.head.appendChild(meta);
        return () => document.head.removeChild(meta);
    }, []);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const activeClasses = (section) =>
        activeSection === section ? 'bg-[#0d6efd]/15 text-[#0d6efd]' : 'bg-white text-[#444] hover:bg-[#EEE]';

    return (
        <main className="w-full flex-grow flex flex-col bg-[#EEE] py-10 px-4 md:px-6">
            <div className='w-full max-w-4xl mx-auto'>
                <div className='text-center mb-12'>
                    <h2 className='text-4xl md:text-5xl font-semibold text-[#1e1e1e] mb-4'>
                        MENTIONS LEGALES
                    </h2>
                </div>
            </div>

            <div className='bg-white rounded-md shadow-md border border-gray-200 overflow-hidden'>

                <div className='border-b border-gray-200'>
                    <button
                        onClick={() => toggleSection('editeur')}
                        className={`w-full px-6 py-4 flex justify-between items-center transition-colors duration-200 ${activeClasses('editeur')}`}>
                        <span className='font-medium'>Éditeur du site</span>
                        {activeSection === 'editeur' ? <FaChevronUp /> : <FaChevronDown />}
                    </button>

                    {activeSection === 'editeur' && (
                        <div className='p-6 text-[#444]'>
                            <h3 className='text-2xl font-semibold text-[#1e1e1e] mb-4'>Aarin DEB</h3>
                            <div className='space-y-2'>
                                <p className='flex items-start'>
                                    <FaMapMarkerAlt className='w-5 h-5 mr-3 mt-1 text-[#444] flex-shrink-0' />
                                    40 Avenue de la Division Leclerc,<br />94230 Cachan, France
                                </p>
                                <p className='flex items-center'>
                                    <FaMobileAlt className='w-5 h-5 mr-3 mt-1 text-[#444] flex-shrink-0' />
                                    06 50 24 13 97
                                </p>
                                <p className='flex items-center text-[#0d6efd]'>
                                    <FaEnvelope className='w-5 h-5 mr-3 mt-1 text-[#444] flex-shrink-0' />
                                    <a href="mailto:aarindeb2003@gmail.com" className='hover:underline'>aarindeb2003@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <div className='border-b border-gray-200'>
                    <button
                        onClick={() => toggleSection('hebergeur')}
                        className={`w-full px-6 py-4 flex justify-between items-center transition-colors duration-200 ${activeClasses('hebergeur')}`}>
                        <span className='font-medium'>Hébergeur</span>
                        {activeSection === 'hebergeur' ? <FaChevronUp /> : <FaChevronDown />}
                    </button>

                    {activeSection === 'hebergeur' && (
                        <div className='p-6 text-[#444]'>
                            <h3 className='text-2xl font-semibold text-[#1e1e1e] mb-4'>Vercel Inc.</h3>
                            <div className='space-y-2'>
                                <p>
                                    440 N Barranca Ave #4133<br />
                                    Covina, CA 91723<br />
                                    États-Unis
                                </p>
                                <p className='flex items-center text-[#0d6efd] mt-4'>
                                    <FaGlobe className='w-5 h-5 mr-3 text-[#444] flex-shrink-0' />
                                    <a href="https://vercel.com" target="_blank" rel='noopener noreferrer' className='hover:underline'>www.vercel.com</a>
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <div>
                    <button
                        onClick={() => toggleSection('credits')}
                        className={`w-full px-6 py-4 flex justify-between items-center transition-colors duration-200 ${activeClasses('credits')}`}>
                        <span className='font-medium'>Crédits</span>
                        {activeSection === 'credits' ? <FaChevronUp /> : <FaChevronDown />}
                    </button>

                    {activeSection === 'credits' && (
                        <div className='p-6 text-[#444] space-y-4'>
                            <h3 className='text-2xl font-semibold text-[#1e1e1e] mb-4'>Crédits</h3>
                            <p>Site développé par Aarin DEB, étudiant du CEF.</p>
                            <p>Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/" target="_blank" rel="noopener noreferrer" className='text-[#0d6efd] hover:underline'>Pixabay</a>.</p>
                        </div>
                    )}
                </div>

            </div>
        </main>
    );
}

export default MentionsLegales;
