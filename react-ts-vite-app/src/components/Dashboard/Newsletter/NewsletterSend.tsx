import { useEffect, useState } from 'react';
import type Newsletter from '../../../types-interfaces/Newsletter';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../context/AuthContext';

function NewsletterSend() {

    const { t } = useTranslation('Dashboard');
    const { token } = useAuth();

    // Initalise le composant select avec les newsletters enregistrées en DB
    const [newsletters, setNewsletters] = useState<Newsletter[]>([])
    useEffect(() => {
        async function fetchNewsletters() {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + `/newsletters`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                });
                if (!response.ok) throw new Error("Network response was not ok");
                const result = await response.json();
                setNewsletters(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchNewsletters();
    }, []);

    // Récupère la newsletter sélectionnée parmi les newsletters
    // Envoie une demande au back pour envoyer les emails.
    async function sendNewsletterById(id: string) {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + `/newsletters/send`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newsletterId: id })
            })
            if (!response.ok) throw new Error("Network response was not ok");
            // const result = await response.json();
        }
        catch (err) {
            console.error(err);
        }
    }

    // Set the selected value when the user changes the select element
    const [selectedValue, setSelectedValue] = useState<string>('1');

    return (
        <>
            <div className='flex flex-col md:flex-rows items-center justify-center gap-4'>
                <select onChange={(e) => setSelectedValue(e.currentTarget.value)} name="newsletterList" id="newsletterList" className='text-white border-2 border-primary p-4 rounded-2xl'>
                    {newsletters ? newsletters.map((nl) => (
                        <option key={nl.id} value={nl.id} className='text-white'>{nl.object}</option>
                    )) : null}
                </select>
                <p><button className='my-2 bg-primary p-4 rounded-2xl' onClick={() => sendNewsletterById(selectedValue)} > {t("newsletters.send_button")}</button></p>
            </div >
        </>
    );
}
export default NewsletterSend
