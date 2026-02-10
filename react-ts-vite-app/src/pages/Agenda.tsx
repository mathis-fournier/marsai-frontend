import { useEffect, useState } from "react";
import EventGrid, { type EventItem } from "../components/EventGrid";
import Acces from "../components/Access";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function Agenda() {
  const { t } = useTranslation();

  const [data, setData] = useState<EventItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showConferences, setShowConferences] = useState(false);
  const [showNight, setShowNight] = useState(false);

  function toggleConferences() {
    setShowConferences(!showConferences);
  }
  function toggleNight() {
    setShowNight(!showNight);
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/events/all`)
      .then((res) => {
        if (!res.ok)
          throw new Error(t("agenda.error_status", { status: res.status }));
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);



  if (isLoading)
    return (
      <div className="p-10 text-center text-white">
        {t("agenda.loading")}
      </div>
    );
  if (error)
    return (
      <div className="p-10 text-center text-white">
        {t("agenda.error", { error: error })}
      </div>
    );

  return (
    <>

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-extrabold p-5 md:p-15 text-center text-white mb-[3%]">
        {t("agenda.date")}
        <p className="font-bold ">
          {t("agenda.location")}
        </p>
      </h1>




      {/* CONFERENCES */}
      <div className="flex justify-center text-white flex-col gap-10 font-semi-bold font-sans">
        <div className="w-full md:w-[75%] m-auto rounded-2xl bg-linear-to-br from-brand2 to-brand border-2 border-white shadow-md/50 shadow-white">
          <h2 className="flex items-center justify-center px-5 bg-linear-to-t from-yellow-400 to-yellow-600 bg-clip-text text-transparent md:text-2xl font-bold my-8 text-xl"
            onClick={toggleConferences}>

            <span className={`text-xl md:text-3xl transition-transform duration-500 ease-in-out transform ${showConferences ? 'rotate-90' : 'rotate-0'}`}>
              ▶
            </span>
            <span className="grow ml-2">{t("festival.conferences.title")}</span>
          </h2>
          <div className={`transition-all duration-750 ease-in-out overflow-hidden ${showConferences ? 'max-h-500' : 'max-h-0'}`}>
            <h2 className="font-bold text-xl md:text-3xl text-center text-white underline decoration-secondary decoration-3 my-[2%]">

              {t("agenda.program_title")}
            </h2>
            <ul className="p-10 list-disc list-inside text-white text-lg md:text-xl my-10 flex flex-col m-auto">
              <p className="mb-10 text-white md:text-xl">
                {t("festival.conferences.description")}
              </p>
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
            <EventGrid events={data} emptyMessage={t("agenda.no_events")} />
          </div>
        </div>

        {/* MARSAI NIGHT */}
        <div className="flex justify-center text-white flex-col gap-10 font-semi-bold font-sans">
          <div className="w-full md:w-[75%] m-auto rounded-2xl bg-linear-to-br from-brand2 to-brand border-2 border-white shadow-md/50 shadow-white">
            <h2 className="flex items-center px-5 md:text-2xl font-bold my-8 text-xl bg-linear-to-t from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
              onClick={toggleNight}>

              <span className={`text-xl md:text-3xl transition-transform duration-500 ease-in-out transform ${showNight ? 'rotate-90' : 'rotate-0'}`}>
                ▶
              </span>
              <span className="grow ml-2">{t("festival.night.title")}</span>
            </h2>
            <div className={`transition-all duration-750 ease-in-out overflow-hidden ${showNight ? 'max-h-400' : 'max-h-0'}`}>
              <p className="text-[var(--color-white)] w-full font-bold text-center text-2xl md:text-4xl">
                {t("festival.night.date")}
              </p>
              <div className=" ">
                <p className="text-[var(--color-white)] w-full font-bold text-center tgext-xl md:text-2xl/24">
                  {t("festival.night.time")}
                </p>
                <div >
                  <h2 className="my-20 text-white text-3xl font-bold text-center">
                    {/* {t("festival.night.subtitle")} */}
                    <img className="m-auto" src="/marsai.png" alt="" />
                  </h2>
                  <p className="text-[var(--color-white)] my-4 w-full text-center text-xl md:text-2xl">
                    {t("festival.night.description")}
                  </p>
                </div>
              </div>
              <NavLink to={"/submit"}>
                <h2 className="text-lg my-8 cursor-pointer text-white bg-linear-to-t from-secondary hover:bg-brand2 text-center w-40 m-auto p-2 rounded-xl">
                  {t("festival.night.get_pass_button")}
                </h2>
              </NavLink>
            </div>
          </div>
        </div>

        {/* LOCATION */}
        <div
          className=" text-white rounded-xl text-xl">
          <div className="w-full md:w-[75%] m-auto p-5 rounded-2xl ">
            {/* <h2 onClick={toggleVenue}
              className="flex text-xl md:text-3xl font-bold mb-4">
              <span className={`text-xl md:text-3xl transition-transform duration-700 transform rotate-0 ${venue ? 'rotate-90' : ''}`}>▶
              </span>
              <span className="grow ml-2">{t("festival.location.title")}</span>
            </h2> */}
            <div className={`transition-all duration-750 ease-in-out overflow-hidden `}>

              {/* PRESENTATION DES SALLES */}
              <div className="flex flex-col md:flex-row md:justify-around text-center">
                <div className="flex flex-col md:flex-rows md:justify-around justify-center p-5 my-10 m-auto w-60 h-60 rounded-2xl  border-2 border-white shadow-lg/50 shadow-white bg-linear-to-b from-brand to-brand2">
                  <h3 className="text-2xl text-white">
                    {t("festival.location.cards.platform_title")}
                  </h3>
                  <br />
                  <h3 className="text-xl text-white">
                    {t("festival.location.cards.platform_subtitle")}
                  </h3>
                  <p className="text-sm p-2 text-white">
                    {t("festival.location.cards.platform_description")}
                  </p>
                </div>
                <div className="flex flex-col justify-center p-5 my-10 m-auto w-60 h-60 bg-linear-to-b from-brand to-brand2 rounded-2xl border-2 border-white  shadow-lg/50 shadow-white">
                  <h2 className="text-2xl text-white">
                    {t("festival.location.cards.sugars_room_title")}
                  </h2>
                  <p className="text-sm p-2 text-white">
                    {t("festival.location.cards.sugars_room_description")}
                  </p>
                </div>
                <div className="flex flex-col justify-center p-5 my-10 m-auto w-60 h-60 bg-linear-to-b from-brand to-brand2 rounded-2xl border-2 border-white  shadow-lg/50 shadow-white">
                  <h2 className="text-2xl text-white">
                    {t("festival.location.cards.plaza_room_title")}
                  </h2>
                  <p className="text-sm p-2 text-white">
                    {t("festival.location.cards.plaza_room_description")}
                  </p>
                </div>
              </div>

              <Acces />
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default Agenda;
