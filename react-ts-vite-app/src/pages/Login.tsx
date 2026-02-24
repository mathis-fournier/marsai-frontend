import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';

interface LoginFormData {
    email: string;
    password: string;
}

function Login() {
    // Importation des hooks useAuth et useTranslation depuis les bibliothèques respectives
    const { login } = useAuth();
    const { t } = useTranslation(['Login', 'Register']);

    // Définition de la fonction handleSubmit qui gère la soumission du formulaire
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Empêche le comportement par défaut de la soumission du formulaire

        const form = event.currentTarget; // Récupération de l'élément formulaire courant
        const formData: LoginFormData = { // Création d'un objet formData avec les données du formulaire
            email: (form.elements.namedItem("email") as HTMLInputElement).value, // Récupération de la valeur de l'email
            password: (form.elements.namedItem("password") as HTMLInputElement).value, // Récupération de la valeur du mot de passe
        };

        await login(formData); // Appel de la fonction login avec les données du formulaire
    };

    return (
        <div className='my-50'>
            <form onSubmit={handleSubmit} className="p-2 md:max-w-[75%] mx-auto px-6 my-1 pt-10 sm:rounded-4xl md:shadow-lg/50 md:border-2 bg-linear-to-b from-dark to-brand2 sm:border-primary md:shadow-white mb-10">
                <div>
                    <div className="text-primary text-2xl">
                        <span className='text-center'>
                            <h1 className='text-left'>
                                {t('Login.title')}
                            </h1>

                        </span>
                        <h2 className="text-base/7 font-semibold text-white">
                            {t('title')}</h2>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="email"
                                    className="block text-sm/6 font-medium text-white"
                                >
                                    {t('email_label')}
                                </label>
                                <div className="mt-2">
                                    <div className="border border-white flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary">
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
                                            placeholder={t('email_placeholder')}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label
                                    htmlFor="password"
                                    className="block text-sm/6 font-medium text-white"
                                >
                                    {t('password_label')}
                                </label>
                                <div className="border border-white flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary">
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
                                        placeholder={t('password_placeholder')}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex my-5  items-center justify-center gap-x-6 ">
                    <button
                        type="submit"
                        className="rounded-md bg-primary px-6 py-2 text-lg font-semibold text-black shadow-md transition-transform duration-300 ease-in-out hover:scale-1.05"
                    >
                        {t("login_button")}
                    </button>
                </div>
            </form >
        </div >
    )
}

export default Login;