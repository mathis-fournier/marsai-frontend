// Ce fichier définit le contexte d'authentification pour l'application de manière globale.
// Il fournit des fonctionnalités de connexion, de déconnexion et de gestion de l'état utilisateur via un token.

import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// Interfaces définies :
// - User : contient les données de l'utilisateur (email, firstname, lastname, role)
interface User {
    id: number,
    email: string;
    firstname: string;
    lastname: string;
    role: string;
}

// - AuthContextType : structure du contexte d'authentification
// Interface pour la valeur du contexte
interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (formData: any) => Promise<void>;
    logout: () => void;
}

// Créer le contexte
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Créer le composant fournisseur
// - AuthProvider : gère l'état global de l'authentification
export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));
    const navigate = useNavigate();

    // Fonction pour récupérer les données de l'utilisateur à partir du token d'authentification
    async function fetchUserData(authToken: string): Promise<User | null> {
        try {
            // Effectuer une requête GET vers le point de terminaison "/auth/me" avec l'en-tête d'autorisation
            const response = await fetch(import.meta.env.VITE_API_URL + "/auth/me", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });

            // Vérifier si la réponse est OK (statut 200-299)
            if (response.ok) {
                const responseBody = await response.text();
                // Si le corps de la réponse n'est pas vide, le parser en tant qu'objet User
                if (responseBody) {
                    return JSON.parse(responseBody) as User;
                }
            }
        } catch (error) {
            // En cas d'erreur lors de la récupération ou du parsing des données utilisateur,
            // afficher un message d'erreur dans la console
            console.error("Échec de la récupération ou du parsing des données utilisateur :", error);
        }
        // Si quelque chose échoue, supprimer le token stocké localement et retourner null pour l'utilisateur
        localStorage.removeItem('token');
        return null;
    }

    // Effet secondaire qui s'exécute lorsque le token change
    useEffect(() => {
        if (token) {
            // Si un token est présent, récupérer les données de l'utilisateur
            const getUserData = async () => {
                const userData = await fetchUserData(token);
                setUser(userData);
            };
            getUserData();
        } else {
            // Si aucun token n'est présent, définir l'utilisateur sur null
            setUser(null);
        }
    }, [token]); // Dépendance à la modification du token


    const login = async (formData: any) => {
        try {
            // Effectuer une requête POST vers le point de terminaison "/auth/login" avec les données d'identification fournies
            const response = await fetch(import.meta.env.VITE_API_URL + "/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            console.log(token);
            // Vérifier si la réponse est OK (statut 200-299)
            if (response.ok) {
                const data = await response.json();
                // 1. Sauvegarder le token dans localStorage et mettre à jour l'état
                localStorage.setItem('token', data.token);
                setToken(data.token);
                setUser(data.user);
                alert("Connexion réussie !");
                // 2. Rediriger en fonction du rôle de l'utilisateur
                if (data.user.role.includes('ADMIN')) {
                    navigate('/dashboard');
                } else if (data.user.role.includes('JURY')) {
                    navigate('/movies');
                } else if (!data.user || !token) {
                    navigate('/logout');
                }

            } else {
                // Si la réponse n'est pas OK, afficher un message d'erreur
                alert("Erreur lors de la connexion.");
            }
        } catch (error) {
            // En cas d'erreur réseau, afficher un message d'erreur dans la console et à l'utilisateur
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

// - useAuth : permet aux composants enfants d'accéder au contexte d'authentification,
//  de stocker le token dans localStorage et de rediriger en fonction du rôle
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
