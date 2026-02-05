import { useEffect, useState } from "react";
import EventGrid, { type EventItem } from "../components/EventGrid";
import Acces from "../components/Access";
import { useTranslation } from "react-i18next";

function Agenda() {
  const { t } = useTranslation();
  const [data, setData] = useState<EventItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      <div className="p-10 text-center text-[var(--color-black)]">
        {t("agenda.loading")}
      </div>
    );
  if (error)
    return (
      <div className="p-10 text-center text-[var(--color-black)]">
        {t("agenda.error", { error: error })}
      </div>
    );

  return (
    <>
      <main>
        <header className="max-w-full mx-auto px-6 pt-10">
          <h1 className="text-4xl font-bold text-[var(--color-white)] mb-[3%]">
            {t("agenda.date")}
            <p className="font-bold text-[var(--color-secondary)]">
              {t("agenda.location")}
            </p>
          </h1>

          <h2 className="font-bold text-xl text-[var(--color-white)] underline decoration-[var(--color-secondary)] decoration-3 mb-6">
            {t("agenda.program_title")}
          </h2>
        </header>

        <EventGrid events={data} emptyMessage={t("agenda.no_events")} />
        <Acces></Acces>
      </main>
    </>
  );
}

export default Agenda;
