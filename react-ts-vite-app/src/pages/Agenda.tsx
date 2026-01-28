import { useEffect, useState } from "react";
import EventGrid, {type EventItem} from "../components/EventGrid";

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

  const handleDetailsClick = (id: string | number) => {
    console.log("ID sélectionné :", id);
  };

  if (isLoading)
    return <div className="p-10 text-center text-[var(--color-black)]">Chargement...</div>;
  if (error)
    return <div className="p-10 text-center text-[var(--color-black)]">Erreur: {error}</div>;

  return (
    <main>
      <header className="max-w-7xl mx-auto px-6 pt-10">
        <h1 className="text-3xl font-bold text-[var(--color-black)]">Notre Agenda</h1>
      </header>

      <EventGrid
        events={data}
        onActionClick={handleDetailsClick}
        actionLabel="Voir les détails"
        emptyMessage="Aucun événement n'est prévu pour le moment."
      />
    </main>
  );
}

export default Agenda;
