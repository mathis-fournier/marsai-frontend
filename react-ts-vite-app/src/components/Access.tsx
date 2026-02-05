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
        <div className="flex text-[var(--color-white)] items-center gap-4">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/ios-filled/32/pin.png"
            alt="tram"
            className="shrink-0"
          />
          <div>
            <p className="font-bold ">{t("acces.address_title")}</p>
            <p>{t("acces.address_description")}</p>
          </div>
        </div>
        <img src="map.png" alt="" className="rounded-md mt-6" />
      </section>
    </>
  );
}

export default Access;
