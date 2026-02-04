import { useTranslation } from 'react-i18next';

interface RegisterFormData {
    email: string;
    password: string;
    confirmPassword: string;
    firstname: string;
    lastname: string;
}

function Register() {
    const { t } = useTranslation();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData: RegisterFormData = {
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            password: (form.elements.namedItem("password") as HTMLInputElement).value,
            confirmPassword: (form.elements.namedItem("confirm_password") as HTMLInputElement).value,
            firstname: (form.elements.namedItem("firstname") as HTMLInputElement).value,
            lastname: (form.elements.namedItem("lastname") as HTMLInputElement).value,
        };

        if (formData.password !== formData.confirmPassword) {
            alert(t('register.alert.password_mismatch'));
            return;
        }

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
                if (response.ok) {
                    alert(t('register.alert.success'));
                } else {
                    alert(t('register.alert.error'));
                }
            })
            .catch(error => {
                console.error("Erreur réseau :", error);
                alert(t('register.alert.network_error'));
            });
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="bg-[var(--color-brand2)] p-25 md:max-w-[75%] mx-auto px-6 my-10 pt-10 md:rounded-4xl shadow-lg/50 shadow-black mb-10">
                <div className="space-y-12">
                    <div className="">
                        <h2 className="text-base/7 font-semibold text-white">
                            {t('register.title')}</h2>
                        <p className="mt-1 text-sm/6 text-gray-400">
                            {t('register.subtitle')}
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="firstname"
                                    className="block text-sm/6 font-medium text-white"
                                >
                                    {t('register.firstname_label')}
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                                        <input
                                            id="firstname"
                                            type="text"
                                            name="firstname"
                                            className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
                                            placeholder={t('register.firstname_placeholder')}
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
                                    {t('register.lastname_label')}
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                                        <input
                                            id="lastname"
                                            type="text"
                                            name="lastname"
                                            className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
                                            placeholder={t('register.lastname_placeholder')}
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
                                    {t('register.email_label')}
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
                                            placeholder={t('register.email_placeholder')}
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
                                    {t('register.password_label')}
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                        placeholder={t('register.password_placeholder')}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="confirm_password"
                                    className="block text-sm/6 font-medium text-white"
                                >
                                    {t('register.confirm_password_label')}
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="confirm_password"
                                        type="password"
                                        name="confirm_password"
                                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                        placeholder={t('register.confirm_password_placeholder')}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-[var(--color-secondary)] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >{t('register.register_button')}
                    </button>
                </div>
            </form>
        </>
    )
}

export default Register