import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardMovieCard({ gridLayout, movie }: any) {
  const { t } = useTranslation();
  const { token } = useAuth();
  const [currentStatus, setCurrentStatus] = useState(movie.status);
  const navigate = useNavigate();
  async function handleStatus(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value;
    setCurrentStatus(newStatus);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/admin/movie-status/${movie.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        },
      );

      if (!response.ok) {
        setCurrentStatus(movie.status);
        console.error("Erreur lors de la mise à jour");
      }
    } catch (error) {
      setCurrentStatus(movie.status);
      console.log(error);
    }
  }

  console.log(movie);

  return (
    <div
      className={`${gridLayout} p-4 md:p-6 border-b border-border hover:bg-brand`}
    >
      <div className="w-20 md:w-24">
        <img
          src={movie.cover_image}
          alt="moviethumbnail"
          className="rounded-md shadow-sm"
        />
      </div>

      <div
        className="font-semibold text-white cursor-pointer"
        onClick={() => navigate(`/galery/${movie.id}`)}
      >
        {movie.english_title}
      </div>

      <div className="hidden md:block text-white">
        {t("dashboard_movie_card.author_placeholder")}
      </div>

      <div className="hidden md:block">
        {/* label validé / en attente / ect*/}
        <select
          className="text-white cursor-pointer"
          onChange={handleStatus}
          value={currentStatus}
          name=""
          id="select-status"
        >
          <option value="Accepted">Accepted</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      <div className="cursor-select">
        <input type="checkbox" name="" id="checkbox-selected" />
      </div>
    </div>
  );
}
