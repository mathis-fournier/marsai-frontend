import { useTranslation } from 'react-i18next';

interface RegisterFormData {
    email: string;
    password: string;
    confirmPassword: string;
    firstname: string;
    lastname: string;
}

function Register() {
    // Utilisation de la fonction useTranslation pour accéder aux traductions
    const { t } = useTranslation('Register');

    // Gestionnaire d'événement pour soumettre le formulaire
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Empêche le comportement par défaut de la soumission du formulaire

        // Récupération des éléments du formulaire
        const form = event.currentTarget;
        const formData: RegisterFormData = {
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            password: (form.elements.namedItem("password") as HTMLInputElement).value,
            confirmPassword: (form.elements.namedItem("confirm_password") as HTMLInputElement).value,
            firstname: (form.elements.namedItem("firstname") as HTMLInputElement).value,
            lastname: (form.elements.namedItem("lastname") as HTMLInputElement).value,
        };

        // Vérification si le mot de passe et la confirmation du mot de passe correspondent
        if (formData.password !== formData.confirmPassword) {
            alert(t('alert.password_mismatch')); // Affiche une alerte en cas de non-correspondance
            return;
        }

        // Envoi des données au serveur via une requête POST
        fetch(import.meta.env.VITE_API_URL + "/auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
                firstname: formData.firstname,
                lastname: formData.lastname
            })
        })
            .then(response => {
                if (response.ok) { // Vérification si la réponse est OK
                    alert(t('alert.success')); // Affiche une alerte de succès
                } else {
                    alert(t('alert.error')); // Affiche une alerte d'erreur
                }
            })
            .catch(error => {
                console.error("Erreur réseau :", error); // Enregistre l'erreur dans la console
                alert(t('alert.network_error')); // Affiche une alerte pour les erreurs de réseau
            });
    }
    return (
        <div className=''>

            <form onSubmit={handleSubmit} className="p-2 md:max-w-[75%] mx-auto px-6 pt-10 sm:rounded-4xl md:shadow-lg/50 md:border-2 bg-linear-to-b from-dark to-brand2 sm:border-primary md:shadow-white mb-10">
                <div className="space-y-12">
                    <div className="text-primary text-2xl">
                        <span className='text-center'>
                            <h1 className='text-left'>
                                {t('title')}
                            </h1>

                        </span>
                        <h2 className="text-base/7 font-semibold text-white">Par default l'utilisateur créé n'aura pas de rôle prédéfini</h2>
                        {/* <p className="mt-1 text-sm/6 text-gray-400">
                            {t('subtitle')}
                        </p> */}

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="firstname"
                                    className="block text-sm/6 font-medium text-white"
                                >
                                    {t('firstname_label')}
                                </label>
                                <div className="mt-2">
                                    <div className="border border-white flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary">
                                        <input
                                            id="firstname"
                                            type="text"
                                            name="firstname"
                                            className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
                                            placeholder={t('firstname_placeholder')}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="lastname"
                                    className="block text-sm/6 font-medium text-white"
                                >
                                    {t('lastname_label')}
                                </label>
                                <div className="mt-2">
                                    <div className="border border-white flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary">
                                        <input
                                            id="lastname"
                                            type="text"
                                            name="lastname"
                                            className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
                                            placeholder={t('lastname_placeholder')}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
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
                                <div className="border border-white flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary">                                    <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
                                    placeholder={t('password_placeholder')}
                                    required
                                />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="confirm_password"
                                    className="block text-sm/6 font-medium text-white"
                                >
                                    {t('confirm_password_label')}
                                </label>
                                <div className="border border-white flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary">
                                    <input
                                        id="confirm_password"
                                        type="password"
                                        name="confirm_password"
                                        className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
                                        placeholder={t('confirm_password_placeholder')}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex p-10 items-center justify-center gap-x-6 ">
                    <button
                        type="submit"
                        className="rounded-md bg-primary px-6 py-2 text-lg font-semibold text-black shadow-md transition-transform duration-300 ease-in-out hover:scale-1.05"
                    >
                        {t("register_button")}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register