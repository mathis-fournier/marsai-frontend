import WorkshopCard from "./WorkshopCard";

export default function Workshop() {
  return (
    <>
      <section className="w-[100%] mx-auto px-6 pt-10 mb-[3%] ">
        <div className="bg-[var(--color-brand)] p-5 rounded-xl">
          <div id="workshop_header">
            <h1 className="text-white font-bold text-4xl">WORKSHOPS</h1>
            <h2 className="text-4xl text-blue-600 font-bold">IA CREATIVE</h2>
            <small className=" text-[var(--color-small-text)]">
              qzdjqoidhq qzdqzdqz qzdzqdq dzqdihqzdq dzihqd hqdiqzdhiqzdhqd
              qzdqz
            </small>
          </div>

          <div
            id="workshop_cards"
            className="flex gap-4 grid sm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 justify-center items-center"
          >
            <WorkshopCard />
            <WorkshopCard />
            <WorkshopCard />
            <WorkshopCard />
            <WorkshopCard />
            <WorkshopCard />
            <WorkshopCard />
            <WorkshopCard />
          </div>
        </div>
      </section>
    </>
  );
}
