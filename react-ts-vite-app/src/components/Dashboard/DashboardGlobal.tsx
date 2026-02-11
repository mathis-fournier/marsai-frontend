import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import StatCard from "./StatCard";

export default function DashboardGlobal() {
  const { t } = useTranslation();
  const [moviecount, setMoviecount] = useState(0);
  const [participantscount, setParticipantscount] = useState(0);
  const [directorscount, setDirectorscount] = useState(0);
  const [ratingcount, setRatingcount] = useState(0);
  const [error, setError] = useState("");
  const objective_submitted = 60;
  const objective_participants = 40;
  const objective_directors = 40;
  const objective_rating = 25;
  const [panel, setPanel] = useState<boolean>(false);

  useEffect(() => {
    Promise.all([
      fetch(`${import.meta.env.VITE_API_URL}/movies/count`),
      fetch(`${import.meta.env.VITE_API_URL}/jury/rating/count`),
      fetch(`${import.meta.env.VITE_API_URL}/movies/directors/count`),
      fetch(`${import.meta.env.VITE_API_URL}/events/stats/count`),
    ])
      .then((responses) => {
        const errorResponse = responses.find((res) => !res.ok);
        if (errorResponse) {
          throw new Error(
            t("event_details.error_status", { status: errorResponse.status }),
          );
        }
        return Promise.all(responses.map((res) => res.json()));
      })
      .then(([movieData, ratingData, directorData, participantData]) => {
        setMoviecount(movieData.total);
        setRatingcount(ratingData.total);
        setDirectorscount(directorData.total);
        setParticipantscount(participantData.total);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  const getPercent = (value: number, total: number) =>
    ((value / total) * 100).toFixed(2);
  return (
    <>
      {/* TITRE */}
      <div className="cursor-default w-auto p-6 bg-(--color-bg2)"
        onClick={() => setPanel(!panel)}
      >
        <h2 className="text-secondary text-2xl font-mono">
          🔳 {t("dashboard_global.title")}
        </h2>
        <h1 className="text-4xl text-white font-bold">
          {t("dashboard_global.subtitle")}
        </h1>
        <p className="opacity-80 text-white">
          {t("dashboard_global.description")}
        </p>
      </div>




      <div className={`transition-all duration-1350 ease-linear overflow-hidden ${panel ? 'opacity-100' : 'max-h-0 opacity-0'}`}>
        {/* DIV CONTAINER STATCARD */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 p-6 gap-6 max-w-full">
          <StatCard
            icon="https://img.icons8.com/?size=26&id=2998&format=png&color=6366f1"
            objective={t("dashboard_global.card.objective", {
              count: moviecount,
            })}
            objectivemax={objective_submitted}
            title={t("dashboard_global.card.films_submitted")}
            percentageText={t("dashboard_global.card.completed", {
              percentage: getPercent(moviecount, objective_submitted),
            })}
            progressValue={getPercent(moviecount, objective_submitted)}
          />

          <StatCard
            icon="https://img.icons8.com/?size=26&id=1074&format=png&color=6366f1"
            objective={t("dashboard_global.card.objective", {
              count: participantscount,
            })}
            objectivemax={objective_participants}
            title={t("dashboard_global.card.participants", {
              count: participantscount,
            })}
            percentageText={t("dashboard_global.card.completed", {
              percentage: getPercent(participantscount, objective_participants),
            })}
            progressValue={getPercent(participantscount, objective_participants)}
          />

          <StatCard
            icon="https://img.icons8.com/?size=26&id=1074&format=png&color=6366f1"
            objective={t("dashboard_global.card.objective", {
              count: ratingcount,
            })}
            objectivemax={objective_rating}
            title={t("dashboard_global.card.rating_title", {
              count: ratingcount,
            })}
            percentageText={t("dashboard_global.card.completed", {
              percentage: getPercent(ratingcount, objective_rating),
            })}
            progressValue={getPercent(ratingcount, objective_rating)}
          />

          <StatCard
            icon="https://img.icons8.com/?size=26&id=69088&format=png&color=6366f1"
            objective={t("dashboard_global.card.objective", {
              count: directorscount,
            })}
            objectivemax={objective_directors}
            title={t("dashboard_global.card.active_accounts", {
              count: directorscount,
            })}
          >
            <p>{t("dashboard_global.card.today", { count: 2 })}</p>
          </StatCard>
        </div>
      </div>

      {/* <div className="w-full p-6 pt-0 bg-brand">
        <StatCard icon="a.png" objective="1" objectivemax={2} title="?">
          <p>test</p>
        </StatCard>
      </div> */}
    </>
  );
}
