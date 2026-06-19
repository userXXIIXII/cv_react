import ServiceCard from "../components/ServiceCard";
import { useServices } from '../data/useServices';

function Services() {

    const { services } = useServices();

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto bg-gray-50">

            {/* Titre de la section */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#1e1e1e] mb-4">
                    MON OFFRE DE SERVICES
                </h2>
            </div>
        </section>
    );
}

export default Services;