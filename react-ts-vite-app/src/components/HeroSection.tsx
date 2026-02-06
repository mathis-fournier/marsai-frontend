import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <>
      <div className="cursor-default w-full h-[80vh] bg-[url(/hero-img.png)] bg-cover flex flex-col justify-center items-center">
        <div className="text-center">
          <p className="text-5xl md:text-7xl font-bold text-white">
            {t("hero_banner.title_part1")}
          </p>
          <p className="text-5xl md:text-7xl font-bold text-secondary">
            {t("hero_banner.title_part2")}
          </p>
          <p className="text-5xl md:text-7xl font-bold text-white">
            {t("hero_banner.title_part3")}
          </p>
        </div>
        <p className="text-sm md:text-xl pt-6 text-center text-white w-[50%]  opacity-90">
          qzdqzd qzdhqzdqizudqzd qzduiqzdqizdzqdqzdqzdqzd.
          dqdojizqdiqzdqzdqzdqzdzqdqdqzdz dqzdqzdqzdqzddqdzqd.
        </p>

        <div className="flex mt-6 text-white">
          <button className="border p-6 space-y-2 bg-secondary">
            Participer maintenant
          </button>
          <button className="border border-black p-6 space-y-2 bg-white text-black">
            En savoir plus
          </button>
        </div>
      </div>
    </>
  );
}
