import { useState } from "react";
import DashboardMovieCard from "./DashboardMovieCard";
import { useTranslation } from "react-i18next";

export default function DashboardMovies({ movies, isLoading }) {
  const { t } = useTranslation();
  const gridLayout = "grid grid-cols-2 md:grid-cols-5 gap-4 items-center";
  const [panel, setPanel] = useState<boolean>(false);

  if (isLoading) return <p>{t("dashboard_movies.loading")}</p>;
  return (
    <>
      {/* TITRE PAGE */}
      <div
        onClick={() => setPanel(!panel)}
        className="cursor-pointer w-auto p-6 bg-brand">
        <h2 className="text-secondary text-2xl font-mono uppercase">
          🔳 {t("dashboard_movies.title")}
        </h2>
        <h1 className="text-4xl text-white font-bold">
          {t("dashboard_movies.subtitle")}
        </h1>
        <p className="italic text-white opacity-80">
          {t("dashboard_movies.description")}
        </p>
      </div>

      {/* GERER FILMS */}
      <div className={`transition-all duration-1350 ease-linear overflow-hidden ${panel ? 'opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-brand2 rounded-xl border border-border shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <input
              type="text"
              placeholder={t("dashboard_movies.search_placeholder")}
              className="border w-full p-2 text-white rounded-md bg-brand focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className=" p-6">
            {movies.map((movie: any) => (
              <DashboardMovieCard
                gridLayout={gridLayout}
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
