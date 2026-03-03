import { useState } from "react";
// Utilisation du hook useTranslation pour la traduction des textes
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Définition de l'interface EventItem qui décrit les propriétés d'un événement
export interface EventItem {
  id: string | number;
  title: string;
  imageUrl?: string;
  start_at?: string;
}

// Définition de l'interface EventGridProps qui décrit les propriétés du composant EventGrid
interface EventGridProps {
  events?: EventItem[];
  emptyMessage?: string;
}
export interface EventBookingData {
  firstname: string,
  lastname: string,
  email: string,
  event_id: number,
}

// Exportation du composant EventGrid par défaut
function EventGrid({
  events = [],
  emptyMessage,
}: EventGridProps) {
  // Utilisation de useTranslation pour obtenir les traductions
  const { t } = useTranslation();

  // État local pour stocker la recherche en cours
  const [query, setQuery] = useState("");


  // Filtrage des événements en fonction de la recherche
  const filtered = events.filter((e) =>
    e.title.toLowerCase().includes(query.toLowerCase()),
  );

  // Message d'empty si aucun événement n'est trouvé
  const finalEmptyMessage = emptyMessage || t("event_grid.empty_message");


  return (
    <div className="flex flex-col justify-center items-center">
      {/* <input
        type="text"
        placeholder={t("event_grid.search_placeholder")}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      /> */}
      {filtered.length > 0 ? (
        <ul className="flex flex-col gap-10 my-10">
          {filtered.map((event) => (
            <li key={event.id} className="flex items-center justify-start gap-10 ">
              <Link to={"/event/" + event.id}><img src={event.imageUrl ?? '/assets/batman.png'} width={300} alt={event.title + " image alternative text"} /></Link>
              <span className="flex flex-col">
                <h3 className="text-2xl">{event.title}</h3>
                <p>Date & Heure : {event.start_at}</p>
              </span>

            </li>
          ))}
        </ul>
      ) : (
        <p>{finalEmptyMessage}</p>
      )
      }
    </div >
  );
}
export default EventGrid;

function setIsLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}
