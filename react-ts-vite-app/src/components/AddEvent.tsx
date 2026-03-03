import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

const InputGroup = ({
  id,
  label,
  placeholder,
  value,
  type = "text",
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string | number;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="flex-1 flex flex-col gap-1">
    {/* Champ d'entrée avec des classes pour le style */}
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 text-white bg-brand2 border border-border rounded-md focus:border-brand outline-none transition-all"
    />
    {/* Étiquette associée au champ d'entrée */}
    <label htmlFor={id} className="text-xs text-red-500 opacity-80 ml-1">
      {label}
    </label>
  </div>
);

export default function AddEvent() {

  // Importation du hook d'authentification
  const { token } = useAuth();
  const { t } = useTranslation("Dashboard");

  // Initialisation des données du formulaire avec useState
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    start_at: "",
    duration: 0,
    location: "",
    created_at: "",
    updated_at: "",
    published_at: "",
  });

  // Gestionnaire de changement dynamique pour les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  // Fonction pour envoyer les données du formulaire à l'API
  async function sendData(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/admin/event`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      if (response.ok) {
        alert(t("events.success_message"));
      } else {
        console.error("Échec de l'ajout de l'évènement :", response);
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'évènement :", error);
    }
  }

  return (
    <div className="p-6 w-full border border-border rounded-xl">
      <form onSubmit={sendData} className="flex flex-col gap-6">
        {/* Row 1: Title & Description */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <InputGroup
            id="title"
            placeholder={t("events.title_placeholder")}
            label={t("events.title_label")}
            value={formData.title}
            onChange={handleChange}
          />
          <InputGroup
            id="description"
            placeholder={t("events.description_placeholder")}
            label={t("events.description_label")}
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* Row 2: Status & Location */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <InputGroup
            id="status"
            placeholder={t("events.status_placeholder")}
            label={t("events.status_label")}
            value={formData.status}
            onChange={handleChange}
          />
          <InputGroup
            id="location"
            placeholder={t("events.location_placeholder")}
            label={t("events.location_label")}
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        {/* Row 3: Start At & Duration */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <InputGroup
            id="start_at"
            placeholder={t("events.start_at_placeholder")}
            label={t("events.start_at_label")}
            value={formData.start_at}
            onChange={handleChange}
          />
          <InputGroup
            id="duration"
            type="number"
            placeholder={t("events.duration_placeholder")}
            label={t("events.duration_label")}
            value={formData.duration}
            onChange={handleChange}
          />
        </div>

        {/* Row 4: Timestamps */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <InputGroup
            id="created_at"
            placeholder={t("events.created_at_placeholder")}
            label={t("events.created_at_label")}
            value={formData.created_at}
            onChange={handleChange}
          />
          <InputGroup
            id="updated_at"
            placeholder={t("events.updated_at_placeholder")}
            label={t("events.updated_at_label")}
            value={formData.updated_at}
            onChange={handleChange}
          />
          <InputGroup
            id="published_at"
            placeholder={t("events.published_at_placeholder")}
            label={t("events.published_at_label")}
            value={formData.published_at}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-brand p-2 rounded-md font-bold hover:brightness-110 transition-all text-white"
        >
          {t("events.add_button")}
        </button>
      </form>
    </div>
  );
}
