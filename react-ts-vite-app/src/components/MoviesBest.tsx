import { useEffect, useState } from "react";
// Importation des hooks nécessaires de React
import type { Movie } from "../types-interfaces/Movie"; // Importation du type Movie depuis le fichier types-interfaces/Movie
import { useTranslation } from "react-i18next"; // Importation du hook useTranslation pour la traduction
import { Link } from "react-router-dom"; // Importation du composant Link de react-router-dom
function MoviesBest() {
  const { t } = useTranslation(['Festival', 'common', 'Galery']); // Utilisation du hook useTranslation avec les namespaces 'Festival', 'common' et 'Galery'
  // Initialisation des états
  const [data, setData] = useState<Movie[]>([]); // État pour stocker les données des films
  const [isLoading, setIsLoading] = useState(true); // État pour gérer le chargement
  const [error, setError] = useState<string | null>(null); // État pour gérer les erreurs

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/movies/best`) // Appel à l'API pour récupérer les meilleurs films
      .then((res) => {
        if (!res.ok)
          throw new Error(
            t("movies_thumbnails.error_status", { status: res.status }), // Traduction de l'erreur si la réponse n'est pas OK
          );
        return res.json();
      })
      .then((data) => {
        setData(data); // Mise à jour des données avec les films récupérés
        setIsLoading(false); // Fin du chargement
      })
      .catch((err) => {
        setError(err.message); // Stockage de l'erreur
        setIsLoading(false); // Fin du chargement
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
    <div className="w-full md:w-full mx-auto text-center sm:min-h-100">

      <h2 className="text-3xl p-5 text-primary font-extrabold">{t('films.selection_title')}</h2>
      <div className=" flex flex-col sm:flex-row justify-center items-center gap-6 ">
        {data.map((m) => (
          <div
            key={m.id} className="p-10 flex flex-col justify-start items-center "
          >
            {m.cover_image ? (
              <Link to={`/galery/${m.id}`}>
                {m.cover_image ? (
                  <div className="md:p-5 justify-start">

                    <img
                      src={m.cover_image}
                      alt={m.english_title} // Alt text pour l'image du film
                      className=" h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <span className="text-gray-500">{t('no_image')}</span> // Affichage du message "Aucune image" si aucune image n'est disponible
                )}
                <p className="text-2xl">{m.english_title}</p>
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
