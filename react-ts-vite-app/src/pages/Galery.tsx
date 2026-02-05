import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { Movie } from "../types-interfaces/Movie";
import { Link } from "react-router-dom";

function Galery() {
    const { t } = useTranslation();

    const [movies, setMovies] = useState<Movie[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
        <div className="p-10 font-bold">
            <h1 className="text-center bg-linear-to-r from-secondary to-red-800 bg-clip-text text-transparent text-4xl  my-10">{t('galery.title')}</h1>
            <input
                type="text"
                placeholder={t('galery.search_placeholder')}
                className="w-full max-w-md mx-auto block p-2 border text-white border-orange-500 rounded-md"
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
                                </div>
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold">{movie.english_title}</h2>
                                    <p className="text-gray-600 mt-2 line-clamp-3">
                                        {movie.english_synopsis || t('galery.no_synopsis')}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
            <div className="flex justify-center items-center my-6 gap-4">
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
    )
}

export default Galery