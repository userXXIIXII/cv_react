import htmlCssImg from '../assets/blog/coder.jpg';
import vendreImg from '../assets/blog/croissance.jpg';
import googleImg from '../assets/blog/google.jpg';
import responsiveImg from '../assets/blog/screens.jpg';
import seoImg from '../assets/blog/seo.jpg';
import coderImg from '../assets/blog/technos.png';

export const useBlog = () => {

    const defaultText = "Some quick example text to build on the card and make up the bulk of the card's content"

    const articles = [
        {
            id: 1,
            image: htmlCssImg,
            title: "Coder son site en HTML/CSS",
            description: defaultText,
            date: "22 août 2022"
        },
        {
            id: 2,
            image: vendreImg,
            title: "Vendre ses produits sur le web",
            description: defaultText,
            date: "20 août 2022"
        },
        {
            id: 3,
            image: googleImg,
            title: "Se positionner sur Google", 
            description: defaultText,
            date: "1 août 2022"
        },
        {
            id: 4,
            image: responsiveImg,
            title: "Coder en responsive design",
            description: defaultText,
            date: "31 juillet 2022"
        },
        {
            id: 5,
            image: seoImg,
            title: "Techniques de référencement",
            description: defaultText,
            date: "30 juillet 2022"
        },
        {
            id: 6,
            image: coderImg,
            title: "Apprendre à coder",
            description: defaultText,
            date: "12 juillet 2022"
        }
    ];

    return { articles };
};