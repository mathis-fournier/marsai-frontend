import { useTranslation } from "react-i18next";

export default function DashboardMovieCard({ gridLayout, movie }: any) {
  const { t } = useTranslation();
  const statusStyles = {
    Accepted: "bg-green-100 text-black",
    Pending: "bg-gray-100 text-black",
    Cancelled: "bg-red-100 text-black",
    default: "bg-gray-100 text-black",
  };

  return (
    <div
      onClick={() => console.log("test")}
      className={`${gridLayout} p-4 md:p-6 border-b border-[var(--color-border)] hover:bg-[var(--color-brand)] cursor-pointer`}
    >
      <div className="w-20 md:w-24">
        <img
          src="https://picsum.photos/100/60"
          alt="moviethumbnail"
          className="rounded-md shadow-sm"
        />
      </div>

      <div className="font-semibold text-[var(--color-white)]">
        {movie.english_title}
      </div>
      <div className="hidden md:block text-[var(--color-white)]">
        {t("dashboard_movie_card.author_placeholder")}
      </div>
      <div className="hidden md:block">
        {/* label validé / en attente / ect*/}
        <span
          className={`px-2 py-1 rounded-full text-xs ${statusStyles[movie.status as keyof typeof statusStyles] || statusStyles.default}`}
        >
          {movie.status}
        </span>
      </div>
      <div className="cursor-select">
        <input
          type="checkbox"
          name=""
          id=""
          className="accent-[var(--color-secondary)]"
        />
      </div>
    </div>
  );
}
