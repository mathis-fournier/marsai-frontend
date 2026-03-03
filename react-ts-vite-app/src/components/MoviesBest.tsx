import { useEffect, useState } from "react";
// Importation des hooks nécessaires de React
import type { Movie } from "../types-interfaces/Movie"; // Importation du type Movie depuis le fichier types-interfaces/Movie
import { useTranslation } from "react-i18next"; // Importation du hook useTranslation pour la traduction
import MovieThumbnail from "./MovieThumbnail";
function MoviesBest() {

  const { t } = useTranslation(['Festival', 'common', 'Galery']); // Utilisation du hook useTranslation avec les namespaces 'Festival', 'common' et 'Galery'

  // Initialisation des états
  const [isLoading, setIsLoading] = useState(true); // État pour gérer le chargement
  const [error, setError] = useState<string | null>(null); // État pour gérer les erreurs
  const [showBest, setShowBest] = useState<boolean>(false); // État pour afficher ou cacher les meilleurs films
  const [movies, setMovies] = useState<Movie[]>([]); // État pour stocker les données des films
  const [moviesPerPage, setMoviesPerPage] = useState<number>(3); // État pour gérer la pagination des films
  const [currentPage, setCurrentPage] = useState<number>(1); // État pour gérer la pagination des films
  const [totalMovies, setTotalMovies] = useState<number>(0); // État pour stocker le total des films récupérés

  function toggleBest() {
    setShowBest(!showBest);
  }
  function handleMinus() {
    if (moviesPerPage > 1) setMoviesPerPage(moviesPerPage - 1);
    return;
  }
  function handlePlus() {
    if (moviesPerPage < 5) setMoviesPerPage(moviesPerPage + 1);
    return;
  }
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/movies?category=best&limit=${moviesPerPage}&page=${currentPage}`); // Appel à l'API pour récupérer les meilleurs films
        if (!res.ok)
          throw new Error('error');
        const data = await res.json();
        setMovies(data); // Mise à jour des données avec les films récupérés
        setTotalMovies(data.length);
      } catch (err: any) {
        setError(err.message); // Stockage de l'erreur
      } finally {
        setIsLoading(false); // Fin du chargement
      }
    };

    fetchMovies();
  }, [moviesPerPage]);

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
      <h2 className="flex items-center justify-start px-5 text-secondary md:text-2xl font-bold my-8 text-xl" onClick={toggleBest}>
        <span className={`text-xl md:text-3xl transition-transform duration-500 ease-in-out transform ${showBest ? 'rotate-90' : 'rotate-0'}`}>▶</span>
        <span className="p-3">{t('best_rated', { ns: 'Galery' })}</span>
      </h2>
      <div className={`text-3xl text-white transition-all duration-750 ease-in-out overflow-hidden ${showBest ? 'max-h-500' : 'max-h-0'}`}>
        <button onClick={handleMinus} className="p-5 ">-</button>
        {t('best_n_first', { ns: 'Galery', count: moviesPerPage })}
        <button onClick={handlePlus} className="p-5 ">+</button>
        <div className=" flex flex-col sm:flex-row justify-center items-center gap-6 ">
          {movies && movies.map((m) => (
            <div
              key={m.id} className="p-10 flex flex-col justify-start items-center "
            >
              {m.cover_image ? (
                <MovieThumbnail movie={m} key={m.id} />
              ) : (
                <span className="text-white">
                  {t("movies_thumbnails.image_placeholder")}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default MoviesBest;
