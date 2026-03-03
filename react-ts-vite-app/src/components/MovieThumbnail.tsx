import { Link } from 'react-router-dom'
import type { Movie, MovieTag } from '../types-interfaces/Movie'
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function MovieThumbnail({ movie }: { movie: Movie }) {

    const [tags, setTags] = useState<MovieTag[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const { t } = useTranslation('common');
    const baseUrl = import.meta.env.VITE_API_URL;
    useEffect(() => {
        const fetchTags = async () => {
            setLoading(true); // Définir le chargement à true
            try {
                const response = await fetch(`${baseUrl}/movies/${movie.id}/tags`);
                if (!response.ok) throw new Error("Erreur lors de fetchTags");
                const data = await response.json();
                setTags(data);
            } catch (err: any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchTags();
    }, [movie.id, baseUrl]);

    if (error) return <>{t('errors.loading_tags')}</>
    if (loading) return <>{t('loading.tags')}</>
    return (
        <div>
            <Link to={`/movies/${movie.id}`} key={movie.id} className="block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                        {movie.cover_image ? (
                            <img
                                src={movie.cover_image}
                                alt={movie.english_title}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <span className="text-gray-500">{t('movies_thumbnails.image_placeholder')}</span>
                        )}
                    </div>
                    <div className="p-4">
                        <h2 className="text-2xl text-black font-semibold">{movie.english_title}</h2>
                        <p className="text-gray-600 mt-2 text-sm my-4 line-clamp-3">
                            {movie.english_synopsis || t('movies_thumbnails.no_synopsis')}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieThumbnail