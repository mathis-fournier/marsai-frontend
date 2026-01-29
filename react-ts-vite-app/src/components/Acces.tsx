export default function Acces() {
  return (
    <>
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
              src="https://media.discordapp.net/attachments/1466414132914946225/1466414146131329148/image.png?ex=697ca819&is=697b5699&hm=0cd1f16c998b8979fe44f7bc2ac117fe1351c912c3ec13d22cce369b147b71af&=&format=webp&quality=lossless&width=1482&height=639"
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
