import HeroBanner from "../components/HeroBanner";

interface LoginFormData {
    email: string;
    password: string;
}

function Login() {

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData: LoginFormData = {
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            password: (form.elements.namedItem("password") as HTMLInputElement).value,
        };

        fetch(import.meta.env.VITE_API_URL + "/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                alert("Connexion réussie !");
            } else {
                alert("Erreur lors de la connexion.");
            }
        })
        .catch(error => {
            console.error("Erreur réseau :", error);
            alert("Erreur réseau lors de la connexion.");
        });
    }
    return (
        <>
            <HeroBanner />

                    <form onSubmit={handleSubmit} className="bg-[var(--color-brand)] md:max-w-[75%] mx-auto px-6 pt-10 md:rounded-4xl shadow-lg/50 shadow-black mb-10">
                    <div className="space-y-12">
                        <div className="">
                            <h2 className="text-base/7 font-semibold text-white">
                                Informations de connexion</h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-6">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm/6 font-medium text-white"
                                    >
                                        Adresse e-mail
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
                                                placeholder="Adresse e-mail..."
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
                                        Mot de passe
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            type="password"
                                            name="password"
                                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                            placeholder="Mot de passe..."
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
                            className="rounded-md bg-[var(--color-primary)] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >Connexion
                        </button>
                    </div>
                </form>
        </>
    )
}

export default Login