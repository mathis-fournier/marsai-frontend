import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import StatCard from "./StatCard";

export default function DashboardGlobal() {
  const { t } = useTranslation(["Dashboard", "common"]);
  const [moviecount, setMoviecount] = useState(0);
  const [participantscount, setParticipantscount] = useState(0);
  const [directorscount, setDirectorscount] = useState(0);
  const [ratingcount, setRatingcount] = useState(0);
  const [error, setError] = useState("");
  const objective_submitted = 600;
  const objective_participants = 3000;
  const objective_countries = 120;
  const objective_concurrents = 50;

  useEffect(() => {
    Promise.all([
      fetch(`${import.meta.env.VITE_API_URL}/movies/count`),
      fetch(`${import.meta.env.VITE_API_URL}/jury/rating/count`),
      fetch(`${import.meta.env.VITE_API_URL}/movies/accepted/count`),
      fetch(`${import.meta.env.VITE_API_URL}/events/stats/count`),
    ])
      .then((responses) => {
        const errorResponse = responses.find((res) => !res.ok);
        if (errorResponse) {
          throw new Error(
            t("error_status", { status: errorResponse.status }),
          );
        }
        return Promise.all(responses.map((res) => res.json()));
      })
      .then(([movieData, ratingData, directorData, participantData]) => {
        setMoviecount(movieData.total);
        setRatingcount(ratingData.total);
        setDirectorscount(directorData[0].total);
        setParticipantscount(participantData.total);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) {
    return <h1>{t("dashboard_global.error", { message: error })}</h1>;
  }
  const getPercent = (value: number, total: number) =>
    ((value / total) * 100).toFixed(2);
  return (
    <>
      <div className="w-auto p-6">
        <h2 className="text-secondary text-2xl font-mono uppercase">
          🔳 {t("dashboard_global.title")}
        </h2>
        <h1 className="text-4xl text-white font-bold">
          {t("dashboard_global.subtitle")}
        </h1>
        <p className="italic text-white opacity-80">
          {t("dashboard_global.description")}
        </p>
      </div>

      <div className={`transition-all duration-1350 ease-linear overflow-hidden`}>

        <section>
          {/* DIV CONTAINER STATCARD */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 p-6 gap-6 max-w-full">
            <StatCard
              icon="🎥"
              objective={t("dashboard_global.card.objective", { count: moviecount })}
              objectivemax={objective_submitted}
              title={t("dashboard_global.card.films_submitted")}
              percentageText={t("dashboard_global.card.completed", {
                percentage: getPercent(moviecount, objective_submitted),
              })}
              progressValue={getPercent(moviecount, objective_submitted)}
            />

            <StatCard
              icon="🎞️"
              objective={t("dashboard_global.card.objective", { count: directorscount })}
              objectivemax={objective_concurrents}
              title={t("dashboard_global.card.selected_films")}
            >
              <p>{t("dashboard_global.card.today", { count: 2 })}</p>
            </StatCard>
          </div>
        </section >
      </div >
      <div className={`transition-all duration-1350 ease-linear overflow-hidden`}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 p-6 gap-6 max-w-full">
          <StatCard
            icon="👤"
            objective={t("dashboard_global.card.objective", { count: participantscount })}
            objectivemax={objective_participants}
            title={t("dashboard_global.card.participants")}
            percentageText={t("dashboard_global.card.completed", {
              percentage: getPercent(participantscount, objective_participants),
            })}
            progressValue={getPercent(participantscount, objective_participants)}
          />

          <StatCard
            icon="🏳️"
            objective={t("dashboard_global.card.objective", { count: ratingcount })}
            objectivemax={objective_countries}
            title={t("dashboard_global.card.represented_countries")}
            percentageText={t("dashboard_global.card.completed", {
              percentage: getPercent(ratingcount, objective_countries),
            })}
            progressValue={getPercent(ratingcount, objective_countries)}
          />
        </div>

      </div >

    </>
  );
}
