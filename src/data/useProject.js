import freshFoodImg from '../assets/fresh-food.jpg';
import AkiraImg from '../assets/restaurant-japonais.jpg';
import BienEtreImg from '../assets/espace-bien-etre.jpg';

export const useProject = () => {
    const projects = [
        {
            id: 1,
            mage: freshFoodImg,
            title: "Fresh food",
            description: "Réalisation d'un site avec commande en ligne.",
            technology: "PHP et MySQL"
        },
        {
            id: 2,
            mage: AkiraImg,
            title: "Restaurant Akira",
            description: "Réalisation d'un site vitrine.",
            technology: "WordPress"
        },
        {
            id: 3,
            mage: BienEtreImg,
            title: "Espace bien-être",
            description: "Réalisation d'un site vitrine pour un partricien de bien-être.",
            technology: "HTML/CSS"
        }
    ]
}