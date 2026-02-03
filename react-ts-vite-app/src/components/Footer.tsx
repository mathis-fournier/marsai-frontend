import { NavLink } from 'react-router-dom'
import NewsletterSubscribe from './NewsletterSubscribe'
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (

        <div className="bg-[var(--color-brand)] text-white">
            <div className="p-10 text-center flex flex-col items-center gap-1 md:gap-0 lg:flex-row md:justify-around">
                <div className="text-left p-4 rounded-4xl">
                    <NavLink to={"/"}><p className="text-3xl bg-[var(--color-secondary)] p-2 rounded-tr-2xl">MarsAI</p></NavLink>
                    <p className="my-4 md:text-xl">{t('footer.description')}</p>
                    <div className='flex justify-around gap-2 mt-15'>
                        <img className="w-10 md:w-20" src="facebook-logo.png" alt="logo facebook" />
                        <img className="w-10 md:w-20" src="instagram-logo.png" alt="logo instagram" />
                        <img className="w-10 md:w-20" src="x-logo.png" alt="logo X" />
                        <img className="w-10 md:w-20" src="youtube-logo.svg" alt="logo youtube" />
                    </div>
                </div>
                <NewsletterSubscribe />
            </div>

            <div className="p-10 flex flex-col md:flex-row md:justify-around text-left text-xl md:gap-0">
                <p className="text-sm">{t('footer.legal')}</p>
                <p className="text-sm">{t('footer.press')}</p>
                <p className="text-sm">{t('footer.contact')}</p>
                <p className="text-sm">{t('footer.copyright')}</p>
            </div>
        </div>
    )
}

export default Footer