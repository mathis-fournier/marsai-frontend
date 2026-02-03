import { useTranslation } from "react-i18next";

interface WorkshopCardProps {
  title: string;
  description?: string;
  remainingSeats?: number;
  link?: string;
}

export default function WorkshopCard({
  title,
  description,
  remainingSeats = 0,
  link = "#",
}: WorkshopCardProps) {
  const { t } = useTranslation();

  return (
    <a
      href={link}
      className="bg-[#333333] rounded-xl block max-w-sm p-6 border border-transparent shadow-xs hover:bg-neutral-800 transition-colors"
    >
      <h5 className="mb-3 text-2xl font-bold tracking-tight text-white leading-8">
        {title}
      </h5>
      <p className="text-white/80 mb-[5%]">{description || t('workshop_card.no_description')}</p>

      <div className="flex items-center gap-4">
        <button className="bg-white hover:bg-slate-200 text-black rounded-xl font-bold font-mono tracking-widest p-3 transition-colors">
          {t('workshop_card.book_button')}
        </button>
        <p className="text-white text-sm">
          {t('workshop_card.remaining_seats', { count: remainingSeats })}
        </p>
      </div>
    </a>
  );
}
