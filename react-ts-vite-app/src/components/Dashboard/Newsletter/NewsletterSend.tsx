import { useEffect, useState } from 'react';
import type Newsletter from '../../../types-interfaces/Newsletter';
import { useTranslation } from 'react-i18next';

function NewsletterSend() {

    const { t } = useTranslation('Dashboard');
    const [newsletters, setNewsletters] = useState<Newsletter[]>([])

    useEffect(() => {
        async function fetchNewsletters() {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + `/newsletters`);
                if (!response.ok) throw new Error("Network response was not ok")
                const result = await response.json();
                setNewsletters(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchNewsletters();
    }, []);

    return (
        <>

            <div className='flex flex-col md:flex-rows items-center justify-center gap-4'>
                <select name="newsletterList" id="newsletterList" className='text-white border-2 border-primary p-4 rounded-2xl'>
                    {newsletters ? newsletters.map((nl) => (
                        <option key={nl.id} className='text-white'>{nl.object}</option>
                    )) : null}
                </select>
                <p><button className='my-2 bg-primary p-4 rounded-2xl'>{t("newsletters.send_button")}</button></p>
            </div>
        </>
    );
}
export default NewsletterSend
