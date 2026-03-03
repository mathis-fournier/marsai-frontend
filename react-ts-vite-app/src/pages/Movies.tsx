import MoviesBest from "../components/MoviesBest";
import MoviesSelection from "../components/MoviesSelection";
import MoviesAll from "../components/MoviesAll";
import { useAuth } from "../context/AuthContext";
import MoviesPending from "../components/MoviesPending";
import { useTranslation } from "react-i18next";

/**
 * Composant principal de la galerie de films.
 * Il gère l'affichage, le chargement, les erreurs, la recherche et la pagination des films.
*/
function Movies() {
    const { user, token } = useAuth();
    const { t } = useTranslation("Movies");

    if (user && token && user.role === "ADMIN") {
        return (
            <div className="p-5 md:p-30 flex flex-col gap-10">
                <a href="#all-movies" className="flex justify-center text-5xl my-8 cursor-pointer text-white bg-linear-to-t from-secondary hover:bg-brand2 w-full m-auto p-2 rounded-xl">
                    {t("movies.title")}
                </a>
                <MoviesAll />
                <MoviesPending />
            </div>
        );
    } else if (user && token && user.role === 'JURY') {
        return (
            <>
                <div className="p-5 md:p-30">
                    <a href="#all-movies" className="flex justify-center text-5xl my-8 cursor-pointer text-white bg-linear-to-t from-secondary hover:bg-brand2 w-full m-auto p-2 rounded-xl">
                        {t("movies.title")}
                    </a>
                    <MoviesBest />
                    <MoviesSelection />
                    <div className="my-30" id="all-movies">
                        <div className="w-full m-auto rounded-2xl bg-linear-to-br from-brand2 to-brand border-2 border-white shadow-md/50 shadow-white">
                            <MoviesAll />
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="p-5 md:p-30">
                    <a href="#all-movies" className="flex justify-center text-5xl my-8 cursor-pointer text-white bg-linear-to-t from-secondary hover:bg-brand2 w-full m-auto p-2 rounded-xl">
                        {t("movies.title")}
                    </a>
                    <div className="my-30" id="all-movies">
                        <div className="w-full m-auto rounded-2xl bg-linear-to-br from-brand2 to-brand border-2 border-white shadow-md/50 shadow-white">
                            <MoviesAll />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Movies;