import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { Movie, MovieTag } from "../types-interfaces/Movie";
import MoviesBest from "../components/MoviesBest";
import Tags from "../components/Tags";
import DashboardMovieCard from "../components/Dashboard/DashboardMovieCard";
import MoviesAll from "../components/MoviesAll";
import MoviesPending from "../components/MoviesPending";
/**
 * Composant principal de la galerie de films.
 * Il gère l'affichage, le chargement, les erreurs, la recherche et la pagination des films.
 */
function StaffGalery() {
    // Utilisation du hook de traduction pour la langue
    const { t } = useTranslation(['Festival', 'Galery']);
    // Etat pour ouvrir et ferme le panel
    const [panel, setPanel] = useState<boolean>(false);
    // État pour stocker les films récupérés
    const [query, setQuery] = useState<string>('');
    // État pour stocker le total des films récupérés
    const [totalMovies, setTotalMovies] = useState<number>(0);
    // État pour stocker les films récupérés
    const [movies, setMovies] = useState<Movie[]>([]);
    // État pour stocker les tags récupérés
    const [allTags, setAllTags] = useState<MovieTag[]>([]);
    // État pour gérer l'erreur lors du chargement des films
    const [error, setError] = useState<string | null>(null);
    // État pour suivre le statut de chargement des films
    const [loading, setLoading] = useState<boolean>(true);
    // État pour suivre le tag sélectionné pour filtrer les films
    const [selectedTag, setSelectedTag] = useState<MovieTag | null>(null);
    // État pour gérer la pagination des films
    const [currentPage, setCurrentPage] = useState<number>(1);
    // État pour gérer la pagination des films
    const [moviesPerPage, setMoviesPerPage] = useState<number>(5);

    //  Fonction asynchrone pour récupérer tous les tags depuis l'API
    useEffect(() => {
        async function fetchMoviesCount() {
            setLoading(true); // Définir le chargement à true
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/movies/count`);
                if (!response.ok) {
                    throw new Error("Erreur lors de fetchAllTags");
                }
                const data = await response.json();
                setTotalMovies(data.total); // Mettre à jour les tags
            } catch (err: any) {
                setError(err.message || "Erreur lors du fetchAllTags");
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
            selectedTag ? setCurrentPage(1) : null;
            const url = selectedTag && selectedTag.id !== 0
                ? `${import.meta.env.VITE_API_URL}/movies/tag=${selectedTag.id}&limit=${moviesPerPage}&page=${currentPage}`
                : `${import.meta.env.VITE_API_URL}/movies/?limit=${moviesPerPage}&page=${currentPage}`;

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
        console.log("selectedTag: " + selectedTag?.name);
        console.log("hasFetched: true");
    }, [currentPage, selectedTag, moviesPerPage]);

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
        <>
            {/* TITRE PAGE */}
            < div
                onClick={() => setPanel(!panel)
                }
                className="cursor-pointer w-auto p-6"
            >
                <h2 className="text-secondary text-2xl font-mono uppercase">
                    🔳 {t("movies.title")}
                </h2>
                <h1 className="text-4xl text-white font-bold">
                    {t("movies.subtitle")}
                </h1>
                <p className="italic text-white opacity-80">
                    {t("movies.description")}
                </p>
            </div >

            <div
                className={`transition-all duration-150 ease-linear overflow-hidden ${panel ? "opacity-100" : "max-h-0 opacity-0"}`}
            >
                <MoviesPending />
            </div>
        </>
    );
}

export default StaffGalery;