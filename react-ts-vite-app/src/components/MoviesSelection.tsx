import { useEffect, useState } from "react"; // Importation des hooks nécessaires de React
import type { Movie, MovieTag } from "../types-interfaces/Movie"; // Importation du type Movie depuis le fichier types-interfaces/Movie
import { useTranslation } from "react-i18next"; // Importation du hook useTranslation pour la traduction
import MovieThumbnail from "./MovieThumbnail";
import Tags from "./Tags";

function MoviesSelection() {

  // Utilisation du hook useTranslation avec les namespaces 'Festival', 'common' et 'Galery'
  const { t } = useTranslation(['Festival', 'common', 'Galery']);

  // Initialisation des états
  const [movies, setMovies] = useState<Movie[]>([]); // État pour stocker les données des films
  const [totalMovies, setTotalMovies] = useState<number>(0); // État pour stocker le total des films récupérés
  const [showSelection, setShowSelection] = useState<boolean>(false); // État pour afficher ou cacher les meilleurs films
  const [isLoading, setIsLoading] = useState(true); // État pour gérer le chargement
  const [error, setError] = useState<string | null>(null); // État pour gérer les erreurs 
  const [query, setQuery] = useState<string>(''); // État pour stocker la requête de recherche
  const [allTags, setAllTags] = useState<MovieTag[]>([]); // État pour stocker tous les tags des films
  const [selectedTag, setSelectedTag] = useState<MovieTag | null>(null); // État pour stocker le tag sélectionné
  const [moviesPerPage, setMoviesPerPage] = useState<number>(16); // État pour gérer la pagination des films
  const [currentPage, setCurrentPage] = useState<number>(1); // État pour gérer la pagination des films


  function toggleSelection() {
    setShowSelection(!showSelection);
  }

  useEffect(() => {
    async function fetchAllTags(): Promise<MovieTag[] | undefined> {
      setIsLoading(true); // Définir le chargement à true
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tags`);
        if (!response.ok) {
          throw new Error("Erreur lors de fetchAllTags");
        }
        const data = await response.json();
        setAllTags(data); // Mettre à jour les tags
        return data;
      } catch (err: any) {
        setError(err.message || "Erreur lors du fetchAllTags");
      } finally {
        setIsLoading(false);
      }
    }
    async function fetchSelectedMoviesCount(): Promise<MovieTag[] | undefined> {
      setIsLoading(true); // Définir le chargement à true
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/movies?category=selection`);
        if (!response.ok) {
          throw new Error("Erreur lors de fetch Selected Movies Count");
        }
        const data = await response.json();
        setTotalMovies(data.length);
        console.log(data);
        console.log(data.length);
        return data;
      } catch (err: any) {
        setError(err.message || "Erreur lors du fetchSelectedMoviesCount");
      } finally {
        setIsLoading(false);
      }
    }
    fetchAllTags();
    fetchSelectedMoviesCount();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      selectedTag ? setCurrentPage(1) : null;

      const url = selectedTag && selectedTag.id !== 0
        ? `${import.meta.env.VITE_API_URL}/movies?category=selection&tag=${selectedTag.id}&limit=${moviesPerPage}&page=${currentPage}`
        : `${import.meta.env.VITE_API_URL}/movies?category=selection&limit=${moviesPerPage}&page=${currentPage}`;

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(t("movies_thumbnails.error_status", { status: res.status })); // Traduction de l'erreur si la réponse n'est pas OK
        const data = await res.json();
        setMovies(data); // Mise à jour des données avec les films récupérés
      } catch (err: any) {
        setError(err.message); // Stockage de l'erreur
      }
      finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [moviesPerPage, currentPage, selectedTag]);

  if (isLoading)
    return (
      <div className="p-10 text-center text-black">
        {t("loading.generic", { ns: 'common' })}
      </div>
    );

  if (error)
    return (
      <div className="p-10 text-center text-black">
        {t("errors.generic", { ns: 'common' })}
      </div>
    );

  if (totalMovies > 0)
    return (
      <>
        <div className="w-full md:w-full mx-auto text-center">
          <h2 className="flex items-center justify-start px-5 text-secondary md:text-2xl font-bold my-8 text-xl" onClick={toggleSelection}>
            <span className={`text-xl md:text-3xl transition-transform duration-500 ease-in-out transform ${showSelection ? 'rotate-90' : 'rotate-0'}`}>▶</span>
            <span className="p-3">{t('selection_title', { ns: 'Galery' })} : {t('total_films', { ns: 'Galery', count: totalMovies })}</span>
          </h2>
          <div className={`transition-all duration-750 ease-in-out overflow-hidden ${showSelection ? 'max-h-500' : 'max-h-0'}`}>
            {/* ALL MOVIES DASHBOARD */}
            <div className="flex flex-col items-center text-white">
              {/* CONTROLS  */}
              <div className="p-6">
                {/* TAGS */}
                <Tags tags={allTags} selected={selectedTag} onTagSelect={setSelectedTag} />

                {/* SEARCH BAR */}
                <input
                  type="text"
                  placeholder={t("search_placeholder", { ns: 'Galery' })}
                  className="border my-10  w-full p-2 text-white rounded-md focus:outline-none"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              {/* FILMS */}
              {/* Affichage des films */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {movies
                  .filter((movie: any) =>
                    movie.english_title.toLowerCase().includes(query.toLowerCase())
                    || movie.english_synopsis.toLowerCase().includes(query.toLowerCase()
                    )
                  )
                  .map((movie: any) => (
                    <MovieThumbnail movie={movie} key={movie.id} />
                  ))}
              </div>
              {/* PAGINATION */}
              <div className="flex flex-col items-center text-white">
                <div className="flex items-center text-center justify-around mt-4  gap-5">
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                  >
                    {t('pagination.previous', { ns: 'common' })}
                  </button>
                  <p>{t('pagination.page', { ns: 'common', count: currentPage })}</p>
                  <button
                    disabled={(totalMovies <= (currentPage * moviesPerPage))}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    {t('pagination.next', { ns: 'common' })}
                  </button>
                </div>

                {/* Fonction pour gérer le nombre de films par page */}
                <label htmlFor="moviesPerPage"></label>
                <select value={moviesPerPage} onChange={(event) => {
                  setMoviesPerPage(parseInt(event.target.value));
                  setCurrentPage(1); // Réinitialiser
                }}
                  name="moviesPerPage" id=""
                  className="my-4">
                  <option value="4">{t('pagination.results_per_page', { count: 4, ns: 'common' })}</option>
                  <option value="8">{t('pagination.results_per_page', { count: 8, ns: 'common' })}</option>
                  <option value="12">{t('pagination.results_per_page', { count: 12, ns: 'common' })}</option>
                  <option value="16">{t('pagination.results_per_page', { count: 16, ns: 'common' })}</option>
                  <option value="20">{t('pagination.results_per_page', { count: 20, ns: 'common' })}</option>
                </select>
              </div>

            </div>
          </div>
        </div>
      </>
    );
}
export default MoviesSelection;
