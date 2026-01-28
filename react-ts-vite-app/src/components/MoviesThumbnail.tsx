import { useEffect, useState } from "react";
import type { Movie } from "../types-interfaces/Movie";

function MoviesThumbnail() {

    // Initialisation des états
    const [data, setData] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/movies/best`)
        .then((res) => {
          if (!res.ok) throw new Error(`Erreur Status: ${res.status}`);
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }, []);

  if (isLoading)
    return <div className="p-10 text-center text-[var(--color-black)]">Chargement...</div>;
  if (error)
    return <div className="p-10 text-center text-[var(--color-black)]">Erreur: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((m) => (
          <div
            key={m.id}
            className="group overflow-hidden rounded-xl border border-[var(--color-white)] bg-[var(--color-white)] shadow-sm transition-all hover:shadow-md"
          >
            <div className="h-48 bg-slate-100 flex items-center justify-center">
              {m.cover_image ? (
                <img
                  src={m.cover_image}
                  alt={m.english_title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-[var(--color-white)]">Image du film</span>
              )}
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-[var(--color-black)]">
                {m.english_title}
              </h3>
              <p className="mt-2 text-[var(--color-black)] line-clamp-2">
                {m.english_synopsis || "Aucun synopsis trouvé."}
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoviesThumbnail