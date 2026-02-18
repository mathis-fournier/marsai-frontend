import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// Interface for user data
interface User {
    email: string;
    firstname: string;
    lastname: string;
    role: string;
}

// Interface for the context value
interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (formData: any) => Promise<void>;
    logout: () => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));
    const navigate = useNavigate();

    async function fetchUserData(authToken: string): Promise<User | null> {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + "/auth/me", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });

            if (response.ok) {
                const responseBody = await response.text();
                if (responseBody) {
                    return JSON.parse(responseBody) as User;
                }
            }
        } catch (error) {
            console.error("Failed to fetch or parse user data:", error);
        }
        // If anything fails, clear the token
        localStorage.removeItem('token');
        return null;
    }

    useEffect(() => {
        if (token) {
            const getUserData = async () => {
                const userData = await fetchUserData(token);
                setUser(userData);
            };
            getUserData();
        } else {
            setUser(null);
        }
    }, [token]);

    const login = async (formData: any) => {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + "/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                
                // 1. Save token and update state
                localStorage.setItem('token', data.token);
                setToken(data.token);
                setUser(data.user);
                alert("Connexion réussie !");

                // 2. Redirect based on role
                if (data.user.role.includes('ADMIN')) {
                    navigate('/dashboard');
                } else if (data.user.role.includes('JURY')) {
                    navigate('/jury/me');
                } else {
                    navigate('/');
                }

            } else {
                alert("Erreur lors de la connexion.");
            }
        } catch (error) {
            console.error("Erreur réseau :", error);
            alert("Erreur réseau lors de la connexion.");
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Create a custom hook to use the auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
