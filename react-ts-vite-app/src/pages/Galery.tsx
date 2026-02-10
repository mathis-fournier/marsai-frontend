import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { Movie } from "../types-interfaces/Movie";
import { Link } from "react-router-dom";
import MoviesBest from "../components/MoviesBest";

function Galery() {
    const { t } = useTranslation();

    const [movies, setMovies] = useState<Movie[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [panel, setPanel] = useState<boolean>(false);


    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/movies?limit=10&page=${currentPage * 10 - 10}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch movies");
                }
                return response.json();
            })
            .then(data => {
                setMovies(data);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, [currentPage]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-white text-xl">{t('galery.loading')}</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-500 text-xl">{t('galery.error', { error })}</p>
            </div>
        );
    }

    return (
        <div className="my-20 text-white font-bold">


            <div className="my-10">
                <div className="w-full sm:w-[80%] shadow-2xl shadow-white/50 flex flex-col justify-center items-center gap-9 border-2 border-primary bg-linear-to-b from-brand2 to-brand mb-10 m-auto px-6 rounded-2xl">
                    <MoviesBest />
                    <button className="flex m-auto" onClick={() => setPanel(true)}>
                        <h2 className="text-lg my-8 cursor-pointer text-white bg-linear-to-t from-secondary hover:bg-brand2 text-center w-40 m-auto p-2 rounded-xl">
                            {t("festival.films.see_all_button")}
                        </h2>
                    </button>
                </div>
            </div>

            <div className={`transition-all duration-1350 ease-linear overflow-hidden ${panel ? 'opacity-100' : 'max-h-0 opacity-0'}`}>

                <input
                    id="search"
                    type="text"
                    placeholder={t('galery.search_placeholder')}
                    className="my-20 w-full max-w-md mx-auto block p-2 border text-white border-orange-500 rounded-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                    {movies
                        .filter((movie: any) =>
                            movie.english_title.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((movie: any) => (
                            <Link to={`/galery/${movie.id}`} key={movie.id} className="block">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                                        {movie.cover_image ? (
                                            <img
                                                src={movie.cover_image}
                                                alt={movie.english_title}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-gray-500">{t('galery.no_image')}</span>
                                        )}
                                        <h2 className="text-2xl font-semibold">{movie.english_title}</h2>
                                    </div>
                                    <div className="p-4">
                                        <p className="text-gray-600 mt-2 text-sm my-4 line-clamp-3">
                                            {movie.english_synopsis || t('galery.no_synopsis')}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
                <div className="flex items-center justify-center gap-15">
                    <button
                        className="px-4 py-2 bg-[var(--color-brand)] hover:bg-[var(--color-secondary)] text-white rounded disabled:bg-gray-400"
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        {t('galery.previous')}
                    </button>
                    <span className="text-white">{t('galery.page')} {currentPage}</span>
                    <button
                        className="px-4 py-2 bg-[var(--color-brand)] hover:bg-[var(--color-secondary)] text-white rounded disabled:bg-gray-400"
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        disabled={movies ? movies.length < 10 : true}
                    >
                        {t('galery.next')}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Galery