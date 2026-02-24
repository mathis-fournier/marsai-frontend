// TODO :
// REMPLACER PAR UN INPUT HTML
// PLUS BESOIN DE CONTEXTE

// React est importé pour utiliser les fonctionnalités de React.
// useState est utilisé pour gérer l'état local du composant.
import React, { createContext, useState } from 'react';

// NewsletterContextType définit la structure du contexte.
export type NewsletterContextType = {
    // object est une chaîne de caractères qui stocke l'objet.
    object: string;
    // setObject est une fonction pour mettre à jour l'état de object.
    setObject: React.Dispatch<React.SetStateAction<string>>;
};

// createContext permet de créer un contexte React.
export const MyContext = createContext<NewsletterContextType>({
    // Création du contexte avec des valeurs par défaut
    object: '',
    setObject: () => { },
});

// Composant fournisseur de contexte qui gère l'état de l'objet
export const NewsletterProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    // Initialisation de l'état avec une chaîne vide
    const [object, setObject] = useState<string>('');

    // Fourniture du contexte aux composants enfants
    return <MyContext.Provider value={{ object, setObject }}>{children}</MyContext.Provider>;
};