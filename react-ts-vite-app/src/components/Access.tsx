import { useTranslation } from "react-i18next";

function Access() {
  const { t } = useTranslation();

  return (
    <>
      <section className="max-w-full mx-auto px-6 pt-10 my-[7%]">
        <h2 className="font-bold text-xl md:text-3xl text-center text-white underline decoration-secondary decoration-3 mb-[2%]">
          {t("acces.title")}
        </h2>
        <div className="flex text-white items-center gap-4 my-10">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/?size=100&id=9374&format=png&color=bfcad0"
            alt="tram"
            className="shrink-0"
          />
          <div>
            <p className="font-bold ">{t("acces.public_transport_title")}</p>
            <p className="text-sm">{t("acces.public_transport_description")}</p>
          </div>
        </div>
        <div className="flex text-white items-center gap-4 my-10">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/?size=100&id=12684&format=png&color=bfcad0"
            alt="tram"
            className="shrink-0"
          />
          <div>
            <p className="font-bold">{t("acces.car_title")}</p>
            <p className="text-sm">{t("acces.car_description")}</p>
          </div>
        </div>
        <div className="flex items-center text-white gap-4 my-10">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/?size=100&id=7873&format=png&color=bfcad0"
            alt="tram"
            className="shrink-0"
          />
          <div>
            <p className="font-bold">{t("acces.address_title")}</p>
            <p className="text-sm">{t("acces.address_description")}</p>
          </div>
        </div>
        <div className=" my-25">
          <img
            width="32"
            height="32"
            src="map.png"
            alt="tram"
            className="mt-6 w-full rounded-md"
          />
        </div>
      </section>
    </>
  );
}

export default Access;
