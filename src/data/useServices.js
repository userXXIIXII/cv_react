import { FaDesktop, FaCode, FaSearchDollar } from 'react-icons/fa';

export const useServices = () => {
    const services = [
        {
            id: 1,
            Icon: FaDesktop,
            title: "UX DESIGN",
            textSegments: [
                { content: "L'" },
                { content: "UX Design ", bold: true },
                { content: "est une methode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de nabigation optimale à l'internaute."}
            ]
        },
        {
            id: 2,
            Icon: FaCode,
            title: "DEVELOPPEMENT WEB",
            textSegments: [
                { content: "Le " },
                { content: "développement de sites web ", bold: true },
                { content: "repose sur l'utilsiation des langages "},
                { content: " HTML, CSS, JavaScript et PHP.", underline: true}
            ]
        },
        {
            id: 3,
            Icon: FaSearchDollar,
            title: "REFERENCEMENT",
            textSegments: [
                { content: "Le "},
                { content: "référencement naturel d'un site, ", bold: true },
                { content: "aussi appelé "},
                { content: "SEO, ", underline: true},
                { content: "consiste à mettre des techniques en oeuvre pour "},
                { content: "améliorer sa position ", italic: true},
                { content: "dans les résultats des moteurs de recherche."}
            ]
        },
    ];
    
    return { services };
};