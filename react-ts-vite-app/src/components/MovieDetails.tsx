import { useTranslation } from "react-i18next";
import type { Movie, MovieCollaborator, MovieTag } from "../types-interfaces/Movie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CollaboratorDetailsModal from "./CollaboratorDetailsModal";

function MovieDetails() {

    const { id } = useParams();
    const { t } = useTranslation();
    const [movieDetails, setMovieDetails] = useState<Movie[] | null>(null);
    const [movieCollaborators, setMovieCollaborators] = useState<MovieCollaborator[]>([]);
    const [movieTags, setMovieTags] = useState<MovieTag[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedCollaborator, setSelectedCollaborator] = useState<MovieCollaborator | null>(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/movies/${id}`);
                if (!response.ok) {
                    throw new Error(t('movie_details.error_status', { status: response.status }));
                }
                const data = await response.json();
                setMovieDetails(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        const getMovieCollaborators = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/movies/${id}/collaborators`);
                if (!response.ok) {
                    throw new Error(t('movie_details.error_status', { status: response.status }));
                }
                const data = await response.json();
                setMovieCollaborators(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        const getMovieTags = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/movies/${id}/tags`);
                if (!response.ok) {
                    throw new Error(t('movie_details.error_status', { status: response.status }));
                }
                const data = await response.json();
                setMovieTags(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        getMovieDetails();
        getMovieCollaborators();
        getMovieTags();
    }, [id]);



    if (isLoading) {
        return <div>{t('loading')}</div>;
    }

    if (error) {
        return <div>{t('error', { error })}</div>;
    }

    if (!movieDetails) {
        return <div>{t('movie_details.no_data')}</div>;
    }


    return (
        <div className="flex justify-center items-center p-6 bg-[var(--color-background)] min-h-screen">
            <div className='bg-[var(--color-brand2)] m-auto p-10 font-bold rounded-2xl '>


                {/* TITRE DU FILMS */}
                <div className='bg-[var(--color-brand2)] m-auto p-10 font-bold'>
                    <h1 className='text-center bg-linear-to-r from-secondary to-red-800 bg-clip-text text-transparent text-4xl/20 '>{movieDetails[0].english_title}</h1>
                    <h2 className='text-center bg-linear-to-r from-secondary to-red-800 bg-clip-text text-transparent text-4xl/20 '>{movieDetails[0].original_title}</h2>
                </div>



                {/* IMAGE DU FILM */}
                <div className="mt-6 ">
                    <div className="flex items-center justify-center">
                        {movieDetails[0].youtube_url ? (
                            <iframe width="560" height="315" src={movieDetails[0].youtube_url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        ) : (
                            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                                {t('movie_details.no_image')}
                            </div>
                        )}
                    </div>


                    {/* NOTATION */}
                    <div className="p-10 my-10 flex flex-col items-center justify-center text-white text-2xl">
                        <h2>0 - 10</h2>
                        <input className="p-1" min='0' max='10' type="range"></input>
                        <button className='bg-[var(--color-third)] text-black hover:bg-secondary text-sm md:text-xl p-5 rounded-xl m-auto block' type="submit">{t('movie_details.rating')}</button>
                    </div>



                    {/* TAGS */}
                    {/* <h2 className="font-semibold text-center text-white text-2xl my-4">Tags</h2> */}
                    <div className="flex gap-10 text-white justify-center mt-6">

                        {movieTags.map((tag) =>
                            <div key={tag.id}>
                                <p>#{tag.name}</p>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 mt-6">
                        {/* DETAILS DU FILM */}
                        <div className="col-span-2">
                            <h2 className="font-semibold text-center text-white text-2xl my-4">{t('movie_details.title')}</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('movie_details.isHybrid')}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movieDetails[0].isHybrid ? 'Yes' : 'No'}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('movie_details.original_language')}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movieDetails[0].original_language}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('movie_details.original_synopsis')}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movieDetails[0].original_synopsis}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('movie_details.english_synopsis')}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movieDetails[0].english_synopsis}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('movie_details.submitted_at')}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movieDetails[0].submitted_at}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('movie_details.duration')}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movieDetails[0].duration}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('movie_details.creative_process')}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movieDetails[0].creative_process}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('movie_details.ia_tools')}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movieDetails[0].ia_tools}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('movie_details.hasSubs')}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movieDetails[0].hasSubs ? 'Yes' : 'No'}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t('movie_details.status')}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{movieDetails[0].status}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>




                        {/* COLLABORATORS */}
                        <div className="flex flex-col col-span-2">
                            <h2 className="font-semibold text-center text-2xl text-white my-4">{t('movie_details.collaborators')}</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('movie_details.collaborator_Firstname')}</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('movie_details.collaborator_Lastname')}</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('movie_details.collaborator_Job')}</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('movie_details.collaborator_Contribution')}</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('movie_details.collaborator_details')}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {movieCollaborators.map((c) => (
                                            <tr key={c.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{c.firstname}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{c.lastname}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{c.job}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{c.contribution}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <button onClick={() => setSelectedCollaborator(c)} className="text-indigo-600 hover:text-indigo-900">
                                                        {t('movie_details.collaborator_details')}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {selectedCollaborator && (
                <CollaboratorDetailsModal
                    collaborator={selectedCollaborator}
                    onClose={() => setSelectedCollaborator(null)}
                />
            )}
        </div >
    );
}

export default MovieDetails;