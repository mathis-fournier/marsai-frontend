import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function DashboardGlobal() {
  const { t } = useTranslation();
  const [moviecount, setMoviecount] = useState(0);
  const [participantscount, setParticipantscount] = useState(0);
  const [directorscount, setDirectorscount] = useState(0);
  const [ratingcount, setRatingcount] = useState(0);
  const [error, setError] = useState("");
  const objective_submitted = 600;
  const objective_participants = 40;
  const objective_directors = 40;
  const objective_rating = 25;

  // MOVIE COUNT
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/movies/count`)
      .then((res) => {
        if (!res.ok)
          throw new Error(
            t("event_details.error_status", { status: res.status }),
          );
        return res.json();
      })
      .then((data) => {
        setMoviecount(data.total);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  // PARTICIPANTS COUNT
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/events/stats/count`)
      .then((res) => {
        if (!res.ok)
          throw new Error(
            t("event_details.error_status", { status: res.status }),
          );
        return res.json();
      })
      .then((data) => {
        setParticipantscount(data.total);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  // DIRECTORS COUNT
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/movies/directors/count`)
      .then((res) => {
        if (!res.ok)
          throw new Error(
            t("event_details.error_status", { status: res.status }),
          );
        return res.json();
      })
      .then((data) => {
        setDirectorscount(data.total);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  // RATING COUNT
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/jury/rating/count`)
      .then((res) => {
        if (!res.ok)
          throw new Error(
            t("event_details.error_status", { status: res.status }),
          );
        return res.json();
      })
      .then((data) => {
        setRatingcount(data.total);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <div className="w-auto p-6 bg-[var(--color-bg2)]">
        <h2 className="text-[var(--color-secondary)] text-2xl font-mono">
          {t("dashboard_global.title")}
        </h2>
        <h1 className="text-4xl text-[var(--color-white)] font-bold">
          {t("dashboard_global.subtitle")}
        </h1>
        <p className="italic text-[var(--color-white)]">
          {t("dashboard_global.description")}
        </p>
      </div>

      {/* DIV CONTAINER CARDS */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 p-6 gap-6 max-w-full bg-[var(--color-brand)]">
        {/* CARD 1 */}
        <div className="CARD DASHBOARD border rounded-md p-6 bg-[var(--color-brand2)] hover:border hover:border-[var(--color-secondary)]">
          <div className="flex pb-2">
            <img
              className="rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=6366f1"
              alt="placeholderlogo"
            />
            <p className="bg-[var(--color-brand)] font-bold text-xs ml-auto text-[var(--color-white)] p-2 rounded-full">
              {t("dashboard_global.card.objective", {
                count: objective_submitted,
              })}
            </p>
          </div>
          <div>
            <p className="font-mono text-[var(--color-white)]">
              {t("dashboard_global.card.films_submitted", {
                count: moviecount,
              })}
            </p>
          </div>
          <div className="mt-6 text-[var(--color-white)]">
            <p>
              {t("dashboard_global.card.completed", {
                percentage: ((moviecount / objective_submitted) * 100).toFixed(
                  2,
                ),
              })}
            </p>
            <progress
              id="file"
              max="100"
              className="w-full bg-[var(--color-brand)]
            appearance-none
             [&::-webkit-progress-bar]:bg-slate-200 
             [&::-webkit-progress-value]:bg-[var(--color-secondary)]
             [&::-moz-progress-bar]:bg-[var(--color-secondary)]"
              value={((moviecount / objective_submitted) * 100).toFixed(2)}
            >
              70%
            </progress>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="CARD DASHBOARD border rounded-md p-6 bg-[var(--color-brand2)] hover:border hover:border-[var(--color-secondary)]">
          <div className="flex pb-2">
            <img
              className="rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=1074&format=png&color=6366f1"
              alt="placeholderlogo"
            />
            <p className="bg-[var(--color-brand)] font-bold text-xs ml-auto text-[var(--color-white)] p-2 rounded-full">
              {t("dashboard_global.card.objective", {
                count: objective_participants,
              })}
            </p>
          </div>
          <div>
            <p className="font-mono text-[var(--color-white)]">
              {t("dashboard_global.card.participants", {
                count: participantscount,
              })}
            </p>
          </div>
          <div className="mt-6 text-[var(--color-white)]">
            <p>
              {t("dashboard_global.card.completed", {
                percentage: (
                  (participantscount / objective_participants) *
                  100
                ).toFixed(2),
              })}
            </p>
            <progress
              id="file"
              max="100"
              className="w-full bg-[var(--color-brand)]
            appearance-none
             [&::-webkit-progress-bar]:bg-slate-200 
             [&::-webkit-progress-value]:bg-[var(--color-secondary)]
             [&::-moz-progress-bar]:bg-[var(--color-secondary)]"
              value={(
                (participantscount / objective_participants) *
                100
              ).toFixed(2)}
            >
              70%
            </progress>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="CARD DASHBOARD border rounded-md p-6 bg-[var(--color-brand2)] hover:border hover:border-[var(--color-secondary)]">
          <div className="flex pb-2">
            <img
              className="rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=6366f1"
              alt="placeholderlogo"
            />
            <p className="bg-[var(--color-brand)] font-bold text-xs ml-auto text-[var(--color-white)] p-2 rounded-full">
              {t("dashboard_global.card.objective", {
                count: objective_rating,
              })}
            </p>
          </div>
          <div>
            <p className="font-mono text-[var(--color-white)]">
              {t("dashboard_global.card.films_evaluated", {
                count: ratingcount,
              })}
            </p>
          </div>
          <div className="mt-6 text-[var(--color-white)]">
            <p>
              {t("dashboard_global.card.completed", {
                percentage: ((ratingcount / objective_rating) * 100).toFixed(2),
              })}
            </p>
            <progress
              id="file"
              max="100"
              className="w-full bg-[var(--color-brand)]
            appearance-none
             [&::-webkit-progress-bar]:bg-slate-200 
             [&::-webkit-progress-value]:bg-[var(--color-secondary)]
             [&::-moz-progress-bar]:bg-[var(--color-secondary)]"
              value={((ratingcount / objective_rating) * 100).toFixed(2)}
            >
              70%
            </progress>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="CARD DASHBOARD border rounded-md p-6 bg-[var(--color-brand2)] hover:border hover:border-[var(--color-secondary)]">
          <div className="flex pb-2">
            <img
              className="rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=6366f1"
              alt="placeholderlogo"
            />
            <p className="bg-[var(--color-brand)] font-bold text-xs ml-auto text-[var(--color-white)] p-2 rounded-full">
              {t("dashboard_global.card.objective", { count: 600 })}
            </p>
          </div>
          <div>
            <p className="font-mono text-[var(--color-white)]">
              {t("dashboard_global.card.films_evaluated", { count: 432 })}
            </p>
          </div>
          <div className="mt-6 text-[var(--color-white)]">
            <p>{t("dashboard_global.card.completed", { percentage: "x" })}</p>
            <p className="overflow-hidden text-clip text-xs text-[var(--color-secondary)] bg-[var(--color-secondary)] rounded-full">
              -
            </p>
          </div>
        </div>
      </div>

      {/* CARD FULL WIDTH (5) */}
      <div className="w-full p-6 pt-0 bg-[var(--color-brand)]">
        <div className="CARD DASHBOARD border rounded-md p-6 bg-[var(--color-brand2)] hover:border hover:border-[var(--color-secondary)]">
          <div className="flex pb-2">
            <img
              className="rounded-md p-1"
              src="https://img.icons8.com/?size=26&id=2998&format=png&color=6366f1"
              alt="placeholderlogo"
            />
            <p className="bg-[var(--color-brand)] font-bold text-xs ml-auto text-[var(--color-white)] p-2 rounded-full">
              {t("dashboard_global.card.objective", {
                count: objective_directors,
              })}
            </p>
          </div>
          <div>
            <p className="font-mono text-[var(--color-white)]">
              {t("dashboard_global.card.active_accounts", {
                count: directorscount,
              })}
            </p>
          </div>
          <div className="mt-6 text-[var(--color-white)]">
            <p>{t("dashboard_global.card.today", { count: 2 })}</p>
          </div>
        </div>
      </div>
    </>
  );
}
