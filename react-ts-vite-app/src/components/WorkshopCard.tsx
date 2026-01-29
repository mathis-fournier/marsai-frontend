export default function WorkshopCard({
  title,
  description,
  remainingSeats,
  link = "#",
}) {
  return (
    <a
      href={link}
      className="bg-[#333333] rounded-xl block max-w-sm p-6 border border-transparent shadow-xs hover:bg-neutral-800 transition-colors"
    >
      <h5 className="mb-3 text-2xl font-bold tracking-tight text-white leading-8">
        {title}
      </h5>
      <p className="text-white/80 mb-[5%]">{description}</p>

      <div className="flex items-center gap-4">
        <button className="bg-white hover:bg-slate-200 text-black rounded-xl font-bold font-mono tracking-widest p-3 transition-colors">
          RESERVER MA PLACE
        </button>
        <p className="text-white text-sm">
          {remainingSeats} place{remainingSeats > 1 ? "s" : ""} restante
          {remainingSeats > 1 ? "s" : ""}
        </p>
      </div>
    </a>
  );
}
