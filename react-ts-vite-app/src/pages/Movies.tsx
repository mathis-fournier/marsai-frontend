import MoviesBest from "../components/MoviesBest";
import MoviesSelection from "../components/MoviesSelection";
import MoviesAll from "../components/MoviesAll";
import { useAuth } from "../context/AuthContext";


/**
 * Composant principal de la galerie de films.
 * Il gère l'affichage, le chargement, les erreurs, la recherche et la pagination des films.
*/
function Movies() {
    // Utilisation du contexte d'authentification pour obtenir l'utilisateur et le token
    const { user, token } = useAuth();

    // Vérification des autorisations de l'utilisateur
    if (user && token && user.role === "ADMIN") {
        return (
            <div className="p-5 md:p-30 flex flex-col gap-10">
                {/* Titre de la page */}
                < a href="#all-movies" className="flex justify-center text-5xl my-8 cursor-pointer  text-white bg-linear-to-t from-secondary hover:bg-brand2 w-full m-auto p-2 rounded-xl" >
                    Movies
                </a >
                {/* /* Affichage de tous les films disponibles */}
                <MoviesAll />
            </div>
        );
    } else if (user && token && user.role === 'JURY')
        return (
            <>
                <div className="p-5 md:p-30">

                    {/* Titre de la page */}
                    < a href="#all-movies" className="flex justify-center text-5xl my-8 cursor-pointer  text-white bg-linear-to-t from-secondary hover:bg-brand2 w-full m-auto p-2 rounded-xl" >
                        Movies
                    </a >

                    {/* Plusieurs modes d'affichage  */}
                    {/* Affichage du podium */}
                    <MoviesBest />

                    {/* Affichage de tous les films disponibles */}
                    <div id="all-movies">
                        <MoviesAll />
                    </div>
                </div>
            </>
        );
    else return (
        <>
            <div className="p-5 md:p-30">

                {/* Titre de la page */}
                < a href="#all-movies" className="flex justify-center text-5xl my-8 cursor-pointer  text-white bg-linear-to-t from-secondary hover:bg-brand2 w-full m-auto p-2 rounded-xl" >
                    Movies
                </a >

                <div className="my-30" id="all-movies">
                    <div className="w-full m-auto rounded-2xl bg-linear-to-br from-brand2 to-brand border-2 border-white shadow-md/50 shadow-white">
                        {/* Affichage de tous les films disponibles */}
                        <MoviesAll />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Movies;