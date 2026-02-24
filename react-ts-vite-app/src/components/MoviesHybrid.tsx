import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import type { Movie, MovieTag } from '../types-interfaces/Movie';
import MovieThumbnail from './MovieThumbnail';
import Tags from './Tags';

function MoviesHybrid() {
    // Utilisation du hook de traduction pour la langue
    const { t } = useTranslation(['Festival', 'Galery']);

    // État pour stocker la requête de recherche
    const [query, setQuery] = useState<string>('');
    // Etat pour montrer/cacher la liste de tous les films
    const [showAllMovies, setShowAllMovies] = useState<boolean>(false);

    // État pour stocker le total des films récupérés
    const [totalMovies, setTotalMovies] = useState<number>(0);
    // État pour stocker les films récupérés
    const [movies, setMovies] = useState<Movie[]>([]);

    // État pour gérer la pagination des films
    const [moviesPerPage, setMoviesPerPage] = useState<number>(4);
    // État pour gérer la pagination des films
    const [currentPage, setCurrentPage] = useState<number>(1);

    // État pour stocker les tags récupérés
    const [allTags, setAllTags] = useState<MovieTag[]>([]);
    // État pour suivre le tag sélectionné pour filtrer les films
    const [selectedTag, setSelectedTag] = useState<MovieTag | null>(null);

    // État pour gérer l'erreur lors du chargement des films
    const [error, setError] = useState<string | null>(null);
    // État pour suivre le statut de chargement des films
    const [loading, setLoading] = useState<boolean>(true);

    // Fonction pour gérer l'affichage de tous les films
    function toggleAllMovies() {
        setShowAllMovies(!showAllMovies);
    }
    //  Fonction asynchrone pour récupérer tous les tags depuis l'API

    useEffect(() => {
        async function fetchMoviesCount() {
            setLoading(true); // Définir le chargement à true
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/movies?type=hybrid`);
                if (!response.ok) {
                    throw new Error("Erreur lors de la recuperation des films hybrides");
                }
                const data = await response.json();
                setTotalMovies(data.length); // Mettre à jour le total
            } catch (err: any) {
                setError(err.message || "Erreur lors de la récupération des films hybrides");
            } finally {
                setLoading(false);
            }
        }
        async function fetchAllTags(): Promise<MovieTag[] | undefined> {
            setLoading(true); // Définir le chargement à true
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
                setLoading(false);
            }
        }
        fetchAllTags();
        fetchMoviesCount();
    }, []);

    // Fonction asyncchrone pour récupérer les films depuis l'API lors du chargement initial ou du changement de page.
    useEffect(() => {
        async function fetchSelectedMovies() {
            setLoading(true);
            selectedTag && setCurrentPage(1);
            const url = selectedTag && selectedTag.id !== 0
                ? `${import.meta.env.VITE_API_URL}/movies?type=hybrid&t&tag=${selectedTag.id}&limit=${moviesPerPage}&page=${currentPage}`
                : `${import.meta.env.VITE_API_URL}/movies?type=hybrid&limit=${moviesPerPage}&page=${currentPage}`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    console.error('Response was not ok');
                    throw new Error(selectedTag && selectedTag.id !== 0
                        ? "Échec de la récupération des films"
                        : "Échec de la récupération des movies sans filtres");
                }
                const data = await response.json();
                setMovies(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchSelectedMovies();
    }, [currentPage, selectedTag, moviesPerPage]);


    // Gestion du changement de page
    // État de chargement : affiche un message pendant le chargement
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-white text-xl">{t('loading')}</p>
            </div>
        );
    }
    // État d'erreur : affiche un message d'erreur en cas d'échec
    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-500 text-xl">{t('error', { error })}</p>
            </div>
        );
    }
    return (
        <div>        <div>



            {/* TITLE BAR */}
            <h2 className="flex items-center justify-center px-5 text-secondary md:text-2xl font-bold my-8 text-xl" onClick={toggleAllMovies}>
                <span className={`text-xl md:text-3xl transition-transform duration-500 ease-in-out transform ${showAllMovies ? 'rotate-90' : 'rotate-0'}`}>▶</span>
                <span className="grow ml-2">{'Tous le films hybrides' + " : " + totalMovies + " films"}</span>
            </h2>
            <div className={`transition-all duration-750 ease-in-out overflow-hidden ${showAllMovies ? 'max-h-500' : 'max-h-0'}`}>


                {/* ALL MOVIES DASHBOARD */}
                <div className="flex flex-col items-center text-white">
                    {/* CONTROLS  */}
                    <div className="p-6">
                        {/* TAGS */}
                        <Tags tags={allTags} selected={selectedTag} onTagSelect={setSelectedTag} />

                        {/* SEARCH BAR */}
                        <input
                            type="text"
                            placeholder={t("movies.search_placeholder")}
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
                </div>

                {/* PAGINATION */}
                <div className="flex flex-col items-center text-white">
                    <div className="flex items-center text-center justify-around mt-4  gap-5">
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                        >
                            {t('previous')}
                        </button>
                        <p>Page {currentPage}</p>
                        <button
                            disabled={(totalMovies <= (currentPage * moviesPerPage))}
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            {t('next')}
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
                        <option value="4">4 résultats par page</option>
                        <option value="8">8 résultats par page</option>
                        <option value="12">12 résultats par page</option>
                        <option value="16">16 résultats par page</option>
                    </select>

                </div>
            </div>
        </div></div>
    )
}

export default MoviesHybrid