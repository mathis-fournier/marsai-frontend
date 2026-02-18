import { useTranslation } from "react-i18next"; // Hook pour utiliser la traduction i18next
import type {
  Movie,
  MovieCollaborator,
  MovieTag,
} from "../types-interfaces/Movie"; // Importation des types et interfaces de Movie
import { useEffect, useState } from "react"; // Hooks React pour gestion de l'état et d'effets
import { useParams } from "react-router-dom"; // Hook pour récupérer les paramètres de la route
import CollaboratorDetailsModal from "./CollaboratorDetailsModal"; // Importation du composant CollaboratorDetailsModal

export default function MovieDetails() {
  const { id } = useParams(); // Extraction de l'ID du film à partir des paramètres de la route
  const { t } = useTranslation(); // Initialisation de la traduction avec i18next

  const [note, setNote] = useState<number>(5); // État pour stocker la note du film
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null); // État pour stocker les détails du film
  const [movieCollaborators, setMovieCollaborators] = useState<MovieCollaborator[]>([]); // État pour stocker les collaborateurs du film
  const [movieTags, setMovieTags] = useState<MovieTag[]>([]); // État pour stocker les tags du film
  const [isLoading, setIsLoading] = useState(true); // État pour gérer le chargement
  const [error, setError] = useState<string | null>(null); // État pour stocker les erreurs
  const [selectedCollaborator, setSelectedCollaborator] = useState<MovieCollaborator | null>(null); // État pour stocker le collaborateur sélectionné

  useEffect(() => {
    const fetchAllData = async () => {
      setIsLoading(true); // Début du chargement
      setError(null); // Réinitialisation de l'erreur
      try {
        const baseUrl = import.meta.env.VITE_API_URL; // URL de base de l'API

        // Fetching all data in parallel (téléchargement en parallèle)
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

        setMovieDetails(
          Array.isArray(detailsData) ? detailsData[0] : detailsData,
        );
        setMovieCollaborators(collaboratorsData);
        setMovieTags(tagsData);
      } catch (err: any) {
        setError(err.message); // Stockage de l'erreur
      } finally {
        setIsLoading(false); // Fin du chargement
      }
    };

    if (id) {
      fetchAllData();
    }
  }, [id, t]);

  // Si le film est en cours de chargement, affichez un message de chargement
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        {t("loading")}
      </div>
    );
  }
  // Si une erreur s'est produite lors du chargement des données, affichez un message d'erreur
  if (error) {
    return (
      <div className="text-red-500 text-center p-10">
        {t("error", { error })}
      </div>
    );
  }
  // Si les détails du film ne sont pas disponibles, affichez un message indiquant qu'il n'y a pas de données
  if (!movieDetails) {
    return <div className="text-center p-10">{t("movie_details.no_data")}</div>;
  }
  return (
    <>
      {/* Détails du film */}
      <div className="m-auto md:p-10 font-normal rounded-2xl">
        <div className="mb-10 text-center">
          {/* TITRE DU FILMS */}
          <h1 className="bg-linear-to-t from-yellow-400 to-yellow-600 bg-clip-text text-transparent text-4xl font-bold mb-4">
            {movieDetails.english_title}
          </h1>
          <p className="text-white">
            {movieDetails.original_title}
          </p>
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-4 text-white justify-center">
          {movieTags.map((tag) => (
            <span
              key={tag.id}
              className="bg-gray-800 border border-third px-3 py-1 rounded-full text-sm"
            >
              #{tag.name}
            </span>
          ))}
        </div>
        {/* VIDEO/IMAGE DU FILM */}
        <div className="justify-around items-start">
          <div className="p-10 flex">
            {movieDetails.youtube_url ? (
              <iframe
                className="rounded-xl shadow-lg w-full h-150"
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
          <div className="flex flex-col justify-center">
            {/* DETAILS DU FILM */}
            <h2 className="text-sm ">
              <span className="my-10 text-white flex justify-center text-xl">{t("movie_details.title")}</span>
            </h2>
            <table className="">
              <tbody className="bg-white divide-y ">
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
      </div>

      <div className="items-center">
        {/* COLLABORATORS */}
        <div>
          <h2 className="font-semibold text-center text-white my-4">
            {t("movie_details.collaborators")}
          </h2>
          <div className="w-full rounded-lg">
            <table className=" divide-y divide-gray-200">
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
                      className="py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
                    >
                      {t(`movie_details.collaborator_${header}`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {movieCollaborators.map((c) => (
                  <tr key={c.id}>
                    <td className="py-4 whitespace-nowrap text-sm">
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
      </div >
      {/* NOTATION */}
      < div className="my-25 p-1 md:p-5  w-full md:w-[50%] border-4 border-primary m-auto flex flex-col items-center justify-center text-white rounded-2xl shadow-lg/50 shadow-white bg-gradient-to-b from-brand to-brand2" >
        <h2 className="font-semibold  text-center text-2xl text-white my-4">
          {t("movie_details.jury")}
        </h2>
        <label htmlFor="comment">Apprecied ?</label>
        <textarea
          id="comment" className="border border-white w-80 2xl:w-100 my-3 p-7 md:p-15 rounded-xl ">Here you can eventually comment this movie</textarea>
        <h2 className="my-8 text-2xl">{note} / 10</h2>
        <input
          className="p-1 w-50 md:w-100"
          min="0"
          max="10"
          step="1"
          type="range"
          onChange={((event: any) => setNote(event.target.value))}
        ></input>
        <button
          className="my-14 bg-primary text-black hover:opacity-50 text-sm md:text-xl px-8 py-3 rounded-xl transition-colors"
          type="submit"
        >
          {t("movie_details.rating")}
        </button>
      </div >
      {selectedCollaborator && (
        <CollaboratorDetailsModal
          collaborator={selectedCollaborator}
          onClose={() => setSelectedCollaborator(null)}
        />
      )
      }
    </>
  );
}
