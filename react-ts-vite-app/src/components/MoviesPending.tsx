import { useEffect, useState } from "react"; // Importation des hooks nécessaires de React
import type { Movie } from "../types-interfaces/Movie"; // Importation du type Movie depuis le fichier types-interfaces/Movie
import { useTranslation } from "react-i18next"; // Importation du hook useTranslation pour la traduction
import { Link } from "react-router-dom"; // Importation du composant Link de react-router-dom
import DashboardMovieCard from "./Dashboard/DashboardMovieCard";

function MoviesPending() {

  // Utilisation du hook useTranslation avec les namespaces 'Festival', 'common' et 'Galery'
  const { t } = useTranslation(['Festival', 'common', 'Galery']);

  // Initialisation des états
  const [data, setData] = useState<Movie[]>([]); // État pour stocker les données des films
  const [showPending, setShowPending] = useState<boolean>(false); // État pour afficher ou cacher les meilleurs films
  const [isLoading, setIsLoading] = useState(true); // État pour gérer le chargement
  const [error, setError] = useState<string | null>(null); // État pour gérer les erreurs
  const [moviesPerPage, setMoviesPerPage] = useState<number>(3); // État pour gérer la pagination des films
  const [currentPage, setCurrentPage] = useState<number>(1); // État pour gérer la pagination des films
  const [totalMovies, setTotalMovies] = useState<number>(0); // État pour stocker le total des films récupérés

  function togglePending() {
    setShowPending(!showPending);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/movies?category=pending&limit=${moviesPerPage}&page=${currentPage}`); // Appel à l'API pour récupérer les meilleurs films
        if (!res.ok) throw new Error(t("movies_thumbnails.error_status", { ns: 'common', status: res.status })); // Traduction de l'erreur si la réponse n'est pas OK
        const data = await res.json();
        setData(data); // Mise à jour des données avec les films récupérés
        setTotalMovies(data.length);
      } catch (err: any) {
        setError(err.message); // Stockage de l'erreur
      }
      finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  if (!totalMovies || totalMovies === 0) return <><h2 className="text-3xl text-primary">{t('pending_pool', { ns: 'Galery' })}</h2>{t('no_movies_left', { ns: 'Galery' })} : {t('total_films', { ns: 'Galery', count: totalMovies })}</>;
  if (isLoading)
    return (
      <div className="p-10 text-center text-black">
        {t("loading.generic", { ns: 'common' })}
      </div>
    );
  if (error)
    return (
      <div className="p-10 text-center text-black">
        {t("errors.generic", { ns: 'common' })}: {error}
      </div>
    );

  if (totalMovies >= 1) return (
    <>
      <h2 className="flex items-center justify-start px-5 text-secondary md:text-2xl font-bold my-8 text-xl" onClick={togglePending}>
        <span className={`text-xl md:text-3xl transition-transform duration-500 ease-in-out transform ${showPending ? 'rotate-90' : 'rotate-0'}`}>▶</span>
        <span className="p-3">{t('pending_pool', { ns: 'Galery' })} : {t('total_films', { ns: 'Galery', count: totalMovies })}</span>
      </h2>
      <div className={`transition-all duration-750 ease-in-out overflow-hidden ${showPending ? 'max-h-500' : 'max-h-0'}`}>
        <div className="">
          {data && data.map((m) => (
            <div
              key={m.id} className="p-10">
              <Link to={`/movies/${m.id}`}>
                <DashboardMovieCard
                  gridLayout={"grid grid-cols-2 md:grid-cols-5 gap-4 items-center"}
                  key={m.id}
                  movie={m}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MoviesPending;
