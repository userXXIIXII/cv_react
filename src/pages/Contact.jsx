import contactBg from '../assets/contact-bg.jpg';
import ContactForm from '../components/ContactForm';
import ContactDetails from '../components/ContactDetails';

function Contact() {
    return (
        <main className='relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-6'>

            {/* Arrière-plan */}
            <div 
                className='absolute inset-0 bg-cover bg-center z-0' 
                style={{ backgroundImage: `url(${contactBg})` }}
            >
                <div className='absolute inset-0 bg-[rgba(0,105,255,0.5)]'></div>
            </div>


            {/* Conteneur principal */}
            <div className='relative z-10 w-full max-w-6xl bg-white rounded-lg shadow-2xl p-8 md:p-12 lg:p-16 my-8'>

                {/* Titre de la section */}
                <div className='text-center mb-12'>
                    <h2 className='text-4xl md:text-5xl font-semibold text-[#1e1e1e] mb-4'>
                        ME CONTACTER
                    </h2>
                    <p className='text-gray-600 text-lg'>
                        Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
                    </p>
                    <div className='h-1 w-48 bh-blue-600 mx-auto mt-6'></div>
                </div>
            </div>
        </main>
    );
}

export default Contact;