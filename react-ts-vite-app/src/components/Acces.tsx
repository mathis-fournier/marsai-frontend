import { useTranslation } from "react-i18next";

function Access() {
  const { t } = useTranslation();

  return (
    <>
      <section className="max-w-full mx-auto px-6 pt-10 mb-[3%]">
        <h2 className="font-bold text-xl text-[var(--color-white)] underline decoration-[var(--color-secondary)] decoration-3 mb-[2%]">
          {t("acces.title")}
        </h2>
        <div className="flex text-[var(--color-white)] items-center gap-4">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/ios-filled/32/tram.png"
            alt="tram"
            className="shrink-0"
          />
          <div>
            <p className="font-bold ">{t("acces.public_transport_title")}</p>
            <p>{t("acces.public_transport_description")}</p>
          </div>
        </div>
        <div className="flex items-center text-[var(--color-white)] gap-4">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/ios-filled/32/car.png"
            alt="tram"
            className="shrink-0"
          />
          <div>
            <p className="font-bold">{t("acces.car_title")}</p>
            <p>{t("acces.car_description")}</p>
          </div>
        </div>
        <div className="flex items-center text-[var(--color-white)] gap-4">
          <div>
            <p className="font-bold">{t("acces.address_title")}</p>
            <p>{t("acces.address_description")}</p>
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

export default Access;
