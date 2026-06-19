import homeBackground from '../assets/hero-bg.jpg';
import AboutSkills from '../components/AboutSkills';

function Home() {
    return (
        <main>
            <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
                <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${homeBackground})`}}>
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-semibold mb-6">
                        Bonjour, je suis Aarin DEB
                    </h1>
                    <p className="text-xl md:text-2xl font-normal mb-8">
                        Développeur web full stack
                    </p>
                    <a href='#about'
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded transition duration-300 font-semibold">
                        En savoir plus
                    </a>
                </div>
            </section>

            <AboutSkills />
        </main>
    );
}

export default Home;