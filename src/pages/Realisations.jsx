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
                </div>
            </section>
        </main>
    );
}

export default Realisations;