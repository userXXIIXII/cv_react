import ProjectCard from "../components/ProjectCard";
import { useProject } from '../data/useProject';
import bannerImage from '../assets/banner.jpg';

function Realisations() {

    const { projects } = useProject();

    return (
        <main className="w-full min-h-screen flex flex-col bg-gray-50">

            {/* 1. La bannière */}
            <div className="w-full h-32 md:h-40 bg-cover bg-center"
            style={{ backgroundImage: `url(${bannerImage})`}}></div>

            {/* 2. Contenu de la section Portfolio */}
            <section className="py-20 px-6 max-w-7xl mx-auto w-full flex-grow">

                {/* Titre de la section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold text-[#1e1e1e] mb-4">
                        PORTFOLIO
                    </h2>
                    <p className="text-[#444] text-lg">
                        Voici quelques-unes de mes réalisations.
                    </p>
                    <div className="h-1 w-48 bg-[#0d6efd] mx-auto mt-6"></div>
                </div>

                {/* Grille de cartes dynamiques des projets */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard 
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Realisations;