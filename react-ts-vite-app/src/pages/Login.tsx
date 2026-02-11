import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';

interface LoginFormData {
    email: string;
    password: string;
}

function Login() {
    const { login } = useAuth();
    const { t } = useTranslation();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData: LoginFormData = {
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            password: (form.elements.namedItem("password") as HTMLInputElement).value,
        };
        await login(formData);
    };

    return (
        <div className='my-20'>
            <form onSubmit={handleSubmit} className="p-25 md:max-w-[75%] mx-auto px-6 my-1 pt-10 sm:rounded-4xl md:shadow-lg/50 md:border-2 bg-linear-to-b from-dark to-brand2 sm:border-primary md:shadow-white mb-10">
                <div className="space-y-12">
                    <div className="text-primary text-2xl">
                        <span className='text-center'>
                            <h1 className='text-left'>

                                LOGIN AS JURY
                            </h1>

                        </span>
                        <h2 className="text-base/7 font-semibold text-white">
                            {t('register.title')}</h2>
                        <p className="mt-1 text-sm/6 text-gray-400">
                            {t('register.subtitle')}
                        </p>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="email"
                                    className="block text-sm/6 font-medium text-white"
                                >
                                    {t('login.email_label')}
                                </label>
                                <div className="mt-2">
                                    <div className="border border-white flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary">
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
                                            placeholder={t('login.email_placeholder')}
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
                                    {t('login.password_label')}
                                </label>
                                <div className="border border-white flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary">
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
                                        placeholder={t('login.password_placeholder')}
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
                        {t("login.login_button")}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login;