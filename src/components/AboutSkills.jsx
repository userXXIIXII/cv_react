import aboutPic from '../assets/john-doe-about.jpg';
import { useSkills } from '../data/useSKills';

function AboutSkills() {

    const { skills } = useSkills();

    return (
        <section id='about' className="scroll-mt-16 py-16 px-6 bg-white max-w-6xl mx-auto my-16 rounded-2xl shadow-lg border border-gray-100">
            <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>

                {/* Partie À Propos */}
                <div>
                    <h2 className="text-3xl font-semibold mb-4 text-[#1e1e1e]">
                        A propos
                    </h2>
                    <div className="h-1 w-24 bg-[#0d6efd] mb-6"></div>
                    <p className="text-[#444] text-lg font-normal leading-relaxed">
                        Passionné par l'informatique et les nouvelles technologies, 
                        j'ai suivi une formation d'<strong>intégrateur-développeur
                        web</strong> au CEF. Au cours de cette formation, j'ai pu
                        acquérir des bases solides pour travailler dans le domaine
                        du <strong>développement web</strong>. <br /><br />

                        Basé à Paris, je suis en recherche d'une alternance au sein
                        d'une agence digitale pour consolider ma formation de 
                        <strong>développeur web full stack</strong>. <br /><br />

                        J'accorde une attention particulière à la qualité du code que
                        j'écris et je respecte les bonnes pratiques du web.

                    </p>
                </div>
                
                {/* Partie Compétences */}
                <div>
                    <img 
                    src={aboutPic}
                    alt="A propos de moi"
                    className='rounded-lg shadow-md mb-8 w-full h-64 lg:h-80 object-cover'
                    />
                    <h3 className="text-2xl font-semibold mb-6 text-[#1e1e1e]">
                        Mes compétences
                    </h3>

                    <div className="space-y-6">
                        {skills.map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className='font-semibold text-sm'>
                                        {skill.name}
                                    </span>
                                    <span className='text-sm text-[#444]'>
                                        {skill.percentage}%
                                    </span>
                                </div>
                                <div className="w-full bg-[#EEE] h-3 rounded-full overflow-hidden">
                                    <div 
                                    className={`${skill.color} h-3 rounded-full transition-all duration-500`}
                                    style={{ width: `${skill.percentage}%` }}>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSkills;



