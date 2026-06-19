import { FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';

const ContactDetails = () => {
    return (
        <section>
            <h3 className="text-2xl font-semibold text-[#1e1e1e] mb-2 pb-4 border-b-2 border-blue-600">
                Mes coordonnées
            </h3>

            <div className="mt-8 flex flex-col space-y-4 mb-8 text-gray-700">

                {/* Adresse */}
                <p className="flex items-start">
                    <FaMapMarkerAlt className='w-5 h-5 text-gray-800 mr-3 flex-shrink-0' />
                    40 Avenue de la Division Leclerc, 94230 Cachan, France
                </p>

                {/* Téléphone */}
                <p className='flex items-center text-lg'>
                    <FaMobileAlt className='w-5 h-5 text-gray-800 mr-3 flex-shrink-0' />
                    06 50 24 13 97
                </p>
            </div>

            {/* Intégration de GOggle Maps */}
            <div className='w-full h-64 md:h-80 bg-gray-200 rounded-md overflow-hidden shadow-inner'>
                <iframe 
                src="https://maps.google.com/maps?q=40%20avenue%20de%20la%20Division%20Leclerc,%2094230%20Cachan,%20France&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%"
                height="100%"
                style={{ vorder: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de localisation à Cachan">
                </iframe>
            </div>
        </section>
    );
};

export default ContactDetails;