import { useEffect, useState } from "react";
import type { Movie } from "../types-interfaces/Movie";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function MoviesBest() {
  const { t } = useTranslation();

  // Initialisation des états
  const [data, setData] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/movies/best`)
      .then((res) => {
        if (!res.ok)
          throw new Error(
            t("movies_thumbnails.error_status", { status: res.status }),
          );
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
    return (
      <div className="p-10 text-center text-black">
        {t("movies_thumbnails.loading")}
      </div>
    );
  if (error)
    return (
      <div className="p-10 text-center text-black">
        {t("movies_thumbnails.error", { error: error })}
      </div>
    );

  return (
    <div className="w-full md:w-full mx-auto text-center">

      <h2 className="text-3xl p-5 text-primary font-extrabold">SÉLECTION DU FESTIVAL</h2>
      <div className=" flex flex-col sm:flex-row justify-center items-center gap-6 ">
        {data.map((m) => (
          <div
            key={m.id}
          >
            <div className="text-center p-10 text-3xl md:text-4xl">
              {/* <p>{m.original_title}</p> */}
              <p>{m.english_title}</p>
            </div>
            {m.cover_image ? (
              <Link to={`/galery/${m.id}`}>
                {m.cover_image ? (
                  <div className="md:p-5">

                    <img
                      src={m.cover_image}
                      alt={m.english_title}
                      className=" h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <span className="text-gray-500">{t('galery.no_image')}</span>
                )}
              </Link>
            ) : (
              <span className="text-white">
                {t("movies_thumbnails.image_placeholder")}
              </span>
            )}
            <p>{m.english_synopsis}</p>
          </div>
        ))}
      </div>
    </div>

  );
}

export default MoviesBest;
