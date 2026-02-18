import { useState, useRef, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import FormInput from "../components/FormInput";
import type { MovieCollaboratorFormState, MovieFormState } from "../types-interfaces/Movie"

export default function SubmitMovie() {
  const [page, setPage] = useState<number>(1);

  function handlePreviousPage() {
    if (page > 1) setPage(page - 1);
    return;
  }

  function handleNextPage() {
    if (page < 3) setPage(page + 1);
    return;
  }

  const { t } = useTranslation(['SubmitMovie', 'common']);
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [numberCollaborators, setNumberCollaborators] = useState<number>(0);

  // PAGE 1 : INFORMATIONS GÉNÉRALES
  // État pour stocker les données des collaborateurs du film
  const [movieCollaboratorFormData, setMovieCollaboratorFormData] = useState<MovieCollaboratorFormState>({
    gender: "",
    firstname: "", // Prénom
    lastname: "", // Nom de famille
    email: "", // Email
    job: "", // Profession
    contribution: "", // Contribution
    birthdate: "", // Date de naissance
    country: "", // Pays
    region: "", // Région
    city: "", // Ville
    address: "", // Adresse
    zipcode: "", // Code postal
    phone: "", // Téléphone
    facebook_url: "", // URL Facebook
    instagram_url: "", // URL Instagram
    youtube_url: "", // URL YouTube
    linkedin_url: "", // URL LinkedIn
    twitter_url: "" // URL Twitter
  });

  // Tableau des champs pour les détails des collaborateurs
  const movieCollaboratorFields = [
    {
      id: "firstname",
      label: t("firstname_label"), // Étiquette du prénom
      placeholder: t("firstname_placeholder"), // Placeholder du prénom
    },
    {
      id: "lastname",
      label: t("lastname_label"), // Étiquette du nom de famille
      placeholder: t("lastname_placeholder"), // Placeholder du nom de famille
    },
    {
      id: "email",
      label: t("email_label"), // Étiquette de l'email
      type: "email", // Type d'entrée : email
    },
    {
      id: "profession",
      label: t("profession_label"), // Étiquette de la profession
      placeholder: t("profession_placeholder"), // Placeholder de la profession
    },
    {
      id: "contribution",
      label: t("contribution_label"), // Étiquette de la contribution
      placeholder: t("contribution_placeholder"), // Placeholder de la contribution
    },
    {
      id: "country",
      label: t("country_label"), // Étiquette du pays
      placeholder: t("country_placeholder"), // Placeholder du pays
    },
    {
      id: "region",
      label: t("region_label"), // Étiquette de la région
      placeholder: t("region_placeholder"), // Placeholder de la région
    },
    {
      id: "city",
      label: t("city_label"), // Étiquette de la ville
      placeholder: t("city_placeholder"), // Placeholder de la ville
    },
    {
      id: "zip",
      label: t("zip_label"), // Étiquette du code postal
      placeholder: t("zip_placeholder"), // Placeholder du code postal
    },
    {
      id: "address",
      label: t("address_label"), // Étiquette de l'adresse
      placeholder: t("address_placeholder"), // Placeholder de l'adresse
    },
    {
      id: "phone",
      label: t("phone_label"), // Étiquette du téléphone
      type: "tel", // Type d'entrée : téléphone
    },
    {
      id: "facebook",
      label: t("facebook_label"), // Étiquette de Facebook
      type: "url", // Type d'entrée : URL
    },
    {
      id: "instagram",
      label: t("instagram_label"), // Étiquette d'Instagram
      type: "url", // Type d'entrée : URL
    },
    {
      id: "linkedin",
      label: t("linkedin_label"), // Étiquette de LinkedIn
      type: "url", // Type d'entrée : URL
    },
    {
      id: "twitter",
      label: t("twitter_label"), // Étiquette de Twitter
      type: "url", // Type d'entrée : URL
    }
  ];



  // PAGE 2 : DÉTAILS DU FILM
  const [movieFormData, setMovieFormData] = useState<MovieFormState>({
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

  // Définition des champs du formulaire pour les détails du film
  const movieFormFields = [
    {
      id: "original_title",
      label: t("original_title_label"),
      placeholder: t("original_title_placeholder"),
    },
    {
      id: "english_title",
      label: t("english_title_label"),
      placeholder: t("english_title_placeholder"),
    },
    {
      id: "youtube_url",
      label: t("youtube_url_label"),
      type: "url",
    },
    { id: "duration", label: t("duration_label"), type: "number" },
  ];

  // Définition des zones de texte pour les détails du film
  const movieFormTextAreas = [
    {
      id: "original_synopsis",
      label: t("original_synopsis_label"),
    },
    {
      id: "english_synopsis",
      label: t("english_synopsis_label"),
    },
    { id: "creative_process", label: t("creative_process_label") },
  ];


  // Gestion des changements dans les champs du formulaire
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setMovieFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };


  // Fonction qui gère la soumission finale du formulaire
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage(t("message.sending"));

    const data = new FormData();

    Object.entries(movieFormData).forEach(([key, value]) => {
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
        throw new Error(
          t("message.http_error", { status: response.status }),
        );
      }

      const result = await response.json();
      setMessage(t("message.success", { id: result.id }));
    } catch (error: any) {
      console.error(error);
      setMessage(t("message.error", { message: error.message }));
    }
  };

  return (
    <div className="my-20">
      <form onSubmit={handleSubmit} className="p-25 md:max-w-[75%] mx-auto px-6 my-1 pt-10 sm:rounded-4xl md:shadow-lg/50 md:border-2 sm:border-primary md:shadow-white mb-10 bg-linear-to-b from-dark to-brand2">
        <div className="space-y-12">

          {/* Main Title */}
          <div className="text-white">
            <h1 className="text-2xl text-primary font-sans">{t('page_header', { page: page })}</h1>
          </div>


          {/* Form Pages */}

          {/* Form Page 1 */}
          <fieldset className={`${page === 1 ? 'opacity-100' : 'hidden'}`}>
            <div className="text-white">
              <legend className="mb-10 text-2xl">
                <h2>{t('personal_informations')}</h2>
                <p className="mt-1 text-sm/6 text-gray-400">{t('subtitle')}</p>
              </legend>
              <div className="flex flex-col my-5">
                <label htmlFor="gender">{t('gender')}</label>
                <select className="border border-white p-1.5 rounded-lg mt-2" name="gender" id="gender">
                  <option value="Male">{t('gender_male')}</option>
                  <option value="Female">{t('gender_female')}</option>
                  <option value="Other">{t('gender_other')}</option>
                </select>
              </div>


              <div className="sm:grid grid-cols-2 gap-x-6 space-y-5 sm:grid-cols-6">
                {movieCollaboratorFields.map((field) => (
                  <FormInput key={field.id} {...field} onChange={handleChange} />
                ))}
              </div>
            </div>
          </fieldset>

          {/* Form Page 2 */}
          <fieldset className={`${page === 2 ? 'opacity-100' : 'hidden'}`}>
            <div className="text-white">
              <legend className="mb-10 text-2xl">
                <h2>{t('title')}</h2>
                <p className="mt-1 text-sm/6 text-gray-400">{t('subtitle')}</p>
              </legend>
              <div className="sm:grid grid-cols-2 gap-x-6 space-y-5 sm:grid-cols-6">
                {movieFormFields.map((field) => (
                  <FormInput key={field.id} {...field} onChange={handleChange} />
                ))}

                <div className=" my-5 sm:col-span-3">
                  <label className="block text-sm font-medium">
                    {t("original_language_label")}
                  </label>
                  <select
                    name="original_language"
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md bg-white/5 py-1.5 px-3 text-white border border-white"
                  >
                    <option value="French">{t('language_french')}</option>
                    <option value="English">{t('language_english')}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-5">
                {movieFormTextAreas.map((area) => (
                  <FormInput
                    key={area.id}
                    {...area}
                    isTextArea={true}
                    onChange={handleChange}
                  />
                ))}
                <FormInput
                  id="ia_tools"
                  label={t("ia_tools_label")}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-center rounded-lg px-6 py-10">
                <div className="text-center">
                  <label
                    htmlFor="file"
                    className="cursor-pointer font-semibold"
                  >
                    <span>{t("upload_file_label_cover_image")}</span>
                    <input
                      id="file"
                      name="file"
                      type="file"
                      className="sr-only"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                  </label>
                  <p className="text-xs text-gray-400 mt-1">
                    {file ? file.name : t("file_types_label")}
                  </p>
                </div>
              </div>
              <div className="flex justify-center rounded-lg px-6 py-10">
                <div className="text-center">
                  <label
                    htmlFor="file"
                    className="cursor-pointer font-semibold"
                  >
                    <span>{t("upload_file_label_movie_raw")}</span>
                    <input
                      id="file"
                      name="file"
                      type="file"
                      className="sr-only"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                  </label>
                  <p className="text-xs text-gray-400 mt-1">
                    {file ? file.name : t("file_types_label")}
                  </p>
                </div>
              </div>
              <div className="flex gap-10 justify-center">
                {["isHybrid", "hasSubs"].map((name) => (
                  <label
                    key={name}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name={name}
                      onChange={handleChange}
                      className="size-4 rounded  bg-white/5 text-indigo-500"
                    />
                    <span className="text-sm font-medium">
                      {t(`${name}_label`)}
                    </span>
                  </label>
                ))}
              </div>
              {message && <p className="text-sm text-primary text-center">{message}</p>}
            </div >
          </fieldset>

          {/* Form Page 3 */}
          <fieldset className={`${page === 3 ? 'opacity-100' : 'hidden'}`}>
            <div className="text-white">
              <legend className="mb-10 text-2xl">
                <h2>{t('collaborators_informations')}</h2>
                <p className="mt-1 text-sm/6 text-gray-400">{t('subtitle')}</p>
              </legend>

              <div className="flex flex-col my-5">
                <label htmlFor="numberCollaborators">{t('numberOfCollaborators')}</label>
                <select className="border border-white p-1.5 my-5 rounded-lg" name="numberCollaborators" id="numberCollaborators" onChange={(e) => setNumberCollaborators(parseInt(e.target.value))}>
                  {Array.from({ length: 11 }, (_, i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </div>

              {/* <h3>{t('collaborator_count_message', { count: numberCollaborators })}</h3> */}


              {Array.from({ length: numberCollaborators }, (_, i) => (
                <div className="my-10">
                  <h2 className="text-2xl">{t('collaborator_with_number', { number: i + 1 })}</h2>
                  <div className="flex flex-col my-5 ">
                    <label htmlFor="gender">{t('gender')}</label>
                    <select name="gender" id="gender" className="border border-white p-1.5 rounded-lg">
                      <option value="Male">{t('gender_male')}</option>
                      <option value="Female">{t('gender_female')}</option>
                      <option value="Other">{t('gender_other')}</option>
                    </select>
                  </div>
                  {movieCollaboratorFields.map((field) => (
                    <FormInput key={field.id} {...field} onChange={handleChange} />
                  ))}
                </div>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="flex p-10 items-center justify-center gap-x-6 ">
          <button type="button" onClick={handlePreviousPage} className={page > 1 ? `rounded-md bg-primary px-6 py-2 text-lg font-semibold text-black shadow-md transition-transform duration-300 ease-in-out hover:scale-1.05` : 'hidden'}>{t("previous-button")}</button>
          <button type="button" onClick={handleNextPage} className={page < 3 ? `rounded-md bg-primary px-6 py-2 text-lg font-semibold text-black shadow-md transition-transform duration-300 ease-in-out hover:scale-1.05` : 'hidden'}>{t("next-button")}</button>
          {/* final Submit button */}
          <div className={`${page === 3 ? 'flex p-10 items-center justify-center gap-x-6' : 'hidden'}`}>
            <button type="submit" >
              <h2 className="w-full text-lg my-8 cursor-pointer text-white bg-linear-to-t from-secondary hover:bg-brand2 text-center w-40 m-auto p-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-1.05">
                {t("submit-button")}
              </h2></button>
          </div>
        </div>
      </form >
    </div>
  );
}
