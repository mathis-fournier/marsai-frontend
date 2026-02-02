import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  emptyMessage = "Aucun événement disponible.",
}: EventGridProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const filtered = events.filter((e) =>
    e.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className=" mx-auto p-6">
      <input
        type="text"
        placeholder="Search"
        className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 mb-6"
        onChange={(e) => setQuery(e.target.value)}
      />

      {!filtered.length ? (
        <div className="text-center p-12 text-slate-500">{emptyMessage}</div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filtered.map((event) => (
            <div
              key={event.id}
              onClick={() => navigate(`/event/${event.id}`)}
              className="group cursor-pointer overflow-hidden rounded-xl border bg-white shadow-sm hover:border-blue-400 transition-all"
            >
              {event.imageUrl && (
                <img
                  src={event.imageUrl}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform"
                />
              )}
              <div className="p-5">
                <h3 className="text-lg font-bold group-hover:text-blue-600">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {event.start_at
                    ? new Date(event.start_at).toLocaleDateString("fr-FR")
                    : "Date non spécifiée"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
