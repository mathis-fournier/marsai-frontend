import { useState } from "react";
import DashboardMovieCard from "./DashboardMovieCard";
import { useTranslation } from "react-i18next";
import type { Movie } from "../../types-interfaces/Movie";

export default function DashboardMovies({ movies, isLoading }: any): any {
  const { t } = useTranslation();
  const gridLayout = "grid grid-cols-2 md:grid-cols-5 gap-4 items-center";
  const [panel, setPanel] = useState<boolean>(false);
  const [query, setQuery] = useState("");
  const filtered = movies.filter(
    (e: Movie) =>
      e.original_title.toLowerCase().includes(query.toLowerCase()) ||
      e.english_title.toLowerCase().includes(query.toLowerCase()),
  );

  if (isLoading) return <p>{t("dashboard_movies.loading")}</p>;

  return (
    <>
      {/* TITRE PAGE */}
      <div
        onClick={() => setPanel(!panel)}
        className="cursor-pointer w-auto p-6"
      >
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
      <div
        className={`transition-all duration-150 ease-linear overflow-hidden ${panel ? "opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="rounded-xl border border-border shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <input
              type="text"
              placeholder={t("dashboard_movies.search_placeholder")}
              className="border w-full p-2 text-white rounded-md focus:outline-none"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className=" p-6">
            {filtered.map((movie: any) => (
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
