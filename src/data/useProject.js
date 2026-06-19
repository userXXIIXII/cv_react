import freshFoodImg from '../assets/portfolio/fresh-food.jpg';
import AkiraImg from '../assets/portfolio/restaurant-japonais.jpg';
import BienEtreImg from '../assets/portfolio/espace-bien-etre.jpg';

export const useProject = () => {
    const projects = [
        {
            id: 1,
            image: freshFoodImg, 
            title: "Fresh food",
            description: "Réalisation d'un site avec commande en ligne.",
            technology: "PHP et MySQL"
        },
        {
            id: 2,
            image: AkiraImg,
            title: "Restaurant Akira",
            description: "Réalisation d'un site vitrine.",
            technology: "WordPress"
        },
        {
            id: 3,
            image: BienEtreImg,
            title: "Espace bien-être",
            description: "Réalisation d'un site vitrine pour un patricien de bien-être.",
            technology: "HTML/CSS"
        }
    ];

    return { projects };
};