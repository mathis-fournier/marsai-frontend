import { useTranslation } from 'react-i18next';

function NewsletterSubscribe() {
    const { t } = useTranslation();

    return (
        <div className="p-4">
            <form action="">
                <div className="flex flex-col items-center border p-5 rounded-4xl bg-brand2 text-white">
                    <p className="text-lg p-1">{t('newsletter.title')}</p>
                    <div className="w-[75%] md:w-80">
                        <input type="email" placeholder={t('newsletter.email_placeholder')} className="p-2 w-full rounded-2xl border my-5" />
                        <button type="submit" className="text-black bg-gradient-to-b from-[#e5a50a] to-[#c64600] p-2 w-full rounded-2xl">{t('newsletter.subscribe_button')}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewsletterSubscribe