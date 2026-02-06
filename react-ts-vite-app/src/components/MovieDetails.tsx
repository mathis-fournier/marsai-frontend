import { useTranslation } from "react-i18next";
import type {
  Movie,
  MovieCollaborator,
  MovieTag,
} from "../types-interfaces/Movie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CollaboratorDetailsModal from "./CollaboratorDetailsModal";

export default function MovieDetails() {
  const { id } = useParams();
  const { t } = useTranslation();

  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
  const [movieCollaborators, setMovieCollaborators] = useState<
    MovieCollaborator[]
  >([]);
  const [movieTags, setMovieTags] = useState<MovieTag[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCollaborator, setSelectedCollaborator] =
    useState<MovieCollaborator | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const baseUrl = import.meta.env.VITE_API_URL;

        // Fetching all data in parallel
        const [detailsRes, collaboratorsRes, tagsRes] = await Promise.all([
          fetch(`${baseUrl}/movies/${id}`),
          fetch(`${baseUrl}/movies/${id}/collaborators`),
          fetch(`${baseUrl}/movies/${id}/tags`),
        ]);

        if (!detailsRes.ok || !collaboratorsRes.ok || !tagsRes.ok) {
          throw new Error(
            t("movie_details.error_status", { status: "API Error" }),
          );
        }

        const [detailsData, collaboratorsData, tagsData] = await Promise.all([
          detailsRes.json(),
          collaboratorsRes.json(),
          tagsRes.json(),
        ]);

        // Assuming API returns an array for details based on your movieDetails[0] usage
        setMovieDetails(
          Array.isArray(detailsData) ? detailsData[0] : detailsData,
        );
        setMovieCollaborators(collaboratorsData);
        setMovieTags(tagsData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchAllData();
    }
  }, [id, t]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        {t("loading")}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-10">
        {t("error", { error })}
      </div>
    );
  }

  if (!movieDetails) {
    return <div className="text-center p-10">{t("movie_details.no_data")}</div>;
  }

  return (
    <div className="flex justify-center items-center p-6 bg-(--color-background) min-h-screen">
      <div className="bg-brand2 m-auto p-10 font-bold rounded-2xl w-full max-w-5xl">
        {/* TITRE DU FILMS */}
        <div className="mb-10 text-center">
          <h1 className="bg-linear-to-r from-secondary to-red-800 bg-clip-text text-transparent text-4xl font-bold">
            {movieDetails.english_title}
          </h1>
          <h2 className="bg-linear-to-r from-secondary to-red-800 bg-clip-text text-transparent text-2xl mt-2">
            {movieDetails.original_title}
          </h2>
        </div>

        {/* VIDEO/IMAGE DU FILM */}
        <div className="mt-6">
          <div className="flex items-center justify-center">
            {movieDetails.youtube_url ? (
              <iframe
                className="rounded-xl shadow-lg"
                width="560"
                height="315"
                src={movieDetails.youtube_url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            ) : (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                {t("movie_details.no_image")}
              </div>
            )}
          </div>

          {/* NOTATION */}
          <div className="p-10 my-10 flex flex-col items-center justify-center text-white text-2xl">
            <h2>0 - 10</h2>
            <input
              className="p-1 my-4 w-64"
              min="0"
              max="10"
              type="range"
            ></input>
            <button
              className="bg-third text-black hover:bg-secondary text-sm md:text-xl px-8 py-3 rounded-xl transition-colors"
              type="submit"
            >
              {t("movie_details.rating")}
            </button>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-4 text-white justify-center mt-6">
            {movieTags.map((tag) => (
              <span
                key={tag.id}
                className="bg-gray-800 px-3 py-1 rounded-full text-sm"
              >
                #{tag.name}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 mt-10 gap-8">
            {/* DETAILS DU FILM */}
            <div>
              <h2 className="font-semibold text-center text-white text-2xl my-4">
                {t("movie_details.title")}
              </h2>
              <div className="overflow-hidden rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="bg-white divide-y divide-gray-200 text-gray-900">
                    {[
                      ["isHybrid", movieDetails.isHybrid ? "Yes" : "No"],
                      ["original_language", movieDetails.original_language],
                      ["original_synopsis", movieDetails.original_synopsis],
                      ["english_synopsis", movieDetails.english_synopsis],
                      ["submitted_at", movieDetails.submitted_at],
                      ["duration", movieDetails.duration],
                      ["creative_process", movieDetails.creative_process],
                      ["ia_tools", movieDetails.ia_tools],
                      ["hasSubs", movieDetails.hasSubs ? "Yes" : "No"],
                      ["status", movieDetails.status],
                    ].map(([key, value]) => (
                      <tr key={key}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold bg-gray-50">
                          {t(`movie_details.${key}`)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* COLLABORATORS */}
            <div>
              <h2 className="font-semibold text-center text-2xl text-white my-4">
                {t("movie_details.collaborators")}
              </h2>
              <div className="overflow-x-auto rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      {[
                        "Firstname",
                        "Lastname",
                        "Job",
                        "Contribution",
                        "details",
                      ].map((header) => (
                        <th
                          key={header}
                          className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
                        >
                          {t(`movie_details.collaborator_${header}`)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {movieCollaborators.map((c) => (
                      <tr key={c.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {c.firstname}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {c.lastname}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {c.job}
                        </td>
                        <td className="px-6 py-4 text-sm">{c.contribution}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => setSelectedCollaborator(c)}
                            className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                          >
                            {t("movie_details.collaborator_details")}
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
    </div>
  );
}
