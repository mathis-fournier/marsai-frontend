import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MoviesBest from "../components/MoviesBest";
import HeroSection from "../components/HeroSection";

function Festival() {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection />
      <div className="bg-brand md:max-w-full mx-auto px-6 my-25  shadow-lg/50 shadow-black mb-10">
        <div className="bg-brand m-auto p-10 font-bold">
          <div className="flex justify-center mt-5"></div>
        </div>
        <div className=" bg-brand p-1">
          <h2 className="text-2xl text-white font-bold mb-4 my-4">
            ▶ {t("festival.project.title")}
            <hr />
          </h2>
          <p className="mb-4 my-4 text-white md:text-xl">
            {t("festival.project.description")}
          </p>
          <div className="grid grid-cols-2 md:flex lg:flex-row lg:justify-around justify-center items-center gap-5 mt-5">
            <p className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-linear-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">
              🎬
              <span className="font-bold text-center text-xl">
                {t("festival.project.cards.one_minute_title")}
              </span>
              <span className="text-sm p-1">
                {t("festival.project.cards.one_minute_description")}
              </span>
            </p>
            <p className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-linear-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">
              🎓
              <span className="font-bold text-center text-xl">
                {t("festival.project.cards.free_title")}
              </span>
              <span className="text-sm p-1">
                {t("festival.project.cards.free_description")}
              </span>
            </p>
            <p className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-linear-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">
              👨‍🏫
              <span className="font-bold text-center text-xl">
                {t("festival.project.cards.for_all_title")}
              </span>
              <span className="text-sm p-1">
                {t("festival.project.cards.for_all_description")}
              </span>
            </p>
            <p className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-linear-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">
              🌍
              <span className="font-bold text-center text-xl">
                {t("festival.project.cards.expertise_title")}
              </span>
              <span className="text-sm p-1">
                {t("festival.project.cards.expertise_description")}
              </span>
            </p>
          </div>
        </div>
        <div className="my-10 bg-brand2 -1 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-white)]">
            ▶ {t("festival.films.title")}
            <hr />
          </h2>
          <p className="text-white  md:text-2xl">
            {t("festival.films.description")}
          </p>
          <h2 className="p-5 text-center text-white text-xl md:text-2xl font-bold mb-4 my-4">
            {t("festival.films.selection_preview")}
          </h2>
          <MoviesBest />
          <NavLink to={"/galery"}>
            <h2 className="text-xl text-white bg-[var(--color-secondary)] text-center w-40 flex m-auto p-2 rounded-xl">
              {t("festival.films.see_all_button")}
            </h2>
          </NavLink>
        </div>
        <div className="my-10  bg-brand2 p-1 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-white)]">
            ▶ {t("festival.objectives.title")}
            <hr />
          </h2>
          <div className="flex flex-col md:flex md:flex-row md:justify-around justify-center items-center gap-5 mt-5">
            <p className="flex flex-col  w-50 h-50 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">
              🚶‍♂️
              <span className="font-bold text-center text-xl">
                {t("festival.objectives.cards.human_title")}
              </span>
              <span className="text-sm p-1">
                {t("festival.objectives.cards.human_description")}
              </span>
            </p>
            <p className="flex flex-col  w-50 h-50 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">
              ⚡
              <span className="font-bold text-center text-xl">
                {t("festival.objectives.cards.creative_challenge_title")}
              </span>
              <span className="text-sm p-1">
                {t("festival.objectives.cards.creative_challenge_description")}
              </span>
            </p>
            <p className="flex flex-col w-50 h-50 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">
              🚀
              <span className="font-bold text-center text-xl">
                {t("festival.objectives.cards.desirable_futures_title")}
              </span>
              <span className="text-sm p-1">
                {t("festival.objectives.cards.desirable_futures_description")}
              </span>
            </p>
          </div>
        </div>

        <div className="my-10  bg-brand2 p-1 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-white)]">
            ▶ {t("festival.format.title")}
            <hr />
          </h2>
          <h2 className="p-5 text-center text-white text-xl md:text-2xl font-bold mb-4 my-4">
            {t("festival.format.subtitle")}
          </h2>
          <div className="grid grid-cols-2 md:flex md:flex-row md:justify-around justify-center items-center gap-5 mt-5">
            <div className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">
              📅
              <span className="font-bold text-center text-xl">
                {t("festival.format.cards.months_title")}
              </span>
              <div className="text-sm text-[var(--color-black)]">
                {t("festival.format.cards.months_subtitle")}
              </div>
            </div>
            <div className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">
              🎥
              <span className="font-bold text-center text-xl">
                {t("festival.format.cards.films_title")}
              </span>
              <div className="text-sm text-[var(--color-black)]">
                {t("festival.format.cards.films_subtitle")}
              </div>
            </div>
            <div className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">
              🌐
              <span className="font-bold text-center text-xl">
                {t("festival.format.cards.web_title")}
              </span>
              <div className="text-sm text-[var(--color-black)]">
                {t("festival.format.cards.web_subtitle")}
              </div>
            </div>
            <div className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">
              🎊
              <span className="font-bold text-center text-xl">
                {t("festival.format.cards.festival_title")}
              </span>
              <div className="text-sm text-[var(--color-black)]">
                {t("festival.format.cards.festival_subtitle")}
              </div>
            </div>
          </div>
          <NavLink to={"/submit"}>
            <h2 className="text-xl my-8 text-white bg-[var(--color-secondary)] text-center w-40 m-auto p-2 rounded-xl">
              {t("festival.format.participate_button")}
            </h2>
          </NavLink>
        </div>
        <div className="my-10  bg-brand2 p-1 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-white)]">
            ▶ {t("festival.conferences.title")}
            <hr />
          </h2>
          <p className="text-white md:text-xl">
            {t("festival.conferences.description")}
          </p>
          <ul className=" list-none list-inside text-white text-lg md:text-xl my-10 flex flex-col items-center m-auto">
            <li className="text-left">
              {t("festival.conferences.list.item1")}
            </li>
            <li className="text-left">
              {t("festival.conferences.list.item2")}
            </li>
            <li className="text-left">
              {t("festival.conferences.list.item3")}
            </li>
          </ul>
          <div className="grid grid-cols-2 md:flex md:flex-rows md:justify-around justify-center items-center gap-5 mt-5">
            <div className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">
              🎬
              <span className="font-bold text-center text-xl">
                {t("festival.conferences.cards.screenings_title")}
              </span>
              <div className="text-sm text-[var(--color-black)]"></div>
              <span className="text-sm">
                {t("festival.conferences.cards.screenings_description")}
              </span>
            </div>
            <div className="flex flex-col w-35 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">
              👨‍🏫
              <span className="font-bold text-center text-xl">
                {t("festival.conferences.cards.workshops_title")}
              </span>
              <div className="text-sm text-[var(--color-black)]"></div>
              <span className="text-sm">
                {t("festival.conferences.cards.workshops_description")}
              </span>
            </div>
            <div className="flex flex-col w-70 h-35 sm:w-50 sm:h-50 border border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-4xl justify-center items-center text-center text-xl">
              🏆
              <span className="font-bold text-center text-xl">
                {t("festival.conferences.cards.awards_title")}
              </span>
              <div className="text-sm text-[var(--color-black)]"></div>
              <span className="text-sm">
                {t("festival.conferences.cards.awards_description")}
              </span>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-white)]">
          ▶ {t("festival.night.title")}
          <hr />
        </h2>
        <p className="text-[var(--color-white)] w-full font-bold text-center text-2xl md:text-4xl">
          {t("festival.night.date")}
        </p>
        <p className="text-[var(--color-white)] w-full font-bold text-center text-xl md:text-2xl/24">
          {t("festival.night.time")}
        </p>
        <div className="h-100 md:h-120 bg-img">
          <div className="flex-col m-auto rounded-2xl border-black box-border shadow-white w-68 md:w-80 p-5 flex justify-start-safe items-center  bg-black/50 h-100 md:h-120">
            <h2 className="text-white text-3xl font-bold text-center">
              {t("festival.night.subtitle")}
            </h2>
            <p className="text-[var(--color-white)] my-4 w-full text-center text-xl md:text-2xl">
              {t("festival.night.description")}
            </p>
          </div>
        </div>
        <NavLink to={"/submit"}>
          <h2 className="text-lg my-8 text-white bg-[var(--color-secondary)] text-center w-40 m-auto p-2 rounded-xl">
            {t("festival.night.get_pass_button")}
          </h2>
        </NavLink>

        <h2 className="text-2xl font-bold mb-4 text-white p-1">
          ▶ {t("festival.location.title")}
          <hr />
        </h2>
        <div className="flex flex-col md:flex-row md:justify-around ">
          <div className="flex flex-col md:flex-rows md:justify-around justify-center p-5 my-10 m-auto w-60 h-60 rounded-2xl border-black shadow-lg/50 shadow-white bg-gradient-to-b from-[#e5a50a] to-[#c64600]">
            <h3 className="text-2xl text-white">
              {t("festival.location.cards.platform_title")}
            </h3>
            <br />
            <h3 className="text-xl text-white">
              {t("festival.location.cards.platform_subtitle")}
            </h3>
            <p className="text-sm p-2">
              {t("festival.location.cards.platform_description")}
            </p>
          </div>
          <div className="flex flex-col justify-center p-5 my-10 m-auto w-60 h-60 bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-2xl border-black shadow-lg/50 shadow-white">
            <h2 className="text-2xl text-white">
              {t("festival.location.cards.sugars_room_title")}
            </h2>
            <p className="text-sm p-2">
              {t("festival.location.cards.sugars_room_description")}
            </p>
          </div>
          <div className="flex flex-col justify-center p-5 my-10 m-auto w-60 h-60 bg-gradient-to-b from-[#e5a50a] to-[#c64600] rounded-2xl border-black shadow-lg/50 shadow-white">
            <h2 className="text-2xl text-white">
              {t("festival.location.cards.plaza_room_title")}
            </h2>
            <p className="text-sm p-2">
              {t("festival.location.cards.plaza_room_description")}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-white p-1">
          ▶ {t("festival.partners.title")}
          <hr />
        </h2>
        <img
          src="/partners.png"
          alt="Partenaires Marsai"
          className="p-10 w-200 m-auto my-10"
        />
      </div>
      <img src="/chiffres.png" alt="les chiffres" className="m-auto w-300" />
    </>
  );
}

export default Festival;
