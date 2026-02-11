import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import FormInput from "../components/FormInput";

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
  const { t } = useTranslation();

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
  const fields = [
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
  const textAreas = [
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage(t("submit_movie.message.sending"));

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value.toString());
    });

    if (file) {
      data.append("file", file);
    }
    console.log("URL appelée :", `${import.meta.env.VITE_API_URL}/movies`);
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
          <div className="text-white">
            <h1 className="text-2xl text-primary font-sans">
              <span>SUBMIT YOUR MOVIE
              </span>
            </h1>
            <h2 className="text-base/7 font-semibold text-white">
              {t('register.title')}</h2>
            <p className="mt-1 text-sm/6 text-gray-400">
              {t('register.subtitle')}
            </p>
          </div>
          <fieldset className="">
            <div className="text-white">
              <div className="sm:grid grid-cols-2 gap-x-6 space-y-5 sm:grid-cols-6">
                {fields.map((field) => (
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
                {textAreas.map((area) => (
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
                    <span>{t("submit_movie.upload_file_label")}</span>
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
              <div className="flex p-10 items-center justify-center gap-x-6 ">
                <button
                  type="submit"
                  className="rounded-md bg-primary px-6 py-2 text-lg font-semibold text-black shadow-md transition-transform duration-300 ease-in-out hover:scale-1.05"
                >
                  {t("submit_movie.save_button")}
                </button>
              </div>
              {message && <p className="text-sm text-primary text-center">{message}</p>}
            </div >
          </fieldset>
        </div>
      </form >
    </div>

  );
}
