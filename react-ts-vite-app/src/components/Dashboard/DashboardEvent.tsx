import { useTranslation } from "react-i18next";
import DashboardEventCard from "./DashboardEventCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardEvent({ isLoading }: any): any {
  const [eventList, setEventList] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [panel, setPanel] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/events/`)
      .then((res) => res.json())
      .then((data) => setEventList(data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = eventList.filter((e: any) =>
    e.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const gridLayout = "grid grid-cols-2 md:grid-cols-5 gap-4 items-center";
  const navigate = useNavigate();

  function handleAddEvent() {
    navigate("/dashboard/add_event");
  }

  if (isLoading) return <p>{t("dashboard_events.loading")}</p>;

  return (
    <>
      <div
        onClick={() => setPanel(!panel)}
        className="cursor-pointer w-auto p-6"
      >
        <h2 className="text-secondary text-2xl font-mono uppercase">
          🔳 {t("dashboard_event.title")}
        </h2>
        <h1 className="text-4xl text-white font-bold">
          {t("dashboard_event.subtitle")}
        </h1>
        <p className="italic text-white opacity-80">
          {t("dashboard_event.description")}
        </p>
      </div>

      <div
        className={`transition-all duration-150 ease-linear overflow-hidden ${panel ? "opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="rounded-xl border border-border shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("dashboard_movies.search_placeholder")}
              className="border w-full p-2 text-white bg-slate-800 rounded-md focus:outline-none"
            />
            <button
              className="cursor-pointer bg-secondary hover:bg-hover text-white font-bold py-2 px-4 rounded"
              onClick={handleAddEvent}
            >
              {t("dashboard_event.addbutton")}
            </button>
          </div>

          <div className="p-6">
            {filtered.map((item: any) => (
              <DashboardEventCard
                gridLayout={gridLayout}
                key={item.id}
                event={item}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
