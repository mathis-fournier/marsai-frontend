import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <>


      {/* Hero Section */}
      {/* DESKTOP VERSION */}
      <div className="hidden sm:flex font-serif w-full h-screen bg-[url(space-desktop.webp)] bg-cover bg-no-repeat flex-col justify-around  items-center">
        <div className="h-[70%] mask-t-from-70 hover:mask-t-from-100 flex gap-0 text-white flex-col lg:flex-row ">
          <div className="font-serif font-bold">
            <div className="font-sans flex p-2 flex-col items-center md:flex-row mt-10 gap-5 cursor-pointer bg-linear-to-l from-black/25 to-white bg-clip-text text-transparent hover:text-white">
              <NavLink to={"/submit"}>
                <p className="text-center text-6xl md:text-8xl font-bold">
                  {t("hero_banner.title_part1")}
                </p>
                <p className="text-4xl text-center md:text-5xl font-bold">
                  {t("hero_banner.title_part2")}
                </p>
                <p className="mask-r-from-25% text-center text-5xl md:text-7xl font-bold">
                  {t("hero_banner.title_part3")}
                </p>
              </NavLink>
              {/* <h2 className="text-black text-center my-7 bg-linear-to-t from-third to-secondary/50 bg-sky-100/75 text-xl space-y-2 mask-y-to-100 w-40 m-auto p-2 rounded-xl">
                {t("festival.format.participate_button")}
                </h2> */}
              <a
                href={'#presentation'}
                className="text-lg my-8 text-white bg-linear-to-t from-secondary hover:bg-brand2 text-center w-40 m-auto p-2 rounded-xl">
                En savoir plus
              </a>
            </div>

          </div >
        </div >
      </div>



      {/* Hero Section */}
      {/* MOBILE VERSION */}
      <div className="flex sm:hidden font-serif w-full h-screen bg-[url(space-desktop.webp)] bg-cover hero bg-no-repeat flex-col justify-around  items-center">
        <div className="h-[70%] mask-t-from-70 flex gap-0 text-white flex-col lg:flex-row ">
          <div className="font-serif font-bold">
            <div className="font-sans flex p-2 flex-col items-center md:flex-row mt-0 gap-25 cursor-pointer">
              <NavLink to={"/submit"}>
                <p className="text-center text-6xl md:text-8xl font-bold">
                  {t("hero_banner.title_part1")}
                </p>
                <p className="text-4xl text-center md:text-5xl font-bold">
                  {t("hero_banner.title_part2")}
                </p>
                <p className="mask-r-from-20% text-center text-5xl md:text-7xl font-bold">
                  {t("hero_banner.title_part3")}
                </p>
              </NavLink>
              <a
                href={'#presentation'}
                className="text-lg my-8 text-white bg-linear-to-t from-secondary hover:bg-brand2 text-center w-40 m-auto p-2 rounded-xl">
                En savoir plus
              </a>
            </div>

          </div >
        </div >
      </div>

    </>
  );
}
