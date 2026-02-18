import { NavLink, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

function Header() {
  // État pour gérer l'ouverture et la fermeture du menu
  const [isOpen, setIsOpen] = useState(false);
  // Utilisation du contexte d'authentification
  const { user, logout } = useAuth();
  // Utilisation de la traduction avec react-i18next
  const { t, i18n } = useTranslation();
  // Référence pour le menu de navigation
  const navRef = useRef<HTMLDivElement>(null);
  // État pour gérer l'underline du lien actif
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  // Utilisation de useLocation pour obtenir l'emplacement actuel
  const location = useLocation();

  useEffect(() => {
    if (navRef.current) {
      // Recherche du lien actif dans le menu de navigation
      const activeLink = navRef.current.querySelector<HTMLAnchorElement>('.active');
      if (activeLink) {
        // Calcul des positions et largeur de l'underline
        const { offsetLeft, offsetWidth } = activeLink;
        setUnderlineStyle({
          left: offsetLeft,
          width: offsetWidth,
        });
      } else {
        // Réinitialisation de l'underline si aucun lien actif n'est trouvé
        setUnderlineStyle({ width: 0, left: 0 });
      }
    }
  }, [location]);

  // Fonction pour changer la langue
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };


  return (
    <div
    // className="bg-linear-to-b from-brand2 to-brand"
    >
      <div className={(location.pathname === '/' ? 'absolute z-1 w-full bg-black/50' : 'w-full')}>
        <div className="font-sans p-4 text-center text-sm sm:text-sm text-white flex justify-between items-center w-full">


          {/* Navbar TITLE */}
          <NavLink to={"/"}>
            <h2 className="text-3xl font-extrabold md:text-5xl bg-linear-to-t from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              MarsAI
            </h2>
          </NavLink>


          {/* Desktop Navigation */}
          <div ref={navRef} className="text-center text-2xl md:text-4xl md:gap-15 flex flex-col xl:flex-row  p-2 rounded-xl">
            <div className="hidden font-semi-bold xl:flex xl:flex-row items-center justify-around xl:gap-15 lg:gap-10 md:gap-5 text-left relative">
              <NavLink className={({ isActive }) => (isActive ? "active text-3xl" : "")} to={"/agenda"}>
                <h2 className="sm:text-md  md:text-lg lg:text-2xl p-2 rounded-lg">
                  {t("header.agenda")}
                </h2>
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active text-3xl" : "")} to={"/galery"}>
                <h2 className="sm:text-md  md:text-lg lg:text-2xl p-2 rounded-lg">
                  {t("header.gallery")}
                </h2>
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active text-3xl" : "")} to={"/jury"}>
                <h2 className="sm:text-md  md:text-lg lg:text-2xl p-2 rounded-lg">
                  {t("header.jury")}
                </h2>
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active text-3xl" : "")} to={"/submit"}>
                <h2 className="sm:text-md  md:text-lg lg:text-2xl p-2 rounded-lg">
                  {t("header.submit")}
                </h2>
              </NavLink>
              {user && user.role === "JURY" ? (
                <>
                  <NavLink className={({ isActive }) => (isActive ? "active text-3xl" : "")} to={"/jury/me"}>
                    <h2 className="sm:text-md  md:text-lg lg:text-2xl p-2 rounded-lg">
                      {t("header.jurySpace")}
                    </h2>
                  </NavLink>
                  <button
                    onClick={logout}
                    className="sm:text-lg lg:text-3xl md:text-4xl p-1 text-white rounded-lg bg-red-500 opacity-50 hover:opacity-100 ">
                    <h2 className="sm:text-md  md:text-lg lg:text-2xl p-2 rounded-lg">
                      {t("header.logout")}
                    </h2>
                  </button>
                </>
              ) : user && user.role === "ADMIN" ? (
                <>
                  <NavLink className={({ isActive }) => (isActive ? "active text-3xl" : "")} to={"/dashboard"}>
                    <h2 className="sm:text-md  md:text-lg lg:text-2xl p-2 rounded-lg">
                      {t("header.adminSpace")}
                    </h2>
                  </NavLink>
                  <button
                    onClick={logout}
                    className="sm:text-lg lg:text-3xl md:text-4xl p-1 text-white rounded-lg bg-red-500 opacity-50 hover:opacity-100 ">
                    <h2 className="sm:text-md  md:text-lg lg:text-2xl p-2 rounded-lg">

                      {t("header.logout")}
                    </h2>
                  </button>
                </>
              ) : (
                <>
                  <NavLink className={({ isActive }) => (isActive ? "active text-3xl" : "")} to={"/login"}>
                    <h2 className="sm:text-md  md:text-lg lg:text-2xl p-2 rounded-lg">
                      {t("header.login")}
                    </h2>
                  </NavLink>
                  <NavLink className={({ isActive }) => (isActive ? "active text-3xl" : "")} to={"/register"}>
                    <h2 className="sm:text-md  md:text-lg lg:text-2xl p-2 rounded-lg">
                      {t("header.register")}
                    </h2>
                  </NavLink>
                </>
              )}
              <div
                className="absolute bottom-[-7px] h-[2px] bg-yellow-400 transition-all duration-300 ease-in-out"
                style={underlineStyle}
              />
            </div>
          </div>

          {/* languages flags + Burger*/}
          <div className="flex items-center">
            <button
              onClick={() => changeLanguage("eng")}
              className="text-xl md:text-3xl p-2"
            >
              🇬🇧
            </button>
            <button
              onClick={() => changeLanguage("fra")}
              className="text-xl md:text-3xl p-2"
            >
              🇫🇷
            </button>
            <button
              className="text-4xl p-2 xl:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                className={`w-8 h-8 transition-transform duration-500 ease-in-out transform ${isOpen ? 'rotate-270' : 'rotate-0'}`}
                src="/assets/menu-burger-horizontal.svg"
                alt="Menu"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation (toggled by hamburger) */}
        <div className={(location.pathname === '/' ? 'absolute z-1 w-full bg-black/50' : 'w-full')}>
          <div className={`xl:hidden text-white overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>

            <div className="flex flex-col items-start p-5 gap-4">
              <NavLink className={({ isActive }) => (isActive ? "active text-3xl" : "")} to={"/agenda"} onClick={() => setIsOpen(false)}>
                <h2 className="sm:text-lg lg:text-xl md:text-2xl p-2 rounded-lg">
                  {t("header.agenda")}
                </h2>
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active text-3xl" : "")} to={"/galery"} onClick={() => setIsOpen(false)}>
                <h2 className="sm:text-lg lg:text-xl md:text-2xl p-2 rounded-lg">
                  {t("header.gallery")}
                </h2>
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active text-3xl" : "")} to={"/jury"} onClick={() => setIsOpen(false)}>
                <h2 className="sm:text-lg lg:text-xl md:text-2xl p-2 rounded-lg">
                  {t("header.jury")}
                </h2>
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active text-3xl" : "")} to={"/submit"} onClick={() => setIsOpen(false)}>
                <h2 className="sm:text-lg lg:text-xl md:text-2xl p-2 rounded-lg">
                  {t("header.submit")}
                </h2>
              </NavLink>
              {
                user && user.role === "JURY" ? (
                  <>
                    <NavLink className={({ isActive }) => (isActive ? "active text-3xl" : "")} to={"/jury/me"} onClick={() => setIsOpen(false)}>
                      <h2 className="sm:text-lg lg:text-xl md:text-2xl p-2 rounded-lg">
                        {t("header.jurySpace")}
                      </h2>
                    </NavLink>
                    <button
                      onClick={() => { logout(); setIsOpen(false); }}
                      className="sm:text-lg lg:text-3xl md:text-2xl p-2 rounded-lg bg-red-500/45 hover:opacity-75 text-left w-full"
                    >
                      {t("header.logout")}
                    </button>
                  </>
                ) : user && user.role === "ADMIN" ? (
                  <>
                    <NavLink className={({ isActive }) => (isActive ? "active text-3xl" : "")} to={"/dashboard"} onClick={() => setIsOpen(false)}>
                      <h2 className="sm:text-lg lg:text-xl md:text-2xl p-2 rounded-lg">
                        {t("header.adminSpace")}
                      </h2>
                    </NavLink>
                    <button
                      onClick={() => { logout(); setIsOpen(false); }}
                      className="sm:text-lg lg:text-3xl md:text-2xl p-2 rounded-lg bg-red-500/45 hover:opacity-75 text-left w-full"
                    >
                      {t("header.logout")}
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink className={({ isActive }) => (isActive ? "active text-3xl" : "")} to="/login" onClick={() => setIsOpen(false)}>
                      <h2 className="sm:text-lg lg:text-xl md:text-2xl p-2 rounded-lg">
                        {t("header.login")}
                      </h2>
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active text-3xl" : "")} to="/register" onClick={() => setIsOpen(false)}>
                      <h2 className="sm:text-lg lg:text-xl md:text-2xl p-2 rounded-lg">
                        {t("header.register")}
                      </h2>
                    </NavLink>
                  </>
                )
              }
              <div
                className="absolute bottom-[-7px] h-[2px] bg-yellow-400 transition-all duration-300 ease-in-out"
                style={underlineStyle}
              />
            </div>
          </div >

        </div >


      </div >
    </div >
  );
}

export default Header;
