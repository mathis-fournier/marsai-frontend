import { useState } from "react";
import { useAuth } from "../components/Dashboard/context/AuthContext";

// 1. Updated InputGroup to handle props
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
    <input
      id={id}
      name={id} // Required for the handleChange function
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 text-white bg-brand2 border border-border rounded-md focus:border-brand outline-none transition-all"
    />
    <label htmlFor={id} className="text-xs text-red-500 opacity-80 ml-1">
      {label}
    </label>
  </div>
);

export default function AddEvent() {
  const { token } = useAuth();

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

  // 2. Dynamic change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  async function sendData(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/admin/event`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.ok) {
        alert("Évènement ajouté !");
      } else {
        console.error("Failed to add event:", response);
      }
    } catch (error) {
      console.error("Error adding event:", error);
    }
  }

  return (
    <div className="p-6 w-full border border-border rounded-xl">
      <form onSubmit={sendData} className="flex flex-col gap-6">
        {/* Row 1: Title & Description */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <InputGroup
            id="title"
            placeholder="Title"
            label="Titre requis"
            value={formData.title}
            onChange={handleChange}
          />
          <InputGroup
            id="description"
            placeholder="Description"
            label="Description requise"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* Row 2: Status & Location */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <InputGroup
            id="status"
            placeholder="Status (ex: Completed)"
            label="Statut requis"
            value={formData.status}
            onChange={handleChange}
          />
          <InputGroup
            id="location"
            placeholder="Location"
            label="Lieu requis"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        {/* Row 3: Start At & Duration */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <InputGroup
            id="start_at"
            placeholder="10-10-2000"
            label="Date de début"
            value={formData.start_at}
            onChange={handleChange}
          />
          <InputGroup
            id="duration"
            type="number"
            placeholder="Duration (minutes)"
            label="Nombre requis"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>

        {/* Row 4: Timestamps */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <InputGroup
            id="created_at"
            placeholder="Created At (10-10-2000)"
            label="Date de création"
            value={formData.created_at}
            onChange={handleChange}
          />
          <InputGroup
            id="updated_at"
            placeholder="Updated At (10-10-2000)"
            label="Date de mise à jour"
            value={formData.updated_at}
            onChange={handleChange}
          />
          <InputGroup
            id="published_at"
            placeholder="Published At (10-10-2000)"
            label="Date de publication"
            value={formData.published_at}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-brand p-2 rounded-md font-bold hover:brightness-110 transition-all text-white"
        >
          Ajouter l'évènement
        </button>
      </form>
    </div>
  );
}
