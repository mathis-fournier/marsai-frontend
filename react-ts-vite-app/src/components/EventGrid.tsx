import { useState } from "react";
// Utilisation du hook useNavigate pour la navigation entre les pages
import { useNavigate } from "react-router-dom";
// Utilisation du hook useTranslation pour la traduction des textes
import { useTranslation } from "react-i18next";

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
    <div>
      <input
        type="text"
        placeholder={t("event_grid.search_placeholder")}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filtered.length > 0 ? (
        <ul>
          {filtered.map((event) => (
            <li key={event.id}>
              <img src={event.imageUrl} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.start_at}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>{finalEmptyMessage}</p>
      )}
    </div>
  );
}
export default EventGrid;