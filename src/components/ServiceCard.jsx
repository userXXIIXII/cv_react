const ServiceCard = ({ Icon, title, textSegments }) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            
            {/* Icône */}
            <div className="mb-6 flex justify-center">
                <Icon className="w-12 h-12 text-blue-600"></Icon>
            </div>


            <h3 className="text-xl font-semibold mb-4 text-center text-[#1e1e1e]">
                {title}
            </h3>
            {/* Titre */}

            {/* Contenu textuel avec styles dynamiques */}
            <p className="text-gray-600 text-center leading-relaxed">
                {textSegments.map((segment, index) => {

                    // COnstruction dynamique des classes CSS
                    const styles = [
                        segment.bold ? "font-bold text-[#1e1e1e]" : "",
                        segment.underline ? "underline decoration-blue-500 underline-offset-4" : "",
                        segment.italic ? "italic" : ""
                    ].join(" ");

                    return (
                        <span key={index} className="{styles}">
                            {segment.content}
                        </span>
                    )
                })}
            </p>
        </div>
    );
};

export default ServiceCard;