import BlogCard from "../components/BlogCard";
import { useBlog } from "../data/useBlog";
import bannerImage from "../assets/banner.jpg";

function Blog() {

    const { articles } = useBlog();

    return (
        <main className="w-full min-h-screen flex flex-col bg-gray-50">

            {/* Bannière */}
            <div className="w-full h-32 md:h-40 bg-cover bg-center"
            style={{ backgroundImage: `url(${bannerImage})`}}></div>

            {/* Conteneur principal de la grille */}
            <section className="py-20 px-6 max-w-7xl mx-auto w-full flex-grow">

                {/* Titre de la section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold text-[#1e1e1e] mb-4">
                        BLOG
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Retrouvez ici quelques articles sur le développement web.
                    </p>
                    <div className="h-1 w-48 bg-blue-600 mx-auto mt-6"></div>
                </div>

                {/* Cartes dynamiques des articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <BlogCard 
                            key={article.id}
                            article={article}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Blog;