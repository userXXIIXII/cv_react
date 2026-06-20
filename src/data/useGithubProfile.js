import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useGithubProfile = (username) => {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {  
        
        const fetchProfile = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://api.github.com/users/userXXIIXII`);

                if (!response.ok) {
                    navigate('/not-found', { replace: true });
                    throw new Error("Impossible de récupérer le profil GitHub.");
                }

                const data = await response.json();

                setProfileData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchProfile();
    }, [username, navigate]);

    return { profileData, loading, error };
}