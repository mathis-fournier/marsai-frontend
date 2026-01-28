import { NavLink } from 'react-router-dom'
import NewsletterSubscribe from './NewsletterSubscribe'

function Footer() {
    return (

        <div className="bg-[var(--color-brand)] text-white">
            <div className="p-10 text-center flex flex-col items-center gap-10 md:gap-0 lg:flex-row md:justify-around">
                <div className="text-left">
                    <NavLink to={"/"}><p className="text-3xl bg-blue-500 p-2 rounded-tr-2xl">MarsAI</p></NavLink>
                    <p className="my-4 text-2xl">Une co-création de l’école du numérique La Plateforme et le Mobile Film Festival. Ensemble pour dessiner les nouveaux horizons du cinéma.</p>
                    <div className='flex justify-around gap-5 mt-5'>
                        <img className="w-20" src="facebook-logo.png" alt="logo facebook" />
                        <img className="w-35" src="instagram-Logo.png" alt="logo instagram" />
                        <img className="w-20" src="x-logo.png" alt="logo X" />
                        <img className="w-20" src="youtube-logo.png" alt="logo youtube" />
                    </div>
                </div>
                <NewsletterSubscribe />
            </div>

                <div className="p-10 flex flex-col md:flex-row md:justify-around text-left text-xl md:gap-0">
                    <p className="">Mentions légales</p>
                    <p className="">Presse</p>
                    <p className="">Contact</p>
                    <p className="">© 2026 MarsAI. Tous droits réservés.</p>
                </div>
        </div>
    )
}

export default Footer