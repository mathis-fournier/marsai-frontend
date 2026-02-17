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
            } else if (response.status === 409) {
                alert(t('newsletter.error_message_conflict'));
            }
        } catch (error) {
            alert(t('newsletter.error_message' + error));
        }

    }


    return (
        <div className="my-10">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col w-[95%] md:w-[50%] lg:w-[35%] m-auto items-center border-2 p-5 md:p-10 rounded-4xl shadow-lg/50 shadow-white/50 bg-linear-to-b from-brand to-brand2 text-white">
                    <p className="text-2xl font-bold p-1">{t('newsletter.title')}</p>
                    <div className="w-[75%] md:w-80">
                        <input name="email" type="email" placeholder={t('newsletter.email_placeholder')} className="p-2 w-full rounded-2xl my-5 outline-2 outline-offset-1 outline-primary" />
                        <button className="text-black bg-linear-to-b from-yellow-600 to-yellow-200 hover:animate-ping p-2 w-full rounded-2xl ">{t('newsletter.subscribe_button')}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewsletterSubscribe