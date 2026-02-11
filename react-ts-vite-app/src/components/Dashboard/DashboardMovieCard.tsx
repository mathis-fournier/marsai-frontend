import { useTranslation } from "react-i18next";

export default function DashboardMovieCard({ gridLayout, movie }: any) {
  const { t } = useTranslation();

  return (
    <div
      onClick={() => console.log("test")}
      className={`${gridLayout} p-4 md:p-6 border-b border-border hover:bg-primary/50 cursor-pointer`}
    >
      <div className="w-20 md:w-24">
        <img
          src={movie.cover_image}
          alt="moviethumbnail"
          className="rounded-md shadow-sm"
        />
      </div>

      <div className="font-semibold text-white">{movie.english_title}</div>
      <div className="hidden md:block text-white">
        {t("dashboard_movie_card.author_placeholder")}
      </div>
      <div className="hidden md:block">
        {/* label validé / en attente / ect*/}
        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
          {movie.status}
        </span>
      </div>
      <div className="cursor-select">
        <input type="checkbox" name="" id="" />
      </div>
    </div>
  );
}
