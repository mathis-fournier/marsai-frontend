import { useEffect, useState } from "react";
import WorkshopCard from "./WorkshopCard";
import type { EventItem } from "./EventGrid";

export default function Workshop() {
  const [data, setData] = useState<EventItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/events/all`)
      .then((res) => {
        if (!res.ok) throw new Error(`Erreur Status: ${res.status}`);
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
        Chargement...
      </div>
    );
  if (error)
    return (
      <div className="p-10 text-center text-[var(--color-black)]">
        Erreur: {error}
      </div>
    );
  return (
    <section className="w-full mx-auto px-6 pt-10 mb-[3%]">
      <div className="bg-[var(--color-brand)] p-8 rounded-2xl">
        <div id="workshop_header" className="mb-10">
          <h1 className="text-white font-bold text-4xl">WORKSHOPS</h1>
          <h2 className="text-4xl text-blue-600 font-bold">IA CREATIVE</h2>
          <p className="text-slate-300 mt-2 max-w-xl">
            Découvrez nos formations intensives pour maîtriser les nouveaux
            outils de l'intelligence artificielle.
          </p>
        </div>

        <div
          id="workshop_cards"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {data.map((event) => (
            <WorkshopCard
              key={event.id}
              title={event.title}
              description={event.description}
              remainingSeats={event.remainingSeats}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
