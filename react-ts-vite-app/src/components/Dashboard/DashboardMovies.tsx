import { useState } from "react";
import DashboardMovieCard from "./DashboardMovieCard";
import { useTranslation } from "react-i18next";

export default function DashboardMovies({ movies, isLoading }: any): any {

  const { t } = useTranslation("Dashboard");
  const gridLayout = "grid grid-cols-2 md:grid-cols-5 gap-4 items-center";
  const [panel, setPanel] = useState<boolean>(false);

  if (isLoading) return <p>{t("movies.loading")}</p>;

  return (
    <>
      {/* TITRE PAGE */}
      <div
        onClick={() => setPanel(!panel)}
        className="cursor-pointer w-auto p-6">
        <h2 className="text-secondary text-2xl font-mono uppercase">
          🔳 {t("movies.title")}
        </h2>
        <h1 className="text-4xl text-white font-bold">
          {t("movies.subtitle")}
        </h1>
        <p className="italic text-white opacity-80">
          {t("movies.description")}
        </p>
      </div>

      {/* GERER FILMS */}
      <div className={`transition-all duration-1350 ease-linear overflow-hidden ${panel ? 'opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="rounded-xl border border-border shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <input
              type="text"
              placeholder={t("movies.search_placeholder")}
              className="border w-full p-2 text-white rounded-md focus:outline-none"
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
