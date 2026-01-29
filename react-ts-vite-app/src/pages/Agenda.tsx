import { useEffect, useState } from "react";
import EventGrid, { type EventItem } from "../components/EventGrid";

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
      {/* SECTION ACCES */}
      <section className="max-w-full mx-auto px-6 pt-10 mb-[3%]">
        <h2 className="font-bold text-xl text-[var(--color-black)] underline decoration-sky-600 decoration-3 mb-[2%]">
          ACCES
        </h2>
        <div className="flex items-center gap-4">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/ios-filled/32/tram.png"
            alt="tram"
            className="shrink-0"
          />
          <div>
            <p className="font-bold">Transports en commun</p>
            <p className="text-slate-600">
              Tram T2 - Arret Arenc Le Silo. Metro M2 - Station Désirée Clary.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/ios-filled/32/car.png"
            alt="tram"
            className="shrink-0"
          />
          <div>
            <p className="font-bold">Voiture</p>
            <p className="text-slate-600">
              Autoroute A55 - Sortie 2. Parking Indigo Quai Du Lazaret à 500m.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <p className="font-bold">Adresse</p>
            <p className="text-slate-600">12 Rue D'Uzes, 13002 Marseille.</p>
            <img
              src="https://t3.ftcdn.net/jpg/04/49/73/64/360_F_449736488_IAGo58o7DloC8Os5S5v9vppX3BIxzK4S.jpg"
              height="100px"
              alt="google maps adresse"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Agenda;
