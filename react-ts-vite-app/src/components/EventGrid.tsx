import React from "react";

interface EventItem {
  id: string | number;
  title: string;
  description?: string;
  imageUrl?: string;
}

interface EventGridProps {
  events: EventItem[];
  onActionClick?: (id: string | number) => void;
  actionLabel?: string;
  emptyMessage?: string;
}

const EventGrid: React.FC<EventGridProps> = ({
  events,
  onActionClick,
  actionLabel = "Details",
  emptyMessage = "Aucun événement disponible pour le moment.",
}) => {
  if (!events || events.length === 0) {
    return (
      <div className="flex justify-center items-center p-12 text-slate-500">
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
          >
            <div className="h-48 bg-slate-100 flex items-center justify-center">
              {event.imageUrl ? (
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-slate-400">Image de l'événement</span>
              )}
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-slate-900">
                {event.title}
              </h3>
              <p className="mt-2 text-slate-600 line-clamp-2">
                {event.description || "Aucune description fournie."}
              </p>

              <button
                onClick={() => onActionClick?.(event.id)}
                className="mt-4 w-full rounded-lg bg-blue-600 py-2 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-700 active:bg-blue-800"
              >
                {actionLabel}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGrid;
