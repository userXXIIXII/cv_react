import aboutPic from '../assets/about.jpg'

function AboutSkills() {
    const skills = [
        { name: "HTML5", percentage: 90, color: "bg-red-500"},
        { name: "CSS3", percentage: 80, color: "bg-cyan-500"},
        { name: "JAVASCRIPT", percentage: 70, color: "bg-yellow-500"},
        { name: "PHP", percentage: 60, color: "bg-green-500"},
        { name: "REACT", percentage: 50, color: "bg-blue-500"}
    ];

    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>

                <div>
                    <h2 className="text-3xl font-semibold mb-4 text-[#1e1e1e]">
                        A propos
                    </h2>
                    <div className="h-1 w-135 bg-blue-600 mb-6"></div>
                    <p className="text-gray-700 text-lg font-normal leading-relaxed">
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
                
            </div>
            
        </section>
    );
}

export default AboutSkills;



