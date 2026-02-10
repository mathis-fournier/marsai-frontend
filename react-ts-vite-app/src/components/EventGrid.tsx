import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export interface EventItem {
  id: string | number;
  title: string;
  imageUrl?: string;
  start_at?: string;
}

interface EventGridProps {
  events?: EventItem[];
  emptyMessage?: string;
}

export default function EventGrid({
  events = [],
  emptyMessage,
}: EventGridProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const filtered = events.filter((e) =>
    e.title.toLowerCase().includes(query.toLowerCase()),
  );

  const finalEmptyMessage = emptyMessage || t("event_grid.empty_message");

  return (
    <div className=" mx-auto p-6">
      <input
        type="text"
        placeholder={t("event_grid.search_placeholder")}
        className="w-full p-3 border border-border text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500 mb-6"
        onChange={(e) => setQuery(e.target.value)}
      />

      {!filtered.length ? (
        <div className="text-center p-12 text-white">
          {finalEmptyMessage}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filtered.map((event) => (
            <div
              key={event.id}
              onClick={() => navigate(`/event/${event.id}`)}
              className="group cursor-pointer overflow-hidden rounded-xl border border-white bg-linear-to-bl from-brand2 to-brand text-white shadow-sm hover:border-hover transition-all"
            >
              {event.imageUrl && (
                <img
                  src={event.imageUrl}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform"
                />
              )}
              <div className="p-5">
                <h3 className="text-lg font-bold group-hover:text-secondary">
                  {event.title}
                </h3>
                <p className="mt-2 text-(--color-text)">
                  {event.start_at
                    ? new Date(event.start_at).toLocaleDateString("fr-FR")
                    : t("event_grid.no_date")}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
