import { useEffect, useState } from "react";
import EventGrid from "../components/EventGrid";

// On définit l'interface ici aussi ou on l'exporte depuis EventGrid
interface Event {
  id: string | number;
  title: string;
  description?: string;
  imageUrl?: string;
}

function Agenda() {
  const [data, setData] = useState<Event[]>([]); // Initialisé avec un tableau vide
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
    return <div className="p-10 text-center text-slate-500">Chargement...</div>;
  if (error)
    return <div className="p-10 text-center text-red-500">Erreur: {error}</div>;

  return (
    <main>
      <header className="max-w-7xl mx-auto px-6 pt-10">
        <h1 className="text-3xl font-bold text-slate-900">Notre Agenda</h1>
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
