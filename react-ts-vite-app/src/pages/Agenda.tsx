import { useEffect, useState } from "react";
import EventGrid, { type EventItem } from "../components/EventGrid";
import Acces from "../components/Acces";
import Workshop from "../components/Workshop";

function Agenda() {
  const [data, setData] = useState<EventItem[]>([]); // Initialisé avec un tableau vide
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
    <>
      <main>
        <header className="max-w-full mx-auto px-6 pt-10">
          <h1 className="text-4xl font-bold text-[var(--color-black)] mb-[3%]">
            13 JUIN 2026
            <p className="font-bold text-blue-600">MARSEILLE</p>
          </h1>

          <h2 className="font-bold text-xl text-[var(--color-black)] underline decoration-sky-600 decoration-3">
            PROGRAMME DES CONFERENCES
          </h2>
        </header>

        <EventGrid
          events={data}
          emptyMessage="Aucun événement n'est prévu pour le moment."
        />
      </main>
      <Acces></Acces>

      <Workshop></Workshop>
    </>
  );
}

export default Agenda;
