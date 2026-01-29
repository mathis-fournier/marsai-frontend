import React from "react";

export interface EventItem {
  id: string | number;
  title: string;
  description?: string;
  start_at?: string;
  imageUrl?: string;
}

export interface EventGridProps {
  events: EventItem[];
  emptyMessage?: string;
}

const EventGrid: React.FC<EventGridProps> = ({
  events,
  emptyMessage = "Aucun événement disponible pour le moment.",
}) => {
  if (!events || events.length === 0) {
    return (
      <div className="flex w-full justify-center items-center p-12 text-slate-500">
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="w-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm transition-all hover:border-slate-400"
          >
            <div className="p-5">
              <h3 className="text-xl font-bold text-black">{event.title}</h3>
              <p className="mt-2 text-[var(--color-primary)] line-clamp-2">
                {new Date(event.start_at).toString() ||
                  "Aucune description fournie."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGrid;
