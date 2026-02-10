import { NavLink } from 'react-router-dom'
import NewsletterSubscribe from './NewsletterSubscribe'
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (

        <div className="text-white">


            <div className="text-center flex items-center lg:flex-row md:justify-around">

                <div className="text-white text-center p-1 my-7 w-full rounded-4xl flex-col">
                    <hr />
                    <div className=" text-2xl text-center md:gap-15 flex flex-col justify-center items-center xl:flex-row p-5 md:p-15 md:text-4xl font-extrabold">
                        <NavLink to={"/"}>
                            Mobile film Festival<br />
                            La Plateforme<br />
                            LYON | GEM
                        </NavLink>
                    </div>
                    <p className='text-sm md:text-2xl justify-center'> {t('footer.description')}</p>
                    <NewsletterSubscribe />
                    <div className='md:w-[75%] m-auto flex justify-around my-15'>
                        <img className="w-15 h-auto md:w-15" src="facebook-logo.png" alt="logo facebook" />
                        <img className="w-25 h-auto md:w-25" src="instagram-logo.png" alt="logo instagram" />
                        <img className="w-15 h-auto md:w-15" src="x-logo.png" alt="logo X" />
                        <img className="w-15 h-auto md:w-15" src="youtube-logo.svg" alt="logo youtube" />
                    </div>
                    <div className="pt-0 flex flex-col md:flex-row md:justify-around text-center md:gap-0">
                        <p className="text-sm md:text-lg">{t('footer.legal')}</p>
                        <p className="text-sm md:text-lg">{t('footer.press')}</p>
                        <p className="text-sm md:text-lg">{t('footer.contact')}</p>
                        <p className="text-sm md:text-lg">{t('footer.copyright')}</p>

                    </div >
                </div>
            </div>
        </div>
    )
}

export default Footer