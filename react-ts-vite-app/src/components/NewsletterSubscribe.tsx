import { useTranslation } from 'react-i18next';

function NewsletterSubscribe() {
    const { t } = useTranslation();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/newsletter/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                alert(t('newsletter.success_message'));
                form.reset();
            } else {
                alert(t('newsletter.error_message'));
            }
        } catch (error) {
            alert(t('newsletter.error_message'));
        }

    }


    return (
        <div className="p-4">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center border p-5 rounded-4xl bg-brand2 text-white">
                    <p className="text-lg p-1">{t('newsletter.title')}</p>
                    <div className="w-[75%] md:w-80">
                        <input name="email" type="email" placeholder={t('newsletter.email_placeholder')} className="p-2 w-full rounded-2xl border my-5" />
                        <button className="text-black bg-gradient-to-b from-[#e5a50a] to-[#c64600] p-2 w-full rounded-2xl">{t('newsletter.subscribe_button')}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewsletterSubscribe