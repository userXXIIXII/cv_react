import ServiceCard from "../components/ServiceCard";
import { useServices } from '../data/useServices';
import bannerService from '../assets/banner.jpg';

function Services() {
    const { services } = useServices();

    return (
        <main className="w-full min-h-screen flex flex-col bg-[#EEE]-50">
            
            {/* 1. La Bannière (Pleine largeur, hauteur réduite, sans texte) */}
            <div 
                className="w-full h-32 md:h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${bannerService})` }}
            ></div>

            {/* 2. Le Contenu de la section */}
            <section className="py-20 px-6 max-w-7xl mx-auto w-full flex-grow">
                
                {/* Titre de la section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#1e1e1e] mb-4">
                        MON OFFRE DE SERVICES
                    </h2>
                    <p className="text-[#444] text-lg">
                        Voici les prestations sur lesquelles je peux intervenir.
                    </p>
                    <div className="h-1 w-48 bg-[#0d6efd] mx-auto mt-4"></div>
                </div>

                {/* Grille des cartes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard 
                            key={service.id}
                            Icon={service.Icon}
                            title={service.title}
                            textSegments={service.textSegments}
                        />
                    ))}
                </div>
            </section>
            
        </main>
    );
}

export default Services;