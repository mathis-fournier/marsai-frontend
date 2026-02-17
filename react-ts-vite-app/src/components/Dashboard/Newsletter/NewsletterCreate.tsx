import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TipTap from './TipTap';
import { useAuth } from '../context/AuthContext';
import fetchNewsletter from './NewsletterSend';

const NewsletterCreate = () => {
    const { t } = useTranslation("Dashboard");
    const { token } = useAuth();

    // Initialize editorRef with a function that returns null or an object
    const editorRef = useRef<{ getHTML: () => string } | null>(null);
    const [object, setObject] = useState<string>('');

    // Gestion de l'objet de la newsletter
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setObject(e.target.value);
    }

    // Soumission de la newsletter
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (editorRef && editorRef.current) {
            const htmlContent = editorRef.current?.getHTML();
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + `/newsletters`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ object: object, content: htmlContent }),
                });
                if (response.ok) {
                    alert(t('newsletter.success_message'));
                    // Assuming NewsletterSubscribe is a function that doesn't return anything and takes no arguments
                } else if (response.status === 409) {
                    alert(t('newsletter.error_message_conflict'));
                }
            } catch (error) {
                console.error('There is a problem with your fetch operation:', error);
            }
        } else {
            console.error('Editor ref is not properly initialized');
        }
    };

    if (!editorRef) return <div>Error</div>;

    return (
        <>
            <div className="text-white flex">
                <h2 className="text-3xl my-10">Create a Newsletter</h2>
            </div>
            <form className='flex flex-col md:flex-row justify-between items-center'>
                <div className='flex gap-10 my-8 items-center'>
                    <label htmlFor="object" className='text-2xl text-primary'>Object</label>
                    <input onChange={(e) => handleChange(e)} name="object" type="text" className='text-white focus:outline-none border-2 w-150 xl:w-250 border-primary rounded-2xl p-2' />
                </div>
                <button className="bg-primary p-4 text-black rounded-2xl hidden md:flex" onClick={(e) => handleSubmit(e)} type="submit">Save</button>
            </form>
            <div className="editor">
                {/* Make sure to initialize the TipTap instance with a reference */}
                <TipTap ref={editorRef} />
                <button className="bg-primary p-4 my-8 text-black rounded-2xl md:hidden flex m-auto" onClick={(e) => handleSubmit(e)} type="submit">Save</button>
            </div>
        </>
    );
};

export default NewsletterCreate;