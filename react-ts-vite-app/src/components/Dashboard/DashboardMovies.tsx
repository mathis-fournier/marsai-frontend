import DashboardMovieCard from "./DashboardMovieCard";

export default function DashboardMovies({ movies, isLoading }) {
  const gridLayout = "grid grid-cols-2 md:grid-cols-5 gap-4 items-center";

  if (isLoading) return <p>Chargement des films...</p>;
  return (
    <>
      {/* TITRE PAGE */}
      <div className="w-auto p-6 bg-[var(--color-bg2)]">
        <h2 className="text-blue-400 text-2xl font-mono uppercase">
          Admin Management
        </h2>
        <h1 className="text-4xl font-bold">FILMS SOUMIS</h1>
        <p className="italic opacity-80">
          Gérez l'intégralité des soumissions et gérez les mises en avant.
        </p>
      </div>

      {/* GERER FILMS */}
      <div className="w-full p-6">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <input
              type="text"
              placeholder="Rechercher un film..."
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
