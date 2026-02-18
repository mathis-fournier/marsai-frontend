import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TipTap from './TipTap';
import { useAuth } from '../../../context/AuthContext';

const NewsletterCreate = () => {
    // Récupération du contexte de traduction pour l'interface utilisateur
    const { t } = useTranslation("Dashboard");
    // Récupération du jeton d'authentification depuis le contexte global pour les requêtes API
    const { token } = useAuth();

    // Initialisation d'une référence pour le composant TipTap (éditeur de texte).
    // Utilisation d'une interface définissant la méthode nécessaire : getHTML()
    const editorRef = useRef<{ getHTML: () => string } | null>(null);
    // État local pour stocker l'objet (sujet) de la newsletter
    const [object, setObject] = useState<string>('');

    // Gestionnaire de changement de champ pour l'objet de la newsletter
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setObject(e.target.value);
    }

    // Gestionnaire de soumission du formulaire
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // Vérifie si l'éditeur est initialisé avant de tenter d'extraire son contenu
        if (editorRef && editorRef.current) {
            const htmlContent = editorRef.current?.getHTML();
            try {
                // Construction de l'URL de l'endpoint API avec la variable d'environnement
                const response = await fetch(import.meta.env.VITE_API_URL + `/newsletters`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`, // Inclusion du jeton Bearer pour l'authentification
                        'Content-Type': 'application/json', // Définition du type de contenu JSON
                    },
                    // Envoi des données : l'objet et le contenu HTML de l'éditeur
                    body: JSON.stringify({ object: object, content: htmlContent }),
                });

                if (response.ok) {
                    // Affichage d'un message de succès en utilisant les traductions
                    alert(t('newsletter.success_message'));
                    // Remarque : la fonction NewsletterSubscribe n'est pas appelée ici.
                    // Une réinitialisation de l'état ou du formulaire pourrait être nécessaire.
                } else if (response.status === 409) {
                    // Gestion spécifique d'une erreur de conflit (probablement duplication)
                    alert(t('newsletter.error_message_conflict'));
                }
            } catch (error) {
                console.error('There is a problem with your fetch operation:', error);
            }
        } else {
            console.error('Editor ref is not properly initialized');
        }
    };

    // Rendu conditionnel en cas d'erreur d'initialisation (optionnel, mais bon pour la sécurité)
    if (!editorRef) return <div>Error</div>;

    return (
        <>
            <div className="text-white flex">
                <h2 className="text-3xl my-10">Create a Newsletter</h2>
            </div>
            {/* Formulaire principal */}
            <form className='flex flex-col md:flex-row justify-between items-center'>
                <div className='flex gap-10 my-8 items-center'>
                    <label htmlFor="object" className='text-2xl text-primary'>Object</label>
                    {/* Input pour la saisie de l'objet */}
                    <input
                        onChange={(e) => handleChange(e)}
                        name="object"
                        type="text"
                        className='text-white focus:outline-none border-2 w-150 xl:w-250 border-primary rounded-2xl p-2'
                    />
                </div>
                {/* Bouton de soumission visible uniquement sur écrans larges */}
                <button className="bg-primary p-4 text-black rounded-2xl hidden md:flex" onClick={(e) => handleSubmit(e)} type="submit">Save</button>
            </form>
            {/* Zone d'édition */}
            <div className="editor">
                {/* Rendu du composant TipTap, transmis via la prop ref */}
                <TipTap ref={editorRef} />
                {/* Bouton de soumission mobile visible uniquement sur petits écrans */}
                <button className="bg-primary p-4 my-8 text-black rounded-2xl md:hidden flex m-auto" onClick={(e) => handleSubmit(e)} type="submit">Save</button>
            </div>
        </>
    );
};

export default NewsletterCreate;