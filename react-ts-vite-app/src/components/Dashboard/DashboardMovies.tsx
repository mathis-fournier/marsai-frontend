import DashboardMovieCard from "./DashboardMovieCard";
import { useTranslation } from "react-i18next";

export default function DashboardMovies({ movies, isLoading }) {
  const { t } = useTranslation();
  const gridLayout = "grid grid-cols-2 md:grid-cols-5 gap-4 items-center";

  if (isLoading) return <p>{t('dashboard_movies.loading')}</p>;
  return (
    <>
      {/* TITRE PAGE */}
      <div className="w-auto p-6 bg-[var(--color-bg2)]">
        <h2 className="text-blue-400 text-2xl font-mono uppercase">
          {t('dashboard_movies.title')}
        </h2>
        <h1 className="text-4xl font-bold">{t('dashboard_movies.subtitle')}</h1>
        <p className="italic opacity-80">
          {t('dashboard_movies.description')}
        </p>
      </div>

      {/* GERER FILMS */}
      <div className="w-full p-6">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <input
              type="text"
              placeholder={t('dashboard_movies.search_placeholder')}
              className="border w-full p-2 rounded-md bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="p-6">
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
