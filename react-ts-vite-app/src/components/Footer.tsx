import { NavLink } from 'react-router-dom'
import NewsletterSubscribe from './NewsletterSubscribe'

function Footer() {
    return (

        <div className="bg-gray-900 text-white">
            <div className="p-10 text-center flex flex-col items-start">
                <div className="text-left">
                    <NavLink to={"/"}><p className="text-3xl bg-blue-500 p-2 rounded-tr-2xl">MarsAI</p></NavLink>
                    <p className="my-4 text-2xl">Une co-création de l’école du numérique La Plateforme et le Mobile Film Festival. Ensemble pour dessiner les nouveaux horizons du cinéma.</p>
                </div>

                <NewsletterSubscribe />
                <div className="flex flex-col text-left">
                    <p className="">Mentions légales</p>
                    <p className="">Presse</p>
                    <p className="">Contact</p>
                    <p className="">© 2026 MarsAI. Tous droits réservés.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer