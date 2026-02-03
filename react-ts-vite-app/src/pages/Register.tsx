import HeroBanner from "../components/HeroBanner";

interface RegisterFormData {
    email: string;
    password: string;
    confirmPassword: string;
    firstname: string;
    lastname: string;
}

function Register() {

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
            alert("Les mots de passe ne correspondent pas.");
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
                    alert("Inscription réussie !");
                } else {
                    alert("Erreur lors de l'inscription.");
                }
            })
            .catch(error => {
                console.error("Erreur réseau :", error);
                alert("Erreur réseau lors de l'inscription.");
            });
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="bg-[var(--color-brand)] md:max-w-[75%] mx-auto px-6 pt-10 md:rounded-4xl shadow-lg/50 shadow-black mb-10">
                <div className="space-y-12">
                    <div className="">
                        <h2 className="text-base/7 font-semibold text-white">
                            Informations personnelles</h2>
                        <p className="mt-1 text-sm/6 text-gray-400">
                            Ces informations seront affichées publiquement sur la plateforme.
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="firstname"
                                    className="block text-sm/6 font-medium text-white"
                                >
                                    Prénom
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                                        <input
                                            id="firstname"
                                            type="text"
                                            name="firstname"
                                            className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
                                            placeholder="Ex: Jean"
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
                                    Nom de famille
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                                        <input
                                            id="lastname"
                                            type="text"
                                            name="lastname"
                                            className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
                                            placeholder="Ex: Dupont"
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

                            <div className="col-span-full">
                                <label
                                    htmlFor="confirm_password"
                                    className="block text-sm/6 font-medium text-white"
                                >
                                    Confirmer le mot de passe
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="confirm_password"
                                        type="password"
                                        name="confirm_password"
                                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                        placeholder="Confirmer le mot de passe..."
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
                    >Inscription
                    </button>
                </div>
            </form>
        </>
    )
}

export default Register