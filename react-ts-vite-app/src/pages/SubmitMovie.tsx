import { useState, useRef, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import FormInput from "../components/FormInput";
import type { MovieCollaboratorFormState, MovieFormState } from "../types-interfaces/Movie"

export default function SubmitMovie() {
  const page1Ref = useRef<HTMLFieldSetElement>(null);
  const page2Ref = useRef<HTMLFieldSetElement>(null);
  const page3Ref = useRef<HTMLFieldSetElement>(null);
  const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined);
  const [page, setPage] = useState<number>(1);

  function handlePreviousPage() {
    if (page > 1) setPage(page - 1);
    return;
  }

  function handleNextPage() {
    if (page < 3) setPage(page + 1);
    return;
  }

  const { t } = useTranslation();
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [numberCollaborators, setNumberCollaborators] = useState<number>(0);


  // PAGE 1 & 3 : Collaborator'S DETAILS
  const [movieCollaboratorFormData, setMovieCollaboratorFormData] = useState<MovieCollaboratorFormState>({
    gender: "",
    firstname: "",
    lastname: "",
    email: "",
    job: "",
    contribution: "",
    birthdate: "",
    country: "",
    region: "",
    city: "",
    address: "",
    zipcode: "",
    phone: "",
    facebook_url: "",
    instagram_url: "",
    youtube_url: "",
    linkedin_url: "",
    twitter_url: ""
  });
  const movieCollaboratorFields = [
    {
      id: "firstname",
      label: t("submit_movie.firstname_label"),
      placeholder: t("submit_movie.firstname_placeholder"),
    },
    {
      id: "lastname",
      label: t("submit_movie.lastname_label"),
      placeholder: t("submit_movie.lastname_placeholder"),
    },
    {
      id: "email",
      label: t("submit_movie.email_label"),
      type: "email",
    },
    {
      id: "profession",
      label: t("submit_movie.profession_label"),
      placeholder: t("submit_movie.profession_placeholder"),
    },
    {
      id: "contribution",
      label: t("submit_movie.contribution_label"),
      placeholder: t("submit_movie.contribution_placeholder"),
    },
    {
      id: "country",
      label: t("submit_movie.country_label"),
      placeholder: t("submit_movie.country_placeholder"),
    },
    {
      id: "region",
      label: t("submit_movie.region_label"),
      placeholder: t("submit_movie.region_placeholder"),
    },
    {
      id: "city",
      label: t("submit_movie.city_label"),
      placeholder: t("submit_movie.city_placeholder"),
    },
    {
      id: "zip",
      label: t("submit_movie.zip_label"),
      placeholder: t("submit_movie.zip_placeholder"),
    },
    {
      id: "address",
      label: t("submit_movie.address_label"),
      placeholder: t("submit_movie.address_placeholder"),
    },
    {
      id: "phone",
      label: t("submit_movie.phone_label"),
      type: "tel",
    },
    {
      id: "facebook",
      label: t("submit_movie.facebook_label"),
      type: "url",
    },
    {
      id: "instagram",
      label: t("submit_movie.instagram_label"),
      type: "url",
    },
    {
      id: "linkedin",
      label: t("submit_movie.linkedin_label"),
      type: "url",
    },
    {
      id: "twitter",
      label: t("submit_movie.twitter_label"),
      type: "url",
    }
  ];


  // PAGE  2 : MOVIE DETAILS
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

  const movieFormFields = [
    {
      id: "original_title",
      label: t("submit_movie.original_title_label"),
      placeholder: t("submit_movie.original_title_placeholder"),
    },
    {
      id: "english_title",
      label: t("submit_movie.english_title_label"),
      placeholder: t("submit_movie.english_title_placeholder"),
    },
    {
      id: "youtube_url",
      label: t("submit_movie.youtube_url_label"),
      type: "url",
    },
    { id: "duration", label: t("submit_movie.duration_label"), type: "number" },
  ];
  const movieFormTextAreas = [
    {
      id: "original_synopsis",
      label: t("submit_movie.original_synopsis_label"),
    },
    {
      id: "english_synopsis",
      label: t("submit_movie.english_synopsis_label"),
    },
    { id: "creative_process", label: t("submit_movie.creative_process_label") },
  ];



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

  // Function that handles the final form submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage(t("submit_movie.message.sending"));

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
          t("submit_movie.message.http_error", { status: response.status }),
        );
      }

      const result = await response.json();
      setMessage(t("submit_movie.message.success", { id: result.id }));
    } catch (error: any) {
      console.error(error);
      setMessage(t("submit_movie.message.error", { message: error.message }));
    }
  };

  return (
    <div className="my-20">
      <form onSubmit={handleSubmit} className="p-25 md:max-w-[75%] mx-auto px-6 my-1 pt-10 sm:rounded-4xl md:shadow-lg/50 md:border-2 sm:border-primary md:shadow-white mb-10 bg-linear-to-b from-dark to-brand2">
        <div className="space-y-12">

          {/* Main Title */}
          <div className="text-white">
            <h1 className="text-2xl text-primary font-sans">SUBMIT YOUR MOVIE : {page}/3</h1>
          </div>

          {/* Form Pages */}


          {/* Form Page 1 */}
          <fieldset className={`${page === 1 ? 'opacity-100' : 'hidden'}`}>
            <div className="text-white">
              <legend className="mb-10 text-2xl">
                <h2>{t('submit_movie.personal_informations')}</h2>
                <p className="mt-1 text-sm/6 text-gray-400">{t('submit_movie.subtitle')}</p>
              </legend>
              <div className="sm:grid grid-cols-2 gap-x-6 space-y-5 sm:grid-cols-6">


                <label htmlFor="gender">t('submit_movie.gender')</label>
                <select name="gender" id="gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>

                {movieCollaboratorFields.map((field) => (
                  <FormInput key={field.id} {...field} onChange={handleChange} />


                ))}

                <div>
                  <label htmlFor="numberCollaborators">t('submit_movie.numberOfCollaborators')</label>
                  <select name="numberCollaborators" id="numberCollaborators" onChange={(e) => setNumberCollaborators(parseInt(e.target.value))}>
                    {Array.from({ length: 11 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>


              </div>
            </div>
          </fieldset>

          {/* Form Page 2 */}
          <fieldset className={`${page === 2 ? 'opacity-100' : 'hidden'}`}>
            <div className="text-white">
              <legend className="mb-10 text-2xl">
                <h2>{t('submit_movie.title')}</h2>
                <p className="mt-1 text-sm/6 text-gray-400">{t('submit_movie.subtitle')}</p>
              </legend>
              <div className="sm:grid grid-cols-2 gap-x-6 space-y-5 sm:grid-cols-6">
                {movieFormFields.map((field) => (
                  <FormInput key={field.id} {...field} onChange={handleChange} />
                ))}

                <div className=" my-5 sm:col-span-3">
                  <label className="block text-sm font-medium">
                    {t("submit_movie.original_language_label")}
                  </label>
                  <select
                    name="original_language"
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md bg-white/5 py-1.5 px-3 text-white border border-white"
                  >
                    <option value="French">French</option>
                    <option value="English">English</option>
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
                  label={t("submit_movie.ia_tools_label")}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-center rounded-lg px-6 py-10">
                <div className="text-center">
                  <label
                    htmlFor="file"
                    className="cursor-pointer font-semibold"
                  >
                    <span>{t("submit_movie.upload_file_label_cover_image")}</span>
                    <input
                      id="file"
                      name="file"
                      type="file"
                      className="sr-only"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                  </label>
                  <p className="text-xs text-gray-400 mt-1">
                    {file ? file.name : t("submit_movie.file_types_label")}
                  </p>
                </div>
              </div>
              <div className="flex justify-center rounded-lg px-6 py-10">
                <div className="text-center">
                  <label
                    htmlFor="file"
                    className="cursor-pointer font-semibold"
                  >
                    <span>{t("submit_movie.upload_file_label_movie_raw")}</span>
                    <input
                      id="file"
                      name="file"
                      type="file"
                      className="sr-only"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                  </label>
                  <p className="text-xs text-gray-400 mt-1">
                    {file ? file.name : t("submit_movie.file_types_label")}
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
                      {t(`submit_movie.${name}_label`)}
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
                <h2>{t('submit_movie.collaborators_informations')}</h2>
                <p className="mt-1 text-sm/6 text-gray-400">{t('submit_movie.subtitle')}</p>
              </legend>
              <h3>You selected {numberCollaborators} collaborators :</h3>
              {Array.from({ length: numberCollaborators }, (_, i) => (
                <div className="my-10">
                  <h2 className="text-2xl">{t('main.collaborator') + ' : ' + (i + 1)}</h2>

                  <div className="sm:grid grid-cols-2 gap-x-6 space-y-5 sm:grid-cols-6">

                    <label htmlFor="gender">t('submit_movie.gender')</label>
                    <select name="gender" id="gender">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
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
          <button type="button" onClick={handlePreviousPage} className={page > 1 ? `rounded-md bg-primary px-6 py-2 text-lg font-semibold text-black shadow-md transition-transform duration-300 ease-in-out hover:scale-1.05` : 'hidden'}>{t("submit_movie.previous-button")}</button>
          <button type="button" onClick={handleNextPage} className={page < 3 ? `rounded-md bg-primary px-6 py-2 text-lg font-semibold text-black shadow-md transition-transform duration-300 ease-in-out hover:scale-1.05` : 'hidden'}>{t("submit_movie.next-button")}</button>
          {/* final Submit button */}
          <div className={`${page === 3 ? 'flex p-10 items-center justify-center gap-x-6' : 'hidden'}`}>
            <button type="submit" >
              <h2 className="w-full text-lg my-8 cursor-pointer text-white bg-linear-to-t from-secondary hover:bg-brand2 text-center w-40 m-auto p-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-1.05">
                {t("submit_movie.submit-button")}
              </h2></button>
          </div>
        </div>
      </form >
    </div>
  );
}
