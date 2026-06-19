const BlogCard = ({ article }) => {
    const { image, title, description, date } = article;

    return (
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">

            {/* Image de l'article */}
            <img src={image} 
            alt={`Image de l'article ${title}`} 
            className="w-full h-48 object-cover"/>

            {/* Corps de la carte */}
            <div className="p-6 flex-grow flex flex-col items-start text-left">
                <h3 className="text-2xl font-semibold text-[#1e1e1e] mb-4">
                    {title}
                </h3>

                <p className="text-gray-600 mb-6 flex-grow">
                    {description}
                </p>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                    Lire la suite
                </button>

                
            </div>
            {/* Pied de carte */}
            <div className="bg-gray-50 p-4 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                    Publié le {date}
                </p>
            </div>

        </div>
    );
};

export default BlogCard;