import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface MovieFormState {
  original_title: string;
  english_title: string;
  youtube_url: string;
  duration: number;
  isHybrid: boolean;
  original_language: string;
  original_synopsis: string;
  english_synopsis: string;
  creative_process: string;
  ia_tools: string;
  hasSubs: boolean;
}

export default function SubmitMovie() {
  const [formData, setFormData] = useState<MovieFormState>({
    original_title: "",
    english_title: "",
    youtube_url: "",
    duration: 0,
    isHybrid: false,
    original_language: "French",
    original_synopsis: "",
    english_synopsis: "",
    creative_process: "",
    ia_tools: "",
    hasSubs: false,
  });

  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage("Envoi en cours...");

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value.toString());
    });

    if (file) {
      data.append("file", file);
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/movies`, {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const result = await response.json();
      setMessage(`Succès ! Film ajouté avec l'ID : ${result.id}`);
    } catch (error: any) {
      console.error(error);
      setMessage(`Erreur : ${error.message}`);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
        <div className="space-y-12">
          <div className="border-b border-white/10 pb-12">
            <h2 className="text-base/7 font-semibold text-white">
              Informations du Film
            </h2>
            <p className="mt-1 text-sm/6 text-gray-400">
              Ces informations seront affichées publiquement sur la plateforme.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="original_title"
                  className="block text-sm/6 font-medium text-white"
                >
                  Titre Original
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                    <input
                      id="original_title"
                      type="text"
                      name="original_title"
                      onChange={handleChange}
                      className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                      placeholder="Ex: Le Réveil"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="english_title"
                  className="block text-sm/6 font-medium text-white"
                >
                  Titre Anglais
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                    <input
                      id="english_title"
                      type="text"
                      name="english_title"
                      onChange={handleChange}
                      className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                      placeholder="Ex: The Awakening"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="original_synopsis"
                  className="block text-sm/6 font-medium text-white"
                >
                  Synopsis Original
                </label>
                <div className="mt-2">
                  <textarea
                    id="original_synopsis"
                    name="original_synopsis"
                    rows={3}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    placeholder="Résumé dans la langue originale..."
                    required
                  ></textarea>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="english_synopsis"
                  className="block text-sm/6 font-medium text-white"
                >
                  Synopsis Anglais
                </label>
                <div className="mt-2">
                  <textarea
                    id="english_synopsis"
                    name="english_synopsis"
                    rows={3}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    placeholder="Résumé en anglais..."
                    required
                  ></textarea>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm/6 font-medium text-white"
                >
                  Affiche du film (Cover)
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                  <div className="text-center">
                    <svg
                      className="mx-auto size-12 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                      />
                    </svg>
                    <div className="mt-4 flex text-sm/6 text-gray-400 justify-center">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-400 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs/5 text-gray-400">
                      PNG, JPG, GIF up to 10MB
                    </p>
                    {file && (
                      <p className="text-sm text-indigo-400 mt-2">
                        Fichier sélectionné : {file.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-white/10 pb-12">
            <h2 className="text-base/7 font-semibold text-white">
              Détails Techniques
            </h2>
            <p className="mt-1 text-sm/6 text-gray-400">
              Liens, durée et outils de création.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="youtube_url"
                  className="block text-sm/6 font-medium text-white"
                >
                  Lien YouTube
                </label>
                <div className="mt-2">
                  <input
                    id="youtube_url"
                    type="url"
                    name="youtube_url"
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="duration"
                  className="block text-sm/6 font-medium text-white"
                >
                  Durée (secondes)
                </label>
                <div className="mt-2">
                  <input
                    id="duration"
                    type="number"
                    name="duration"
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="original_language"
                  className="block text-sm/6 font-medium text-white"
                >
                  Langue Originale
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="original_language"
                    name="original_language"
                    onChange={handleChange}
                    value={formData.original_language}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  >
                    <option value="French">French</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="German">German</option>
                    <option value="Italian">Italian</option>
                    <option value="Japanese">Japanese</option>
                  </select>
                  <svg
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    />
                  </svg>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="creative_process"
                  className="block text-sm/6 font-medium text-white"
                >
                  Processus Créatif
                </label>
                <div className="mt-2">
                  <textarea
                    id="creative_process"
                    name="creative_process"
                    rows={2}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    placeholder="Comment avez-vous réalisé ce film ?"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="ia_tools"
                  className="block text-sm/6 font-medium text-white"
                >
                  Outils IA utilisés
                </label>
                <div className="mt-2">
                  <input
                    id="ia_tools"
                    type="text"
                    name="ia_tools"
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    placeholder="Midjourney, Runway, Pika..."
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-white/10 pb-12">
            <h2 className="text-base/7 font-semibold text-white">Options</h2>
            <p className="mt-1 text-sm/6 text-gray-400">
              Caractéristiques spécifiques de la production.
            </p>

            <div className="mt-10 space-y-10">
              <fieldset>
                <div className="mt-6 space-y-6">
                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          id="isHybrid"
                          name="isHybrid"
                          type="checkbox"
                          checked={formData.isHybrid}
                          onChange={handleChange}
                          className="col-start-1 row-start-1 appearance-none rounded-sm border border-white/10 bg-white/5 checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        />
                        <svg
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-white/25"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            className="opacity-0 group-has-checked:opacity-100"
                            d="M3 8L6 11L11 3.5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="isHybrid"
                        className="font-medium text-white"
                      >
                        Production Hybride
                      </label>
                      <p className="text-gray-400">
                        Cochez si le film mélange IA et prises de vues réelles.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          id="hasSubs"
                          name="hasSubs"
                          type="checkbox"
                          checked={formData.hasSubs}
                          onChange={handleChange}
                          className="col-start-1 row-start-1 appearance-none rounded-sm border border-white/10 bg-white/5 checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        />
                        <svg
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-white/25"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            className="opacity-0 group-has-checked:opacity-100"
                            d="M3 8L6 11L11 3.5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="hasSubs"
                        className="font-medium text-white"
                      >
                        Sous-titres inclus
                      </label>
                      <p className="text-gray-400">
                        Le fichier vidéo contient-il déjà des sous-titres ?
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          {message && <p className="text-sm text-indigo-400">{message}</p>}
          <button type="button" className="text-sm/6 font-semibold text-white">
            Annuler
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Enregistrer le film
          </button>
        </div>
      </form>
    </div>
  );
}
