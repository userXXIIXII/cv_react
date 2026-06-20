const GitHubProfileCard = ({ profile }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-4 w-full max-w-4xl mx-auto py-8">

            <h1 className="text-4xl font-bold text-[#444] mb-4">
                Github user
            </h1>

            <h2 className="text-3xl font-semibold text-[#1e1e1e] mb-4">
                {profile.name || profile.login}
            </h2>

            <img 
            src={profile.avatar_url} 
            alt={`Avatar de ${profile.login}`} 
            className="w-48 h-48 object-cover mb-4 rounded-full border-2 border-gray-200"
            />

            {profile.bio && (
                <p className="text-lg text-[#444] max-w-2xl mt-4 mb-2">
                    {profile.bio}
                </p>
            )}

            <div className="flex flex-col space-y-3 mt-4 text-lg text-[#444]">
                <p>Abonnés : {profile.followers}</p>
                <p>Abonnements : {profile.following}</p>
                <p>Crée le : {profile.created_at}</p>
                <p>Modifié le : {profile.updated_at}</p>
                <p>
                    URL repositories :{' '}
                    <a 
                    href={profile.repos_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0d6efd] hover:underline">
                        {profile.repos_url}
                    </a>
                </p>
            </div>

        </div>
    );
};

export default GitHubProfileCard;