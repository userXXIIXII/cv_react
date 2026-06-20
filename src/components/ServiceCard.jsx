const ServiceCard = ({ Icon, title, textSegments }) => {
    return (
        <div className="group bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            
            {/* Icône */}
            <div className="mb-6 flex justify-center">
                <Icon className="w-12 h-12 text-[#0d6efd] group-hover:text-[#cde1f8] transition-colors duration-300"></Icon>
            </div>


            <h3 className="text-xl font-semibold mb-4 text-center text-[#1e1e1e]">
                {title}
            </h3>
            {/* Titre */}

            {/* Contenu textuel avec styles dynamiques */}
            <p className="text-[#444] text-center leading-relaxed">
                {textSegments.map((segment, index) => {

                    // COnstruction dynamique des classes CSS
                    const styles = [
                        segment.bold ? "font-bold text-[#444]" : "",
                        segment.underline ? "underline underline-offset-4" : "",
                        segment.italic ? "italic" : ""
                    ].join(" ");

                    return (
                        <span key={index} className={styles}>
                            {segment.content}
                        </span>
                    )
                })}
            </p>
        </div>
    );
};

export default ServiceCard;