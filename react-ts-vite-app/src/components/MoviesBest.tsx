import { useEffect, useState } from "react";
import type { Movie } from "../types-interfaces/Movie";
import { useTranslation } from "react-i18next";

function MoviesBest() {
  const { t } = useTranslation();

  // Initialisation des états
  const [data, setData] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/movies/best`)
      .then((res) => {
        if (!res.ok) throw new Error(t('movies_thumbnails.error_status', { status: res.status }));
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
    return <div className="p-10 text-center text-[var(--color-black)]">{t('movies_thumbnails.loading')}</div>;
  if (error)
    return <div className="p-10 text-center text-[var(--color-black)]">{t('movies_thumbnails.error', { error: error })}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex-row justify-center items-center gap-6">
        {data.map((m) => (
          <div
            key={m.id}
            className="group overflow-hidden rounded-xl border border-[var(--color-white)] bg-[var(--color-white)] shadow-sm transition-all hover:shadow-md"
          >

            <div className="md:w-110 md:h-60 bg-[var(--color-white)] flex items-center justify-center">
              {m.cover_image ? (
                <img
                  src={m.cover_image}
                  alt={m.english_title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-[var(--color-white)]">{t('movies_thumbnails.image_placeholder')}</span>
              )}
            </div>

            <div className="p-5">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-black)]">
                {m.english_title}
              </h3>
              <p className="mt-2 text-[var(--color-black)] line-clamp-2 md:text-lg ">
                {m.english_synopsis || t('movies_thumbnails.no_synopsis')}
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoviesBest