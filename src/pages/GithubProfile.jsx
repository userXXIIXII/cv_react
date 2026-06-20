import { useGithubProfile } from '../data/useGithubProfile';
import GithubProfileCard from '../components/GithubProfileCard';

const GithubProfile = () => {
    
    const { profileData, loading } = useGithubProfile('userXXIIXII');

    return (
        <section className="w-full flex-grow flex items-center justify-center bg-white py-12 px-4">
            
            
            {loading ? (
                <div className="animate-pulse flex flex-col items-center space-y-6 w-full max-w-2xl">
                    <div className="h-10 bg-gray-200 rounded w-48"></div>
                    <div className="h-8 bg-gray-200 rounded w-64"></div>
                    <div className="w-48 h-48 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mt-8"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
            ) : (
                profileData && <GithubProfileCard profile={profileData} />
            )}
            
        </section>
    );
};

export default GithubProfile;