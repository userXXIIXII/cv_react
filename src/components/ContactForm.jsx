const ContactForm = () => {
    return (
        <section>
            <h3 className="text-2xl font-semibold text-[#1e1e1e] mb-2 pb-4 border-b-2 border-[#0d6efd]">
                Formulaire de contact
            </h3>
            <form className="mt-8 flex flex-col space-y-4">
                <input 
                type="text" 
                placeholder="Votre nom" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d6efd] focus:border-transparent"/>

                <input 
                type="text" 
                placeholder="Votre adresse email" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d6efd] focus:border-transparent"/>

                <input 
                type="text" 
                placeholder="votre numéro de téléphone" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d6efd] focus:border-transparent"/>

                <input 
                type="text" 
                placeholder="Sujet" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d6efd] focus:border-transparent"/>

                <textarea 
                placeholder="Votre message"
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d6efd] focus:border-transparent resize-y">
                </textarea>

                <div className="text-center mt-4">
                    <button type="submit" className="bg-[#0d6efd] text-white px-8 py-3 rounded-md font-medium hover:bg-[#0d6efd] transition-colors duration-300">
                        Envoyer
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;