import { useAuth } from "../context/AuthContext";
import UserDashboard from "../components/Dashboard/UserDahboard";
import AccessDenied from "./AccessDenied"
import DashboardEvent from "../components/Dashboard/DashboardEvent";
import NewsletterDashboard from "../components/Dashboard/Newsletter/NewsletterDashboard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Register from "../components/Dashboard/Register";
import { useState } from "react";
import DashboardGlobal from "../components/Dashboard/DashboardGlobal";


export default function Dashboard() {
  const { t } = useTranslation("Dashboard");
  const [panel, setPanel] = useState<boolean>(false);

  // Utilisation du contexte d'authentification pour obtenir l'utilisateur et le token
  const { user, token } = useAuth();
  // Vérification si l'utilisateur n'est pas défini, si le token n'est pas défini ou si le rôle de l'utilisateur n'est pas ADMIN
  if (!user || !token || user.role !== "ADMIN") {
    // Retourne le composant AccessDenied si les conditions ne sont pas remplies
    return <AccessDenied />;
  }

  // Retourne le rendu des différents composants du tableau de bord
  return (
    <>
      <div className="qwenflex flex-col">
        {/* EN CHIFFRES */}
        <div className="">

          <h2 className="my-8 text-center text-white md:text-4xl font-bold text-2xl">

            {t("decimals.title")}

          </h2>
          {/* Composant global du tableau de bord */}
          <DashboardGlobal />

        </div>
        {/* Composant pour l'événement du tableau de bord */}
        <DashboardEvent />
        {/* Composant pour inscrire des jury */}
        <div onClick={() => setPanel(!panel)}
          className="cursor-pointer w-auto p-6">
          {/* TITRE PAGE */}
          <h2 className="text-secondary text-2xl font-mono uppercase">
            🔳 {t("register.title")}
          </h2>
          <h1 className="text-4xl text-white font-bold">
            {t("register.subtitle")}
          </h1>
          <p className="italic text-white opacity-80">
            {t("register.description")}
          </p>
        </div>
        <div
          className={`px-10 transition-all duration-150 ease-linear overflow-hidden ${panel ? "opacity-100" : "max-h-0 opacity-0"}`}
        >
          <Register />
        </div>

        {/* Composant pour le tableau de bord des utilisateurs */}
        <UserDashboard />

        {/* Composant pour le tableau de bord de la newsletter */}
        <NewsletterDashboard />

        {/* Composant pour la galerie du personnel */}
        <Link to={'/movies'} >
          <div className="cursor-pointer w-auto p-6">
            {/* TITRE PAGE */}
            <h2 className="text-secondary text-2xl font-mono uppercase">
              🔳 {t("movies.title")}
            </h2>
            <h1 className="text-4xl text-white font-bold">
              {t("movies.subtitle")}
            </h1>
            <p className="italic text-white opacity-80">
              {t("movies.description")}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
