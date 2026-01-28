import { useEffect, useState } from "react";

function Agenda() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/events/all")
      .then((res) => {
        if (!res.ok) throw new Error(`Erreur Status: ${res.status}`);
        return res.json();
      })
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {data && data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((event: any) => (
            <div
              key={event.id}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all"
            >
              <div className="h-48 bg-slate-100 flex items-center justify-center">
                <span className="text-slate-400">Event Image</span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">
                  {event.title}
                </h3>
                <p className="mt-2 text-slate-600 line-clamp-2">
                  {event.description ||
                    "No description provided for this event."}
                </p>
                <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 px-4 text-sm font-medium text-white">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 p-12 text-center">
          <h2 className="text-2xl font-semibold text-slate-700">
            Pas d'event dans la db
          </h2>
          <p className="mt-2 text-slate-500">Pas d'event dans la db</p>
        </div>
      )}
    </div>
  );
}

export default Agenda;
