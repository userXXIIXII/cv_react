const ProjectCard = ({ project }) => {

    const { image, title, description, technology } = project;

    return (
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">

            {/* Image du projet */}
            <img src="{image}" alt="`Image du projet ${title}`" 
            className="w-full h-48 object-cover"/>

            {/* Contenu principal de la carte */}
            <div className="p-6 flex-grow flex flex-col items-center">
                <h3 className="text-2xl font-bold text-[#1e1e1e] mb-2 text-center">
                    {title}
                </h3>
                <p className="text-gray-600 mb-6 text-center text-lg flex-grow">
                    {description}
                </p>
                <button 
                className="px-6 py-2 border-2 border-blue-600 text-blue-600 text-lg font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    Voir
                </button>
            </div>

            {/* Pied de carte */}
            <div className="bg-gray-100 p-4 border-t border-gray-200 my-auto">
                <p className="text-gray-600 text-center text-lg">
                    {`Site réalisé avec ${technology}`}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;