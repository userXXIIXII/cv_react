const ProjectCard = ({ project }) => {

    const { image, title, description, technology } = project;

    return (
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">

            {/* Image du projet */}
            <img 
                src={image} 
                alt={`Image du projet ${title}`} 
                className="w-full h-48 object-cover"
            />

            {/* Contenu principal de la carte */}
            <div className="p-6 flex-grow flex flex-col items-center">
                <h3 className="text-2xl font-bold text-[#1e1e1e] mb-2 text-center">
                    {title}
                </h3>
                <p className="text-[#444] mb-6 text-center text-lg flex-grow">
                    {description}
                </p>
                <button 
                className="px-6 py-2 border-2 border-[#0d6efd] text-[#0d6efd] text-lg font-semibold rounded-lg hover:bg-[#0d6efd] hover:text-white transition-colors duration-300">
                    Voir
                </button>
            </div>

            {/* Pied de carte */}
            <div className="bg-[#EEE] p-4 border-t border-gray-200 my-auto">
                <p className="text-[#444] text-center text-lg">
                    {`Site réalisé avec ${technology}`}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;