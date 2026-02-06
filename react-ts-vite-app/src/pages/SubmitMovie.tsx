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
    <div className="bg-brand2 md:max-w-[75%] mx-auto px-6 my-25 pt-10 md:rounded-4xl shadow-lg mb-10 text-white">
      <h1 className="text-3xl text-center font-bold text-secondary">
        {t("submit_movie.page_title")}
      </h1>

      <form onSubmit={handleSubmit} className="p-10 mx-auto max-w-2xl">
        <fieldset className="border border-white p-8 rounded-lg space-y-12">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {fields.map((field) => (
              <FormInput key={field.id} {...field} onChange={handleChange} />
            ))}

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium">
                {t("submit_movie.original_language_label")}
              </label>
              <select
                name="original_language"
                onChange={handleChange}
                className="mt-2 block w-full rounded-md bg-white/5 py-1.5 px-3 text-white outline-white/10"
              >
                <option value="French">French</option>
                <option value="English">English</option>
              </select>
            </div>
          </div>

          <div className="space-y-8">
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

          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
            <div className="text-center">
              <label
                htmlFor="file"
                className="cursor-pointer text-indigo-400 hover:text-indigo-300 font-semibold"
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

          <div className="flex gap-10">
            {["isHybrid", "hasSubs"].map((name) => (
              <label
                key={name}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name={name}
                  onChange={handleChange}
                  className="size-4 rounded border-white/10 bg-white/5 text-indigo-500"
                />
                <span className="text-sm font-medium">
                  {t(`submit_movie.${name}_label`)}
                </span>
              </label>
            ))}
          </div>
          <div className="flex items-center justify-end gap-x-6">
            {message && <p className="text-sm text-secondary">{message}</p>}
            <button
              type="submit"
              className="rounded-md bg-indigo-500 px-6 py-2 text-sm font-semibold hover:bg-indigo-400 shadow-md"
            >
              {t("submit_movie.save_button")}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
